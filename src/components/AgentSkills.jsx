import "../styles/agentskills.css";

import { LuCopy } from "react-icons/lu";
import { FiChevronRight } from "react-icons/fi";

function AgentSkills() {
  return (
    <section className="agent-skills">

      <div className="agent-left">

        <h2>Give your AI Agents JWT skills</h2>

        <p>
          Use agent skills to decode, encode and validate JSON Web
          Tokens in your favorite agentic coding harness.
        </p>

        <button className="skill-btn">
          See the skills
          <FiChevronRight />
        </button>

      </div>

      <div className="terminal-card">

        <div className="terminal-header">

          <span>&gt;_ Terminal</span>

          <button className="icon-btn">
            <LuCopy />
          </button>

        </div>

        <div className="terminal-body">

          <p>Install all skills</p>

          <pre>$ npx skills add jsonwebtoken/jwt-skills</pre>

          <p>Install a specific skill</p>

          <pre>
$ npx skills add jsonwebtoken/jwt-skills -s jwt-decode
          </pre>

        </div>

      </div>

    </section>
  );
}

export default AgentSkills;