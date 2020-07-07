import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {

    render() {

        return (
            <>
                <div className="block-contact">
                    <div className="container contact-content-wrapper">
                        <div className="contact-item">
                            <h2>Contact</h2>
                            <p>Let's get to work. If you are thinking about a new garden.</p>
                        </div>
                        <div className="contact-item contact-number">
                            <h5>Tel</h5>
                            <h4>2670 0378 / 2697 6456</h4>
                        </div>
                        <div className="contact-item contact-mail">
                            <a href="/">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="mx-5 mt-1" />
                                Send us a mail
                                <FontAwesomeIcon icon={faCaretRight} className="arrow mr-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </>
    )};
}

export default Contact
