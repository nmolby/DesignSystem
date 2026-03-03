# claude.md (Project-level)

## Overview
Terracotta Editorial Design System - A warm, editorial-focused design system providing reusable CSS primitives and components for personal projects.

## Architecture
- Frontend: Vanilla HTML/CSS/JS
- Fonts: Faculty Glyphic (headings), Advent Pro (body/UI)
- Icons: Feather Icons
- Deployment: Static files (can be loaded as git submodule)
- Design tokens: CSS custom properties

## Key Files
- `styles/tokens.css` — Design tokens (colors, typography, spacing)
- `styles/components.css` — Component styles
- `styles/design-system.css` — Main entry point (imports tokens + components)
- `index.html` — Gallery page
- `docs/components.html` — Component documentation
- `docs/components.js` — Interactive component behaviors

## Workflow Rules
- **ALWAYS commit changes after completing a task**
- **ALWAYS push commits to remote immediately after committing**
- Keep commits focused and use descriptive messages
- Test changes by viewing HTML files in browser before committing

## Update Requirement
This file MUST remain accurate as the project evolves.
