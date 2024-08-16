import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInPage from "./pages/SignIn";
import LoginPage from "./pages/Login";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;