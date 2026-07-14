import "../styles/toolbar.css";
function Toolbar({
  mode,
  onGenerateExample,
  onGenerateJWT,
}) {
  const algorithms = [
    "none",
    "HS256",
    "HS384",
    "HS512",
    "RS256",
    "RS384",
    "RS512",
    "ES256",
    "ES384",
    "ES512",
    "PS256",
    "PS384",
    "PS512",
  ];
  return (
    <div className="toolbar">

      <p className="toolbar-text">
        {mode === "decoder"
          ? "Paste a JWT below that you'd like to decode, validate, and verify."
          : "Fill in the fields below to generate a signed JWT."}
      </p>

      <div className="toolbar-actions">

        <button
          className="generate-btn"
          onClick={
            mode === "decoder"
              ? onGenerateExample
              : onGenerateJWT
          }
        >
          {mode === "decoder"
            ? "Generate Example"
            : "Generate JWT"}
        </button>
        <select className="algorithm-select">
          <option>Select signing algorithm</option>

          {algorithms.map((algo) => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default Toolbar;