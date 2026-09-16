# Fitness Guide

Fitness Guide is being built one product module at a time, with the foundation designed around the user's real goal, baseline, schedule, training environment and nutrition preference.

## Module 01 · Foundation & Onboarding

**Status: complete and frozen as the active foundation experience.**

The first module deliberately focuses on one job: understand the person before the training system starts prescribing anything.

### Flow

1. Product introduction and local-data explanation
2. Primary fitness goal
3. Personal baseline: name, age, height, weight and optional sex
4. Training experience
5. Sustainable weekly schedule and session duration
6. Training environment and available equipment
7. Nutrition preference and optional food restrictions
8. Full review of captured inputs
9. Starting-direction preview
10. Local foundation save confirmation

### Product principles

- One decision at a time
- Every required answer has a clear purpose
- The user can review the source data before a plan is created
- Schedule reflects realistic availability, not aspirational availability
- Equipment and environment prevent obviously unsuitable starting recommendations
- Nutrition preference is captured at the foundation rather than bolted on later
- Local-first persistence for the current MVP
- Responsive mobile, tablet and desktop layouts
- Reduced-motion support
- No medical claims or clinical assessment

### Competitive benchmark

Module 01 is designed against current capabilities documented by leading fitness products. Apple Fitness+ uses activity preferences, durations and schedules for personalized recommendations and Custom Plans. Fitbod builds workouts from goal, experience, equipment, training schedule and workout preferences, then adapts from training history. Hevy provides broad exercise discovery and program filtering.

Fitness Guide's foundation is intentionally structured so later modules can use one consistent profile instead of collecting disconnected preferences in separate features.

## Current architecture

The current MVP is dependency-light and deployable through GitHub Pages. Module 01 uses plain HTML, CSS and JavaScript with browser local storage and a dedicated service-worker cache. No build step is required.

## Product boundary

This is a general fitness product, not medical software. Exercise guidance is general information and should be adapted to the user's abilities and professional advice where appropriate. No wearable, health-record, cloud-account or clinical integration is claimed in Module 01.

## Next module

Module 02 will begin only after the Foundation & Onboarding experience is accepted as a stable product boundary. It will consume the saved foundation rather than recreate onboarding logic.