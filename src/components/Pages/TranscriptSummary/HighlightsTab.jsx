const HighlightsTab = () => (
  <div className="flex">
    <div className="w-full">
      <h4>Keywords Mentioned</h4>
      <div className="flex flex-wrap gap-2">
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-white bg-blue-600 rounded-full hover:bg-blue-700 cursor-pointer">quote (2)</div>
      </div>

      <h4 className="mt-3">People</h4>
      <div className="flex flex-wrap gap-2">
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-white bg-green-600 rounded-full hover:bg-green-700 cursor-pointer">John (1)</div>
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-white bg-green-600 rounded-full hover:bg-green-700 cursor-pointer">Peter (1)</div>
      </div>

      <h4 className="mt-3">Times</h4>
      <div className="flex flex-wrap gap-2">
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-white bg-purple-600 rounded-full hover:bg-purple-700 cursor-pointer">yesterday (1)</div>
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-bold leading-none text-white bg-purple-600 rounded-full hover:bg-purple-700 cursor-pointer">today (2)</div>
      </div>
    </div>
  </div>
)

export default HighlightsTab