# EduSelect - Course Selection Platform

An Angular 21 single-page application for browsing, enrolling in, and managing online courses. Built with Bootstrap 5 for responsive UI and Bootstrap Icons for iconography.

## Overview

EduSelect is a front-end course selection platform that lets users:

- **Browse courses** across categories like Design, Skills, Technology, and Business
- **View course details** including lessons count, workshops, and enrollment options
- **Track progress** via a personal dashboard showing enrolled courses, completion stats, and certificates
- **Sign in** through a reactive login form with email/password validation

The app currently uses mock data served through an in-memory `CourseService`. There is no backend integration yet (comments in the codebase reference a future ASP.NET Core API).

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Angular 21 (standalone components)  |
| Language    | TypeScript 5.9                      |
| Styling     | Bootstrap 5.3, Bootstrap Icons      |
| Forms       | Angular Reactive Forms              |
| Routing     | Angular Router                      |
| Testing     | Vitest 4 with jsdom                 |
| Package Mgr | npm 10                              |

## Project Structure

```
src/app/
  app.ts                    # Root component (renders Navbar + RouterOutlet)
  app.routes.ts             # Route definitions
  app.config.ts             # App-level providers
  components/
    navbar/                 # Top navigation bar with route links and sign-in button
    course-dashboard/       # User dashboard with enrollment stats and progress cards
    course-list/            # Grid view of all available courses
    course-detail/          # Single course page with description, pricing, and enroll CTA
    login/                  # Sign-in form with reactive validation
    about/                  # Mission statement and platform highlights
    contact/                # Contact form and support info
  services/
    course.ts               # CourseService - provides mock course data and Courses interface
```

## Routes

| Path                | Component          | Description                    |
|---------------------|--------------------|--------------------------------|
| `/`                 | redirect           | Redirects to `/dashboard`      |
| `/dashboard`        | CourseDashboard    | User's enrolled courses & stats|
| `/courses`          | CourseList          | Browse all available courses   |
| `/course-detail/:id`| CourseDetail       | Single course details page     |
| `/login`            | Login               | Authentication form            |
| `/about`            | About               | About the platform             |
| `/contact`          | Contact             | Contact form and info          |

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm 10+

### Install dependencies

```bash
npm install
```

### Development server

```bash
ng serve
```

Then open [http://localhost:4200](http://localhost:4200). The app redirects to the dashboard by default.

### Build

```bash
ng build
```

Production artifacts are output to `dist/`.

### Run tests

```bash
ng test
```

Uses Vitest with jsdom for unit testing.

## Current Limitations

- All course data is hardcoded in `CourseService` (no backend API)
- Login form logs credentials to console but does not authenticate
- Dashboard stats (enrolled: 12, completed: 04, certificates: 02) are static
- Progress percentages on enrollment cards are hardcoded at 45%
- No route guards or authentication state management
- Search input on the courses page is not functional

## License

This project does not currently specify a license.
