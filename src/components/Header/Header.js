import Avatar from './Avatar'
import InputGroup from './InputGroup'

const Header = () => {
  const style = { fontSize: 30 }

  return (
    <div className='row g-0 bg-primary p-2 justify-content-between align-items-center'>
      <div className='col-1 col-md-1'>
        <i className='bi bi-grid-3x3-gap text-white' style={style}></i>
      </div>

      <div className='col-5 col-md-4'>
        <InputGroup />
      </div>

      <div className='col-3 col-md-1 d-flex'>
        <i className='bi bi-gear text-white' style={style}></i>
        <Avatar />
      </div>
    </div>
  )
}

export default Header