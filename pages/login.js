import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/Auth/login-form";

function Login() {
    return (
        <div className="main">
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}

export default Login