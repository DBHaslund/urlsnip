'use client';
import { useState } from 'react';

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className='w-1/3 my-10 mx-auto text-center'>
      <button className={`w-24 shrink-0 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-indigo-600 shadow-2xl group ${open ? 'rounded-t-md' : 'rounded-md'}`}>
        <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c91dcc] rounded-md blur-md ease'></span>
        <span className='absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180'>
          <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#3b5fe9] rounded-full blur-md'></span>
          <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3b5fe9] rounded-full blur-md'></span>
        </span>
        <span className='relative text-offwhite'>About</span>
      </button>
      {open && (
        <div className='bg-[#3b5fe9] p-10 rounded-xl font-medium'>
          <p>
            Simple project that shortens links via short.io, utilizing my own
            domain. Written in Next.js
            <br />
            Find my site at <a className='text-offwhite' href='http://bzyhas.com'>bzyhas.com</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
