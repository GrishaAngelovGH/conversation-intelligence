import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import OverviewTab from "./OverviewTab"
import ActionItemsTab from "./ActionItemsTab"

const TabsWrapper = () => (
  <Tabs defaultActiveKey="overview" id="tabs-id" className="mb-3"   >
    <Tab eventKey="overview" title="Overview">
      <OverviewTab />
    </Tab>
    <Tab eventKey="action-items" title="Action Items">
      <ActionItemsTab />
    </Tab>
    <Tab eventKey="highlights" title="Highlights">
      Highlights
    </Tab>
  </Tabs>
)

export default TabsWrapper