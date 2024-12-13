# Calo Job Management System

## Overview

This project implements a job management system with a NestJS backend and Remix frontend. The system allows creating jobs that fetch random food images from Unsplash with variable execution times.

## Setup Instructions

### Prerequisites

- Node.js (v18+) (IMPORTANT)
- pnpm

### Backend Setup

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Rename the .env.exemple file to .env and fill in your KEY
5. Run the backend:
   ```bash
   pnpm start
   ```
   Backend will run on `http://localhost:3000`

### Frontend Setup (Remix)

1. Navigate to the frontend directory
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the frontend:
   ```bash
   pnpm dev
   ```
   Remix uses vite so frontend will run on `http://localhost:5173`

## Time Breakdown

- Backend Development (NestJS):

  - Job Service Implementation: 2h

    Backend was easy to setup because I used nest CLI which speeds up development - creating resources (controller, service ....etc) -

  - Loading env file : 15mn

    I taught env file would load normally with 'process.env' but apparently it is not the case with NestJs, so I've read the docs and found it requires a [dependency]("https://docs.nestjs.com/techniques/configuration")

- Frontend Development (Remix):
  - Basic UI: 30m
  - API Linking and state management: 1h
- Testing & Refinement: 30mn

Total Time: Approximately one day
