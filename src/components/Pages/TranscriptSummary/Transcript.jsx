import Attendee from 'components/Pages/common/Attendee'

export const TranscriptRow = ({ attendee, duration, content }) => (
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
          <div className="text-gray-800 leading-relaxed">{content}</div>
        </div>
      </div>
    </div>
  </div >
)

const Transcript = () => {
  const transcript = [
    { id: 1, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:05', content: (<div>Good morning, everyone. Thanks for joining today&apos;s call. I hope you all had a productive week.</div>) },
    { id: 2, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:15', content: (<div>Hi, <span className="font-bold">Madison</span>! How are you doing today? I wanted to quickly touch base on the client proposal.</div>) },
    { id: 3, attendee: { shortName: 'MB', fullName: 'Madison Butler', color: 'bg-green-200' }, duration: '00:25', content: (<div>Very good, thanks, <span className="font-bold">James</span>! I&apos;m doing well. The client proposal is almost ready, just finalizing a few figures.</div>) },
    { id: 4, attendee: { shortName: 'MB', fullName: 'Madison Butler', color: 'bg-green-200' }, duration: '00:40', content: (<div>Oh, before I forget, can you please send me the <span className="font-bold">quote</span> we discussed <span className="font-bold">yesterday</span> for Project Alpha? I need it for the final budget review this afternoon.</div>) },
    { id: 5, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:55', content: (<div>Sure, <span className="font-bold">Madison</span>. I will send you an email with the <span className="font-bold">quote</span> right after this meeting. I&apos;ll also attach the revised terms of service for their review.</div>) },
    { id: 6, attendee: { shortName: 'IG', fullName: 'Isabel Garcia', color: 'bg-purple-200' }, duration: '01:10', content: (<div>Speaking of Project Alpha, I&apos;ve noticed a slight delay in the asset delivery. Is there anything I can do to help expedite that process?</div>) },
    { id: 7, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '01:25', content: (<div>Thanks for bringing that up, <span className="font-bold">Isabel</span>. I&apos;ll follow up with the creative team immediately. We should be back on track by end of day <span className="font-bold">today</span>.</div>) },
    { id: 8, attendee: { shortName: 'MB', fullName: 'Madison Butler', color: 'bg-green-200' }, duration: '01:40', content: (<div>Perfect, that sounds good. <span className="font-bold">James</span>, regarding the new marketing campaign, have you had a chance to review the initial drafts?</div>) },
    { id: 9, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '01:55', content: (<div>Yes, I did. Overall, they look promising. I have a few minor comments on the ad copy, which I&apos;ll send over in a separate email.</div>), isHighlighted: false },
    { id: 10, attendee: { shortName: 'IG', fullName: 'Isabel Garcia', color: 'bg-purple-200' }, duration: '02:10', content: (<div>Great. I&apos;ll look out for those comments. Just a reminder that the deadline for feedback is tomorrow.</div>) },
  ]

  return (
    <div className="flex p-3">
      <div className="w-full">
        <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">Transcript</h3>
        <div className="space-y-2">
          {transcript.map((v) => (
            <TranscriptRow
              key={v.id}
              attendee={v.attendee}
              duration={v.duration}
              content={v.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transcript