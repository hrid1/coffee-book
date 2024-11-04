import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <div className="h-16">
        <Header></Header>
      </div>
      {/* header */}

      <div className="min-h-[calc(100vh-228px)] container mx-auto px-12">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
