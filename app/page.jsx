"use client";

import { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg",
    alt: "Dashboard 1",
  },
  {
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    alt: "Dashboard 2",
  },
  {
    src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    alt: "Dashboard 3",
  },
];

export default function Page() {
  const [width, setWidth] = useState(1024);
  const [isMobile, setIsMobile] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    if (isMobile) {
      setShowCarousel(false);
    } else {
      setShowCarousel(true);
    }
  }, [isMobile]);

  useEffect(() => {
    let intervalId;

    if (showCarousel && autoPlay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => {
          let next = prev + 1;
          if (next >= images.length) {
            next = 0;
          }
          return next;
        });
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [showCarousel, autoPlay, currentIndex]);

  useEffect(() => {
    setDebugInfo(
      `width=${width} | isMobile=${isMobile} | showCarousel=${showCarousel} | currentIndex=${currentIndex}`
    );
  }, [width, isMobile, showCarousel, currentIndex]);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 60%, rgba(15,23,42,1) 100%)",
    color: "white",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  };

  const headerStyle = {
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(148,163,184,0.2)",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const logoCircleStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    background:
      "radial-gradient(circle at 30% 30%, #22c55e, #16a34a, #22c55e, #15803d)",
    boxShadow: "0 0 18px rgba(34,197,94,0.7)",
  };

  const mainStyle = {
    flex: 1,
    display: "flex",
    flexDirection: width < 900 ? "column" : "row",
    padding: width < 900 ? "24px 16px" : "40px 80px",
    gap: width < 900 ? "32px" : "48px",
    alignItems: "stretch",
  };

  const leftStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 10px",
    borderRadius: "999px",
    border: "1px solid rgba(34,197,94,0.4)",
    backgroundColor: "rgba(22,163,74,0.07)",
    fontSize: "12px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#bbf7d0",
  };

  const titleStyle = {
    fontSize: width < 600 ? "28px" : "40px",
    fontWeight: 700,
    lineHeight: 1.1,
  };

  const gradientWordStyle = {
    backgroundImage:
      "linear-gradient(120deg, #22c55e, #a3e635, #22c55e, #22c55e)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const paragraphStyle = {
    color: "#cbd5f5",
    lineHeight: 1.6,
    maxWidth: "480px",
    fontSize: "15px",
  };

  const buttonsRowStyle = {
    display: "flex",
    flexDirection: width < 480 ? "column" : "row",
    gap: "12px",
    marginTop: "8px",
  };

  const primaryButtonStyle = {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "none",
    background:
      "linear-gradient(120deg, #22c55e, #16a34a, #22c55e, #16a34a, #22c55e)",
    color: "black",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 12px 28px rgba(34,197,94,0.45)",
  };

  const secondaryButtonStyle = {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.5)",
    backgroundColor: "transparent",
    color: "#e2e8f0",
    fontWeight: 500,
    fontSize: "14px",
    cursor: "pointer",
  };

  const debugStyle = {
    marginTop: "8px",
    fontSize: "10px",
    color: "#64748b",
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "440px",
    borderRadius: "24px",
    border: "1px solid rgba(148,163,184,0.4)",
    background:
      "radial-gradient(circle at 0 0, rgba(56,189,248,0.12), transparent 60%), radial-gradient(circle at 100% 100%, rgba(22,163,74,0.18), transparent 50%), rgba(15,23,42,0.95)",
    boxShadow:
      "0 24px 60px rgba(15,23,42,0.9), 0 0 30px rgba(34,197,94,0.20)",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const cardHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    color: "#94a3b8",
  };

  const chipRowStyle = {
    display: "flex",
    gap: "6px",
    marginTop: "4px",
    flexWrap: "wrap",
  };

  const chipStyle = {
    fontSize: "10px",
    padding: "3px 8px",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.5)",
  };

  const carouselContainerStyle = {
    marginTop: "10px",
    borderRadius: "18px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "rgba(15,23,42,0.9)",
    minHeight: "220px",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.7)",
    backgroundColor: "rgba(15,23,42,0.7)",
    color: "#e2e8f0",
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    cursor: "pointer",
  };

  const dotsRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "6px",
    marginTop: "8px",
  };

  const dotStyle = (active) => ({
    width: active ? "18px" : "8px",
    height: "8px",
    borderRadius: "999px",
    backgroundColor: active ? "#22c55e" : "rgba(148,163,184,0.6)",
    transition: "all 0.2s ease",
  });

  const footerStyle = {
    padding: "12px 24px",
    borderTop: "1px solid rgba(148,163,184,0.2)",
    fontSize: "11px",
    color: "#64748b",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <div style={logoCircleStyle} />
          <div>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>
              Plataforma jurídica
            </div>
            <div style={{ fontSize: "14px", fontWeight: 600 }}>
              Processo Rápido
            </div>
          </div>
        </div>
        <nav
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "13px",
            color: "#cbd5f5",
          }}
        >
          <span>Funcionalidades</span>
          <span>Planos</span>
          <span>Suporte</span>
        </nav>
      </header>

      <main style={mainStyle}>
        <section style={leftStyle}>
          <div style={badgeStyle}>
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                backgroundColor: "#22c55e",
              }}
            />
            <span>Monitoramento de processos em tempo real</span>
          </div>

          <h1 style={titleStyle}>
            Centralize seus{" "}
            <span style={gradientWordStyle}>processos judiciais</span> em uma
            única timeline.
          </h1>

          <p style={paragraphStyle}>
            Conecte tribunais, importe autos e acompanhe movimentações em tempo
            real. Menos planilhas, mais controle. Ideal para escritórios que
            lidam com alto volume de ações.
          </p>

          <div style={buttonsRowStyle}>
            <button style={primaryButtonStyle}>Começar teste gratuito</button>
            <button style={secondaryButtonStyle}>
              Ver como funciona na prática
            </button>
          </div>

          <div style={debugStyle}>{debugInfo}</div>
        </section>

        <section style={rightStyle}>
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <span>Resumo em tempo real</span>
              <span>Última atualização: 2 min atrás</span>
            </div>

            <div style={chipRowStyle}>
              <span style={chipStyle}>+32 novas movimentações</span>
              <span style={chipStyle}>5 audiências hoje</span>
              <span style={chipStyle}>3 prazos críticos</span>
            </div>

            <div style={carouselContainerStyle}>
              {showCarousel ? (
                <>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "230px",
                    }}
                  >
                    <img
                      src={images[currentIndex].src}
                      alt={images[currentIndex].alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <button
                    style={{ ...navButtonStyle, left: "10px" }}
                    onClick={handlePrev}
                  >
                    {"‹"}
                  </button>
                  <button
                    style={{ ...navButtonStyle, right: "10px" }}
                    onClick={handleNext}
                  >
                    {"›"}
                  </button>
                </>
              ) : (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      fontSize: "10px",
                      padding: "4px 8px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(15,23,42,0.7)",
                      border: "1px solid rgba(148,163,184,0.7)",
                    }}
                  >
                    Modo mobile: imagem estática
                  </div>
                </div>
              )}
            </div>

            <div style={dotsRowStyle}>
              {images.map((img, idx) => (
                <div key={img.src} style={dotStyle(idx === currentIndex)} />
              ))}
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                marginTop: "4px",
              }}
            >
              * Em telas menores, exibimos uma visão simplificada para garantir
              performance.
            </div>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <span>
          © {new Date().getFullYear()} Processo Rápido. Todos os direitos
          reservados.
        </span>
        <span>LGPD-ready • Ambiente seguro • Logs e alertas em tempo real</span>
      </footer>
    </div>
  );
}
