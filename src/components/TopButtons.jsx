import React from 'react'

const TopButtons = () => {

    const cities = [];
    
  return (
    <div className='flex items-center justify-around my-6'>TopButtons
{cities.map((city) => (
    <button
        key={city.id}
        className="text-lig font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
            {city.name}
    </button>
))}
    </div>
  )
}

export default TopButtons