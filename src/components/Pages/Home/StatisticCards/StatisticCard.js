import PropTypes from 'prop-types'

const StatisticCard = ({ chart, description }) => (
  <div className="row align-items-center">
    <div className="col-md-6">
      {chart}
    </div>
    <div className="col-md-6">
      {description}
    </div>
  </div>
)

StatisticCard.propTypes = {
  chart: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired
}

export default StatisticCard