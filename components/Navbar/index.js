import Link from "next/link";

function Navbar() {
    return (
        <header className="menu-section-area">
            <nav className="navbar navbar-expand-lg d-none d-sm-none d-md-block d-lg-block d-xl-block" id="mainNav">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand" >
                            <img src="assets/img/logo.png" alt="logo" className="img-fluid"/>
                        </a>
                    </Link>

                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-capitalize align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="rides.html">রাইড শেয়ারিং</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">তাত্ক্ষণিক যাত্রা</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="car-rental.html">গাড়ি ভাড়া</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="leasing.html">গাড়ি লিজ</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav text-capitalize ml-auto align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#!">মালিক হিসাবে সাইনআপ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">ড্রাইভার হিসাবে সাইনআপ</a>
                            </li>
                            <li className="nav-item">
                                <Link href="/signup">
                                    <a className="nav-link">গ্রাহক হিসাবে সাইনআপ</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link">লগইন</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown-box">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown"><i
                                    className="fas fa-globe"></i>বাংলা<i className="fas fa-angle-down"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="#" title="বাংলা">বাংলা</a></li>
                                    <li><a href="#" title="English">English</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <nav className="mobile_menu hidden d-none">
                <a href="index.html"><img className="mobile-logo" src="assets/img/logo.png" alt="logo"/></a>
                <ul className="nav navbar-nav navbar-right menu">
                    <li className="nav-item">
                        <a className="nav-link" href="#!">রাইড শেয়ারিং</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">তাত্ক্ষণিক যাত্রা</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">গাড়ি ভাড়া</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">গাড়ি লিজ </a>
                    </li>
                    <div role="separator" className="dropdown-divider"></div>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">মালিক হিসাবে সাইনআপ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">ড্রাইভার হিসাবে সাইনআপ</a>
                    </li>
                    <li className="nav-item">
                        <Link href="/signup">
                            <a className="nav-link">গ্রাহক হিসাবে সাইনআপ</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login">
                            <a className="nav-link">লগইন</a>
                        </Link>
                    </li>
                    <li className="dropdown">
                        <a title="বাংলা"><i className="fas fa-globe"></i> বাংলা</a>
                        <ul className="sub_menu">
                            <li><a href="#" title="বাংলা">বাংলা</a></li>
                            <li><a href="#" title="English">English</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar