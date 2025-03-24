// pages/[id].js
import Head from 'next/head';

const Page = ({ id, ogImageUrl }) => {
  return (
    <>
      <Head>
        <title>Dynamic OG Image</title>
        <meta property="og:title" content="Dynamic OG Image" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="This is a dynamically generated OG image." />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dynamic OG Image" />
        <meta name="twitter:description" content="This is a dynamically generated OG image." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="600" />
      </Head>
      <div>
        <h1>Welcome to My Website</h1>
        <p>This page has a dynamically generated OG image.</p>
        <p>Hello image </p>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  // Define your image URLs
  const imageUrls = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // First image
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', // Second image
  ];

  // Select the image based on the `id`
  const ogImageUrl = imageUrls[id - 1] || imageUrls[0]; // Default to the first image if `id` is invalid

  return {
    props: {
      id,
      ogImageUrl,
    },
  };
};

export default Page;