const HistoryRange = ({ range, onRangeChange }) => {
  const ranges = [
    { key: '7d', label: 'Last 7 days' },
    { key: '30d', label: 'Last 30 days' },
    { key: '90d', label: 'Last 90 days' }
  ]

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {ranges.map((r, i) => (
        <button
          key={r.key}
          type="button"
          onClick={() => onRangeChange(r.key)}
          className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-blue-500 ${
            range === r.key
              ? 'bg-blue-700 text-white hover:bg-blue-800 focus:bg-blue-800 focus:text-white dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800 dark:focus:bg-blue-800 dark:focus:text-white'
              : 'bg-white text-blue-700 hover:bg-gray-100 focus:text-blue-700 dark:bg-gray-700 dark:text-white dark:focus:text-white'
          } ${i === 0 ? 'rounded-l-md' : ''} ${i === ranges.length - 1 ? 'rounded-r-md' : ''}`}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}

export default HistoryRange