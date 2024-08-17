import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInPage from "./pages/SignIn";
import LoginPage from "./pages/Login";
import LeadPage from "./pages/Leads";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/lead" element={<LeadPage/>}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;