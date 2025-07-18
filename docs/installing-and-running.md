# Installation

---

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
  - [Development](#development)
  - [Production build](#production-build)

---

## Development

1. Clone repository

   ```bash
   git clone  https://github.dev/KawuInc/Kawu_Landing_Src.git
   ```

1. Install dependencies

   ```bash
   cd Kawu_Landing_Src
   npm install
   ```

1. Copy example environment file

   ```bash
   cp .env.example .env.local
   ```

1. Run development server

   ```bash
   npm run dev
   ```

## Production build

1. Clone repository

   ```bash
   git clone https://github.dev/KawuInc/Kawu_Landing_Src.git my-app
   ```

1. Install dependencies

   ```bash
   cd my-app
   npm install
   ```

1. Copy example environment file

   ```bash
   cp example.env.local .env.local
   ```

1. Build application

   ```bash
   npm run build
   ```

1. Run production server

   ```bash
    npm run start
    ```

---

Previous: [Introduction](introduction.md)

Next: [Architecture](architecture.md)
