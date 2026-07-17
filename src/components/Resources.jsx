import "../styles/resources.css";

import ebook from "../assets/ebook.svg";
import end from "../assets/en.diagram.jpg";
import {FiArrowRight,FiChevronRight} from "react-icons/fi";


function Resources() {
    return (
        <section className="resources">

            <div className="handbook-card">

                <div className="handbook-image">
                    <img src={ebook} alt="JWT Handbook" />
                </div>
                <div className="json-card">
                    <pre>{`{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}`}</pre>
                </div>

                <div className="handbook-content">

                    <h2>Get the JWT Handbook</h2>

                    <p>
                        Learn how JWT came to be and what problems it was designed
                        to tackle. Download it today for free.
                    </p>

                    <button className="resource-btn">
                        Download Ebook <FiArrowRight />
                    </button>

                </div>

            </div>

            <div className="resource-grid">

                <div className="resource-item">

                    <h2>
                        Looking for a JWT library?
                    </h2>

                    <p>
                        Head on over to our libraries page to find a JWT library
                        in your favorite language.
                    </p>

                    <button className="resource-btn">
                        See all libraries <FiChevronRight />
                    </button>

                </div>

               <div className="resource-item resource-large">

    <div className="resource-text">

        <h2>
            Get Started with JSON Web Tokens
        </h2>

        <p>
            Securely implement authentication with JWTs using Auth0
            on any stack and any device in less than 10 minutes.
        </p>

        <button className="resource-btn">
            Create a free account <FiChevronRight />
        </button>

    </div>

    <div className="resource-image">

        <img
            src={end}
            alt="Authentication Flow"
        />

    </div>

</div>

            </div>

        </section>
    );
}

export default Resources;