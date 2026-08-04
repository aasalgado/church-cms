# Dance Studio CMS

A modern, cloud-ready Content Management System (CMS) designed for dance studios.

This project began as a church CMS to explore scalable content management architecture. It has since evolved into a reusable platform focused on dance studios, with the long-term vision of becoming a complete SaaS solution that combines a modern marketing website, intuitive CMS, scheduling, payments, and student management.

The project is being built as both a portfolio application and a real-world product, following an iterative, sprint-based development process.

---

# Vision

Build an all-in-one platform that helps dance studios:

- Manage their website without editing code
- Update classes, events, and announcements
- Manage instructors and students
- Schedule classes
- Accept online payments
- Grow their business with an easy-to-use CMS

---

# Current Status

**Current Phase:** Phase 2 – Dance Studio Conversion

**Current Sprint:** Sprint 2.2 – Hero & Event Banner

---

## Completed

### Foundation

- Generic CMS architecture
- Typed content models
- Registry-driven admin interface
- Live preview
- Section-based editing
- Reusable presentation components

### Dance Studio Migration

- Church architecture renamed to dance studio architecture
- Navbar converted
- Footer converted
- Site metadata updated
- Navigation updated
- Section anchors updated
- Hero content converted
- Event banner converted

---

## Planned

### Phase 2

- Studio Introduction
- Class Schedule
- Dance Styles
- Instructor Section
- Contact Section

### Future

- Visual redesign
- Image management
- AWS backend
- Authentication
- Scheduling system
- Student portal
- Instructor dashboard
- Payments
- Multi-tenant SaaS

---

# Features

Current features include:

- Modern Next.js App Router architecture
- React + TypeScript
- Strongly typed content models
- Registry-driven CMS
- Live preview
- Responsive design
- Clean component architecture
- AI-assisted development workflow

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## UI

- shadcn/ui
- Lucide Icons

## Development

- Git
- GitHub
- npm
- VS Code

## AI-Assisted Development

- ChatGPT
- GitHub Copilot
- Amazon Q Developer

---

# Planned Platform

The long-term roadmap extends beyond a marketing website.

## Version 1

- Marketing website
- CMS
- Content management

## Version 2

- Scheduling
- Events
- Student registrations

## Version 3

- Payments
- Student portal
- Instructor dashboard

## Version 4

- Multi-tenant SaaS platform

---

# Project Structure

```
app/
components/
components/admin/
content/
docs/
prompts/
public/
```

Documentation is maintained alongside the source code in the `docs/` directory.

---

# Design Principles

- Presentation components never own content.
- Every editable section has a typed content model.
- Editors are controlled through a centralized admin interface.
- Keep content, presentation, and business logic separate.
- Build one complete sprint at a time.
- Prefer consistency over cleverness.
- Design every feature with long-term scalability in mind.

---

# Learning Goals

This project focuses on modern software engineering practices including:

- React architecture
- Next.js App Router
- TypeScript
- Component-driven design
- CMS architecture
- AWS cloud architecture
- Product design
- SaaS architecture
- AI-assisted software development

---

# Roadmap

- [x] Phase 1 – CMS Foundation
- [x] Sprint 2.1 – Navbar, Footer & Metadata
- [x] Sprint 2.2 – Hero & Event Banner
- [ ] Sprint 2.3 – Studio Introduction
- [ ] Sprint 2.4 – Class Schedule & Dance Styles
- [ ] Sprint 2.5 – Instructor & Contact
- [ ] Visual redesign
- [ ] Backend
- [ ] Authentication
- [ ] Scheduling
- [ ] Payments
- [ ] Student portal
- [ ] Multi-tenant SaaS

---

# Getting Started

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build production version

```bash
npm run build
```

---

# Documentation

Project documentation is maintained in the `docs/` directory and includes:

- Product Handbook
- Sprint Log
- Architecture Decision Records (ADRs)
- Roadmap
- Meeting Notes

---

# License

This project is currently intended for educational, portfolio, and product development purposes.
