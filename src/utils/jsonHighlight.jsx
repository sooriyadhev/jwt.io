// Lightweight, dependency-free JSON syntax highlighter.
// Tokenizes a pretty-printed JSON string and wraps each token in a
// classed <span>, leaving braces/brackets/commas/whitespace untouched
// so indentation is pixel-identical to the plain-text version.

const TOKEN_REGEX =
  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(?:true|false)\b|\bnull\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;

export function highlightJson(jsonString) {
  if (typeof jsonString !== "string") return jsonString;

  const parts = [];
  let lastIndex = 0;
  let match;

  TOKEN_REGEX.lastIndex = 0;

  while ((match = TOKEN_REGEX.exec(jsonString)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={parts.length}>{jsonString.slice(lastIndex, match.index)}</span>
      );
    }

    const token = match[0];
    let className = "json-tok-number";

    if (token.startsWith('"')) {
      className = /:\s*$/.test(token) ? "json-tok-key" : "json-tok-string";
    } else if (token === "true" || token === "false") {
      className = "json-tok-boolean";
    } else if (token === "null") {
      className = "json-tok-null";
    }

    parts.push(
      <span key={parts.length} className={className}>
        {token}
      </span>
    );

    lastIndex = TOKEN_REGEX.lastIndex;
  }

  if (lastIndex < jsonString.length) {
    parts.push(<span key={parts.length}>{jsonString.slice(lastIndex)}</span>);
  }

  return parts;
}

// Highlights an encoded JWT string (header.payload.signature) with a
// distinct color per segment, matching jwt.io's convention.
export function highlightJwt(token) {
  if (typeof token !== "string" || !token) return token;

  const segments = token.split(".");
  const classNames = ["jwt-tok-header", "jwt-tok-payload", "jwt-tok-signature"];

  return segments.map((segment, i) => (
    <span key={i}>
      {i > 0 && <span className="jwt-tok-dot">.</span>}
      <span className={classNames[i] || "jwt-tok-signature"}>{segment}</span>
    </span>
  ));
}
