import { Link } from 'react-router-dom'
import { Sidebar, Menu } from 'react-pro-sidebar'

const SidebarLayout = ({ children }) => (
  <div className='row g-0'>
    <div className='col-md-2'>
      <Sidebar width='210px'>
        <Menu>
          <Link to='/' className='d-block border mt-1 ms-1 p-2 text-decoration-none bg-transparent text-primary rounded'>
            <i className='bi bi-house-door'></i> <span className='fw-bold'>Home</span>
          </Link>
          <Link to='/transcript-summary' className='d-block border ms-1 p-2 text-decoration-none bg-transparent text-primary rounded'>
            <i className='bi bi-card-list'></i> <span className='fw-bold'>Transcript Summary</span>
          </Link>
          <Link to='/seller-details' className='d-block border ms-1 p-2 text-decoration-none bg-transparent text-primary rounded'>
            <i className='bi bi-person'></i> <span className='fw-bold'>Seller Details</span>
          </Link>
        </Menu>
      </Sidebar>
    </div>
    <div className='col-md-10'>
      {
        children
      }
    </div>
  </div>
)

export default SidebarLayout