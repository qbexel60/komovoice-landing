'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/hooks';

/*
 * A soft band of coral "smoke" drifting behind the hero, drawn by a tiny
 * WebGL shader. It renders at about a quarter of the screen's resolution and
 * the browser scales it up, which gives the soft edges for free. It runs at
 * ~30 fps (lighter on phones), stops while off screen or in a background tab, and draws a single
 * still frame for visitors who ask for less motion.
 */

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `precision mediump float;
uniform vec2 uRes;
uniform float uTime;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = uTime * 0.045;
  vec2 q = vec2(fbm(p * 1.1 + vec2(t, -t * 0.6)), fbm(p * 1.1 + vec2(-t * 0.8, t * 0.4) + 5.2));
  float n = fbm(p * 1.7 + q * 2.1 + vec2(t * 0.9, 0.0));
  float centre = 0.5 + 0.11 * sin(uv.x * 3.1 + t * 2.4) + (q.y - 0.5) * 0.5;
  float d = uv.y - centre;
  float thick = 0.17 + (q.x - 0.5) * 0.16;
  float edge = abs(d) + (n - 0.5) * 0.24;
  float band = 1.0 - smoothstep(thick * 0.3, thick, edge);
  float dens = smoothstep(0.28, 0.74, n);
  float a = band * (0.3 + 0.8 * dens);
  float w = smoothstep(0.6, 0.88, fbm(vec2(p.x * 2.6 + t * 1.8, p.y * 0.7 - t)));
  a += w * (1.0 - smoothstep(0.0, 0.42, abs(d))) * 0.38;
  a = clamp(a, 0.0, 1.0) * 0.62;
  vec3 light = vec3(1.0, 0.7, 0.6);
  vec3 deep = vec3(0.95, 0.36, 0.2);
  vec3 col = mix(light, deep, dens);
  gl_FragColor = vec4(col * a, a);
}`;

// Wide screens: about a quarter of the resolution at ~30 fps. Phones: a fifth at ~24 fps.
const SCALE = 0.26;
const FRAME_MS = 33;
const PHONE_SCALE = 0.2;
const PHONE_FRAME_MS = 42;

export default function HeroSmoke({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = usePrefersReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      powerPreference: 'low-power',
    });
    if (!gl) {
      setFailed(true);
      return;
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');

    const phone = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches;
    const scale = phone ? PHONE_SCALE : SCALE;
    const frameMs = phone ? PHONE_FRAME_MS : FRAME_MS;

    const size = () => {
      const w = Math.max(2, Math.round(canvas.clientWidth * scale));
      const h = Math.max(2, Math.round(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    const draw = (seconds: number) => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, seconds);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    size();
    const start = performance.now() - 40000; // start mid-flow, not from a blank first frame
    draw((performance.now() - start) / 1000);

    const ro = new ResizeObserver(() => {
      size();
      draw((performance.now() - start) / 1000);
    });
    ro.observe(canvas);

    if (reduce) return () => ro.disconnect();

    let raf = 0;
    let last = 0;
    let visible = true;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < frameMs) return;
      last = now;
      draw((now - start) / 1000);
    };
    raf = requestAnimationFrame(loop);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [reduce]);

  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      {failed ? (
        <div className="h-full w-full bg-[radial-gradient(60%_35%_at_30%_55%,rgb(255_140_110/0.3),transparent),radial-gradient(50%_30%_at_75%_50%,rgb(242_84_45/0.22),transparent)]" />
      ) : (
        <canvas ref={canvasRef} className="h-full w-full" />
      )}
    </div>
  );
}
