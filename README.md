✅ ~/404notfont/README.md

# 404notfont

> 🧠 Dev-first frontend repository for rapid development & deployment  
> 🛠️ Managed by: [myub217](https://github.com/myub217)  
> 📧 Contact: myub25217@gmail.com

---

## 📦 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/)
- ⚛️ React 18 (with JSX)
- 🛠️ TypeScript
- 💨 Tailwind CSS
- 🧩 Auto-import utilities (`@/utils`, `@/components`)
- 🛡️ ESLint, Prettier, Husky, Lint-staged

---

## 🚀 Quick Start

```bash
# 1. Clone with custom SSH key alias (via ~/.ssh/config)
git clone git@github-404:myub217/404notfont.git
cd 404notfont

# 2. Install dependencies
pnpm install

# 3. Start dev server
pnpm dev


---

🧠 SSH Setup สำหรับ repo นี้ (github-404)

> ✅ ใช้ key ~/.ssh/id_rsa_404notfont และตั้งค่า Host Alias: github-404



# สร้าง SSH key เฉพาะ
ssh-keygen -t rsa -b 4096 -C "myub25217@gmail.com" -f ~/.ssh/id_rsa_404notfont

# เพิ่ม SSH config:
nano ~/.ssh/config

Host github-404
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_404notfont
  IdentitiesOnly yes

# ทดสอบการเชื่อมต่อ
ssh -T git@github-404


---

🔨 Init Project Script (พร้อม autogen folder + vite setup)

pnpm dlx tsx scripts/init-project.ts

> สคริปต์นี้จะ:



สร้างโครงสร้างโฟลเดอร์ src/components, src/utils/common, ...

สร้างไฟล์ vite.config.ts, tsconfig.json, vite-env.d.ts

ติดตั้ง dev tools: ESLint, Prettier, Husky

เชื่อมต่อ remote: git@github.com:myub217/404notfont.git



---

🧰 Dev Scripts

// package.json scripts
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write .",
  "prepare": "husky install"
}


---

🧪 Lint-Staged + Husky

# setup ครั้งแรก (หลัง clone)
pnpm prepare

# pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

// package.json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}


---

🌐 Deployment

> ใช้ Vercel auto-deploy จาก branch main



GitHub: https://github.com/myub217/404notfont

Vercel Dashboard: (เพิ่มได้ภายหลัง)

VERCEL_TOKEN: vgfeOfkyL3Vgu9fnIX7eroQl



---

📁 Folder Structure

404notfont/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── utils/
│       ├── cn.ts
│       └── common/
├── public/
├── scripts/
│   └── init-project.ts
├── .husky/
├── .vscode/
├── tsconfig.json
├── vite.config.ts
└── README.md


---

📎 Metadata

👤 Maintainer: myub217

📧 Email: myub25217@gmail.com

🔒 Private repo with SSH access

🔄 Branch: main



---

✅ Status

> 🔄 Ready for development
✅ SSH Access OK
✅ CI/CD Ready
✅ TypeScript + ESLint + Prettier complete




---

---

## ✅ พร้อมใช้งาน

คุณสามารถวาง `README.md` นี้ลงใน root project (`~/404notfont/README.md`) ได้ทันที  
หรือใช้ร่วมกับสคริปต์ `init-project.ts` ที่เราทำไว้ก่อนหน้า เพื่อ setup ครั้งเดียวจบ

---

ถ้าต้องการ badge, changelog section, หรือ autogenerate doc ด้วย `typedoc`, แจ้งได้ จะต่อยอดให้ครบ.

# 404notfont