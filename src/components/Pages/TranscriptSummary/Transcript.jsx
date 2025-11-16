import Attendee from 'components/Pages/common/Attendee'

export const TranscriptRow = ({ attendee, duration, content }) => (
  <div className="flex border rounded mt-3 p-1 bg-gray-100">
    <div className="w-full">
      <div className="flex">
        <div className="w-full">
          <Attendee shortName={attendee.shortName} fullName={attendee.fullName} />

          <div className="flex mt-1 items-center">
            <div className="md:w-2/12">
              {duration}
            </div>
            <div className="md:w-10/12">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
)

const Transcript = () => {
  const transcript = [
    { id: 1, attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:10', content: (<div>Good morning, everyone.</div>) },
    { id: 2, attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:15', content: (<div>Hi, <span className="font-bold">Madison</span>! How are you?</div>) },
    { id: 3, attendee: { shortName: 'MB', fullName: 'Madison Butler' }, duration: '00:05', content: (<div>Very good, thanks !</div>) },
    { id: 4, attendee: { shortName: 'MB', fullName: 'Madison Butler' }, duration: '00:17', content: (<div>Oh, before I forget, can you please send me the <span className="font-bold">quote</span> we discussed <span className="font-bold">yesterday</span>?</div>) },
    { id: 5, attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:04', content: (<div>Sure, I will send you an email with the <span className="font-bold">quote</span></div>) }
  ]

  return (
    <div className="flex p-3">
      <div className="w-full">
        <h3 className="text-center">Transcript</h3>
        {
          transcript.map(v => (
            <TranscriptRow key={v.id} attendee={v.attendee} duration={v.duration} content={v.content} />
          ))
        }
      </div>
    </div>
  )
}

export default Transcript