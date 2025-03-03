---
id: challenges-solutions
title: Challenges & Solutions
---

Every project encounters hurdles. Here are some challenges we faced while building the Crypto Price Tracker and how we solved them.

---

## 1. Handling API Rate Limits
**Challenge**: Public APIs like CoinGecko may have rate limits that block or throttle requests if you fetch too often.  
**Solution**:  
- **Caching**: React Query caches responses, reducing the need for repetitive calls.  
- **Refetch Intervals**: We chose a modest 60-second refresh interval to stay under typical rate limits.

---

## 2. Search & Filtering
**Challenge**: Efficiently searching among cryptocurrencies by name, symbol, or ID.  
**Solution**:  
- We filter the client-side array of coins each time the user types.  
- This is fast enough for a small dataset (5 coins).  
- For larger datasets, we might consider server-side filtering or pagination.

---

## 3. Responsive UI
**Challenge**: Ensuring the dashboard and documentation look great on both desktop and mobile devices.  
**Solution**:  
- Used **Tailwind CSS** for a mobile-first design approach.  
- Kept the layout simple and minimal, with a table that’s horizontally scrollable on smaller screens.

---

## 4. Documentation Setup
**Challenge**: Hosting documentation that’s easy to read and maintain.  
**Solution**:  
- **Docusaurus**: Offers an out-of-the-box docs structure, versioning, and local search.  
- Separated content into logical sections: Setup, API, State Management, etc.

---

## 5. Time Constraints
**Challenge**: Building both the Next.js app and documentation in a short timeframe.  
**Solution**:  
- Focused on core requirements first: a functional dashboard with 5 coins and a minimal but clear doc structure.  
- Added extra features (like manual refresh) only after the essentials were in place.

---

These challenges pushed us to pick the right tools and keep our architecture straightforward. We hope this insight helps anyone extending or maintaining the Crypto Price Tracker in the future.
