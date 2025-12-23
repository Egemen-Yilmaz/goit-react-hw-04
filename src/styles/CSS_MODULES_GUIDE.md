# CSS Modules Design Guide

This document explains the modular CSS conventions and examples to use across the project.

Goals
- Keep styles local by default using CSS Modules.
- Use small, composable class names (container, form, button, image, caption, etc.).
- Prefer descriptive names for stateful classes (.isOpen, .isActive) and modifiers (.primary).
- Keep component styles inside `src/components/<Component>/<Component>.module.css`.

Naming conventions
- Keep class names lowercase and kebab-case inside CSS files.
- In JSX import the module as `styles` and reference classes as `styles.className`.
- Example:
  ```jsx
  import styles from './SearchBox.module.css';
  <form className={styles.form}>...</form>
  ```

Structure and rules
- Each component should expose a small set of stable class names (e.g. container, form, input, button).
- Don't style global elements in modules — keep global rules in `src/global.css` when necessary.
- Use CSS variables for theme colors in `:root` inside `src/global.css` for consistent colors.

State and modifiers
- Use boolean modifier classes in JS: `className={
    
    styles.button + (isPrimary ? ` ${styles.primary}` : '')
  }`
- Alternatively, use package `clsx` or a small helper to join classes.

Responsive layout
- Prefer CSS grid/flex with `minmax()` for galleries and lists.
- Keep breakpoints in `src/global.css` as variables if you reuse them often.

Accessibility notes
- Ensure focus styles for interactive elements: `:focus-visible { outline: 3px solid var(--accent); }`.
- Provide sufficient contrast for text on background colors.

Example component skeleton (SearchBox)
- `SearchBox.module.css` classes: .container, .form, .input, .button

```css
/* See component files for concrete examples */
```

Adding new components
- Create folder `src/components/MyComp/` with `MyComp.jsx` and `MyComp.module.css`.
- Export component as default.

Utilities
- Keep shared utility styles in `src/styles` if needed — but prefer composition and small class sets per component.

Maintaining consistency
- Run Prettier on CSS files if your Prettier config supports it (it does for .css in this repo).

