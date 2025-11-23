const CoachingDashboard = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Coaching Dashboard</h1>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mr-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-3">Call List</h2>
          <ul className="space-y-2">
            <li className="p-2 border rounded-md cursor-pointer hover:bg-gray-100">Call with John Doe (2025-12-19)</li>
            <li className="p-2 border rounded-md cursor-pointer hover:bg-gray-100">Call with Jane Smith (2025-12-18)</li>
            <li className="p-2 border rounded-md cursor-pointer hover:bg-gray-100">Call with Peter Jones (2025-12-17)</li>
          </ul>
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-y-auto">
          <h2 className="text-xl font-semibold mb-3">Selected Call Transcript</h2>
          <div className="border p-3 rounded-md bg-gray-50 h-full">
            <p>
              <strong>Agent:</strong> Hello John, thank you for calling. How can I assist you today?
            </p>
            <p>
              <strong>Customer:</strong> Hi, I&apos;m having trouble with my recent order.
            </p>
            <p>
              <strong>Agent:</strong> I see. Could you please provide your order number?
            </p>
            <p>
              <strong>Customer:</strong> It&apos;s 12345.
            </p>
            <p>
              <strong>Agent:</strong> Thank you. Let me check that for you.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachingDashboard
