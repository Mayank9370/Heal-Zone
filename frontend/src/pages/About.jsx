import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} /> 
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum a voluptas veritatis neque dolore tenetur voluptatem voluptatum quibusdam incidunt, beatae deserunt facere assumenda dignissimos illum eius hic praesentium labore.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, enim velit dolore, hic blanditiis aperiam debitis assumenda nisi, vel eius quaerat soluta laudantium autem maiores tempora ad totam illo optio.</p>
          <b>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus consectetur tenetur deleniti deserunt aut corrupti facere dicta repudiandae aliquam! Fuga at omnis labore reprehenderit hic sint alias obcaecati laboriosam?</p>
        </div>
      </div>

      <div className='tex-xl my-4'>
        <p>WHY CHOOSE US</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap--5 text-[15px] hover:bg-primary hover:text-white transition'>
          <b>Efficiency:</b>
          <p>Stremlined appontment scheduling </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap--5 text-[15px] hover:bg-primary hover:text-white transition'>
          <b>Convenience:</b>
          <p>Access to Network</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap--5 text-[15px] hover:bg-primary hover:text-white transition'>
          <b>Personalization:</b>
          <p>Tailored recommendation and remainders </p>
        </div>
      </div>

    </div>
  )
}

export default About;
