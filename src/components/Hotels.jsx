import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Looking for the perfect stay? </h3>
        <p className='pt-4'>
        There are a number of hotels that you can find on our website. we offer hotels that are just a 10-minute walk from the beach with an on-site bar and a restaurant, Fitness center, Free parking, Facilities for disabled guests, Room service and Free WiFi.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;
