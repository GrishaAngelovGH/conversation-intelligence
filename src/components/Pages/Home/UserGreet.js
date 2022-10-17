import PropTypes from 'prop-types'

const UserGreet = ({ username }) => (
  <h3 className="fw-bold">Good morning, {username}</h3>
)

UserGreet.propTypes = {
  username: PropTypes.string.isRequired
}

export default UserGreet