import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CategoryByDIvision = () => {
    const data = useLoaderData();

    return (
        <div className="mask-half-1">
            <h2 className="text-2xl font-bold mb-6 text-fuchsia-700">Donation Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(campaign => (
                    <div key={campaign.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                            <p className="text-gray-600 mb-4">{campaign.description}</p>
                            <p className="text-sm text-gray-500"><strong>Division:</strong> {campaign.division}</p>
                            <Link to={`/campaign/${campaign.id}`}>
                                <button className="mt-4 w-full bg-fuchsia-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                    Donate Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryByDIvision;