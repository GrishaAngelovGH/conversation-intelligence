import Attendee from "../common/Attendee"

const OverviewTab = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <span className="fw-bold">Related Records</span>
          <div>
            <i className="bi bi-journal-check"></i>
            <i className="bi bi-bookmark ms-3"></i>
            <i className="bi bi-telephone-plus ms-3"></i>
            <i className="bi bi-inboxes ms-3"></i>
          </div>
        </div>
      </div>

      <div className="row mt-3 justify-content-between">
        <div className="col-md-12">
          <div className="fw-bold">Tags</div>
          <button className="btn btn-primary">Add call tags <i className="bi bi-plus-circle"></i></button>
        </div>
      </div>

      <div className="row mt-3 justify-content-between">
        <div className="col-md-12">
          <div className="fw-bold">Attendees</div>
          <Attendee shortName="JS" fullName="James Smith" />
          <Attendee shortName="IG" fullName="Isabel Garcia" />
          <Attendee shortName="MB" fullName="Madison Butler" />
        </div>
      </div>
    </div>
  </div>
)

export default OverviewTab