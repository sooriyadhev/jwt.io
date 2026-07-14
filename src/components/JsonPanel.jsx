import "../styles/jsonpanel.css";

import { LuCopy, LuCheck } from "react-icons/lu";
import { FiMaximize2 } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { highlightJson, highlightJwt } from "../utils/jsonHighlight";

function JsonPanel({
  title,
  data,
  editable = false,
  onChange,
}) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const isPlainString = typeof data === "string";
  const isJwtLikeString = isPlainString && data.includes(".");
  const displayText = isPlainString ? data : JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayText);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (e) => {
    if (!editable) return;

    try {
      const value = JSON.parse(e.target.value);
      onChange(value);
    } catch {
      // Ignore invalid JSON while typing
    }
  };
  const editorRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.style.height = "auto";
      editorRef.current.style.height =
        editorRef.current.scrollHeight + "px";
    }
  }, [data]);

  const renderHighlighted = () => {
    if (isPlainString) {
      return isJwtLikeString ? highlightJwt(displayText) : displayText;
    }
    return highlightJson(displayText);
  };

  return (
    <>
      <div className="json-viewer">

        <h3>{title}</h3>

        <div className="viewer-toolbar">

          <div className="viewer-tabs">
            <button className="tab active-tab">
              JSON
            </button>

            <button className="tab">
              Claims Breakdown
            </button>
          </div>

          <div className="viewer-actions">

            <button
              className="icon-btn"
              onClick={handleCopy}
            >
              {copied ? <LuCheck /> : <LuCopy />}
            </button>

            <button
              className="icon-btn"
              onClick={() => setOpen(true)}
            >
              <FiMaximize2 />
            </button>

          </div>

        </div>

        <div className="viewer-content">

          {editable ? (
            <div className="json-editor-wrap">
              <pre
                ref={highlightRef}
                className="json-editor-highlight"
                aria-hidden="true"
              >
                {highlightJson(displayText)}
                {"\n"}
              </pre>

              <textarea
                ref={editorRef}
                className="json-editor"
                spellCheck="false"
                value={displayText}
                onChange={handleEdit}
              />
            </div>
          ) : (
            <pre className={isJwtLikeString ? "jwt-encoded" : ""}>
              {renderHighlighted()}
            </pre>
          )}

        </div>

      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        data={data}
      />
    </>
  );
}

export default JsonPanel;
