import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { authStatus } = useAuthenticator();

  useEffect(() => {
    if (authStatus === "authenticated") {
      navigate("/courses", { replace: true });
    }
  }, [authStatus, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <Authenticator />
      </div>
    </div>
  );
};

export default LoginPage;
