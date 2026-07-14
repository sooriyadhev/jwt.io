import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { SignJWT } from "jose";
import ModeTabs from "./ModeTabs";
import Toolbar from "./Toolbar";
import WorkSpace from "./WorkSpace";

import "../styles/jwtDebugger.css";

function JwtDebugger() {
  const [mode, setMode] = useState("decoder");
  const [token, setToken] = useState("");
  const sampleJWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  const handleGenerateExample = () => {
    setToken(sampleJWT);
  };
  const [decodedHeader, setDecodedHeader] = useState({});

  const [decodedPayload, setDecodedPayload] = useState({});
  useEffect(() => {
    if (!token.trim()) {
      setDecodedHeader({});
      setDecodedPayload({});
      return;
    }

    try {
      const payload = jwtDecode(token);
      const header = jwtDecode(token, { header: true });

      setDecodedHeader(header);
      setDecodedPayload(payload);
    } catch (err) {
      setDecodedHeader({});
      setDecodedPayload({});
    }
  }, [token]);
  const [header, setHeader] = useState({
    alg: "HS256",
    typ: "JWT",
  });

  const [payload, setPayload] = useState({
  sub: "1234567890",
  name: "John Doe",
  admin: true,
  iat: Math.floor(Date.now() / 1000),
});
  const [secret, setSecret] = useState(
    "a-string-secret-at-least-256-bits-long"
  );

  const [encodedJWT, setEncodedJWT] = useState("");

  const generateJWT = async () => {
    try {
      const secretKey = new TextEncoder().encode(secret);

      const jwt = await new SignJWT(payload)
        .setProtectedHeader(header)
        .sign(secretKey);

      setEncodedJWT(jwt);
    } catch (err) {
      console.error(err);
      setEncodedJWT(err.message);
    }
  };

  return (
    <section className="jwt-debugger">

      <ModeTabs mode={mode} setMode={setMode} />

      <Toolbar
        mode={mode}
        onGenerateExample={handleGenerateExample}
        onGenerateJWT={generateJWT}
      />

      <WorkSpace
        mode={mode}
        token={token}
        setToken={setToken}
        decodedHeader={decodedHeader}
        setDecodedHeader={setDecodedHeader}
        decodedPayload={decodedPayload}
        setDecodedPayload={setDecodedPayload}

        header={header}
        setHeader={setHeader}
        payload={payload}
        setPayload={setPayload}
        secret={secret}
        setSecret={setSecret}
        encodedJWT={encodedJWT}
        setEncodedJWT={setEncodedJWT}
      />

    </section>
  );
}

export default JwtDebugger;