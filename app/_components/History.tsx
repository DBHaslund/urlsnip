import Url from './Url';

interface Props {
  links: Link[];
  deleteLink: (linkId: string) => void;
}

const History = ({ links, deleteLink }: Props) => {
  return (
    <ul className='mx-12 text-center'>
      {links.length > 0 &&
        links.map((link: any) => (
          <Url key={link.id} deleteLink={deleteLink} {...link} />
        ))}
    </ul>
  );
};

export default History;
