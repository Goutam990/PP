import React, { useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import '../bootstrap-5.0.2/css/bootstrap.min.css';
import PcResponsive from './PC_Reponsive/PcResponsive';
import MobileResponsive from './Mobile_Responsive/MobileResponsive';

function UseWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function Main() {
    const [width, height] = UseWindowSize();
    const [devSkills, setDevSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDevSkills = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/dev-skill`);
                setDevSkills(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the developer skills:', error);
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            }
        };
        fetchDevSkills();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-danger">{error}</div>;
    }

    console.log('Window size:', width, 'x', height);

    return width >= 700 ? <PcResponsive devSkills={devSkills} /> : <MobileResponsive devSkills={devSkills} />;
}

export default Main;
