export default function Loader() {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-500 font-medium">Loading data, please wait...</p>
      </div>
    )
  }
  