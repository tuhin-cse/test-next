import Navbar from "../components/Navbar";
import Hero from "../components/Home/hero";
import Footer from "../components/Footer";
import AndgarivaraCallToActionArea from "../components/Home/andgarivara-call-to-action-area";

function Index() {
    return (
        <div className="main">
            <Navbar/>
            <Hero/>
            <AndgarivaraCallToActionArea/>
            <Footer/>
        </div>
    )
}

export default Index