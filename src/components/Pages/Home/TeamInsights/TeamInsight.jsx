import { useState } from 'react'

const TeamInsight = ({ insight }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="flex items-center py-5 px-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-full md:w-3/12 flex items-center">
          <img src={insight.avatar} alt={insight.name} className="w-10 h-10 rounded-full mr-3" />
          <span className="font-semibold text-gray-800">{insight.name}</span>
        </div>
        <div className="w-full md:w-3/12 text-gray-600">
          {insight.metric}
        </div>
        <div className="w-full md:w-3/12 font-bold text-gray-800">
          {insight.value}
        </div>
        <div className="w-full md:w-3/12 text-gray-500 text-sm">
          {insight.comparison}
        </div>
        <div className="w-full md:w-1/12 flex justify-end">
          <button
            aria-label="Toggle details"
            onClick={handleToggle}
            className="text-gray-400 hover:text-blue-500 p-2 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>
      </div>

      <div
        data-testid="details-panel"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-250' : 'max-h-0'
          }`}
      >
        <div className="bg-gray-50 p-4 text-left text-gray-600">
          <p>{insight.details}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamInsight