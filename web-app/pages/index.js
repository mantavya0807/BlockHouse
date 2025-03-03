import { useState } from 'react'
import useCryptoPrices from '../hooks/useCryptoPrices'
import CryptoTable from '../components/CryptoTable'
import SearchBar from '../components/SearchBar'
import CurrencySelector from '../components/CurrencySelector'
import DarkModeToggle from '../components/DarkModeToggle'
import Loader from '../components/Loader'

export default function Home() {
  const [currency, setCurrency] = useState('usd') // 'usd' or 'eur'
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState({ column: 'name', order: 'asc' })

  const { data, isLoading, isError, refetch } = useCryptoPrices(currency)

  // Filtering by name, symbol, or id
  const filteredData = data?.filter((coin) => {
    const term = searchTerm.toLowerCase()
    return (
      coin.name.toLowerCase().includes(term) ||
      coin.symbol.toLowerCase().includes(term) ||
      coin.id.toLowerCase().includes(term)
    )
  })

  // Sorting
  const sortedData = (() => {
    if (!filteredData) return []
    const sorted = [...filteredData].sort((a, b) => {
      let aValue = a[sortConfig.column]
      let bValue = b[sortConfig.column]
      if (typeof aValue === 'string') {
        return sortConfig.order === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      } else {
        return sortConfig.order === 'asc' ? aValue - bValue : bValue - aValue
      }
    })
    return sorted
  })()

  // Since API now fetches exactly 5 coins, no slicing is needed:
  const displayedData = sortedData

  // Update sort configuration when a header is clicked
  const handleSort = (column) => {
    setSortConfig((prev) => {
      if (prev.column === column) {
        return { column, order: prev.order === 'asc' ? 'desc' : 'asc' }
      } else {
        return { column, order: 'asc' }
      }
    })
  }

  // Export table as CSV (unchanged)
  const exportCSV = () => {
    if (!displayedData || displayedData.length === 0) return

    const headers = ["Name", "Symbol", "Price", "24h Change", "Market Cap", "24h Volume"]
    const rows = displayedData.map(coin => [
      coin.name,
      coin.symbol,
      coin.current_price,
      coin.price_change_percentage_24h,
      coin.market_cap,
      coin.total_volume,
    ])

    let csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "crypto_data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-4">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded shadow p-6 relative">
        <div className="absolute top-4 right-4">
          <DarkModeToggle />
        </div>

        <h1 className="text-2xl font-bold mb-4 dark:text-gray-100">
          Crypto Price Tracker
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CurrencySelector currency={currency} setCurrency={setCurrency} />
          <button
            onClick={refetch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Refresh
          </button>
          <button
            onClick={exportCSV}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Export Table
          </button>
        </div>

        {isLoading && <Loader />}
        {isError && <p className="text-center py-4 text-red-500">Error fetching data</p>}
        {!isLoading && !isError && (
          <CryptoTable
            data={displayedData}
            currency={currency}
            onSort={handleSort}
            sortConfig={sortConfig}
          />
        )}
      </div>
    </div>
  )
}
