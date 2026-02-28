# DesignSystem

Terracotta Editorial design-system starter for personal projects.

## Preview

Open `index.html` in a browser to view the component gallery built on the warm Terracotta token set.
Open `docs/components.html` for the expanded component reference (nav, table, modal, toast).

## Structure

- `styles/tokens.css` contains theme tokens (colors, type, spacing, radius, shadows)
- `styles/components.css` contains reusable primitives (buttons, card, alert, field, tags)
- `styles/design-system.css` is the stable entry point that imports tokens + components
- `index.html` is a living gallery page to evaluate the style language
- `docs/components.html` is the component reference page with interactive examples
- `docs/components.js` powers the modal/toast demo interactions

## Submodule usage

In another project:

```bash
git submodule add <your-design-system-repo-url> vendor/design-system
```

Then load:

```html
<link rel="stylesheet" href="/vendor/design-system/styles/design-system.css" />
```
