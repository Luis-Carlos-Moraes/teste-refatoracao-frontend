export const metadata = {
  title: "Teste de Refatoração – Frontend / Arquitetura",
  description: "Desafio de refatoração de página Next.js para processo seletivo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
