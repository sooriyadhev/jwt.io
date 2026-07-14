import "../styles/footer.css";
import lightLogo from "../assets/jwt-logo-light.svg";
import darkLogo from "../assets/jwt-logo-black.svg";
import ccpa from "../assets/ccpa.svg";
import Auth0Logo from "./Auth0Logo";

import {
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Footer() {
    const { resolvedTheme } = useTheme();
    const jwtLogo = resolvedTheme === "light" ? darkLogo : lightLogo;

    return (

        <footer>

            <div className="footer-top">

                <div>
                    <div className="footer-brand">

                        <img
                            src={jwtLogo}
                            alt="JWT"
                            className="footer-jwt-logo"
                        />

                        <span className="footer-brand-text">
                            Debugger
                        </span>

                    </div>

                </div>

                <div>

                    <h4>PRESENTED BY AUTH0</h4>

                    <a>Passkeys Playground</a>
                    <a>WebAuthn Playground</a>
                    <a>OIDC Playground</a>
                    <a>SAML Tool</a>

                </div>

                <div>

                    <h4>LEGAL</h4>

                    <a>Privacy Policy</a>
                    <a>Security</a>
                    <a href="#" className="privacy-link">
                        <span>Your Privacy Choices</span>

                        <img
                            src={ccpa}
                            alt="Privacy Choices"
                            className="privacy-icon"
                        />
                    </a>

                </div>

                <div>

                    <h4>SOCIAL</h4>

                    <div className="social">

                        <FaYoutube />
                        <FaTwitter />
                        <FaLinkedin />

                    </div>

                </div>

            </div>

            <hr />

            <div className="footer-bottom">

                <div className="footer-bottom-left">

                    <Auth0Logo className="auth0-logo" />

                </div>

                <p>
                    Copyright © 2026 Okta. All rights reserved.
                </p>

                <div className="footer-language">

                    <FiGlobe />

                    <span>English</span>

                    <FiChevronDown />

                </div>

            </div>

        </footer>

    )

}

export default Footer;
