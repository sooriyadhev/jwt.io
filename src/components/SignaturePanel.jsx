import "../styles/signaturePanel.css";

import { LuCopy, LuX } from "react-icons/lu";

function SignaturePanel({ secret, setSecret }) {
  return (
    <div className="signature-panel">

      <div className="signature-header">

        <div>
          <h3>
            JWT Signature Verification
            <span> (Optional)</span>
          </h3>

          <p>Enter the secret used to sign the JWT below:</p>
        </div>

        <div className="base64-toggle">
          <span>BASE64URL ENCODED</span>
          <input type="checkbox" />
        </div>

      </div>

      <div className="signature-box">

        <div className="signature-toolbar">

          <span>&gt;_ Secret</span>

          <div className="toolbar-icons">
            <button className="icon-btn">
              <LuCopy />
            </button>

            <button className="icon-btn">
              <LuX />
            </button>
          </div>

        </div>

        <textarea
          className="secret-input"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          spellCheck="false"
        />

       <p className="valid-secret">✓ Valid secret</p>
       
      </div>

    </div>
  );
}

export default SignaturePanel;