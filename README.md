# Anonymous Feedback Platform

A production-grade full-stack application where users can receive anonymous messages and feedback via a unique shareable URL. Built with Next.js and integrated with AI-powered message suggestions.

## Tech Stack

- **Frontend:** Next.js, Shadcn UI, React Hook Form, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB, Mongoose
- **Auth:** NextAuth / AuthJS, OTP-based email verification (Resend)
- **AI:** OpenAI API (ChatGPT) for message suggestions
- **Validation:** Zod

## Features

- Anonymous messaging via unique shareable user URLs
- OTP-based email verification on signup
- AI-powered message suggestions using OpenAI API
- Toggle to accept or pause incoming messages
- Delete messages from personal dashboard
- Unique username validation in real-time

## Getting Started

Clone the repository and install dependencies:
```bash
npm install
```

Add your environment variables in a `.env.local` file, then run:
```bash
npm run dev
```

Open `http://localhost:3000` to view the app.

## Environment Variables
```env
MONGODB_URI=
NEXTAUTH_SECRET=
OPENAI_API_KEY=
RESEND_API_KEY=
```