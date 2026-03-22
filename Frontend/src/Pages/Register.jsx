import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Services/firebaseConfig'
import { toast } from 'react-toastify'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            toast.success("Successfully registered! You can now log in.")
            navigate('/login')
        } catch (error) {
            console.error("Registration error:", error)
            toast.error(error.message || "Failed to register")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Create Account</h2>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter a valid email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Minimum 6 characters"
                            minLength="6"
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`w-full text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center ${loading ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300'}`}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-8 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-emerald-600 hover:text-emerald-800 font-semibold transition">Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
