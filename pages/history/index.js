import Head from "next/head";
import numberContract from "../abi/numberContract";
import Layout from "../components/Layout";

const HistoryIndex = ({history}) => {
  return (
    <Layout>
    <Head>
        <title>History page</title>
    </Head>
    <h1>History: {history.join(", ")}</h1>
    </Layout>
  );
};

export default HistoryIndex;


export async function getServerSideProps(context) {
  try {
    let counter = 0;
    const history = [];
    let isArrayEnded = false;
    while (!isArrayEnded) {
      try {
        const record = await numberContract.history(counter);
        history.push(record);
        counter++;
      } catch (error) {
        isArrayEnded = true;
      }
    }

    return {
        props: { history},
      };
  } catch (error) {
    console.error(error);
  }
  return {
    props: {},
  };
}