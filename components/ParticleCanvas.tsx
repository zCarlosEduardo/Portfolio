"use client";
// ↑ obrigatório: canvas é API de browser, não existe no servidor

import { useEffect, useRef } from "react";

type Particle = {
  x: number;   // posição atual
  y: number;
  tx: number;  // alvo: o pixel do texto
  ty: number;
  sx: number;  // vetor de fuga no scroll (individual por partícula)
  sy: number;
  size: number;
};

export default function ParticleCanvas({ text = "Carlos Eduardo" }: { text?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---- estado do sistema: variáveis comuns, NÃO useState ----
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    let scatter = 0; // 0 = topo (texto montado) → 1 = totalmente disperso
    let rafId = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;

    // lê a cor do SEU design system — mudou o token, as partículas acompanham
    const cor =
      getComputedStyle(canvas).getPropertyValue("--cor-primaria").trim() ||
      "#ededed";

    // ============================================================
    // PASSO A: texto → alvos (offscreen + getImageData)
    // ============================================================
    function sampleText() {
      if (!canvas || !ctx) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w;   // sincroniza resolução interna com o tamanho
      canvas.height = h;  // que o Tailwind deu via CSS

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d");
      if (!octx) return;

      const fontSize = Math.min(w / 7.2, 96);
      octx.font = `600 ${fontSize}px sans-serif`;
      octx.textBaseline = "middle";
      octx.fillStyle = "#fff";

      // em tela estreita, quebra o nome em duas linhas
      const small = w < 560;
      if (small) {
        const [primeiro, ...resto] = text.split(" ");
        octx.fillText(primeiro, 4, h * 0.32);
        octx.fillText(resto.join(" "), 4, h * 0.72);
      } else {
        octx.fillText(text, 4, h / 2);
      }

      const data = octx.getImageData(0, 0, w, h).data;
      const gap = small ? 3 : 4;
      const targets: { x: number; y: number }[] = [];
      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          // pixel (x,y) = índice (y*w + x)*4; alpha é o 4º valor (+3)
          if (data[(y * w + x) * 4 + 3] > 128) targets.push({ x, y });
        }
      }

      particles = targets.map((t) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        tx: t.x,
        ty: t.y,
        sx: (Math.random() - 0.5) * 2,   // -1 a +1: espalha pros lados
        sy: -Math.random() * 1.5 - 0.5,  // sempre negativo = sempre sobe
        size: Math.random() * 1.2 + 0.8,
      }));
    }

    // ============================================================
    // PASSO B: o coração — "anda uma fração do caminho que falta"
    // ============================================================
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // ============================================================
    // PASSO C: o loop (limpa → calcula → desenha → repete)
    // ============================================================
    function tick() {
      if (!canvas || !ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // fade: disperso = quase transparente (0.85 deixa um fantasma sutil)
      ctx.globalAlpha = 1 - scatter * 0.85;
      ctx.fillStyle = cor;

      for (const p of particles) {
        // alvo deslocado pelo scatter: no topo (scatter=0) é o próprio texto;
        // rolando, cada partícula foge na SUA direção pessoal
        let goalX = p.tx + p.sx * scatter * 220;
        let goalY = p.ty + p.sy * scatter * 220;

        // repulsão do mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 0.01) {
          const force = (80 - dist) / 80;
          goalX += (dx / dist) * force * 60;
          goalY += (dy / dist) * force * 60;
        }

        p.x = lerp(p.x, goalX, 0.08);
        p.y = lerp(p.y, goalY, 0.08);

        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      ctx.globalAlpha = 1; // restaura pro próximo frame
      rafId = requestAnimationFrame(tick);
    }

    // ============================================================
    // PASSO D: eventos (nomeados, pra remover na limpeza)
    // ============================================================
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onScroll = () => {
      // progresso 0→1: "quantos % de 70% da altura do hero eu já rolei?"
      const hero = canvas.closest("header");
      const heroH = hero ? hero.offsetHeight : window.innerHeight;
      scatter = Math.min(window.scrollY / (heroH * 0.7), 1);
    };
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(sampleText, 200);
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // espera a fonte carregar antes de amostrar
    document.fonts.ready.then(() => {
      sampleText();
      tick();
    });

    // TODO (seus desafios): devicePixelRatio p/ tela retina
    // e fallback prefers-reduced-motion (canvas → <h1> estático)

    // ============================================================
    // PASSO E: a faxina — sem isso, loop fantasma no Strict Mode
    // ============================================================
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={text}
      className="block h-35 w-full cursor-crosshair sm:h-47.5"
    />
  );
}