export default function CurrencySelector({ currency, setCurrency }) {
    return (
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
      </select>
    )
  }
  