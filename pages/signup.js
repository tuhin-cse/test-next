import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignupForm from "../components/Auth/signup-form";

function SignUp() {
    return (
        <div className="main">
            <Navbar/>
                <SignupForm/>
            <Footer/>
        </div>
    )
}

export default SignUp