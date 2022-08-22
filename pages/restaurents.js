import Restaurents from '../components/Restaurents';
import Layout from '../components/Layout';
import { fetcher } from '../lib/api';
// import useSWR from 'swr';
// import { useState } from 'react';
// import { useFetchUser } from '../lib/authContext';

const RestaurentsList = ({ restaurents }) => {
  // const { user, loading } = useFetchUser();
  // const [pageIndex, setPageIndex] = useState(1);
  // const { data } = useSWR(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurents?pagination[page]=${pageIndex}&pagination[pageSize]=5`,
  //   fetcher,
  //   {
  //     fallbackData: restaurents,
  //   }
  // );
  return (
    <Layout >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Restaurents
        </span>
      </h1>
      <Restaurents restaurents={restaurents} />
      {/* <div className="space-x-2 space-y-2">
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
          }`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {' '}
          Previous
        </button>
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === (data && data.meta.pagination.pageCount)
              ? 'bg-gray-300'
              : 'bg-blue-400'
          }`}
          disabled={pageIndex === (data && data.meta.pagination.pageCount)}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div> */}
    </Layout>
  );
};

export default RestaurentsList;

export async function getStaticProps() {
  const restaurentsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurents`);
    console.log(restaurentsResponse)
  return {
    props: {
      restaurents: restaurentsResponse,
    },
  };
}