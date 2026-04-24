import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthenticationScreen from "./pages/AuthenticationScreen.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Database from "./pages/Database.jsx";
import ApiKeys from "./pages/ApiKeys.jsx";
import Lost from "./pages/404.jsx";
import Verify from "./pages/verify.jsx";
import NotVerified from "./pages/NotVerified.jsx"; 
function App() {

  return (
   <Routes>
      <Route path="/" element={<AuthenticationScreen />} />
      <Route path="/account/verify" element={<Verify/>} />
      <Route path="/account/check" element={<NotVerified />} />
      <Route element={<ProtectedRoute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/database" element={<Database />} />
        <Route path="/dashboard/keys" element={<ApiKeys />} />
      </Route>
      <Route path="*" element={<Lost />} />
   </Routes>
  )
}

export default App
