import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JsonPanel from "../components/JsonPanel";
import JwtDebugger from "../components/JwtDebugger";
import Resources from "../components/Resources";
import AgentSkills from "../components/AgentSkills";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <JwtDebugger/>
        <Resources/>
        <AgentSkills/>
        <Footer/>
        </>
    );
}

export default Home;