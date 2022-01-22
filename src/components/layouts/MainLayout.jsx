import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function MainLayout({children}) {
  return (
      <div>
          <Navbar />
          <div className="container">
            <div className="row navpadding">
                {children}
            </div>
          </div>
          <Footer />
      </div>
  );
}

export default MainLayout;
