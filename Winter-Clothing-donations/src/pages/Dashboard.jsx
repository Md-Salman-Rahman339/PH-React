import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to Your Dashboard</h2>
        {user ? (
          <div className="text-center">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300"
            />
            <h3 className="text-xl font-semibold">{user.displayName}</h3>
            <p className="text-gray-600">{user.email}</p>
            <Link to="/auth/update_profile" className="btn btn-neutral mt-6">Update Profile</Link>
          </div>
        ) : (
          <p className="text-center text-red-500">No user data available. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
