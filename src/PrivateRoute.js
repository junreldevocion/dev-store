import { Route, Navigate, useLocation } from "react-router";


function Element({isAuth, element}) {
    const location = useLocation()
    return isAuth ? (element) : (<Navigate to="/login" state={{ from: location }} />)
}

export default function PrivateRoute({isAuth, element, ...rest}) {
    return (
        <Route {...rest} element={ <Element isAuth={isAuth} element={element} />} />
    )
}