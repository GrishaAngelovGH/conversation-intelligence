const Layout = ({ header, body }) => (
  <div className='flex flex-col h-screen'>
    {header}
    <div className='flex-1 overflow-hidden'>
      {body}
    </div>
  </div>
)

export default Layout