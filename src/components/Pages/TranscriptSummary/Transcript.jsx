import { useState } from 'react'

import Attendee from 'components/Pages/common/Attendee'
import KeywordPills from './KeywordPills'

import useHighlight from 'hooks/useHighlight'

export const TranscriptRow = ({ attendee, duration, content, keywords }) => {
  const highlightedContent = useHighlight(content, keywords)

  return (
    <div
      className={'flex border rounded mt-3 p-3 bg-white'}
    >
      <div className="w-full">
        <div className="flex items-start space-x-4">
          <div className="shrink-0">
            <Attendee shortName={attendee.shortName} fullName={attendee.fullName} color={attendee.color} />
          </div>
          <div className="grow">
            <div className="font-semibold text-gray-700 mb-1">{duration}</div>
            <div className="text-gray-800 leading-relaxed">{highlightedContent}</div>
          </div>
        </div>
      </div>
    </div >
  )
}

const Transcript = ({ keywords, onAddKeyword, onRemoveKeyword, initialTranscriptData }) => {
  const [transcript] = useState(initialTranscriptData)


  return (
    <div className="flex p-3">
      <div className="w-full">
        <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">Transcript</h3>
        <KeywordPills
          keywords={keywords}
          onAddKeyword={onAddKeyword}
          onRemoveKeyword={onRemoveKeyword}
        />
        <div className="space-y-2">
          {transcript.map((v) => (
            <TranscriptRow
              key={v.id}
              attendee={v.attendee}
              duration={v.duration}
              content={v.content}
              keywords={keywords}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transcript