import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import OverviewTab from "./OverviewTab"

const TabsWrapper = () => (
  <Tabs defaultActiveKey="overview" id="tabs-id" className="mb-3"   >
    <Tab eventKey="overview" title="Overview">
      <OverviewTab />
    </Tab>
    <Tab eventKey="action-items" title="Action Items">
      Action Items
    </Tab>
    <Tab eventKey="highlights" title="Highlights">
      Highlights
    </Tab>
  </Tabs>
)

export default TabsWrapper