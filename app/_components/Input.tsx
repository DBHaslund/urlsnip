'use client';
import { useRef, useState } from 'react';

const Input = ({ onInput }: any) => {
  const [userInput, setUserInput] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    if ( /* inputRef.current?.checkValidity() && */ inputRef.current?.value != '') {
      setInvalidInput(false);
      onInput(inputRef.current?.value);
      setUserInput('');
    } else {
      setInvalidInput(true);
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const invalid = invalidInput ? 'border-red-700' : 'border-transparent';

  return (
    <div className='mb-12 flex flex-col'>
      <div className='mx-auto mb-4 md:w-2/5 relative'>
        {invalidInput && (
          <p className='text-red-700 absolute w-full bottom-8'>
            Please enter a valid URL
          </p>
        )}
        <input
          ref={inputRef}
          type='url'
          className={`w-full text-center bg-offwhite outline-none focus:outline-[#c91dcc] border-2 ${invalid}`}
          value={userInput}
          onChange={inputHandler}
          onFocus={() => setInvalidInput(false)}
          onKeyUp={(e) => e.key === 'Enter' ? submitHandler() : null}
        />
      </div>
      <button
        onClick={submitHandler}
        className='w-fit mx-auto relative inline-flex items-center px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group'
      >
        <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c91dcc] rounded-md blur-md ease'></span>
        <span className='absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180'>
          <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#3b5fe9] rounded-full blur-md'></span>
          <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3b5fe9] rounded-full blur-md'></span>
        </span>
        <span className='relative text-white'> Shorten it!</span>
      </button>
    </div>
  );
};

export default Input;
