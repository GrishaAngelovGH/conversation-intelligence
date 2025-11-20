import { useState } from 'react'

import Tabs from './Tabs'
import Transcript from './Transcript'

const TranscriptSummary = () => {
  const initialTranscript = [
    { id: 1, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:05', content: 'Good morning, everyone. Thanks for joining today\'s call. I hope you all had a productive week.' },
    { id: 2, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:15', content: 'Hi, Madison! How are you doing today? I wanted to quickly touch base on the client proposal.' },
    { id: 3, attendee: { shortName: 'MB', fullName: 'Madison Butler', color: 'bg-green-200' }, duration: '00:25', content: 'Very good, thanks, James! I\'m doing well. The client proposal is almost ready, just finalizing a few figures.' },
    { id: 4, attendee: { shortName: 'MB', fullName: 'Madison Butler', color: 'bg-green-200' }, duration: '00:40', content: 'Oh, before I forget, can you please send me the quote we discussed yesterday for Project Alpha? I need it for the final budget review this afternoon.' },
    { id: 5, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:55', content: 'Sure, Madison. I will send you an email with the quote right after this meeting. I\'ll also attach the revised terms of service for their review.' },
    { id: 6, attendee: { shortName: 'IG', fullName: 'Isabel Garcia', color: 'bg-purple-200' }, duration: '01:10', content: 'Speaking of Project Alpha, I\'ve noticed a slight delay in the asset delivery. Is there anything I can do to help expedite that process?' },
    { id: 7, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '01:25', content: 'Thanks for bringing that up, Isabel. I\'ll follow up with the creative team immediately. We should be back on track by end of day today.' },
    { id: 8, attendee: { shortName: 'MB', fullName: 'Madison Butler', color: 'bg-green-200' }, duration: '01:40', content: 'Perfect, that sounds good. James, regarding the new marketing campaign, have you had a chance to review the initial drafts?' },
    { id: 9, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '01:55', content: 'Yes, I did. Overall, they look promising. I have a few minor comments on the ad copy, which I\'ll send over in a separate email.' },
    { id: 10, attendee: { shortName: 'IG', fullName: 'Isabel Garcia', color: 'bg-purple-200' }, duration: '02:10', content: 'Great. I\'ll look out for those comments. Just a reminder that the deadline for feedback is tomorrow.' },
  ]

  const [keywords, setKeywords] = useState(['madison', 'james', 'quote', 'yesterday', 'isabel', 'today'])

  const handleAddKeyword = newKeyword => {
    setKeywords([...keywords, newKeyword])
  }

  const handleRemoveKeyword = keywordToRemove => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword !== keywordToRemove)
    )
  }

  return (
    <div className="flex mt-3 justify-center">
      <div className="md:w-5/12">
        <Tabs />
      </div>
      <div className="md:w-5/12">
        <Transcript
          keywords={keywords}
          onAddKeyword={handleAddKeyword}
          onRemoveKeyword={handleRemoveKeyword}
          initialTranscriptData={initialTranscript}
        />
      </div>
    </div>
  )
}

export default TranscriptSummary