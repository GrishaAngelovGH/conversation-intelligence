import Avatar from 'components/Pages/common/Avatar'

const Attendee = ({ shortName, fullName }) => (
  <div className='row mt-1 align-items-center'>
    <div className='col-md-2'>
      <Avatar content={shortName} />
    </div>
    <div className='col-md-6'>
      <h4 className='m-0'>{fullName}</h4>
    </div>
  </div>
)

export default Attendee