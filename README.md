# Fitness Guide

A mobile-first adaptive fitness web app designed around calm, premium interaction rather than a dashboard-heavy UI.

## Included now

- Personalized onboarding: goal, age, weight, experience, days/week, session length, home/gym, equipment and diet style
- Today home with personalized session recommendation and weekly rhythm
- Guided training mode with progress, sets, reps, load and RPE logging
- Adaptive session length and environment/experience-based exercise selection
- Complete searchable exercise library with 123 movements across lower body, posterior chain, upper push, upper pull, core, conditioning and mobility
- Exercise detail sheets with how-to, target and coaching cues
- Nutrition guidance with goal-aware meal structure and diet preference handling
- Progress history, weekly session count, total minutes and recent-session chart
- Profile and local settings
- Local-device persistence using browser storage
- PWA shell and service-worker cache refresh
- Reduced-motion support
- Responsive phone/tablet/desktop layouts

## Current architecture

This release is intentionally dependency-light so it can be deployed directly with GitHub Pages. The frontend is plain HTML/CSS/JavaScript with no build step.

## Product boundary

This is a general fitness product, not medical software. Exercise guidance is general information and should be adapted to the user's abilities and professional advice where appropriate. No wearable, health-record, cloud-account or clinical integration is claimed in this release.

## Next production layer

For a production application, add authenticated accounts, encrypted cloud sync, PostgreSQL/FastAPI services, automated tests, exercise media licensing, server-side recommendation logic, secure backups, analytics with consent, offline sync conflict handling and deployment observability.
