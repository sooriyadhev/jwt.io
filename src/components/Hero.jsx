import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>
        JSON Web Token
        <br />
        (JWT) Debugger
      </h1>

      <p>
        Decode, verify, and generate JSON Web Tokens,
        which are an open, industry standard
        <a href="#"> RFC 7519 </a>
        method for representing claims securely
        between two parties.
      </p>
      <div className="hero-divider"></div>


    </section>
  );
}

export default Hero;