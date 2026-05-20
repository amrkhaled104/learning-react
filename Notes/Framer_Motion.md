
## 1. Introduction
Framer Motion is a production-ready motion library for React. It makes creating animations simple, declarative, and clean.

---

## 2. The Core: `motion` Component
To animate any HTML element, just prefix it with `motion.` (e.g., `<motion.div>`, `<motion.button>`).

### Basic Properties (The Big Three)
* **`initial`**: The starting state of the element before it renders.
* **`animate`**: The target state of the element (where it animates to).
* **`transition`**: Defines *how* the animation happens (duration, ease, delay, type).

### Example:
```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
  Hello Framer!
</motion.div>
````

## 3. Variants (Clean Code & Organization) 

**Variants** are objects where you bundle your animation properties together. They help keep your JSX clean and enable advanced animation orchestrations.

### Why use Variants?

1. Keeps code organized (Separation of Concerns).

2. Allows reusability across components.
3. Enables sub-animation timing (Orchestration).

### Example:

```JavaScript
// 1. Define the Variant Object (Outside the component)
const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

// 2. Pass it to the component
<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
/>
```

## 4. Gestures (Interactivity) 

Framer Motion provides powerful helpers for user interactions like hovering, clicking, and dragging.
- **`whileHover`**: Animation when mouse hovers over the element.
- **`whileTap`**: Animation when the element is clicked/tapped.
- **`drag`**: Enables dragging (`drag="x"` or `drag="y"` to restrict direction).    
- **`dragConstraints`**: Restricts the dragging area (e.g., `{ left: 0, right: 100 }`).
### Example:

```JavaScript
<motion.button
  whileHover={{ scale: 1.1, backgroundColor: "#333" }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
```

## 5. Animate Presence & Page Transitions 

By default, React removes components from the DOM instantly, meaning **`exit`** animations won't work. To fix this, wrap your components in `<AnimatePresence>`.

### The Routing Trick (React Router Fix)

> ⚠️ **Important Reminder:** React is smart and often updates a page instead of rebuilding it. To trigger animations on every single page change, you **MUST** provide a unique `key` using the current URL path.

### Example Setup:

```JavaScript
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> {/* mode="wait" finishes exit animation first */}
      <motion.div
        key={location.pathname} // 👈 Force remount on route change!
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.4 }}
      >
        {/* Your Page Component */}
      </motion.div>
    </AnimatePresence>
  );
}
```

## 6. Advanced Orchestration (Staggering) 

When using variants, an "instance" of state (like `visible`) flows from parent to children. You can delay or stagger children animations effortlessly.

```JavaScript
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // 👈 Animates children one after another (0.2s delay)
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```



```JavaScript
<motion.ul variants={listVariants} initial="hidden" animate="visible">
  <motion.li variants={itemVariants}>Item 1</motion.li>
  <motion.li variants={itemVariants}>Item 2</motion.li>
  <motion.li variants={itemVariants}>Item 3</motion.li>
</motion.ul>
```
