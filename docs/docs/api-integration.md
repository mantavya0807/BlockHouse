---
id: api-integration
title: API Integration Details
---

The Crypto Price Tracker fetches real-time data from the **CoinGecko API**, a popular and reliable service for cryptocurrency information.

---

## CoinGecko Endpoint

We use the `/coins/markets` endpoint to retrieve an array of cryptocurrency objects:

```
GET https://api.coingecko.com/api/v3/coins/markets
```

### Example Query Parameters
- **vs_currency**: Which fiat currency to compare against (e.g., `usd` or `eur`).
- **per_page**: Number of coins to fetch (5, in our case).
- **order**: Sort results by `market_cap_desc` or other criteria.
- **sparkline**: Whether to include sparkline data (we set it to false for simplicity).

The response includes fields like:
- `id`, `symbol`, `name`
- `current_price`
- `market_cap`
- `total_volume`
- `price_change_percentage_24h`
- `image` (logo URL)

---

## How We Fetch Data

1. **Axios**  
   We use [Axios](https://axios-http.com/) for HTTP requests. It simplifies error handling and provides a clean syntax for both GET and POST requests.

2. **React Query**  
   [React Query](https://react-query-v3.tanstack.com/) manages our server-state, providing:
   - **Caching**: Minimizes redundant network calls.
   - **Auto Refetch**: Keeps data up-to-date at intervals.
   - **Manual Refresh**: Allows the user to force an update anytime.

3. **Manual Refresh Button**  
   A “Refresh” button in the UI calls `refetch()` from React Query, letting users see updated prices on demand without waiting for the auto-refresh.

---

## Rate Limits & Errors

CoinGecko imposes rate limits on free-tier usage, so:
- We fetch only 5 coins.
- We set a **60-second** refetch interval to avoid hitting limits.

If the API call fails, React Query handles the error state, and the UI displays an error message. The user can then retry manually.

---

## Potential Extensions

- **Pagination**: Fetch more coins in multiple pages.
- **Charts**: Incorporate historical price data from additional CoinGecko endpoints.
- **Alerts or Notifications**: Notify users if a coin’s price crosses a certain threshold.
- **Different APIs**: Swap CoinGecko with other providers like CoinCap or CryptoCompare with minimal code changes, thanks to React Query’s modularity.

Check out our [State Management Explanation](./state-management.md) to learn how data flows within the app.
