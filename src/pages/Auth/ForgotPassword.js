
import Layout from '../../components/Layout/Layout'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
      
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/forgot-password', { email, newPassword, answer });
            if (res.data.success) {
                toast.success(res.data && res.data.message);
                
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };

  return (
    <Layout title={'Forgot Password - Ecommerce App'}>
        <div className="form-container">
                <h1 className="title">Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Favorite Sport"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your Password"
                            required
                        />
                    </div>

                    

                   
                   
                    <button type="submit" className="btn btn-primary">RESET</button>
                </form>
            </div>
    </Layout>
  )
}

export default ForgotPassword