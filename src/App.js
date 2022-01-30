import Header from "./components/Header/Header";
import Layout from "./components/Loyout/Layout";
import Footer from "./components/Footer/Footer";

import urlBg from "../src/assets/bg2.jpeg";
// import "./App.css";

function App(props) {
  return (
    <>
      <Header title={"This is title"} descr={"This is Description!"} />
      <Layout
        title={"This is title"}
        descr={"This is Description!"}
        urlBg={urlBg}
      />
      <Layout
        title={"This is title"}
        descr={"This is Description!"}
        colorBg={"#e2e2e2 "}
      />
      <Layout
        title={"This is title"}
        descr={"This is Description!"}
        urlBg={urlBg}
      />
      <Footer />
    </>
  );
}

export default App;
