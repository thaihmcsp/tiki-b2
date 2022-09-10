import { Route, Navigate } from "react-router-dom";
// Redirect

function PrivateRouteShop({ children }) {
    const auth = window.localStorage.getItem('tiki-user');
    return auth ? children : <Navigate to="/sign-in-shop" />;
}
export default PrivateRouteShop;