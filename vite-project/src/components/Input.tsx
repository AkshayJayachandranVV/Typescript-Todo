import React from 'react'

type input={
    inputValue:string;
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}

function input({inputValue,setInputValue}:input) {
  return (
    <div>
          <input 
            value={inputValue} 
            type="text" 
            className='w-full p-3 rounded-lg mb-2 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Add a new item" 
          />
    </div>
  )
}

export default input
