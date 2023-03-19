import React from 'react'

const Doc = () => {
  return (
    <div className = 'flex-col mt-10'>
    <h1 className='text-center text-4xl font-bold'>Hospitals Dashboard</h1>
    <div className='flex justify-center gap-8 mt-8'>
        <div className='bg-gray-200 border-dashed border-gray-300 rounded-md p-8'>View Patient Details</div>
        <div className = 'font-bold'>Or</div>
        <div className='bg-gray-200 border-dashed border-gray-300 rounded-md p-8'> Add Records</div>
    </div>

    </div>
  )
}

export default Doc;