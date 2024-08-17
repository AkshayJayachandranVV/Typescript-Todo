import React, { useState } from 'react';
import ImageHeader from './components/imageHeader'; 
import Input  from './components/Input';


type Item = {
  title: string;
  id: string;
}

function App() {

  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems(prev => [...prev, { title: inputValue, id: Date.now().toString() }]);
    setInputValue("");
  }

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col justify-center items-center'>
      <ImageHeader />

      <div className='w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg'>
        <form className='mb-5' onSubmit={handleSubmit}>
          <Input  inputValue={inputValue} setInputValue={setInputValue} />
          <button 
            type='submit' 
            className='w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300'
          >
            Add
          </button>
        </form>
        <div className='h-52 overflow-y-auto'>
          {items.map(item => (
            <div key={item.id} className='flex justify-between items-center border border-gray-700 bg-gray-700 p-3 mb-2 rounded-lg'>
              <p>{item.title}</p>
              <button 
                onClick={() => handleDelete(item.id)} 
                className='bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded transition duration-300'
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
