import TrackedKeywordsCard from './TrackedKeywordsCard'
import SentimentCard from './SentimentCard'
import BrandsCard from './BrandsCard'

const StatisticCards = () => (
  <div className="flex flex-col items-center mt-8 p-3">
    <div className="w-full text-center">
      <h3 className="text-4xl font-extrabold text-blue-800 text-center pb-3 mb-2">
        What are your customers talking about?
      </h3>
      <p className="text-2xl text-gray-500 mb-8">
        Understand what&apos;s happening on sales calls, so you can coach your sellers better.
      </p>

      <TrackedKeywordsCard />
      <SentimentCard />
      <BrandsCard />
    </div>
  </div>
)

export default StatisticCards