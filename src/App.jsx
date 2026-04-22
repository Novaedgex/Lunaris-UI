import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthenticationScreen from "./pages/AuthenticationScreen.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Database from "./pages/Database.jsx";
import ApiKeys from "./pages/ApiKeys.jsx";
import Lost from "./pages/404.jsx";
import Verify from "./pages/verify.jsx";
function App() {

  return (
   <Routes>
      <Route path="/" element={<AuthenticationScreen />} />
      <Route path="*" element={<Lost />} />
      <Route path="/verify" element={<Verify/>} />
      <Route element={<ProtectedRoute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/database" element={<Database />} />
        <Route path="/dashboard/keys" element={<ApiKeys />} />
      </Route>
   </Routes>
  )
}

export default App
