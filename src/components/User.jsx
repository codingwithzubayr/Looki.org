import Header from "./header/Header";
import Hero from "./Hero/Hero";
import Service from "./Deliver/Service";
import Product from "./Product/Product";
import OurProduct from "./OurProduct/OurProduct";
import Latest from "./Latest/Latest";
import Services from "./Servicess/Services";
import Footer from "./Footer/Footer";
function User(props) {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <Service />
        <Product />
        <OurProduct />
        <Latest />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
export default User;
