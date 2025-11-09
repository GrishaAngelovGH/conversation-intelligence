const InputGroupWrapper = () => (
  <div className="relative flex items-center">
    <input
      type="text"
      placeholder="Search for keywords, brands, tags and more"
      className="bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md py-2 px-4 block w-full appearance-none leading-normal"
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
      <i className='bi bi-search'></i>
    </div>
  </div>
)

export default InputGroupWrapper