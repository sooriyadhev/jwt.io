import "../styles/modetabs.css";

function ModeTabs({ mode, setMode }) {
  return (
    <div className="mode-tabs">

      <button
        className={mode === "decoder" ? "mode-btn active" : "mode-btn"}
        onClick={() => setMode("decoder")}
      >
        JWT Decoder
      </button>

      <button
        className={mode === "encoder" ? "mode-btn active" : "mode-btn"}
        onClick={() => setMode("encoder")}
      >
        JWT Encoder
      </button>

    </div>
  );
}

export default ModeTabs;