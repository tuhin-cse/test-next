import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(...props) {
    return (
        <div className="main">

            <Navbar/>


            {props.children}


            <Footer/>

        </div>
    )
}

export default Layout