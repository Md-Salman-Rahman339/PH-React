import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/Donation.json')
            .then((res) => res.json())
            .then((data) => {
                const uniqueDivisions = [...new Set(data.map(campaign => campaign.division))];
                setCategories(uniqueDivisions);
            });
    }, []);

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-fuchsia-700">All Divisions</h2>
            <ul className="space-y-2">
                {categories.map((division, index) => (
                    <li key={index}>
                        <Link 
                            to={`/category/${division}`} 
                            className="text-fuchsia-400 hover:text-blue-700 transition-colors duration-300"
                        >
                            {division}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftNavbar;