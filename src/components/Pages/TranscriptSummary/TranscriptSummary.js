import Tabs from "./Tabs"
import Transcript from "./Transcript"

const TranscriptSummary = () => (
  <div className="row g-0 mt-3 justify-content-center">
    <div className="col-md-5">
      <Tabs />
    </div>
    <div className="col-md-5">
      <Transcript />
    </div>
  </div>
)

export default TranscriptSummary