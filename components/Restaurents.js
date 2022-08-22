import Link from 'next/link';

const Restaurents = ({ restaurents }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl font-bold mb-3">
        {restaurents &&
          restaurents.data.map((restaurent) => {
            return (
              <li key={restaurent.id}>
                <Link href={`restaurent/` + restaurent.attributes.slug}>
                  {restaurent.attributes.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Restaurents;