import { render } from '@testing-library/react'

import Transcript, { TranscriptRow } from './Transcript'

test('should render Transcript component', () => {
  const view = render(<Transcript />)

  expect(view).toMatchSnapshot()
})

test('should render TranscriptRow component', () => {
  const transcript = {
    attendee: { shortName: 'JS', fullName: 'James Smith' },
    duration: '00:10',
    content: (<div>Good morning, everyone.</div>)
  }

  const view = render(
    <TranscriptRow
      attendee={transcript.attendee}
      duration={transcript.duration}
      content={transcript.content}
    />
  )

  expect(view).toMatchSnapshot()
})