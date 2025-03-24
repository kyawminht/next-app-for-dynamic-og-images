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
      </Head>
      <div>
        <h1>Welcome to My Website</h1>
        <p>This page has a dynamically generated OG image.</p>
        <p>Hello image {id}</p>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  // Fetch data from the API
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Select the image based on the `id`
  const product = products.find((product) => product.id === parseInt(id));
  const ogImageUrl = product ? product.image : 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'; //fall back image

  return {
    props: {
      id,
      ogImageUrl,
    },
  };
};

export default Page;