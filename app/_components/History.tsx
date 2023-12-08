import Url from './Url';

const History = ({ ...linkHistory }: Link[]) => {
  const links = [linkHistory[0]]
  console.log(links)

  return (
    <ul>
      {links.length > 0 && links.map((link) => (
        <Url key={link.id} {...link} />
      ))}
    </ul>
  );
};

export default History;
