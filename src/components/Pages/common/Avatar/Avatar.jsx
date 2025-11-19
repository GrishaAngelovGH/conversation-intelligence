const Avatar = ({ content, color }) => (
  <div className={`rounded-full ${color || 'bg-blue-500'} flex justify-center items-center text-gray-800 font-bold w-10 h-10`}>
    {content}
  </div>
)

export default Avatar