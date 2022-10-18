import PropTypes from "prop-types"

import Attendee from "./Attendee"

const TranscriptRow = ({ attendee, duration, content }) => (
  <div className="row border rounded mt-3 p-1 bg-light">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12">
          <Attendee shortName={attendee.shortName} fullName={attendee.fullName} />

          <div className="row mt-1 align-items-center">
            <div className="col-md-2">
              {duration}
            </div>
            <div className="col-md-10">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
)

TranscriptRow.propTypes = {
  attendee: PropTypes.object.isRequired,
  duration: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired
}

const Transcript = () => {

  const transcript = [
    { id: 1, attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:10', content: (<div>Good morning, everyone.</div>) },
    { id: 2, attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:15', content: (<div>Hi, <span className="fw-bold">Madison</span>! How are you?</div>) },
    { id: 3, attendee: { shortName: 'MB', fullName: 'Madison Butler' }, duration: '00:05', content: (<div>Very good, thanks !</div>) },
    { id: 4, attendee: { shortName: 'MB', fullName: 'Madison Butler' }, duration: '00:17', content: (<div>Oh, before I forget, can you please send me the <span className="fw-bold">quote</span> we discussed <span className="fw-bold">yesterday</span>?</div>) },
    { id: 5, attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:04', content: (<div>Sure, I will send you an email with the <span className="fw-bold">quote</span></div>) }
  ]

  return (
    <div className="row p-3">
      <div className="col-md-12">
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