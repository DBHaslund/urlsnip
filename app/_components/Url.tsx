'use client';
import { useState } from 'react';

interface Props {
  id: string;
  createdAt: Date;
  originalURL: string;
  shortURL: string;
  deleteLink: (linkId: string) => void;
}

const Url = ({ deleteLink, ...link }: Props) => {
  const [copyBtn, setCopyBtn] = useState('Copy');

  const copyHandler = () => {
    navigator.clipboard.writeText(`${link.shortURL}`);
    setCopyBtn('Copied!');
    setTimeout(() => {
      setCopyBtn('Copy');
    }, 3000);
  };
  return (
    <div className='mb-4 p-2 flex flex-col-reverse gap-4 lg:flex-row md:justify-between border border-stone-700 lg:border-none '>
      <button
        onClick={() => deleteLink(link.id)}
        className='w-24 mx-auto shrink-0 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group'
      >
        <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c91dcc] rounded-md blur-md ease'></span>
        <span className='absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180'>
          <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#3b5fe9] rounded-full blur-md'></span>
          <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3b5fe9] rounded-full blur-md'></span>
        </span>
        <span className='relative text-offwhite'>Delete</span>
      </button>
      <div className='md:flex gap-4 justify-evenly text-offwhite'>
        <div>
          <p>Original link:</p>
          <a
            href={link.originalURL}
            className='md:text-xl my-auto font-semibold'
          >
            {link.originalURL}
          </a>
        </div>
        <div>
          <p>Short link:</p>
          <a href={link.shortURL} className='md:text-xl my-auto font-semibold'>
            {link.shortURL}
          </a>
        </div>
      </div>
      <button
        onClick={copyHandler}
        className='w-24 mx-auto shrink-0 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group'
      >
        <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c91dcc] rounded-md blur-md ease'></span>
        <span className='absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180'>
          <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#3b5fe9] rounded-full blur-md'></span>
          <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3b5fe9] rounded-full blur-md'></span>
        </span>
        <span className='relative text-offwhite'>{copyBtn}</span>
      </button>
    </div>
  );
};

export default Url;
