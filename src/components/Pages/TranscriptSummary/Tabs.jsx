import { useState } from 'react'

import OverviewTab from './OverviewTab'
import ActionItemsTab from './ActionItemsTab'
import HighlightsTab from './HighlightsTab'

const TabsWrapper = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabsData = [
    { eventKey: 'overview', title: 'Overview', component: OverviewTab },
    { eventKey: 'action-items', title: 'Action Items', component: ActionItemsTab },
    { eventKey: 'highlights', title: 'Highlights', component: HighlightsTab },
  ]

  return (
    <div className="border-b-2 border-gray-200 mb-3">
      <div className="flex flex-wrap">
        {tabsData.map((tab) => (
          <button
            key={tab.eventKey}
            className={`py-3 px-2 text-center rounded-t-lg transition-colors duration-200 ease-in-out
              ${activeTab === tab.eventKey
                ? 'font-bold border-b-2 border-blue-700 text-blue-700 bg-white shadow-sm'
                : 'font-medium border-b-2 border-transparent text-gray-600 hover:text-blue-700 hover:border-blue-400 hover:bg-gray-50'
              }`}
            onClick={() => setActiveTab(tab.eventKey)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabsData.map((tab) =>
          activeTab === tab.eventKey ? (
            <div key={tab.eventKey} className="bg-white p-4 rounded-b-lg shadow-md border border-gray-200 border-t-0">
              <tab.component />
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default TabsWrapper