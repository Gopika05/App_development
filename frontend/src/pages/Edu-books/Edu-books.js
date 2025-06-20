import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import Sido from "./Sido";
import './Edu-books.css' ;

const Edubooks = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="games-container">
        <Sido />
        <div className="content">
      </div>
      </div>
      <Footer />
    </section>
  );
}

export default Edubooks;