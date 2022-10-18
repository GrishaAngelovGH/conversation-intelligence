import PropTypes from 'prop-types'

export const EmailSuggestion = ({ content }) => (
  <div className="row mt-3 border rounded p-3">
    <div className="col-md-12">
      <i className="bi bi-envelope"></i>
      <span className="fw-bold ms-3">Email Suggestion</span>
      <h5>{content}</h5>
    </div>
  </div>
)

EmailSuggestion.propTypes = {
  content: PropTypes.string.isRequired
}

const ActionItemsTab = () => (
  <div className="row">
    <div className="col-md-12">
      <EmailSuggestion content='Madison Butler to send email about "the quote"' />
      <EmailSuggestion content='Madison Butler to send email about "presentation"' />
    </div>
  </div>
)

export default ActionItemsTab