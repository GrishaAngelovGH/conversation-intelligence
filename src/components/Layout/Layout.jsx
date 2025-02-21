import PropTypes from 'prop-types'

const Layout = ({ header, body }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      <Layout.Header content={header} />
      <Layout.Body content={body} />
    </div>
  </div>
)

Layout.Header = ({ content }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      {content}
    </div>
  </div>
)

Layout.Body = ({ content }) => (
  <div className='row g-0'>
    <div className='col-md-12'>
      {content}
    </div>
  </div>
)

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired
}

Layout.Header.propTypes = {
  content: PropTypes.element.isRequired
}

Layout.Body.propTypes = {
  content: PropTypes.element.isRequired
}

export default Layout