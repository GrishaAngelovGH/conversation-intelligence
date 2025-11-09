import TrackedKeywordsCard from './TrackedKeywordsCard'
import SentimentCard from './SentimentCard'
import BrandsCard from './BrandsCard'

const StatisticCards = () => (
  <div className='flex mt-3 p-3'>
    <div className='w-full'>
      <h3 className='font-bold'>What are your customers talking about?</h3>
      <p>Understand what&apos;s happening on sales calls, so you can coach your sellers better.</p>

      <TrackedKeywordsCard />
      <SentimentCard />
      <BrandsCard />
    </div>
  </div>
)

export default StatisticCards