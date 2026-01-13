import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
    const location = useLocation();
    // Maybe hide header/footer on login? Image 3 shows a full page login, no visible header/footer like the others.
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return <Outlet />;
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
