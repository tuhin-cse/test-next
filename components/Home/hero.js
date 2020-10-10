function Hero(){
    return (
        <section className="andgarivara-hero-area">
            <div className="container">
                <div className="row hero-area-wrapper align-items-center">

                    <div className="col-lg-12">
                        <div className="hero-area-heading">
                            <h1>আপনি কি নিরাপদ ও আরামদায়ক <br/> ভ্রমন করতে চান?</h1>
                            <h4 className="padding-top-20">সহজ করতে যাত্রা চলে এলো অ্যান্ড গাড়িভাড়া</h4>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">

                        <div className="andgarivara-left-content">
                            <a className="andgarivara-hero-service-box" href="rides.html" title="Car Rental ">
                                <div className="left-service-content">
                                    <h4>গাড়ি ভাড়া</h4>
                                    <h6>যাত্রীদের সাথে ভ্রমন ভাগ</h6>
                                </div>
                                <i className="flaticon-right-arrow"></i>
                            </a>
                            <div className="andgarivara-hero-service-box disabled " title="Instant Ride">
                                <div className="left-service-content">
                                    <h4>তাত্ক্ষণিক যাত্রা</h4>
                                    <h6>নিকটবর্তী চলমান গাড়ি থেকে গাড়িভাড়া</h6>
                                </div>
                                <i className="flaticon-right-arrow"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="andgarivara-left-content">
                            <a className="andgarivara-hero-service-box" href="car-rental.html" title="Car Leasing">
                                <div className="left-service-content">
                                    <h4>গাড়ি লিজ</h4>
                                    <h6>নিকটবর্তী চলমান গাড়ি থেকে গাড়িভাড়া</h6>
                                </div>
                                <i className="flaticon-right-arrow"></i>
                            </a>

                            <div className="andgarivara-hero-service-box disabled" href="leasing.html"
                                 title="Ride Sharing">
                                <div className="left-service-content">
                                    <h4>রাইড শেয়ার</h4>
                                    <h6>আপনার চাহিদামত নিজের গাড়ি লিজ দিন এবং নিন</h6>
                                </div>
                                <i className="flaticon-right-arrow"></i>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="andgarivara-hero-img text-center">
                            <img src="/assets/img/andgarivara-hero-img.gif" alt="Ride Sharing"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero