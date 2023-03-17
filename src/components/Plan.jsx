import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-3 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2 border py-2 px-3'
          src='https://images.unsplash.com/photo-1660519258909-8dcc0dcb83d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2 border py-2 px-3'
          src='https://images.unsplash.com/photo-1599476373256-05023c22587e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2 border py-2 px-3'
          src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2 border py-2 px-3'
          src='https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2 border py-2 px-3'
          src='https://images.pexels.com/photos/5702144/pexels-photo-5702144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2 border py-2 px-3'
          src='https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
        Somalia Best Vacation 2023, Plan Your Next Trip
        </p>
        <p className='pb-6'>
        Somalia’s tourism industry, which has gone through several stages since 1960, was a major source of national income. It was also part of the tourism infrastructure that the Italian colonial regime developed while they ruled the country ......
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
