import "../styles/modal.css";

import { LuX } from "react-icons/lu";
import { highlightJson, highlightJwt } from "../utils/jsonHighlight";

function Modal({ open, onClose, title, data }) {
  if (!open) return null;

  const isPlainString = typeof data === "string";
  const isJwtLikeString = isPlainString && data.includes(".");
  const displayText = isPlainString ? data : JSON.stringify(data, null, 2);

  const content = isPlainString
    ? (isJwtLikeString ? highlightJwt(displayText) : displayText)
    : highlightJson(displayText);

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-header">

          <h2>{title}</h2>

          <button className="icon-btn" onClick={onClose}>
            <LuX />
          </button>

        </div>

        <pre className={isJwtLikeString ? "jwt-encoded" : ""}>
          {content}
        </pre>

      </div>

    </div>
  );
}

export default Modal;
