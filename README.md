# Teste de Refatoração – Frontend / Arquitetura

Este repositório faz parte do processo seletivo para a vaga de **Desenvolvedor(a) Sênior (Backend/Arquitetura)**.

Aqui queremos avaliar **como você pensa arquitetura de código**, mesmo em um cenário de frontend.

---

## 📌 Contexto

Você recebeu um projeto Next.js com uma **única página gigante (`app/page.jsx`)** que:

- Tem **vários `useEffect` encadeados** (waterfall).
- Mistura **lógica de negócio com UI**.
- Usa muitos **estilos inline** e classes pouco organizadas.
- Não possui **componentização**.
- Possui um **carrossel responsivo** que:
  - Em telas **≥ 768px** funciona como carrossel.
  - Em telas **< 768px** exibe **apenas 1 imagem estática**.

O código **funciona** e está “em produção”, mas é **difícil de manter** e está começando a gerar problemas de performance.

---

## 🎯 Seu objetivo

> Em até **~30 minutos**, refatore a arquitetura dessa página.

O que queremos ver:

- Código **mais organizado e legível**.
- **Componentização** e separação de responsabilidades.
- Lógica menos acoplada à UI.
- Manutenção do **comportamento atual** (especialmente do carrossel e responsividade).

Não esperamos um sistema perfeito nem um “design system” completo.  
Queremos enxergar **seus critérios e decisões de arquitetura** dentro do tempo proposto.
