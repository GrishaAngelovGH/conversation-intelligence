

import Attendee from 'components/Pages/common/Attendee'

export const StatisticSummary = () => (
  <div className='flex mt-3 border rounded p-3 bg-gray-100 justify-center text-center'>
    <div className='w-1/6'>
      <div className='font-bold text-gray-500'>Talk to listen ratio</div>
      <div className='font-bold'>52/48%</div>
    </div>

    <div className='w-1/6'>
      <div className='font-bold text-gray-500'>Talking speed</div>
      <div className='font-bold'>156.8 wpm</div>
    </div>

    <div className='w-1/6'>
      <div className='font-bold text-gray-500'>Switches per hour</div>
      <div className='font-bold'>32.72</div>
    </div>

    <div className='w-1/4'>
      <div className='font-bold text-gray-500'>Pause before speaking</div>
      <div className='font-bold'>68.97ms</div>
    </div>

    <div className='w-1/4'>
      <div className='font-bold text-gray-500'>Longest customer monologue</div>
      <div className='font-bold'>37sec</div>
    </div>
  </div>
)

export const SellerInsights = () => (
  <div className='flex mt-3'>
    <div className='w-full'>
      <h4>Seller Insights</h4>

      <div className='flex gap-2 text-center'>
        <div className='flex-1 border border-blue-500 rounded p-2'>
          James Smith has been talking too fast in most conversations
        </div>

        <div className='flex-1 border border-blue-500 rounded p-2'>
          James Smith&apos;s talk-to-listen ratio is 13% higher than the team&apos;s average
        </div>

        <div className='flex-1 border border-blue-500 rounded p-2'>
          Positive customer sentiments is higher than the average in 38% of calls
        </div>
      </div>

    </div>
  </div>
)

export const CallHistory = () => {
  const data = [
    { id: 1, title: 'Closing the deal', added: '6 hours ago', duration: '31m 30s', phone: '123456789', relatedOpportunity: 'Not Set' },
    { id: 2, title: 'Initial discussion', added: '3 days ago', duration: '35m 14s', phone: '123456789', relatedOpportunity: 'Not Set' },
    { id: 3, title: 'Initial catalog launch', added: '3 days ago', duration: '45m 20s', phone: '123456789', relatedOpportunity: 'Not Set' },
  ]

  return (
    <div className='flex mt-3'>
      <div className='w-full'>
        <h4>Call History</h4>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope="col" className='px-6 py-3'></th>
                <th scope="col" className='px-6 py-3'>Title</th>
                <th scope="col" className='px-6 py-3'>Added</th>
                <th scope="col" className='px-6 py-3'>Duration</th>
                <th scope="col" className='px-6 py-3'>Phone Number</th>
                <th scope="col" className='px-6 py-3'>Related Opportunity</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(v => (
                  <tr key={v.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='px-6 py-4'><i className='bi bi-telephone'></i></td>
                    <td className='px-6 py-4'>{v.title}</td>
                    <td className='px-6 py-4'>{v.added}</td>
                    <td className='px-6 py-4'>{v.duration}</td>
                    <td className='px-6 py-4'>{v.phone}</td>
                    <td className='px-6 py-4'>{v.relatedOpportunity}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const SellerDetails = () => (
  <div className='flex m-3'>
    <div className='w-full'>
      <h3 className='font-bold'>Seller Details</h3>

      <div className='flex'>
        <div className='md:w-5/12'>
          <Attendee shortName='JS' fullName='James Smith' />
        </div>
      </div>

      <StatisticSummary />

      <SellerInsights />

      <CallHistory />
    </div>
  </div>
)

export default SellerDetails