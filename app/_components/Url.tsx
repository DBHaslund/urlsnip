import { useEffect } from 'react';

const Url = ({ ...link}: Link) => {
  
  useEffect(() => {

  }, [link])
  return <p>{link.originalURL}</p>;
}

export default Url;