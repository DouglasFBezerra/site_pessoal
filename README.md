# Douglas Soluções Digitais — Website Oficial

> **"Ideias em tecnologia, resultados no seu negócio."**

Website profissional, moderno, responsivo e otimizado para SEO tradicional e GEO (Generative Engine Optimization) desenvolvido para a **Douglas Soluções Digitais**.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React 18 + TypeScript
- **Bundler & Build Tool:** Vite 6
- **Estilização & Design System:** Tailwind CSS v3
- **Ícones:** Lucide React + SVGs customizados da marca
- **Roteamento:** React Router DOM v6
- **SEO & Metadados:** React Helmet Async + Schema.org (JSON-LD estruturado)
- **Hospedagem Recomendada:** Vercel / Netlify / Cloudflare Pages

---

## 📁 Estrutura de Diretórios

```
Site_pessoal/
├── public/
│   ├── brand-hero.jpg          # Identidade visual oficial da marca
│   ├── favicon.svg             # Favicon com o símbolo estilizado em "D"
│   ├── og-image.png            # Imagem de compartilhamento social (Open Graph)
│   ├── robots.txt              # Diretrizes para indexadores e buscadores
│   └── sitemap.xml             # Mapa completo de URLs do site
├── src/
│   ├── assets/                 # Recursos gráficos locais
│   ├── components/
│   │   ├── layout/             # Header com menu responsivo, Footer e Layout global
│   │   ├── seo/                # Componente SEO reutilizável com JSON-LD
│   │   └── ui/                 # Design System (Logo oficial, Botões, Cards, Badges)
│   ├── data/                   # Conteúdo desacoplado e tipado (Zero banco de dados)
│   │   ├── blog-posts.ts       # 6 artigos completos com metadados e tags
│   │   ├── faqs.ts             # Perguntas frequentes estruturadas
│   │   ├── projects.ts         # Estudos de caso (CRM odontológico, n8n, etc.)
│   │   ├── services.ts         # 4 pilares: Sites, CRM, n8n e Cardápios
│   │   └── skills.ts           # Matriz de conhecimentos e proficiência técnica
│   ├── hooks/
│   │   └── useWhatsApp.ts      # Hook gerador de link com mensagem personalizada
│   ├── pages/                  # Todas as 13 páginas solicitadas
│   ├── utils/
│   │   └── constants.ts        # Telefone (5511978866744), URLs e dados globais
│   ├── App.tsx                 # Rotas com lazy loading e code splitting
│   ├── index.css               # Diretivas do Tailwind e tokens de cores
│   └── main.tsx                # Ponto de entrada React
├── vercel.json                 # Regras de rewrite SPA para deploy imediato
└── package.json
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js v18 ou superior instalado
- npm ou pnpm

### Passos

1. Entre na pasta do projeto:
   ```bash
   cd Site_pessoal
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

---

## 📦 Como Gerar a Versão de Produção (Build)

Para testar e gerar os arquivos estáticos otimizados na pasta `dist/`:

```bash
npm run build
```

Para visualizar localmente o resultado exato do build de produção:

```bash
npm run preview
```

---

## 🌐 Publicação no Vercel (Recomendado)

1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba a pasta do projeto para um repositório no seu GitHub (ex: `site-douglas-solucoes`).
3. No painel do Vercel, clique em **Add New...** > **Project** e selecione o repositório.
4. As configurações padrão do Vite são detectadas automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. Seu site estará no ar em menos de 1 minuto em uma URL como `https://douglas-solucoes.vercel.app`.

---

## 🎯 Configuração do Domínio Personalizado

1. No painel do seu projeto na Vercel, vá em **Settings** > **Domains**.
2. Digite seu domínio (ex: `douglassolucoes.com.br`).
3. Configure os apontamentos DNS no seu registrador (ex: Registro.br):
   - **Tipo A:** Apontando para o IP indicado pela Vercel (`76.76.21.21`).
   - **Tipo CNAME (www):** `cname.vercel-dns.com`.
4. O certificado SSL (HTTPS) é emitido automaticamente pela Vercel.

---

## 🔍 Google Search Console & Indexação

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Adicione sua propriedade (`https://douglassolucoes.com.br` ou via prefixo de URL).
3. Verifique a propriedade via registro DNS TXT ou tag HTML.
4. No menu lateral, clique em **Sitemaps**.
5. Insira a URL do sitemap: `https://douglassolucoes.com.br/sitemap.xml` e clique em **Enviar**.
6. O Google processará o sitemap e começará a indexar as páginas gradualmente.

---

## 📞 Contato Comercial Configurado

- **WhatsApp:** `+55 (11) 97886-6744`
- **E-mail:** `fdouglasb@hotmail.com`
- **Link Direto WhatsApp:** `https://wa.me/5511978866744`
- **Região Inicial:** São Paulo, SP (atendimento remoto nacional)
