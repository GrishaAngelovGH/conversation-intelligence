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

export default Layout