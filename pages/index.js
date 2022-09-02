import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import numberContract from "./abi/numberContract";
import provider from "./abi/provider";
import Layout from "./components/Layout";

const Index = ({ number }) => {
  const [inputNumber, setInputNumber] = useState();
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleConnectClick = async () => {
    await provider.send("eth_requestAccounts", []);
  };

  async function handleWriteClick() {
    const signer = provider.getSigner();
    const contractWithSigner = numberContract.connect(signer);
    setMessage("")
    try {
      const tx = await contractWithSigner.setNumber(inputNumber);
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log("response: ", response);
      router.reload();
    // router.push("/about")
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  }
  return (
    <Layout>
      <Head>
        <title>Number {number}</title>
      </Head>
      <div>
        <div style={{ textAlign: "center" }}>
          <button onClick={handleConnectClick}>Connect</button>
          <h1>Current number: {number}</h1>

          <input
            placeholder="enter number"
            onChange={(e) => setInputNumber(e.target.value)}
          />
          <button onClick={handleWriteClick}>Write</button>
          <br/>
          <h4>{message}</h4>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getServerSideProps(context) {
  try {
    const number = await numberContract.number();
    return {
      props: { number },
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: {},
  };
}
