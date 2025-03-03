---
id: state-management
title: State Management Explanation
---

This project manages data flow and state primarily through **React Query**, a library focused on simplifying server-state management. Here’s why we chose it and how it works in practice.

---

## Why React Query?

1. **Built-In Caching**  
   Once data is fetched, React Query caches it. If a user revisits the page or the same data is needed again, React Query serves it from the cache, improving performance and reducing API calls.

2. **Automatic Refetch**  
   React Query can automatically refetch data at specified intervals, ensuring the user always sees up-to-date prices.

3. **Declarative & Simple**  
   It abstracts away complexities of manual data fetching, loading states, and error handling. You can focus on building UI features instead of managing low-level state logic.

---

## How It Works Here

1. **Custom Hook**  
   We created a hook, e.g. `useCryptoPrices.js`, which uses `useQuery` from React Query. This hook:
   - Specifies the API endpoint to fetch data
   - Defines a `refetchInterval` for auto-updates
   - Handles success and error states

2. **UI Integration**  
   In our main dashboard component (`pages/index.js`), we call `useCryptoPrices()` to get the latest data, along with loading/error flags. We then render the table of crypto prices accordingly.

3. **Manual Refresh**  
   The “Refresh” button calls `refetch()` from React Query, letting users fetch fresh data on-demand.

---

## Alternative Approaches
While React Query is excellent for server-state management, other solutions like **Zustand**, **Redux Toolkit**, or even **Context API** can be used. We chose React Query because it’s specifically optimized for data fetching and caching, which is exactly what this project needs.

---
