interface Props {
  link: Link;
  deleteLink: (linkId: string) => void;
}

const Url = ({ deleteLink, ...link }: Props) => {
  return (
    <div className='mb-4 md:flex md:gap-4 md:justify-between '>
      <button
        onClick={() => deleteLink(link.id)}
        className='relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group'
      >
        <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c91dcc] rounded-md blur-md ease'></span>
        <span className='absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180'>
          <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#3b5fe9] rounded-full blur-md'></span>
          <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3b5fe9] rounded-full blur-md'></span>
        </span>
        <span className='relative text-white'>Delete</span>
      </button>
      <a
        href={link.originalURL}
        className='text-xl my-auto font-semibold text-white'
      >
        {link.originalURL}
      </a>
      <a
        href={link.shortURL}
        className='text-xl my-auto font-semibold text-white'
      >
        {link.shortURL}
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(`${link.shortURL}`)}
        className='relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group'
      >
        <span className='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c91dcc] rounded-md blur-md ease'></span>
        <span className='absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180'>
          <span className='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#3b5fe9] rounded-full blur-md'></span>
          <span className='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3b5fe9] rounded-full blur-md'></span>
        </span>
        <span className='relative text-white'>Copy</span>
      </button>
    </div>
  );
};

export default Url;
