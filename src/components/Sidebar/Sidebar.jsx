import { NavLink } from 'react-router-dom'

const Sidebar = ({ isToggled, onToggle }) => {
  const linkClassName = ({ isActive }) =>
    `block border mt-1 ml-1 mb-1 p-2 no-underline rounded ${isActive ? 'bg-blue-800 text-white' : 'bg-transparent text-blue-800'
    }`

  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-3xl bg-opacity-50 z-5 md:hidden ${isToggled ? 'block' : 'hidden'}`}
        onClick={onToggle}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-5 bg-gray-200 text-gray-800 duration-300 ease-in-out
                    ${isToggled ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
                    md:w-64 md:static md:block`}
      >
        <nav className="flex flex-col p-2">
          <NavLink to="/" onClick={onToggle} className={linkClassName}>
            <i className="bi bi-house-door"></i> <span className="font-bold">Home</span>
          </NavLink>
          <NavLink to="/transcript-summary" onClick={onToggle} className={linkClassName}>
            <i className="bi bi-card-list"></i> <span className="font-bold">Transcript Summary</span>
          </NavLink>
          <NavLink to="/seller-details" onClick={onToggle} className={linkClassName}>
            <i className="bi bi-person"></i> <span className="font-bold">Seller Details</span>
          </NavLink>
          <NavLink to="/coaching-dashboard" onClick={onToggle} className={linkClassName}>
            <i className="bi bi-clipboard-check"></i> <span className="font-bold">Coaching Dashboard</span>
          </NavLink>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
