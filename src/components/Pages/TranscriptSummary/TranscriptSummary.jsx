import Tabs from './Tabs'
import Transcript from './Transcript'

const TranscriptSummary = () => (
  <div className="flex mt-3 justify-center">
    <div className="md:w-5/12">
      <Tabs />
    </div>
    <div className="md:w-5/12">
      <Transcript />
    </div>
  </div>
)

export default TranscriptSummary