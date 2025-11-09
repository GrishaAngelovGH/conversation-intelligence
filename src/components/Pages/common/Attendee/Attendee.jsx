import Avatar from 'components/Pages/common/Avatar'

const Attendee = ({ shortName, fullName }) => (
  <div className='flex mt-1 items-center'>
    <div className='md:w-2/12'>
      <Avatar content={shortName} />
    </div>
    <div className='md:w-6/12'>
      <h4 className='m-0'>{fullName}</h4>
    </div>
  </div>
)

export default Attendee