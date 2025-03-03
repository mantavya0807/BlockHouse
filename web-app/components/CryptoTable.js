export default function CryptoTable({ data, currency, onSort, sortConfig }) {
    // Helper: display sort icon if sorted by this column
    const getSortIcon = (column) => {
      if (sortConfig.column === column) {
        return sortConfig.order === 'asc' ? ' ▲' : ' ▼'
      }
      return ''
    }
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th onClick={() => onSort('name')} className="px-4 py-2 text-left cursor-pointer">
                Name{getSortIcon('name')}
              </th>
              <th onClick={() => onSort('symbol')} className="px-4 py-2 text-left cursor-pointer">
                Symbol{getSortIcon('symbol')}
              </th>
              <th onClick={() => onSort('current_price')} className="px-4 py-2 text-left cursor-pointer">
                Price ({currency.toUpperCase()}){getSortIcon('current_price')}
              </th>
              <th onClick={() => onSort('price_change_percentage_24h')} className="px-4 py-2 text-left cursor-pointer">
                24h Change{getSortIcon('price_change_percentage_24h')}
              </th>
              <th onClick={() => onSort('market_cap')} className="px-4 py-2 text-left cursor-pointer">
                Market Cap{getSortIcon('market_cap')}
              </th>
              <th onClick={() => onSort('total_volume')} className="px-4 py-2 text-left cursor-pointer">
                24h Volume{getSortIcon('total_volume')}
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((coin) => {
              const priceChangeClass =
                coin.price_change_percentage_24h > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              return (
                <tr
                  key={coin.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                    <span>{coin.name}</span>
                  </td>
                  <td className="px-4 py-2 uppercase">{coin.symbol}</td>
                  <td className="px-4 py-2">
                    {coin.current_price.toLocaleString(undefined, {
                      style: 'currency',
                      currency: currency.toUpperCase(),
                    })}
                  </td>
                  <td className={`px-4 py-2 ${priceChangeClass}`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="px-4 py-2">
                    {coin.market_cap.toLocaleString(undefined, {
                      style: 'currency',
                      currency: currency.toUpperCase(),
                    })}
                  </td>
                  <td className="px-4 py-2">
                    {coin.total_volume.toLocaleString(undefined, {
                      style: 'currency',
                      currency: currency.toUpperCase(),
                    })}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  