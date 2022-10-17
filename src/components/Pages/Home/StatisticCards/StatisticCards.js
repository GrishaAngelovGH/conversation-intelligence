import TrackedKeywordsCard from './TrackedKeywordsCard'
import SentimentCard from './SentimentCard'

const StatisticCards = () => (
  <div className="row mt-3">
    <div className="col-md-12">
      <h3 className="fw-bold">What are your customers talking about?</h3>
      <p>Understand what's happening on sales calls, so you can coachyour sellers better.</p>

      <div className="row mt-3 border border-2 rounded shadow">
        <div className="col-md-12">
          <TrackedKeywordsCard />
        </div>
      </div>

      <div className="row mt-3 border border-2 rounded shadow">
        <div className="col-md-12">
          <SentimentCard />
        </div>
      </div>
    </div>
  </div>
)

export default StatisticCards