import React from 'react';
import { Link } from 'react-router-dom';

export const SignupPage: React.FC = () => {
  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '4rem' }}>
      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Create Account</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
            <input type="text" className="input-control btn-block" required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" className="input-control btn-block" required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Date of Birth</label>
            <input type="date" className="input-control btn-block" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '0.5rem' }}>Sign Up</button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--gray-900)' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
};
