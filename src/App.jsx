import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchOffset, setGlitchOffset] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset(Math.random() * 4 - 2)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="tech-container">
      <div className="grid-bg"></div>
      <div className="glow-orb orb-1" style={{
        transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
      }}></div>
      <div className="glow-orb orb-2" style={{
        transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
      }}></div>
      
      <div className="content">
        <div className="badge">🚀 FUTURE IS NOW</div>
        
        <h1 className="title">
          <span className="glitch" style={{ transform: `translateX(${glitchOffset}px)` }}>WELCOME</span>
          <br />
          <span className="gradient-text">TO THE FUTURE</span>
        </h1>
        
        <p className="subtitle">
          Exploring the boundaries of technology and innovation
        </p>
        
        <div className="tech-stack">
          <div className="tech-item">
            <span className="tech-icon">⚡</span>
            <span>React</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔷</span>
            <span>Vite</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">💎</span>
            <span>WebGL</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🤖</span>
            <span>AI</span>
          </div>
        </div>
        
        <div className="cta-group">
          <button className="btn-primary">
            <span>Explore Now</span>
            <div className="btn-glow"></div>
          </button>
          <button className="btn-secondary">
            <span>Learn More</span>
          </button>
        </div>
        
        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">10K+</div>
            <div className="stat-label">Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0ms</div>
            <div className="stat-label">Latency</div>
          </div>
        </div>
      </div>
      
      <div className="scanline"></div>
    </div>
  )
}

export default App
