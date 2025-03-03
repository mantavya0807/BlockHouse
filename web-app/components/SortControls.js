export default function SortControls({ sortBy, setSortBy }) {
    return (
      <div className="flex items-center mb-4">
        <label className="mr-2 font-medium dark:text-gray-100">Sort by:</label>
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 px-4 py-2 rounded border ${
            sortBy === 'name'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('price')}
          className={`px-4 py-2 rounded border ${
            sortBy === 'price'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
          }`}
        >
          Price
        </button>
      </div>
    )
  }
  