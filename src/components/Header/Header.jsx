import Avatar from './Avatar'
import InputGroup from './InputGroup'

const Header = () => {
  return (
    <header className='flex bg-blue-500 p-2 justify-between items-center'>
      <div className='w-1/12 md:w-1/12'>
        <button aria-label="Menu">
          <i className='bi bi-grid-3x3-gap text-white text-3xl'></i>
        </button>
      </div>

      <div className='w-5/12 md:w-4/12'>
        <InputGroup />
      </div>

      <div className='w-3/12 md:w-1/12 flex items-center'>
        <button aria-label="Settings">
          <i className='bi bi-gear text-white text-3xl'></i>
        </button>
        <Avatar />
      </div>
    </header>
  )
}

export default Header