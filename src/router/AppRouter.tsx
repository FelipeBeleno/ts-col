import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import PrivateRoute from './PrivateRoutes';
import { HomePage } from '../pages/HomePage';
import PresidentesPage from '../pages/PresidentesPage';
import DepartamentoPage from '../pages/DepartamentoPage';
import { ConstitutionPage } from '../pages/ConstitutionPage';
import { MapsPage } from '../pages/MapsPage';


const App: React.FC = () => {
    return (

        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/presidents"
                    element={
                        <PrivateRoute>
                            <PresidentesPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path='/departaments'
                    element={
                        <PrivateRoute>
                            <DepartamentoPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path='/constitution'
                    element={
                        <PrivateRoute>
                            <ConstitutionPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path='/maps'
                    element={
                        <PrivateRoute>
                            <MapsPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>

    );
};

export default App;
