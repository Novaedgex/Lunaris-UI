import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthenticationScreen from "./pages/AuthenticationScreen.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Lost from "./pages/404.jsx";
import Verify from "./pages/verify.jsx";
import WareHouses from "./pages/WareHouses.jsx";
function App() {

  return (
   <Routes>
      <Route path="/" element={<AuthenticationScreen />} />
      <Route path="/account/verify" element={<Verify/>} />
      <Route element={<ProtectedRoute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/datacenters" element={<WareHouses/>}/>
      </Route>
      <Route path="*" element={<Lost />} />
   </Routes>
  )
}

export default App
