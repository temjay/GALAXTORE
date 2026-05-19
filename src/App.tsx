
import {Route, Routes } from "react-router-dom"
import NotFound from "./Pages/NotFound"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ProductsPage from "./Pages/ProductsPage"
import ProductView from "./Pages/ProductView"
import LoginPage from "./Pages/Authentication/LoginPage"
import RegisterPage from "./Pages/Authentication/RegisterPage"
import UserProfile from "./Pages/UserProfile"
import ProductCreatePage from "./Pages/ProductCreatePage"


function App()
{
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/view/:id" element={<ProductView />} />
                <Route path="/products/create" element={<ProductCreatePage/>} />
            </Routes>
        </>
    )
}

export default App