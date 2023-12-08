import { NextResponse } from 'next/server';

const Shortener = async (longURL: string | undefined) => {
  const key = process.env.NEXT_PUBLIC_SHORTIO_KEY;
  const body = {
    domain: 'l.bzyhas.com',
    originalURL: longURL,
    allowDuplicates: false,
  };

  try {
    const response = await fetch('https://api.short.io/links/public', {
      method: 'post',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `${key}`,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return NextResponse.json({ message: err, success: false });
  }
};

export default Shortener;
