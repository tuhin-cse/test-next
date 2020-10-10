function FooterUpperArea() {
    return (
        <div className="footer-upper-area">
            <div className="container">
                <div className="row footer-upper-wrap">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="footer-upper-left-part position-relative">
                            <img src="/assets/img/footer-upper-left-img.png" alt="Ride Sharing"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="footer-upper-download-app-area">
                            <h2>অ্যাপ ডাউনলোড করুন</h2>
                            <p>অ্যান্ড গাড়ি ভাড়াকে আপনার হাতের মুঠোয় রাখুন।</p>
                            <div className="download-button d-flex">
                                <a href="#" title="Andgarivara App"><img
                                    src="/assets/img/buttons-img/apple-app-btn.png"
                                    alt="Download Andgarivara app"/></a>
                                <a href="#" title="Andgarivara App"><img
                                    src="/assets/img/buttons-img/google-app-btn.png"
                                    alt="Download Andgarivara app"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default FooterUpperArea