This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 💍 Wedding Digital Card Template (Next.js)

## 📌 Project Overview

This project is a **web-based digital wedding invitation system** built using Next.js. It allows users to create, customize, and share modern wedding invitation cards online using reusable templates.

The system is designed with **scalability and reusability in mind**, enabling multiple wedding invitations to be generated dynamically using a single codebase.

---

## 🎯 Objectives

* Provide elegant and interactive digital wedding invitations
* Enable reusable template-based design for multiple clients
* Support dynamic content rendering for different couples
* Serve as a foundation for a potential **digital card business**

---

## ⚙️ Tech Stack

* **Frontend Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Backend/API:** Next.js API Routes
* **Database (optional):** Supabase / Firebase
* **Deployment:** Vercel

---

## 🧩 Core Features

### 1. Dynamic Wedding Pages

Each wedding invitation is generated dynamically using a unique URL slug.

Example:

* `/ali-aisyah`
* `/john-jane`

---

### 2. Reusable Components

The UI is built using modular and reusable components:

* Hero Section (Couple Name & Date)
* Event Details (Akad / Reception)
* Countdown Timer
* Photo Gallery
* RSVP Form
* Footer

---

### 3. Data-Driven Architecture

Wedding content is not hardcoded. Instead, it is loaded dynamically from structured data (JSON or database).

Example:

```json
{
  "name": "Ali & Aisyah",
  "date": "12 December 2026",
  "location": "Kuala Lumpur"
}
```

---

### 4. RSVP System

Users can submit attendance confirmation via a form. Data is handled through API routes and can be stored in a database.

---

### 5. Responsive Design

The template is fully responsive and optimized for:

* Mobile devices 📱
* Tablets
* Desktop 💻

---

### 6. Multimedia Support

* Background music (auto-play)
* Image gallery for couple photos

---

## 🏗️ Project Structure

```
/app
  /[slug]
    page.tsx        → Dynamic wedding page
/components
  Hero.tsx
  EventDetails.tsx
  Countdown.tsx
  Gallery.tsx
  RSVP.tsx
/data
  weddingData.js
/public
  images/
  music/
```

---

## 🚀 How It Works

1. Each wedding has a unique `slug`
2. The system fetches wedding data based on the slug
3. Components render the data dynamically
4. The invitation is accessible via a shareable link

---

## 💼 Business Potential

This project is designed to be extended into a business model:

* Sell pre-designed templates
* Offer custom wedding card services
* Build a SaaS platform for self-service card creation

---

## 🔮 Future Improvements

* Admin dashboard for managing wedding data
* Theme customization system
* Payment integration (e.g., Stripe / FPX)
* Drag-and-drop editor for non-technical users



