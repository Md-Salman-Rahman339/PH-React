import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth();
  
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
    
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
          .then(() => {
            setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
            navigate('/auth/dashboard');
          })
          .catch((err) => console.log(err));
      };
  return (
<form onSubmit={handleUpdate}  className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box gap-4">
  <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box gap-4">
    <legend className="fieldset-legend">Update Profile</legend>

    <input type="text" name="name" placeholder="Name" required />

    <input type="text" name="photo" placeholder="Photo URL" required />

    <button type="submit" className="btn btn-neutral mt-4">Update Profile</button>
  </fieldset>
</form>

  )
}

export default UpdateProfile
