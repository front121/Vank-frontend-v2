import { Outlet } from "react-router-dom";
import Header from "../Landing/Header/Header";
import Footer from "../Landing/Footer/Footer";
import IconScrollToTop from "@/assets/Icon/IconScrollToTop";
import ScrollToTop from "react-scroll-to-top";


const RootLanding = () => {

  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop
        smooth
        top={410}
        className="bg-transparent"
        style={{
          backgroundColor: "#161616",
          color: "#FFED00",
          width: 46,
          height: 46,
          borderRadius: "100%",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
        }}
        component={<IconScrollToTop />}
      />
      <Footer />
    </>
  );
};

export default RootLanding;
