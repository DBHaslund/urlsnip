import Url from './Url';

interface Props {
  links: any;
  deleteLink: (linkId: string) => void;
}

const History = ({ links, deleteLink }: Props) => {
  return (
    <ul>
      {links.length > 0 &&
        links.map((link: any) => (
          <Url key={link.id} deleteLink={deleteLink} {...link} />
        ))}
    </ul>
  );
};

export default History;
