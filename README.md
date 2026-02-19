# 🟣 Unico Front

**Unico** is a modern marketplace template that includes a built-in AI assistant powered by a RAG (Retrieval-Augmented Generation) architecture integrated with ChatGPT.

It is designed to accelerate the development of intelligent commerce platforms by combining marketplace functionality with conversational AI from day one.

---

## 🚀 What is Unico?

Unico is a scalable foundation for building AI-powered marketplaces.

It includes:

- Product catalog structure
- Modular frontend architecture
- Integrated conversational assistant
- RAG-powered contextual responses
- Ready-to-extend marketplace components

Instead of adding AI later, Unico is built with AI at its core.

---

## 🧠 Core Concept

Traditional marketplaces rely on search and filters.

Unico enhances that experience with an AI assistant that can:

- Answer product questions
- Recommend items
- Compare products
- Guide users through the purchase journey
- Use internal marketplace data as context

This transforms static ecommerce into an intelligent conversational experience.

---

## 🏗️ Architecture Overview

Unico uses a modern monorepo structure and integrates with OpenAI through a RAG pipeline.

High-level flow:

1. User sends a message.
2. The system retrieves relevant marketplace data.
3. Context is injected into the prompt.
4. ChatGPT generates a grounded response.
5. The response is returned to the user.

---

## 🧩 Project Structure

```
unico-front/
├── apps/
│ └── web/ # Main marketplace web application
├── packages/ # Shared components and logic
├── turbo.json # Turbo configuration (monorepo)
├── pnpm-workspace.yaml
└── package.json
```

🛠️ Tech Stack

- TypeScript
- JavaScript
- CSS
- PNPM Workspace
- Turbo (build system)
- OpenAI API
- RAG Architecture

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Cococo-mero/unico-front.git
cd unico-front
```

Install dependencies:

```bash
pnpm install
```

> Make sure you have Node.js and PNPM installed beforehand.

---

## ▶️ Development

Start the development server:

```bash
pnpm dev
```

The server will usually be available at:

http://localhost:3000

---

## 🏗️ Production Build

Generate an optimized production build:

```bash
pnpm build
```

To preview the production build:

```bash
pnpm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project:

```
OPENAI_API_KEY=
RAG_API_ENDPOINT=
NEXT_PUBLIC_API_URL=
```

### Required Variables

- `OPENAI_API_KEY` → Your OpenAI API key  
- `RAG_API_ENDPOINT` → Backend endpoint handling embeddings and retrieval  
- `NEXT_PUBLIC_API_URL` → Base URL of the marketplace backend  

---

## 🤖 How the RAG Assistant Works

1. The user submits a query.
2. The system queries the RAG engine to retrieve relevant context.
3. Retrieved context is injected into the prompt.
4. ChatGPT generates a contextualized response.
5. The user receives an intelligent answer grounded in marketplace data.

---

## 🧩 Available Scripts

```bash
pnpm dev        # Development
pnpm build      # Production build
pnpm start      # Run production build
pnpm lint       # Linting
pnpm test       # Run tests (if configured)
```

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch:

```bash
git checkout -b feature/new-feature
```

3. Commit your changes  
4. Open a Pull Request  

---

## 📄 License

MIT
