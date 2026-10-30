import { ImageResponse } from "next/og";

export const alt = "Carlos Eduardo Alonso · Desenvolvedor e Automação com IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 28, color: "#22c55e" }}>● ceduardo.com.br</div>
        <div style={{ fontSize: 80, fontWeight: 700, marginTop: 24 }}>
          Carlos Eduardo Alonso
        </div>
        <div style={{ fontSize: 40, color: "#a1a1a1", marginTop: 16 }}>
          Automação de processos com IA · ferramentas em produção
        </div>
      </div>
    ),
    size,
  );
}
