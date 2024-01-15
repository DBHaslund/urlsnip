'use client';
import { useEffect, useState } from 'react';
import Shortener from './../_utils/Shortener';
import { v4 as uuid } from 'uuid';
import History from './History';
import Input from './Input';

const UrlSnip = () => {
  const [linkHistory, setLinkHistory] = useState<Link[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('linkHistory');
    const parsed = data ? JSON.parse(data) : [];
    setLinkHistory(parsed);
  }, []);

  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem('linkHistory', JSON.stringify(linkHistory));
    }
    setFirstLoad(false);
  }, [linkHistory, firstLoad]);

  const handleInput = async (input: string) => {
    const url = await Shortener(input);
    const link: Link = {
      id: uuid(),
      createdAt: new Date(url.createdAt),
      originalURL: url.originalURL,
      shortURL: url.shortURL,
    };

    setLinkHistory((linkHistory) =>
      linkHistory.length > 0 ? [...linkHistory, link] : [link]
    );
  };

  const deleteLink = (linkId: string) => {
    setLinkHistory((prevLinks) => {
      const updatedList = prevLinks.filter((link) => link.id !== linkId);
      return updatedList;
    });

    localStorage.setItem('linkHistory', JSON.stringify(linkHistory));
  };

  return (
    <div className='w-4/5 mx-auto mt-40 bg-purple-950 py-20'>
      <h1 className='text-[#c91dcc] text-7xl text-center pb-20'>URLSnip</h1>
      <Input onInput={handleInput} />
      <History links={linkHistory} deleteLink={deleteLink} />
    </div>
  );
};

export default UrlSnip;
