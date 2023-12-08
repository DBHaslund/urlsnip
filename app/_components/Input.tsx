'use client';
import { useRef, useState } from 'react';

const Input = ({ onInput }: any) => {
  const [userInput, setUserInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = () => {
    onInput(inputRef.current?.value)
    setUserInput('');
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  return (
    <div className='w-2/5 mx-auto border'>
      <input ref={inputRef} type='url' className='' value={userInput} onChange={inputHandler} />{' '}
      <button onClick={submitHandler} className='border'>
        Shorten it!
      </button>
    </div>
  );
};

export default Input;
