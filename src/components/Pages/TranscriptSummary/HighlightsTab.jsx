const HighlightsTab = () => (
  <div className="flex">
    <div className="w-full">
      <h4>Keywords Mentioned</h4>
      <div className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">quote (2)</div>

      <h4 className="mt-3">People</h4>
      <div className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">John (1)</div>
      <div className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded-full ml-3">Peter (1)</div>

      <h4 className="mt-3">Times</h4>
      <div className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">yesterday (1)</div>
      <div className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded-full ml-3">today (2)</div>
    </div>
  </div>
)

export default HighlightsTab