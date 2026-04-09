import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/auth/register", {
            name, email, password }).then(() => { navigate("/login") })
         }
    return (
        <main className="page-shell">
            <section className="auth-card signup-card">
                <div className="signup-accent" aria-hidden="true">
                    <div className="signup-orb signup-orb-one"></div>
                    <div className="signup-orb signup-orb-two"></div>
                </div>

                <div className="auth-layout">
                    <div className="auth-showcase">
                        <div className="signup-badge">Join Us</div>
                        <div className="auth-copy">
                            <span className="eyebrow">Create Account</span>
                            <h1>Build your account in minutes</h1>
                            <p>Set up your access with a clean, centered signup flow designed to feel simple and professional.</p>
                        </div>
                        <div className="feature-list">
                            <div className="feature-pill">Clean interface</div>
                            <div className="feature-pill">Secure access</div>
                            <div className="feature-pill">Fast onboarding</div>
                        </div>
                    </div>

                    <div className="form-panel">
                        <form className="auth-form" onSubmit={submit}>
                            <label className="field">
                                <span>Full Name</span>
                                <input placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
                            </label>
                            <label className="field">
                                <span>Email Address</span>
                                <input placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label className="field">
                                <span>Password</span>
                                <input type="password" placeholder="Create a secure password" onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <button className="primary-btn">Create Account</button>
                        </form>

                        <p className="form-footer">
                            Already have an account? <button type="button" className="text-btn" onClick={() => navigate("/login")}>Sign in</button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Register
