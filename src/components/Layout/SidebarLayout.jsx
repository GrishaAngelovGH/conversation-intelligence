import { Link } from 'react-router-dom'
import { Sidebar, Menu } from 'react-pro-sidebar'

const SidebarLayout = ({ children }) => (
  <div className='flex'>
    <div className='w-[210px]'> {/* col-md-2 with fixed width */}
      <Sidebar width='210px'>
        <Menu>
          <Link to='/' className='block border mt-1 ml-1 p-2 no-underline bg-transparent text-blue-600 rounded'>
            <i className='bi bi-house-door'></i> <span className='font-bold'>Home</span>
          </Link>
          <Link to='/transcript-summary' className='block border ml-1 p-2 no-underline bg-transparent text-blue-600 rounded'>
            <i className='bi bi-card-list'></i> <span className='font-bold'>Transcript Summary</span>
          </Link>
          <Link to='/seller-details' className='block border ml-1 p-2 no-underline bg-transparent text-blue-600 rounded'>
            <i className='bi bi-person'></i> <span className='font-bold'>Seller Details</span>
          </Link>
        </Menu>
      </Sidebar>
    </div>
    <div className='flex-1'> {/* col-md-10, taking remaining space */}
      {
        children
      }
    </div>
  </div>
)

export default SidebarLayout