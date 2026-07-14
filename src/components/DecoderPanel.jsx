import "../styles/decoderpanel.css";

import { useState } from "react";
import { LuCopy, LuCheck, LuX } from "react-icons/lu";

function DecoderPanel({ token, setToken }) {
  const handleClear = () => {
    setToken("");
  };
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(token);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="decoder-panel">

      <div className="panel-header">

        <h3>Encoded Token</h3>

        <label className="auto-focus">

          <input type="checkbox" />

          Enable auto-focus

        </label>

      </div>

      <div className="token-box">

  <div className="token-toolbar">

    <span>&gt;_ JSON Web Token (JWT)</span>

    <div className="toolbar-icons">

      <button
        className="icon-btn"
        onClick={handleCopy}
      >
        {copied ? <LuCheck /> : <LuCopy />}
      </button>

      <button
        className="icon-btn"
        onClick={handleClear}
      >
        <LuX />
      </button>

    </div>

  </div>

  <textarea
    className="jwt-input"
    spellCheck="false"
    placeholder="Paste your JWT here..."
    value={token}
    onChange={(e) => setToken(e.target.value)}
  ></textarea>

  <div className="panel-footer">

    <p>✓ Valid JWT</p>

    <p>✓ Signature Verified</p>

  </div>

</div>
    </div>
  );
}

export default DecoderPanel;