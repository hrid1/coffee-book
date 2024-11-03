import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      {/* header */}
      
      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
