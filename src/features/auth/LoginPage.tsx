import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login aquí
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '4rem' }}>
      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Sign In</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
            <input type="text" className="input-control btn-block" required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
            <input type="password" className="input-control btn-block" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '0.5rem' }}>Login</button>
        </form>

        <div style={{ margin: '1.5rem 0', textAlign: 'center', color: 'var(--gray-500)' }}>
          <small>OR CONTINUE WITH</small>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button className="btn btn-block">Google</button>
          <button className="btn btn-block">GitHub</button>
          <button className="btn btn-block">Microsoft</button>
        </div>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--gray-900)' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};
