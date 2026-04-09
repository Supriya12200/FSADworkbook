import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/auth/login", {
            email, password
        }).then(res => {
            if (res.data) {
                localStorage.setItem("userId", res.data.id)
                navigate("/home")
            } else {
                alert("Invalid Login")
            }
        })
    }
    return (
        <main className="page-shell">
            <section className="auth-card">
                <div className="auth-layout compact-auth">
                    <div className="auth-showcase">
                        <div className="auth-copy">
                            <span className="eyebrow">Welcome Back</span>
                            <h1>Sign in to your workspace</h1>
                            <p>Continue with your saved account and manage your details from a cleaner dashboard.</p>
                        </div>
                    </div>

                    <div className="form-panel">
                        <form className="auth-form" onSubmit={submit}>
                            <label className="field">
                                <span>Email</span>
                                <input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label className="field">
                                <span>Password</span>
                                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <button className="primary-btn">Login</button>
                        </form>

                        <p className="form-footer">
                            New here? <button type="button" className="text-btn" onClick={() => navigate("/")}>Create an account</button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Login
