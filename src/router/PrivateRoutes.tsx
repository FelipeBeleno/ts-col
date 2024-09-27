import { Navigate } from 'react-router-dom';
import { SideBar } from '../components/SideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {


    const login = useSelector((state: RootState) => state.login);


    if (!login.logged) {
        return <Navigate to="/login" replace />;
    }


    return <SideBar> {children}</SideBar>;
};

export default PrivateRoute;
