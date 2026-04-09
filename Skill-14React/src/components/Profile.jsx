import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Profile() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const id = localStorage.getItem("userId")
    
    useEffect(() => {
        axios.get(`http://localhost:8080/auth/user/${id}`)
            .then(res => setUser(res.data))
    }, [])
    return (
        <main className="page-shell">
            <section className="profile-card">
                <div className="profile-header">
                    <span className="eyebrow">Account</span>
                    <h1>Profile overview</h1>
                    <p>Your saved details are presented in a more professional summary layout.</p>
                </div>

                <div className="profile-grid">
                    <article className="info-tile">
                        <span className="info-label">Name</span>
                        <strong>{user.name || "Not available"}</strong>
                    </article>
                    <article className="info-tile">
                        <span className="info-label">Email</span>
                        <strong>{user.email || "Not available"}</strong>
                    </article>
                </div>

                <div className="action-row profile-actions">
                    <button className="secondary-btn" onClick={() => navigate("/home")}>Back to Home</button>
                </div>
            </section>
        </main>
    )
}
export default Profile
