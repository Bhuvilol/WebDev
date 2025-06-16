import React from 'react'

function card({username,btnname}) {
  return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="relative h-48 w-full">
      <img
        className="object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="High definition person"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h2 className="text-white text-2xl font-bold drop-shadow">{username}</h2>
      </div>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-700 text-base mb-4">
        {username} is a passionate web developer with a love for creating beautiful and functional user interfaces. He enjoys working with React and Tailwind CSS.
      </p>
      <div className="flex justify-end">
        <button className="bg-black-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
          {btnname}
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default card