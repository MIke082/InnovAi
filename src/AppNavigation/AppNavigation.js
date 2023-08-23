import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AppNavigation.css'; // Подключаем файл стилей
import AboutUs from '../Screens/AboutUs/AboutUs';
import Timeline from '../Screens/Timeline/Timeline';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';



const AppNavigation = () => {
    return (
        <>
            <nav className="navigation-container">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <Link to="/Timeline" className="navigation-link" style={{ fontSize: 20 }}>Timeline</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/" className="navigation-link" style={{ fontSize: 26, color: "black", fontWeight: 'bold' }}>InnovAi</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/AboutUs" className="navigation-link" style={{ fontSize: 20 }}>About us</Link>
                    </li>
                </ul>
            </nav>
            {/* <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Timeline" element={<Timeline />} />
            </Routes> */}

        </>
    );
};

export default AppNavigation;
