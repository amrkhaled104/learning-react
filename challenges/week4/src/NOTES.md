# Accessibility Playground Notes

## 1. Custom Implementation vs shadcn/ui (Dialog & Tabs)
- **Focus Management & Keyboard Traps:** 
  - In our custom components, we manually implemented `Focus Trap` using `useEffect` and event listeners for `Tab`, `Shift + Tab`, and `Escape`.
  - In **shadcn/ui**, focus management and accessibility are abstracted away via **Radix UI** primitives in the background, handling screen reader announcements and focus returning automatically.
- **ARIA Attributes:**
  - In our custom code, we explicitly attached attributes like `role="dialog"`, `aria-modal="true"`, `role="tab"`, and `aria-selected` to primitive HTML elements.
  - In `shadcn/ui`, these attributes are baked directly into the compound components (`DialogContent`, `TabsTrigger`, etc.), ensuring compliance with W3C APG patterns without boilerplate code in our pages.