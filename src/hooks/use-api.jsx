import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:4000/api';

export const useApiData = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}${endpoint}`);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

// Hook específico para múltiples endpoints
export const useDashboardData = () => {
    const [dashboardData, setDashboardData] = useState({
        stats: null,
        overview: null,
        sales: null,
        products: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                
                const response = await fetch(`${API_BASE_URL}/dashboard`);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                
                const data = await response.json();

                setDashboardData({
                    stats: data.stats,
                    overview: data.overview,
                    sales: data.sales,
                    products: data.products
                });
                setError(null);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    return { dashboardData, loading, error };
};
