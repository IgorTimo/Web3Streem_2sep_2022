import Link from "next/link";


const Header = () => {
  return (
    <header style={{paddingLeft: "50px"}}>
      <Link href="/">
        <a style={{ fontSize: "30px", marginRight: "20px" }}>Home</a>
      </Link>
      <Link href="/history">
        <a style={{ fontSize: "30px", marginRight: "20px" }}>History</a>
      </Link>
      <Link href="/about">
        <a style={{ fontSize: "30px", marginRight: "20px" }}>About</a>
      </Link>
    </header>
  );
};

export default Header;



