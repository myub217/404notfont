// scripts/init-project.ts

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT_DIR = process.cwd();
const log = console.log;

// ─── 1. Init Git ─────────────────────────────────────────────────────────────
function initGit() {
  if (!fs.existsSync(path.join(ROOT_DIR, ".git"))) {
    execSync("git init", { stdio: "inherit" });
    execSync("git remote add origin git@github.com:myub217/404notfont.git", { stdio: "inherit" });
    log("✅ Git initialized and remote set");
  }
}

// ─── 2. Generate .gitignore ──────────────────────────────────────────────────
function createGitignore() {
  const ignoreContent = `
# Node
node_modules
dist
.env
.env.*.local
pnpm-lock.yaml

# System
.DS_Store
.idea
.vscode
  `.trim();

  fs.writeFileSync(path.join(ROOT_DIR, ".gitignore"), ignoreContent);
  log("✅ .gitignore created");
}

// ─── 3. Create Project Structure ─────────────────────────────────────────────
function createFolders() {
  const folders = [
    "src/components",
    "src/pages",
    "src/utils/common",
    "src/hooks",
    "public",
    "scripts",
  ];

  folders.forEach((folder) => {
    const fullPath = path.join(ROOT_DIR, folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });

  log("✅ Folder structure created");
}

// ─── 4. Create Base Files ────────────────────────────────────────────────────
function createBaseFiles() {
  const viteEnv = `/// <reference types="vite/client" />\n`;
  fs.writeFileSync(path.join(ROOT_DIR, "src/vite-env.d.ts"), viteEnv);

  const cnUtil = `
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
  `.trim();
  fs.writeFileSync(path.join(ROOT_DIR, "src/utils/cn.ts"), cnUtil);

  log("✅ Base files created");
}

// ─── 5. Init Package.json and Install ────────────────────────────────────────
function setupPackage() {
  execSync("pnpm init -y", { stdio: "inherit" });

  // ✅ Production deps
  execSync("pnpm add react react-dom", { stdio: "inherit" });

  // ✅ Dev deps
  execSync(
    "pnpm add -D typescript vite eslint prettier husky lint-staged @types/react @types/react-dom",
    { stdio: "inherit" }
  );

  log("✅ Package and dependencies installed");
}

// ─── 6. Setup Vite + TS Config ───────────────────────────────────────────────
function setupConfigs() {
  const viteConfig = `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
`.trim();
  fs.writeFileSync("vite.config.ts", viteConfig);

  const tsconfig = `
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`.trim();
  fs.writeFileSync("tsconfig.json", tsconfig);

  log("✅ Vite and TypeScript config created");
}

// ─── 7. Setup Husky + Lint ───────────────────────────────────────────────────
function setupLintTools() {
  const pkgPath = path.join(ROOT_DIR, "package.json");
  const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

  pkgJson.scripts = {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
    lint: "eslint . --ext .ts,.tsx",
    format: "prettier --write .",
    prepare: "husky install",
  };

  pkgJson["lint-staged"] = {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  };

  fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2));

  execSync("npx husky install", { stdio: "inherit" });
  execSync('npx husky add .husky/pre-commit "npx lint-staged"', {
    stdio: "inherit",
  });

  log("✅ Husky + Lint-staged configured");
}

// ─── Run Everything ──────────────────────────────────────────────────────────
function main() {
  initGit();
  createGitignore();
  createFolders();
  createBaseFiles();
  setupPackage();
  setupConfigs();
  setupLintTools();
  log("🎉 Project 404notfont setup complete.");
}

main();