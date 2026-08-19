#  usePopcorn

A clean React app to search movies, view details, rate them, and track your watched list.

---

##  Key Concepts Learned

* **Async State Updates**: React updates state asynchronously. If a new state depends on the previous one, always use a callback function like `setCount(prev => prev + 1)`.
* **Derived State**: Avoid unnecessary state. If you can calculate a value directly from existing state or props (like list length or averages), just calculate it directly.
* **AbortController for API Fetching**: Always cancel pending API calls when query inputs change fast to prevent race conditions and outdated results.
* **Handling AbortError**: Ignore canceled requests in your `try/catch` block using `if (err.name !== "AbortError")` so the app doesn't trigger uncaught runtime errors.
* **Effect Cleanup**: Return a cleanup function inside `useEffect` to abort fetches or clean up event listeners when the component unmounts.
* **Component Composition**: Use the `children` prop to pass layout elements smoothly and avoid prop drilling.

---

##  Quick Start

```bash
# Install dependencies
npm install

# Run the app
npm start