# Fitness Guide

Fitness Guide is being built one product module at a time, with the foundation designed around the user's real goal, baseline, schedule, training environment and nutrition preference.

## Module 01 · Foundation & Onboarding

**Status: complete and frozen as the foundation input layer.**

## Module 02 · Today

**Status: built and active.**

Module 02 has one job: turn the saved foundation into a calm, useful home experience that answers **"What should I do today, and why?"** without pretending that later training, nutrition or progress modules already exist.

### Module 02 experience

- Personalized greeting and goal context
- One clear Today action
- Training direction derived from the Module 01 goal
- Session duration derived from the user's availability
- Training environment and selected equipment surfaced transparently
- Weekly rhythm view based on actual locally logged sessions
- Coaching guidance based on experience level
- Empty-state handling for a new user
- Foundation-missing fallback instead of broken or guessed data
- Responsive mobile/tablet/desktop layout
- Reduced-motion support
- Local-first data usage
- No medical claims

### Product boundary

The Today screen does **not** fake a complete workout engine. The Start action is reserved for Module 03, where the exercise selection, workout structure and guided execution will be implemented properly.

## Architecture

The MVP remains dependency-light and GitHub Pages compatible. Each module has its own CSS/JavaScript boundary while sharing the foundation data contract through browser local storage.

## Product boundary

Fitness Guide is a general fitness product, not medical software. Guidance is general information and should be adapted to the user's abilities and qualified professional advice where appropriate.

## Module sequence

1. Foundation & Onboarding — complete
2. Today — complete
3. Train — next
4. Exercise Library
5. Guided Workout
6. Nutrition
7. Progress
8. Adaptive Fitness Engine
9. Profile & Settings
10. Data / Accounts / Production Infrastructure
