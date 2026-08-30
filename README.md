# 🚀 Engineer's Command Center — Anil Kumar Rana Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-anil--latest--portfolio.vercel.app-0070f3?style=for-the-badge&logo=vercel&logoColor=white)](https://anil-latest-portfolio.vercel.app/)
[![Senior Software Engineer](https://img.shields.io/badge/Role-Senior_Software_Engineer-blue?style=for-the-badge&logo=java&logoColor=white)](https://www.linkedin.com/in/anil-kumar-rana/)
[![Capgemini](https://img.shields.io/badge/Company-Capgemini-0070ad?style=for-the-badge&logo=capgemini&logoColor=white)](https://www.capgemini.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Official portfolio website of Anil Kumar Rana** — Senior Software Engineer at Capgemini specializing in **Java 21, Spring Boot microservices, REST APIs, PostgreSQL, Redis caching, and MuleSoft enterprise integrations**.

---

## 🌐 Live Portfolio & Resume

- 🔗 **Live Website**: [https://anil-latest-portfolio.vercel.app/](https://anil-latest-portfolio.vercel.app/)
- 📄 **Latest Resume**: [Google Drive Resume](https://drive.google.com/file/d/1z94SpgAE9w-950xogS74NxzpgCRpod7N/view?usp=sharing)
- 👨‍💻 **Flagship Backend Repository**: [OrderFlow Engine](https://github.com/anilkrrana/orderflow)
- 📺 **YouTube Channel**: [@webtechnil](https://www.youtube.com/@webtechnil)

---

## ✨ Signature Features & Architecture Highlights

### ⚡ 1. Interactive "Simulate OrderFlow" Request Simulator
A signature interactive system simulator that traces a live `POST /api/v1/orders` request packet step-by-step through a production Spring Boot architecture:
1. **Client Request** (`POST /api/v1/orders` with product payload)
2. **Spring Security & JWT** (Signature verification & refresh token rotation)
3. **OrderService Core** (Server-side price validation & stock checks)
4. **Pessimistic DB Locking** (`PESSIMISTIC_WRITE` lock on inventory to prevent race conditions)
5. **PostgreSQL Transaction** (ACID compliant transactional persistence)
6. **Redis Cache Eviction** (Cache-aside strategy cache invalidation)
7. **Razorpay Webhook** (HMAC-SHA256 signature verification & idempotent callback processing)
8. **Order Confirmation** (HTTP 201 Created response in 28ms)

### 🌗 2. Dual Dark Mode & Light Mode Design System
- **Dark Theme** (Primary): Deep slate background (`#09090b`), technical monospace grid, radial gradients, ambient glows.
- **Light Theme**: High-contrast, off-white background (`#f8fafc`), crisp slate typography (`#0f172a`), soft card shadows, readable architecture diagrams.
- **Theme Persistence**: Automatic `localStorage` saving & system preference (`prefers-color-scheme`) detection with zero theme flash.

### 🧠 3. System Design Pillars ("How I Build Production Systems")
Explicity showcases engineering mindset across 4 core pillars:
- **Correctness & Consistency**: ACID transactions, Pessimistic/Optimistic locking, Flyway DB migrations.
- **Performance & Scalability**: Redis cache-aside, DB query plan optimization, HikariCP connection pooling.
- **Security & Authorization**: Stateless JWT rotation, HMAC-SHA256 signatures, RBAC authorization.
- **Reliability & Resilience**: Idempotency keys, global exception handlers, Testcontainers integration testing.

### 🧭 4. Interactive Skill Constellation & Smooth Category Navigation
- Categorized technical stack into **Backend & Core**, **Databases & Caching**, **System Architecture**, **DevOps & Tools**, **Frontend Background**, and **AI & Emerging Tech**.
- Clicking any skill tab triggers smooth viewport scroll navigation (`scrollIntoView({ behavior: "smooth" })`).

### 👨‍🏫 5. Teaching & Mentorship Section
- Showcases active mentorship of **10+ students** in Java, Spring Boot, Object-Oriented Programming (OOP), Git/GitHub, and IT career guidance.
- Direct email contact CTA and integration with **WebTechNil** YouTube channel.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Framework & Core** | Next.js 13 (Pages Router), React 18, TypeScript |
| **Styling & UI** | Tailwind CSS 3.2, Tailwind Scrollbar |
| **Animations** | Framer Motion |
| **Icons & Media** | Heroicons v2, Next.js Image Optimization |
| **Analytics & Hosting** | Vercel Analytics, Vercel Edge Network |

---

## 📁 Repository Structure

```text
anil-latest-portfolio/
├── components/
│   ├── Header.tsx              # Sticky Command Center Navbar & Dark/Light Toggle
│   ├── Hero.tsx                # Clean Hero Section & Professional Bio
│   ├── About.tsx               # Narrative & Viewport Metric Counter Cards
│   ├── Experience.tsx          # Capgemini & SimpleByte Work Timeline
│   ├── ExperienceCard.tsx      # Individual Timeline Card Component
│   ├── OrderFlowShowcase.tsx   # Interactive "Simulate OrderFlow" Request Simulator
│   ├── EngineeringMindset.tsx # System Design Philosophy Cards
│   ├── Skills.tsx              # Interactive Skill Grid & Category Navigation
│   ├── Skill.tsx               # Skill Item Badge Component
│   ├── Projects.tsx            # Preserved Projects Showcase & Detail Modal
│   ├── TeachingMentorship.tsx  # Online Java Mentorship & WebTechNil YouTube Card
│   ├── CurrentlyLearning.tsx   # Q3/Q4 Focus Areas (Java 21, Spring AI)
│   ├── Contact.tsx             # One-Click Email Copy & Social Footer Links
│   ├── BackgroundCircles.tsx   # Ambient Glowing Radial Depth
│   └── CustomCursor.tsx        # Subtle Desktop Pointer Dot
├── context/
│   └── ThemeContext.tsx        # React Context for Dark/Light Theme Switching
├── data/
│   └── data.json               # Projects JSON Data Source
├── pages/
│   ├── _app.tsx                # App Wrapper with ThemeProvider & Analytics
│   └── index.tsx               # Main Assembly Page with SEO & SSG getStaticProps
├── public/                     # Static Profile Photos, Project Screenshots & Icons
├── styles/
│   └── globals.css             # Tailwind Directives & Custom Command Theme Styles
├── tailwind.config.js          # Extended Colors, Monospace Fonts & Dark Mode Config
└── package.json                # Project Dependencies & Scripts
```

---

## 🚀 Local Installation & Setup Guide

### Prerequisites
- **Node.js** >= 16.x
- **npm** >= 8.x

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anilkrrana/anil-latest-portfolio.git
   cd anil-latest-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

5. **Start Production Server Locally**:
   ```bash
   npm run start
   ```

---

## 👨‍💻 About Anil Kumar Rana

**Senior Software Engineer @ Capgemini** (*Promoted Mar 2025*)
- 🏆 **2+ Years Experience** in enterprise API integration, high-throughput Spring Boot microservices, and DataWeave pipelines.
- ⚡ **+40% Performance Improvement** delivered across enterprise backend integration systems.
- 🛠️ **Core Specializations**: Java 21, Spring Boot 3.x, REST APIs, MuleSoft 4.9, DataWeave 2.0, PostgreSQL, Redis, Docker, Flyway, Testcontainers.
- 🧩 **Competitive Programming & Open Source**: TCS CodeVita Rank 3082 | 300+ Solved DSA Problems | 900+ GitHub Commits.

---

## 📬 Contact & Connect

- 📧 **Email**: [er.anilkrana@gmail.com](mailto:er.anilkrana@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/anil-kumar-rana](https://www.linkedin.com/in/anil-kumar-rana/)
- 💻 **GitHub**: [github.com/anilkrrana](https://github.com/anilkrrana)
- 📺 **YouTube**: [WebTechNil (@webtechnil)](https://www.youtube.com/@webtechnil)
- 🐦 **X (Twitter)**: [@anilkrana_](https://twitter.com/anilkrana_)

---

<div justify="center" align="center">
  <sub>Built with ❤️ by Anil Kumar Rana · Powered by Next.js, Tailwind CSS & Framer Motion</sub>
</div>
