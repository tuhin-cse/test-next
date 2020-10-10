import Navbar from "./Navbar";

function Layout(...props) {
    return (
        <body>

            <div className="main">
                <Navbar/>
                {props.children}
            </div>


        </body>

    )
}

export default Layout