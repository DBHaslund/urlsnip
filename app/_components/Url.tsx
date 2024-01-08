interface Props {
  deleteLink: (linkId: string) => void;
  link: Link;
}

const Url = ({ deleteLink, ...link }: Props) => {
  return (
    <div className='flex gap-4'>
      <p>{link.shortURL}</p>
      <p>{link.originalURL}</p>
      {/* <p>{link.link.createdAt}</p> */}
      <button className='justify-end' onClick={() => deleteLink(link.id)}>
        Delete
      </button>
    </div>
  );
};

export default Url;
