import "../styles/workspace.css";

import DecoderPanel from "./DecoderPanel";
import JsonPanel from "./JsonPanel";
import SignaturePanel from "./SignaturePanel";

function Workspace({
  mode,
  token,
  setToken,
  decodedHeader,
  decodedPayload,

  header,
  setHeader,
  payload,
  setPayload,
  secret,
  setSecret,
  encodedJWT,
}) {
  return (
    <>
      <section
        className={`workspace ${
          mode === "decoder"
            ? "decoder-mode"
            : "encoder-mode"
        }`}
      >
        {mode === "decoder" ? (
          <>
            <div className="left-panel">

              <DecoderPanel
                token={token}
                setToken={setToken}
              />

            </div>

            <div className="right-panel">

              <JsonPanel
                title="Decoded Header"
                data={decodedHeader}
              />

              <JsonPanel
                title="Decoded Payload"
                data={decodedPayload}
              />

              <SignaturePanel />

            </div>
          </>
        ) : (
          <>
            <div className="left-panel encoder-left">

              <JsonPanel
                title="Header"
                data={header}
                editable
                onChange={setHeader}
              />

              <JsonPanel
                title="Payload"
                data={payload}
                editable
                onChange={setPayload}
              />

              <SignaturePanel
                secret={secret}
                setSecret={setSecret}
              />

            </div>

            <div className="right-panel encoder-right">

              <JsonPanel
                title="Encoded JWT"
                data={encodedJWT}
                readOnly
              />

            </div>
          </>
        )}
      </section>

      <div className="workspace-links">
        <a href="#">Share feedback</a>
        <span>|</span>
        <a href="#">Report issue</a>
      </div>
    </>
  );
}

export default Workspace;