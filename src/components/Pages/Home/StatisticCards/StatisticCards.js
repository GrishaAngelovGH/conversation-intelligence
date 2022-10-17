import TrackedKeywordsCard from './TrackedKeywordsCard'

const StatisticCards = () => (
  <div className="row mt-3">
    <div className="col-md-12">
      <h3 className="fw-bold">What are your customers talking about?</h3>
      <p>Understand what's happening on sales calls, so you can coachyour sellers better.</p>

      <div className="row border border-2 rounded shadow">
        <div className="col-md-12">
          <TrackedKeywordsCard />
        </div>
      </div>
    </div>
  </div>
)

export default StatisticCards