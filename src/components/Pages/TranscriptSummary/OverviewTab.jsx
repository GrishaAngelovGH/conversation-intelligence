import Attendee from 'components/Pages/common/Attendee'

const OverviewTab = () => (
  <div className="flex">
    <div className="w-full">
      <div className="flex justify-between">
        <div className="md:w-5/12">
          <span className="font-bold">Related Records</span>
          <div>
            <i className="bi bi-journal-check"></i>
            <i className="bi bi-bookmark ml-3"></i>
            <i className="bi bi-telephone-plus ml-3"></i>
            <i className="bi bi-inboxes ml-3"></i>
          </div>
        </div>
      </div>

      <div className="flex mt-3 justify-between">
        <div className="w-full">
          <div className="font-bold">Tags</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add call tags <i className="bi bi-plus-circle"></i></button>
        </div>
      </div>

      <div className="flex mt-3 justify-between">
        <div className="w-full">
          <div className="font-bold">Attendees</div>
          <Attendee shortName="JS" fullName="James Smith" />
          <Attendee shortName="IG" fullName="Isabel Garcia" />
          <Attendee shortName="MB" fullName="Madison Butler" />
        </div>
      </div>
    </div>
  </div>
)

export default OverviewTab