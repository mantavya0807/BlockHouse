export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search by name, symbol, or id..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )
  }
  