# Church CMS

A modern, cloud-ready Content Management System (CMS) built specifically for church websites.

This project is being developed as a portfolio project to demonstrate modern full-stack development practices using React, Next.js, TypeScript, and AWS. The long-term goal is to provide churches with a simple, affordable, and maintainable CMS that allows administrators to manage website content without editing code.

---

## Current Status

**Version:** CMS v1

### Completed

- Homepage CMS
- Announcement editor
- Hero editor
- Welcome Message editor
- Ministries editor
- Pastor Message editor
- Service Times editor
- Location & Contact editor
- Navigation editor
- Footer editor
- Live preview
- Typed content models
- Registry-based admin interface

### Planned

- AWS backend
- Authentication
- Image uploads
- Persistence
- Version history
- Multi-site support
- Multi-tenant architecture

---

# Features

- Modern Next.js App Router architecture
- TypeScript throughout
- Pure presentational components
- Registry-driven admin interface
- Live preview while editing
- Strongly typed content models
- Responsive design
- Simple administrator experience
- Architecture designed for future AWS integration

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

## AI Assisted Development

- ChatGPT
- GitHub Copilot
- Amazon Q Developer

---

# Planned AWS Architecture

The project is intentionally being built in phases.

## Phase 1

Frontend CMS

- Local content
- No backend
- No authentication
- No persistence

Purpose:

- Validate architecture
- Build reusable components
- Establish CMS editing pattern

---

## Phase 2

AWS Backend

Planned services include:

- Amazon S3
- Amazon CloudFront
- Amazon DynamoDB
- AWS Lambda
- Amazon API Gateway
- Amazon Cognito
- AWS IAM
- Amazon CloudWatch

---

## Phase 3

Production CMS

Planned features:

- Content persistence
- Authentication
- Image management
- Multiple administrators
- Audit history
- Multi-site support
- Deployment automation

---

# Project Structure

```
app/
components/
components/admin/
content/
prompts/
public/
```

---

# Design Principles

This project follows a few core architectural principles.

- Presentation components never own content.
- Every editable section has a typed content model.
- Editors are controlled by the admin page.
- Public pages never depend on admin draft state.
- Components remain reusable and easy to test.
- Avoid unnecessary abstractions.
- Prefer consistency over cleverness.

---

# Learning Goals

This project is focused on learning modern software engineering practices including:

- React architecture
- Next.js App Router
- TypeScript
- Component design
- State management
- Cloud architecture
- AWS services
- Infrastructure design
- AI-assisted software development

---

# Future Roadmap

- [x] CMS v1
- [ ] Backend persistence
- [ ] Authentication
- [ ] Image uploads
- [ ] AWS deployment
- [ ] Multi-site CMS
- [ ] Production launch

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

# License

This project is currently intended for educational and portfolio purposes.
