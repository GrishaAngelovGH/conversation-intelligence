import { useState } from 'react'

import Avatar from './Avatar'
import Modal from 'components/Modal/Modal'

const Header = ({ onToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className='flex bg-blue-500 p-2 justify-between items-center'>
      <div className='w-1/12 md:w-1/12'>
        <button aria-label="Menu" className="block md:hidden" onClick={onToggle}>
          <i className='bi bi-grid-3x3-gap text-white text-3xl'></i>
        </button>
      </div>

      <div className='w-3/12 md:w-1/12 flex items-center gap-4 m-2'>
        <button aria-label="Information" className='cursor-pointer' onClick={() => setIsModalOpen(true)}>
          <i className='bi bi-info-circle text-white text-3xl'></i>
        </button>
        <Avatar />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What is Conversation Intelligence?"
      >
        <p className="text-gray-700 text-left">
          A Conversation Intelligence System is a platform that uses AI to analyze customer and sales conversations (e.g., phone calls, video meetings, emails) to extract valuable insights. It helps businesses understand what&apos;s happening in their customer interactions, identify key trends, track competitor mentions, assess sentiment, and provide coaching opportunities for sales teams. By centralizing and analyzing communication data, it aims to improve sales performance, customer satisfaction, and overall business strategy.
        </p>
      </Modal>
    </header>
  )
}

export default Header