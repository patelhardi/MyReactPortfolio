import React from "react";

class Footer extends React.Component {
    render() {
        const copy = String.fromCharCode(0x00a9);
        return(
            <footer id="footer">
                <div>{copy} Hardi Patel, 2022.</div>
            </footer>
        );
    }
}
export default Footer;