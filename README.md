<table>
<td valign="top" width="45%" align="right">

<img width="1386" height="817" alt="image" src="https://github.com/user-attachments/assets/8940de3c-00a0-426a-b448-c75e1e027f18" />
<img width="1397" height="798" alt="image" src="https://github.com/user-attachments/assets/84bca7e6-b55e-47dd-90ed-580fcdfd14f5" />
<img width="1456" height="746" alt="image" src="https://github.com/user-attachments/assets/87a1bf4e-3a56-4fd1-8f41-06f3178b4b6e" />
<img width="896" height="471" alt="image" src="https://github.com/user-attachments/assets/d3a95040-7370-4460-9ad9-5ffec6fce4c3" />

</td>
</tr>
</table>

## 🛠️ Tech Stack

**Frontend**
- [Next.js 15](https://nextjs.org/) — App Router, Server Components
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Shadcn UI](https://ui.shadcn.com/) — Accessible, composable components
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — Type-safe form validation

**Backend**
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) — Serverless API layer
- [MongoDB](https://mongodb.com/) + [Mongoose](https://mongoosejs.com/) — Flexible NoSQL data modeling

**Auth & Communication**
- [NextAuth / Auth.js](https://authjs.dev/) — Session-based authentication
- [Resend](https://resend.com/) — Transactional email for OTP delivery

**AI**
- [OpenAI API](https://openai.com/) — GPT-powered anonymous message suggestions

---

## 📁 Project Structure

```
mystery-message/
├── src/
│   ├── app/                  # Next.js App Router pages & API routes
│   │   ├── api/              # REST endpoints (auth, messages, suggest)
│   │   ├── (auth)/           # Sign-in, Sign-up, Verify pages
│   │   └── u/[username]/     # Public anonymous message page
│   ├── components/           # Reusable UI components
│   ├── lib/                  # DB connection, utilities
│   ├── models/               # Mongoose schemas (User, Message)
│   └── schemas/              # Zod validation schemas
├── public/
└── .env.local                # Environment variables (see below)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster (or local MongoDB)
- API keys for OpenAI and Resend

### Installation

```bash
# Clone the repo
git clone YOUR_GITHUB_REPO_LINK_HERE
cd mystery-message

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/mystery-message

# Auth
NEXTAUTH_SECRET=your_super_secret_nextauth_key
NEXTAUTH_URL=http://localhost:3000

# AI
OPENAI_API_KEY=sk-...

# Email (via Resend)
RESEND_API_KEY=re_...
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 How It Works

```
1. Sign Up → Get a unique link (e.g. /u/yourname)
2. Share your link → on Instagram bio, Twitter, Discord, etc.
3. Anyone visits your link → types an anonymous message
4. You log in → read, manage, and delete messages on your dashboard
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
# Open a Pull Request
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using Next.js, MongoDB & OpenAI

</div>
