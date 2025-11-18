import Attendee from 'components/Pages/common/Attendee'

const OverviewTab = () => {
  const relatedRecords = [
    { id: 1, title: 'Q4 Sales Review - 2023-12-15', type: 'Meeting' },
    { id: 2, title: 'Customer Onboarding - Project Alpha', type: 'Project' },
    { id: 3, title: 'Support Ticket #12345 - Billing Inquiry', type: 'Ticket' },
  ]

  const tags = ['Sales', 'Q4', 'Product-X', 'Follow-up']

  const attendees = [
    { id: 1, shortName: 'JS', fullName: 'James Smith', role: 'Sales Manager' },
    { id: 2, shortName: 'IG', fullName: 'Isabel Garcia', role: 'Account Executive' },
    { id: 3, shortName: 'MB', fullName: 'Madison Butler', role: 'Product Specialist' },
    { id: 4, shortName: 'AM', fullName: 'Alex Miller', role: 'Customer Success' },
  ]

  return (
    <div className="flex flex-col gap-6 p-4">

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
          Related Records
        </h4>
        <div className="flex flex-col space-y-3">
          {relatedRecords.map(record => (
            <div key={record.id} className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              <i className="bi bi-link-45deg text-xl"></i>
              <span>{record.title} - <span className="font-medium text-gray-500">{record.type}</span></span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
          Attendees
        </h4>
        <div className="flex flex-col space-y-3">
          {attendees.map(attendee => (
            <Attendee key={attendee.id} shortName={attendee.shortName} fullName={attendee.fullName} role={attendee.role} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OverviewTab