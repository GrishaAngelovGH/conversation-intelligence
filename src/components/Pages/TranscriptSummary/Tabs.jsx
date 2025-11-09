import React, { useState } from 'react';

import OverviewTab from './OverviewTab'
import ActionItemsTab from './ActionItemsTab'
import HighlightsTab from './HighlightsTab'

const TabsWrapper = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabsData = [
    { eventKey: 'overview', title: 'Overview', component: OverviewTab },
    { eventKey: 'action-items', title: 'Action Items', component: ActionItemsTab },
    { eventKey: 'highlights', title: 'Highlights', component: HighlightsTab },
  ];

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-3">
        {tabsData.map((tab) => (
          <button
            key={tab.eventKey}
            className={`py-2 px-4 text-sm font-medium text-center border-b-2 ${
              activeTab === tab.eventKey
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab(tab.eventKey)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabsData.map((tab) =>
          activeTab === tab.eventKey ? <tab.component key={tab.eventKey} /> : null
        )}
      </div>
    </div>
  );
};

export default TabsWrapper