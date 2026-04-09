import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("userId")
        navigate("/login")
    }
    return (
        <main className="page-shell">
            <section className="dashboard-card">
                <div className="dashboard-hero">
                    <div className="dashboard-copy">
                        <span className="eyebrow">Dashboard</span>
                        <h1>Welcome to your workspace</h1>
                        <p>Use the quick actions below to review your account and move through the app with a cleaner, professional interface.</p>
                    </div>

                    <div className="dashboard-stat">
                        <span className="stat-label">Status</span>
                        <strong>Active Session</strong>
                    </div>
                </div>

                <div className="action-row">
                    <button className="primary-btn" onClick={() => navigate("/profile")}>Profile</button>
                    <button className="secondary-btn" onClick={logout}>Logout</button>
                </div>
            </section>
        </main>
    )
}
export default Home
