'use client'
import { useEffect, useState } from 'react';
import Shortener from './../_utils/Shortener';
import { v4 as uuid } from 'uuid';
import History from './History';
import Input from './Input';

const UrlSnip = () => {
  const [linkHistory, setLinkHistory] = useState<Link[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('linkHistory');
    const parsed = data ? JSON.parse(data) : [];
    setLinkHistory(parsed);
  }, []);

  const handleInput = async (input: string) => {
    const url = await Shortener(input);
    const link: Link = {
      id: uuid(),
      createdAt: new Date(url.createdAt),
      originalURL: url.originalURL,
      shortURL: url.shortURL,
    };

      setLinkHistory((linkHistory) => [...linkHistory, link]);
      localStorage.setItem('linkHistory', JSON.stringify(linkHistory));
  };

  return (
    <>
      <Input onInput={handleInput} />
      {/* <History {...linkHistory} /> */}
    </>
  );
};

export default UrlSnip;
