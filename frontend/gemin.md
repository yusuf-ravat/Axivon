# 🚀 AI CRM SaaS - Phase 1 Frontend Architecture & Folder Structure

This document outlines the **Feature-Based + Scalable Architecture** designed for our large-scale AI CRM SaaS product. 

---

## 🛠️ Technology Stack
The project is built on a modern, robust, and highly performant frontend stack:
- **Core Framework**: React 19 & TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS & shadcn/ui
- **State Management**: 
  - **Server State**: TanStack Query (React Query)
  - **Global Client State**: Zustand
- **Routing**: React Router v7
- **Forms & Validation**: React Hook Form & Zod

---

## 📂 Phase 1 Directory Structure

```text
src/
├── app/                  # Application bootstrap, routing, and providers
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   ├── routes.tsx        # Application routes configuration
│   ├── providers.tsx     # Global React providers wrapper
│   ├── queryClient.ts    # TanStack Query client initialization
│   └── store.ts          # Central store orchestrator
│
├── assets/               # Static assets
│   ├── logo/             # Logo variations (SVG, SVG-dark)
│   ├── icons/            # Customized icon sets
│   ├── images/           # Standard image assets
│   ├── illustrations/    # Custom AI & UI graphics
│   ├── animations/       # Lottie or SVG animations
│   └── fonts/            # Custom typography assets
│
├── layouts/              # Persistent page shells
│   ├── AuthLayout/       # Layout for Login/Register flows
│   ├── DashboardLayout/  # Main application shell (Sidebar + Navbar)
│   ├── BlankLayout/      # Minimal shell for standalone pages
│   └── components/       # Layout-specific components
│
├── pages/                # Catch-all and global standalone pages
│   ├── Home/             # Landing or entry portal
│   ├── NotFound/         # 404 handler
│   ├── Unauthorized/     # 403 access control page
│   └── Maintenance/      # 503 system downtime page
│
├── features/             # Scalable feature-based modules
│
├── components/           # Shared reusable components
│   ├── ui/               # Atomic shadcn/ui primitives
│   ├── common/           # Structural components (Sidebar, Navbar)
│   ├── forms/            # Shared form controls & wrappers
│   ├── tables/           # Rich data grids & search actions
│   ├── cards/            # Content presentation components
│   ├── charts/           # Dashboard visual graphics
│   ├── dialogs/          # Reusable modal dialogs
│   ├── loaders/          # Spinners & skeletons
│   └── navigation/       # Tabs, Breadcrumbs, and link elements
│
├── hooks/                # Global custom hooks
├── services/             # Low-level API clients (Axios instance, endpoints)
├── lib/                  # Third-party library initializations
├── store/                # Global Zustand store definitions
├── types/                # Global TypeScript type declarations
├── utils/                # Pure helper functions
├── constants/            # Global application constant configurations
├── styles/               # Global CSS files and stylesheets
└── config/               # Environmental and builder setups
```

---

## 🧱 Feature Module Design Pattern

To keep features independent and easy to maintain, every module under `features/` must follow the same modular structure.

### 📐 Example: Lead Module
```text
features/
└── leads/
    ├── api/          # Module-specific API requests & hooks
    ├── components/   # UI elements specific to leads
    ├── pages/        # Route entrypages for leads
    ├── hooks/        # Lead-specific React custom hooks
    ├── services/     # Formatting, transformation, or domain services
    ├── schemas/      # Zod validation schemas
    ├── types/        # TypeScript interface definitions
    ├── utils/        # Internal helpers
    ├── constants/    # Status enums, labels, values
    ├── store/        # Zustand sub-states if necessary
    ├── routes/       # Sub-routing declarations
    └── index.ts      # Feature public API export entrypoint
```

---

## 📦 Detailed Module Breakdowns

### 1. Authentication Module (`features/auth/`)
Organizes all auth components, hooks, validations, and API wrappers in a single place.

| Directory / File | Description |
| :--- | :--- |
| **`api/`** | API request functions for login, register, password reset, etc. |
| 📄 `login.ts`, `register.ts` | Authenticates or registers users with the auth service. |
| 📄 `forgotPassword.ts`, `resetPassword.ts` | Handles password recovery flows. |
| 📄 `refreshToken.ts` | Background token refresh logic. |
| **`components/`** | Reusable UI components specific to authorization. |
| 📄 `LoginForm.tsx`, `RegisterForm.tsx` | Forms for user sign-in and sign-up. |
| 📄 `PasswordInput.tsx` | Secure input control with toggleable visibility. |
| 📄 `OTPInput.tsx` | One-time password text fields. |
| **`hooks/`** | React Query mutation and query hook wrappers. |
| 📄 `useLogin.ts`, `useRegister.ts` | Handles loading and server states for auth requests. |
| 📄 `useCurrentUser.ts` | Fetches the current authenticated session. |
| **`pages/`** | Main entry-point pages mapped to auth routes. |
| 📄 `LoginPage.tsx`, `RegisterPage.tsx` | Dedicated pages for login and signup. |
| 📄 `ForgotPassword.tsx`, `ResetPassword.tsx` | Password recovery screens. |
| **`schemas/`** | Zod schemas. |
| 📄 `loginSchema.ts`, `registerSchema.ts` | Schema validations for form inputs. |
| **`services/`** | Domain services. |
| 📄 `authService.ts` | Direct token storage and memory manager. |
| **`types/`** | TypeScript definitions. |
| 📄 `auth.types.ts` | User profiles and session interface payloads. |
| **`routes/`** | Module route configuration. |
| 📄 `auth.routes.tsx` | Exposes auth paths to the main application. |
| 📄 **`index.ts`** | Public entrypoint exporting components, hooks, and types. |

---

### 2. Dashboard Module (`features/dashboard/`)
Handles the metrics visualization, summaries, and action panels.

```text
dashboard/
├── api/                  # Metric fetch functions
├── components/           # Dashboard visual components
│   ├── StatsCard.tsx     # Numeric indicator card
│   ├── RevenueChart.tsx  # Revenue chart (Area / Bar)
│   ├── ActivityCard.tsx  # Interactive activity logger
│   ├── RecentLeads.tsx   # Latest pipeline entries list
│   ├── AIInsights.tsx    # Intelligent CRM assistant insights
│   └── SalesChart.tsx    # Sales trend visualizer
├── pages/
│   └── Dashboard.tsx     # Primary grid layout page
├── hooks/                # Metric-specific hooks
├── services/             # Calculator logic
├── types/                # Dashboard interface payloads
└── index.ts              # Export entrypoint
```

---

### 3. Layout Architecture (`layouts/`)
Defines structural shells wrapping application routes to preserve sidebar and header states.

```text
layouts/
├── DashboardLayout       # Primary CRM Workspace Layout
│   ├── Sidebar           # Persistent left navigation drawer
│   ├── TopNavbar         # Header bar with user profile and search
│   ├── Breadcrumb        # Dynamic path navigator
│   ├── PageContainer     # Styled content layout box
│   ├── RightPanel        # Slide-out contextual panel (Optional)
│   └── Footer            # Global copyright information
│
├── AuthLayout            # Centered design layout for authentication pages
└── BlankLayout           # Plain container shell for standalone screens
```

---

## 🧩 Reusable Shared Components (`components/`)

### A. Core UI Primitives (`components/ui/`)
Lightweight, atomic elements designed as shadcn/ui primitives.

*   `Button` • `Input` • `Card` • `Modal` • `Drawer` • `Dialog`
*   `Badge` • `Avatar` • `Select` • `Dropdown` • `Tabs` • `Table`
*   `Pagination` • `Tooltip` • `Popover` • `Skeleton` • `Spinner` • `Toast`

### B. Common Shell Elements (`components/common/`)
Cross-layout components supporting global interactions.

*   `Navbar` • `Sidebar` • `Breadcrumb` • `PageHeader` • `SearchBar`
*   `EmptyState` • `ConfirmDialog` • `DeleteDialog` • `NoData`
*   `ComingSoon` • `ErrorBoundary`

---

## ⚡ Global Modules Reference

### 1. Global Services (`services/`)
Handles core HTTP client instances and global server communication.
- 📄 `api.ts`: Central endpoint definition file.
- 📄 `axios.ts`: Axios client configured with interceptors.
- 📄 `auth.ts` / `lead.ts` / `customer.ts` / `deal.ts` / `calendar.ts` / `notification.ts`: Endpoint calls.

### 2. State Store (`store/`)
Zustand modules for purely client-side global states.
- 📄 `authStore.ts`: Local session cache.
- 📄 `themeStore.ts`: Visual modes manager (light vs dark).
- 📄 `sidebarStore.ts`: Collapsible state manager.
- 📄 `notificationStore.ts`: Alert stack manager.
- 📄 `userStore.ts`: Global workspace preference cache.

> [!NOTE]
> Keep Server-State cached in **TanStack Query** memory; only use **Zustand** for transient frontend UI states.

### 3. Utility Helpers (`utils/`)
Pure, stateless utility functions.
- 📄 `date.ts`: Date formattings and calendar math helpers.
- 📄 `currency.ts`: Localized currency string transformations.
- 📄 `validation.ts`: Custom RegExp checkers.
- 📄 `helpers.ts`: Structural converters and class utilities.
- 📄 `storage.ts`: Local & Session Storage abstractions.
- 📄 `permissions.ts`: Role-based access logic validators.

### 4. Application Configuration (`config/`)
Environment settings and module configurations.
- 📄 `env.ts`: Environmental schema variables parsing.
- 📄 `axios.ts`: Axios client timeout configuration settings.
- 📄 `query.ts`: React Query default fetch options.
- 📄 `theme.ts`: Base component tailwind-theme variables.

## 💻 Step 2 - Frontend Dependency & Setup Checklist

### Install Required Packages

```bash
react-router-dom
@tanstack/react-query
axios
zustand
react-hook-form
zod
@hookform/resolvers
tailwindcss
shadcn/ui
lucide-react
react-hot-toast
framer-motion
```


# Axivon CRM - Frontend UI Development Roadmap

> **Project:** Axivon CRM
>
> **Framework:** React 19 + TypeScript + Vite
>
> **Styling:** Tailwind CSS + shadcn/ui
>
> **Goal:** Build a modern AI-first SaaS CRM with a premium UI similar to Linear, Attio, Notion, and Stripe.

---

# Development Philosophy

Do **NOT** start by creating pages.

Professional SaaS products first build a **Design System**, then the **Application Layout**, and finally the **Business Modules**.

Following this approach makes every future screen faster to develop and keeps the UI consistent.

---


# Phase 1 - Design System

Build reusable UI components before creating pages.

## Foundation

```text
Colors

Typography

Spacing

Border Radius

Shadow System

Animations

Icons

Dark Theme

Light Theme

Responsive Breakpoints
```

---

## Basic Components

```text
Button

Input

Textarea

Select

Checkbox

Radio

Switch

Badge

Avatar

Tooltip

Popover

Dropdown

Accordion

Tabs

Progress

Separator

Skeleton

Spinner

Toast

Alert

Dialog

Drawer

Modal
```

---

## Form Components

```text
Form Wrapper

Validation Messages

Password Input

OTP Input

Date Picker

Phone Number Input

File Upload

Search Input

Tag Input

Rich Text Editor
```

---

## Data Components

```text
Data Table

Pagination

Search Bar

Filter Panel

Status Badge

Timeline

Activity Feed

Cards

Charts

Statistics Card

Empty State

Loading State

Error State
```

---

# Phase 2 - Application Layout

Create the main layout used across the application.

## Dashboard Layout

```text
Sidebar

Top Navigation

Breadcrumb

Page Header

Content Area

Footer

Theme Toggle

Notification Panel

User Profile Menu

Global Search

Command Palette (Ctrl + K)
```

---

## Sidebar Navigation

```text
Dashboard

CRM
    Companies
    Contacts
    Leads
    Deals

Work
    Tasks
    Calendar
    Meetings

Reports

AI
    AI Assistant
    Business Memory
    AI Commands

Settings
```

---

## Top Navigation

```text
Global Search

Quick Add Button

Notifications

Theme Toggle

User Avatar

Profile Menu
```

---

# Phase 3 - Authentication

Build all authentication screens.

```text
Login

Register

Forgot Password

Reset Password

Verify Email

Unauthorized

404 Page
```

---

# Phase 4 - Dashboard

Initially, use dummy data.

## Dashboard Widgets

```text
Welcome Card

Revenue Summary

Leads Summary

Deals Summary

Tasks Summary

Recent Activities

Upcoming Meetings

Pipeline Overview

Sales Chart

Quick Actions

AI Insights

Notifications
```

---

# Phase 5 - CRM Modules

Develop one module completely before moving to the next.

## Recommended Order

```text
Companies

↓

Contacts

↓

Leads

↓

Deals

↓

Tasks

↓

Calendar

↓

Reports

↓

Settings
```

Each module should include:

- List View
- Detail View
- Create
- Edit
- Delete
- Search
- Filters
- Sorting
- Pagination
- Responsive Layout

---

# Phase 6 - AI Modules

Build only after the CRM foundation is stable.

```text
AI Command Center

Business Memory

Executive Chat

AI Email Generator

AI Lead Scoring

AI Sales Coach

Meeting Intelligence
```

---

# Design Principles

Axivon should look clean, premium, and modern.

## Style

```text
Minimal

Modern

Professional

Rounded UI

Soft Shadows

Large White Space

Fast Animations

Keyboard Friendly

Dark Mode First

Fully Responsive
```

---

# Color Palette

```text
Primary      : #2563EB

Secondary    : #7C3AED

Success      : #10B981

Warning      : #F59E0B

Danger       : #EF4444

Info          : #06B6D4

Background    : #F8FAFC

Surface       : #FFFFFF

Border        : #E2E8F0

Dark BG       : #0F172A

Dark Surface  : #1E293B
```

---

# Typography

```text
Font

Inter

Weights

400

500

600

700

800
```

---

# Border Radius

```text
Buttons

12px

Cards

16px

Dialogs

20px

Inputs

12px
```

---

# Shadow System

```text
Small

Medium

Large

Extra Large
```

Use subtle shadows to maintain a premium appearance.

---

# Responsive Design

Support all major devices.

```text
Desktop

Laptop

Tablet

Mobile
```

The sidebar should collapse into a drawer on smaller screens.

---

# Suggested Libraries

```text
Tailwind CSS

shadcn/ui

Framer Motion

Lucide React

TanStack Query

TanStack Table

React Hook Form

Zod

React Router

Zustand

Axios

React Hot Toast

Recharts
```

---

# Folder Development Sequence

```text
src

│

├── assets

├── components

├── layouts

├── pages

├── features

├── services

├── hooks

├── store

├── types

├── utils

├── constants

└── config
```

Develop each folder in the order listed above.

---

# Git Milestones

```text
v0.1.0

Project Setup

v0.2.0

Design System

v0.3.0

Application Layout

v0.4.0

Authentication

v0.5.0

Dashboard

v0.6.0

Companies Module

v0.7.0

Contacts Module

v0.8.0

Leads Module

v0.9.0

Deals Module

v1.0.0

Axivon CRM MVP
```

---

# Immediate Development Tasks

## Step 1

Set up the project with React, Vite, TypeScript, Tailwind CSS, shadcn/ui, React Router, Zustand, TanStack Query, Axios, and React Hook Form.

---

## Step 2

Create the complete Design System with reusable UI components.

---

## Step 3

Build the Dashboard Layout, including the Sidebar, Top Navigation, Breadcrumb, Theme Toggle, Notification Panel, Global Search, and Content Area.

---

## Step 4

Implement the Authentication screens and connect them to the backend APIs.

---

## Step 5

Develop the Dashboard using placeholder data first, then connect it to live APIs.

---

## Step 6

Build CRM modules one by one, ensuring each is fully functional before moving to the next.

---

# Final Goal

By the end of Phase 1, Axivon should provide:

- A polished and responsive SaaS interface.
- A reusable component library.
- A consistent design system.
- Secure authentication.
- A modern dashboard.
- Fully functional CRM modules.
- A scalable foundation ready for AI-powered features in future phases.