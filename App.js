import Routes from "./src/routes";
import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
