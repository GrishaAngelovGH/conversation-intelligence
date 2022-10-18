import { render } from '@testing-library/react'

import Transcript, { TranscriptRow } from './Transcript'

test('should render component', () => {
  const container = render(<Transcript />)

  expect(container).toMatchSnapshot()
})

test('should render TranscriptRow', () => {
  const transcript = { attendee: { shortName: 'JS', fullName: 'James Smith' }, duration: '00:10', content: (<div>Good morning, everyone.</div>) }

  const container = render(<TranscriptRow attendee={transcript.attendee} duration={transcript.duration} content={transcript.content} />)

  expect(container).toMatchSnapshot()
})