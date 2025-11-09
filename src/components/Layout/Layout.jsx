const Layout = ({ header, body }) => (
  <div className='flex'>
    <div className='w-full'>
      <Layout.Header content={header} />
      <Layout.Body content={body} />
    </div>
  </div>
)

Layout.Header = ({ content }) => (
  <div className='flex'>
    <div className='w-full'>
      {content}
    </div>
  </div>
)

Layout.Body = ({ content }) => (
  <div className='flex'>
    <div className='w-full'>
      {content}
    </div>
  </div>
)

export default Layout