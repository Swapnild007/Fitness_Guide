# Fitness Guide

A mobile-first, general-purpose fitness planning and guidance platform.

## Product principle

Fitness Guide is not designed around one person's body weight, goals or routine. A user creates a profile and the application adapts guidance to their goal, activity level, preferences, available equipment, schedule and logged progress.

## Current MVP

- Personalized onboarding
- Goal selection
- Activity and training preferences
- Basic energy and protein estimates
- Adaptive workout starter
- Food and macro logging
- Water, steps, workout and weight logging
- Weight trend visualization
- PWA/offline foundation
- Safety guidance boundary

## Planned production architecture

The MVP is intentionally dependency-light so it can be developed and hosted without Android Studio, Termux or Codespaces. The next stages can introduce a TypeScript frontend, API layer, PostgreSQL persistence, authentication, testing and CI/CD without changing the product model.

## Safety

Fitness Guide provides general fitness and nutrition information. It is not a medical diagnostic or treatment system. High-risk or medical situations should be directed to appropriate qualified professionals.
