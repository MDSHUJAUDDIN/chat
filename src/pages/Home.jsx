import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-slate-200'>
      <div className="w-[95%] h-[90%] flex bg-white p-4 shadow-lg rounded-lg">
  <div className="flex-grow basis-1/3 p-4 bg-blue-100 rounded-lg mr-4">
    <Sidebar />
    </div>
  <div className="flex-grow basis-2/3 p-4 bg-green-100 rounded-lg"><Chat/></div>
</div>

    </div>
  )
}

export default Home
