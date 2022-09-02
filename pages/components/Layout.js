import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div style={{ margin: "auto", maxWidth: "1020px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
