import Table from 'react-bootstrap/Table'

import Attendee from 'components/Pages/common/Attendee'

export const StatisticSummary = () => (
  <div className='row mt-3 border rounded p-3 bg-light justify-content-center text-center'>
    <div className='col-md-2'>
      <div className='fw-bold text-muted'>Talk to listen ratio</div>
      <div className='fw-bold'>52/48%</div>
    </div>

    <div className='col-md-2'>
      <div className='fw-bold text-muted'>Talking speed</div>
      <div className='fw-bold'>156.8 wpm</div>
    </div>

    <div className='col-md-2'>
      <div className='fw-bold text-muted'>Switches per hour</div>
      <div className='fw-bold'>32.72</div>
    </div>

    <div className='col-md-3'>
      <div className='fw-bold text-muted'>Pause before speaking</div>
      <div className='fw-bold'>68.97ms</div>
    </div>

    <div className='col-md-3'>
      <div className='fw-bold text-muted'>Longest customer monologue</div>
      <div className='fw-bold'>37sec</div>
    </div>
  </div>
)

export const SellerInsights = () => (
  <div className='row mt-3'>
    <div className='col-md-12'>
      <h4>Seller Insights</h4>

      <div className='row gap-2 text-center'>
        <div className='col border border-primary rounded p-2'>
          James Smith has been talking too fast in most conversations
        </div>

        <div className='col border border-primary rounded p-2'>
          James Smith&apos;s talk-to-listen ratio is 13% higher than the team&apos;s average
        </div>

        <div className='col border border-primary rounded p-2'>
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
    <div className='row mt-3'>
      <div className='col-md-12'>
        <h4>Call History</h4>

        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Added</th>
              <th>Duration</th>
              <th>Phone Number</th>
              <th>Related Opportunity</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(v => (
                <tr key={v.id}>
                  <td><i className='bi bi-telephone'></i></td>
                  <td>{v.title}</td>
                  <td>{v.added}</td>
                  <td>{v.duration}</td>
                  <td>{v.phone}</td>
                  <td>{v.relatedOpportunity}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

const SellerDetails = () => (
  <div className='row m-3'>
    <div className='col-md-12'>
      <h3 className='fw-bold'>Seller Details</h3>

      <div className='row'>
        <div className='col-md-5'>
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