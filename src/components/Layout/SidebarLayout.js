import PropTypes from 'prop-types'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

const SidebarLayout = ({ children }) => (
  <div className="row g-0">
    <div className="col-md-2">
      <Sidebar width='210px'>
        <Menu>
          <MenuItem href='/' prefix={<span>Home</span>} icon={<i className="bi bi-house-door"></i>} />
        </Menu>
      </Sidebar>
    </div>
    <div className="col-md-10">
      {
        children
      }
    </div>
  </div>
)

SidebarLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default SidebarLayout