import { Button, Tabs, Tab } from "react-bootstrap"
import "./Donate.css"
import Gpay_Om from "./images/Gpay_Om.jpg"
import upi_qr from "./images/upi_qr.jpg"

let Donate = (props) => {

    return (
        <div id="DonateUs">

            <div className="container-fluid pt-2" id="coverImage_donate">
                <div className="row" id="coverText_donate">
                    <div className="col-1"></div>
                    <div className="col-5" style={{ height: "100%" }}>
                        <h1 className="text-white">Help us protect them</h1>
                        <h4 className="mt-3 text-white">We are a non-profit organization with no source of income and we need your help.</h4>
                        <h4 className="mt-3 text-white">Your donation can help save millions of animals.</h4>
                        <a href="#cause">
                            <Button className="btn btn-primary mt-3 rounded-pill p-2 ps-3 pe-3">
                                <h4>Donate to Us</h4>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <h2 className="mt-3 pt-4 text-center" id="cause_donate">Cause we are</h2>

            <div className="container mt-4" id="donate">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <div className="card bg-light h-100">
                            <div className="card-body text-center">
                                <div className='square-box_donate'>
                                    <div className='square-content_donate' id="card1Image"></div>
                                </div>
                                <h3 className="card-title mb-2 mt-2"> Feeding Animals </h3>
                                <p className="card-text text-dark"> We feed the animals rescued</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="card bg-light h-100">
                            <div className="card-body text-center">
                                <div className='square-box_donate'>
                                    <div className='square-content_donate' id="card2Image"></div>
                                </div>
                                <h3 className="card-title mb-2 mt-2"> Giving them a new Home </h3>
                                <p className="card-text text-dark"> We help them find a new place to live </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="card bg-light h-100">
                            <div className="card-body text-center">
                                <div className='square-box_donate'>
                                    <div className='square-content_donate' id="card3Image"></div>
                                </div>
                                <h3 className="card-title mb-2 mt-2"> Protecting them </h3>
                                <p className="card-text text-dark"> We provide them a new shelter </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="container p-4 row" >
                    <div className="col-3">
                        <img src={Gpay_Om} alt="" width="100%" />
                    </div>
                    <div className="col-9" style={{
                        paddingLeft: "10%",
                        paddingRight: "10%"
                    }}>
                        <h4>Send money to <b>+91----------</b> or Scan the QR code using any UPI</h4>
                        <p className="bg-warning p-2 text-center mt-5">Please enter your email, name, and phone in the note!</p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Donate;