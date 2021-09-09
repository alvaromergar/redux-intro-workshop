import React from "react";

import "./Footer.scss";

function Footer ({ children, ...props}) {
    return (
        <footer className="Footer bg-dark text-white mt-5" {...props}>
            &copy; {new Date().getFullYear()} Alvaro Merino and Ernest Duocastella
        </footer>
    )
}

export default Footer;