import Avatar from 'components/Pages/common/Avatar'

const Attendee = ({ shortName, fullName, role, color }) => (
  <div className="flex flex-col items-center mt-1"> {/* Changed to flex-col and items-center */}
    <div className="mb-1"> {/* Added mb-1 for spacing below avatar */}
      <Avatar content={shortName} color={color} />
    </div>
    <div className="flex-grow flex flex-col items-center"> {/* Keep flex-col for name/role stacking, center items */}
      <h4 className="m-0 text-center">{fullName}</h4> {/* Centered text */}
      {role && <p className="text-sm text-gray-500 m-0 text-center">{role}</p>} {/* Centered text */}
    </div>
  </div>
)

export default Attendee