import { Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { authStatus } = useAuthenticator();

  // ⏳ Still checking auth state
  if (authStatus === "configuring") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  // ❌ Not logged in
  if (authStatus !== "authenticated") {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;
