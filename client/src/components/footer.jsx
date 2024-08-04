import React from 'react'

const Footer = () => {
  return (
    <div className='bg-Dblue p-8 relative w-full m-auto flex items-center text-[#f5f5f5] justify-evenly max-md:flex-col max-sm:p-2 '>
      <div className='w-[40%] p-4 text-left'>
        <h1 className='text-6xl font-semibold mb-8'>K. K. Wagh</h1>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisci elit. Donec ultricies mi in ipsum vehicula lacinia. Iner porttitor ac libero </p>
      </div>
      <div className='w-[50%] flex gap-24 p-8 max-lg:flex-col'> 
        <div className='gap-4 flex flex-col text-xl'>
          <h2 className='text-2xl font-semibold mb-4'>Quick Links</h2>
          <a href='#'>Home</a>
          <a href='#'>Contact Us</a>
        </div>
        <div className='gap-4 flex flex-col text-xl'>
          <h2 className='text-2xl font-semibold mb-4'>Pages</h2>
          <a href='#'>Departments</a>
          <a href='#'>Faculty</a>
        </div>
        <div className='gap-4 flex flex-col text-xl'>
          <h2 className='text-2xl font-semibold mb-4'>Follow Us</h2>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer