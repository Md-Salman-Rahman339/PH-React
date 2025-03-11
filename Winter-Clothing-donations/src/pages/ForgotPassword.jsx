import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const handleReset = async () => {
        if (email) {
          try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent! Check your inbox.');
            navigate('/login');
          } catch (error) {
            alert(error.message);
          }
        } else {
          alert('Please enter your email address');
        }
      };
    
  return (

   <div>
 <h4>Reset Password</h4>
<form className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
    <input
    className='rounded-xl'
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required
    />
    <button  className="btn btn-lg" onClick={handleReset}>Reset Password</button>
  </form>
   </div>

  )
}

export default ForgotPassword
