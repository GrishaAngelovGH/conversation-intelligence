import { useState } from 'react'

const KeywordPills = ({ keywords, onAddKeyword, onRemoveKeyword }) => {
  const [newKeyword, setNewKeyword] = useState('')

  const handleAdd = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim().toLowerCase())) {
      onAddKeyword(newKeyword.trim().toLowerCase())
      setNewKeyword('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
        Keywords
      </h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((keyword, index) => (
          <span key={index} className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {keyword}
            <button
              type="button"
              onClick={() => onRemoveKeyword(keyword)}
              className="ml-2 inline-flex items-center p-0.5 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
              aria-label={`Remove ${keyword}`}
            >
              <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Remove pill</span>
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-1 sm:gap-2">
        <input
          type="text"
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAdd();
            }
          }}
          placeholder="Add new keyword"
          className="grow p-1 sm:p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-2 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default KeywordPills