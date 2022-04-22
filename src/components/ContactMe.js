import React from "react";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContactMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            phone: null,
            message: null
        };
    }
    
    componentDidMount() {
        axios.get('/data/contacts.json'
        ).then((result) => {
            var res = result.data;
            this.setState({
                email: res[0].email,
                phone: res[0].phone,
                message: res[0].message
            });
        });
    }

    render() {
        const {email} = this.state;
        const {phone} = this.state;
        const {message} = this.state;
        return(
            <div>
                <h2 id="contact-h2">Contact Me</h2>
                <div id="contact-section">
                    <label>Phone:</label> {phone} <br/>
                    <label>Email:</label> {email} <br/>
                    {message} 
                    <button id="email-button"><FontAwesomeIcon icon={faEnvelope} /></button>
                </div>
            </div>
        );
    }
}
export default ContactMe;