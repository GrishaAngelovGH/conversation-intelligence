import UserGreet from './UserGreet'
import HistoryRange from './HistoryRange'

const Home = () => {
  return (
    <div className="row g-0 justify-content-center text-center">
			<div className="col-md-11">

			<div className="row g-0 p-3">
				<div className="col-md-6">
					<UserGreet username="James Smith" />
				</div>
				<div className="col-md-6">
					<HistoryRange />
				</div>
			</div>			
			</div>
		</div>
  )
}

export default Home