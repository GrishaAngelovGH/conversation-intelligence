import PropTypes from "prop-types"

const TeamInsight = ({ content, statistic }) => (
  <div className="row mt-3 mb-3 p-3 bg-light border rounded">
    <div className="col-md-12">

      <div className="row">
        <div className="col-md-12">
          {content}
        </div>
      </div>

      <div className="row mt-3 text-muted">
        <div className="col-md-12">
          {statistic}
        </div>
      </div>
    </div>
  </div>
)

TeamInsight.propTypes = {
  content: PropTypes.element.isRequired,
  statistic: PropTypes.element.isRequired
}

export default TeamInsight