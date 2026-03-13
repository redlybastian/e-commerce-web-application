'use client'

import { useState } from "react";

export default function LogInPage() {
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });

    if (e.target.name === 'password') {
      setError(e.target.value === '' ? 'Password is required' : '');
    }
    if (e.target.name === 'email') {
      setError(e.target.value === '' ? 'Email is required' : '');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100svh;
          width: 100%;
          background: url('/log_background.jpg') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .login-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(8, 8, 20, 0.60) 50%,
            rgba(0, 0, 0, 0.80) 100%
          );
          z-index: 0;
        }

        .login-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(80, 60, 160, 0.18) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .login-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: min(460px, 92vw);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.5rem, 4vw, 2.5rem);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes riseUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Headline ── */
        .headline-block {
          text-align: center;
          color: #fff;
          animation: slideDown 0.85s cubic-bezier(.22,1,.36,1) both;
        }

        .headline-block h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 6vw, 3.2rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: 0.01em;
          color: #fff;
          text-shadow: 0 2px 24px rgba(0,0,0,0.5);
        }

        .headline-block h1 em {
          font-style: italic;
          color: #c9b8ff;
        }

        .headline-block h2 {
          margin-top: 0.55rem;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 2.2vw, 0.92rem);
          font-weight: 300;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        /* ── Card ── */
        .card {
          width: 100%;
          background: rgba(10, 8, 22, 0.52);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: clamp(1.2rem, 4vw, 2rem);
          padding: clamp(2rem, 6vw, 2.8rem) clamp(1.5rem, 6vw, 2.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.2rem, 3vw, 1.8rem);
          box-shadow:
            0 0 0 1px rgba(130, 100, 255, 0.08),
            0 24px 60px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.07);
          animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.15s both;
        }

        .card-logo {
          width: clamp(3rem, 10vw, 4rem);
          height: clamp(3rem, 10vw, 4rem);
          border-radius: 50%;
          border: 1px solid rgba(180, 160, 255, 0.3);
          box-shadow: 0 0 20px rgba(120, 80, 255, 0.2), 0 4px 16px rgba(0,0,0,0.4);
          object-fit: cover;
        }

        .card h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 4vw, 1.8rem);
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.92);
        }

        /* ── Form ── */
        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 0.8rem;
        }

        .field-wrapper {
          position: relative;
        }

        .login-form input {
          width: 100%;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0.6rem;
          padding: 0.8rem 1.1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.85rem, 2.5vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          -webkit-font-smoothing: antialiased;
        }

        .login-form input::placeholder {
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.04em;
          font-size: 0.85rem;
        }

        .login-form input:hover {
          border-color: rgba(180, 160, 255, 0.3);
          background: rgba(255, 255, 255, 0.09);
        }

        .login-form input:focus {
          border-color: rgba(160, 130, 255, 0.6);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 0 3px rgba(130, 100, 255, 0.12), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .error-text {
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          color: #ff8fa3;
          min-height: 1rem;
          padding-left: 0.2rem;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .error-text.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Button ── */
        .login-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: clamp(0.75rem, 2.5vw, 0.9rem) 1.5rem;
          border: none;
          border-radius: 0.6rem;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.82rem, 2.2vw, 0.9rem);
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #6B4FD8 0%, #9B6DFF 50%, #7A58E8 100%);
          background-size: 200% 200%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease, background-position 0.4s ease;
          box-shadow: 0 4px 20px rgba(106, 79, 216, 0.45), 0 1px 0 rgba(255,255,255,0.1) inset;
        }

        .login-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .login-btn:hover {
          transform: translateY(-1px);
          background-position: right center;
          box-shadow: 0 8px 30px rgba(106, 79, 216, 0.6), 0 1px 0 rgba(255,255,255,0.12) inset;
        }
        .login-btn:hover::before { opacity: 1; }

        .login-btn:active {
          transform: translateY(0px) scale(0.99);
          box-shadow: 0 3px 14px rgba(106, 79, 216, 0.4);
        }

        /* ── Footer text ── */
        .footer-copy {
          text-align: center;
          color: rgba(255,255,255,0.85);
          max-width: 380px;
          animation: riseUp 0.9s cubic-bezier(.22,1,.36,1) 0.35s both;
        }

        .footer-copy h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 3vw, 1.2rem);
          font-weight: 400;
          font-style: italic;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.75);
          line-height: 1.4;
          margin-bottom: 0.7rem;
        }

        .footer-copy p {
          font-size: clamp(0.72rem, 2vw, 0.82rem);
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.02em;
        }

        /* ── Responsive breakpoints ── */

        /* Mobile ≤ 480px */
        @media (max-width: 480px) {
          .login-root { padding: 1.25rem 1rem; }
          .login-container { gap: 1.4rem; }
          .card { padding: 1.8rem 1.3rem; gap: 1.2rem; border-radius: 1.2rem; }
          .headline-block h1 { font-size: 1.9rem; }
        }

        /* Tablet 481–1024px */
        @media (min-width: 481px) and (max-width: 1024px) {
          .login-container { max-width: 440px; }
          .headline-block h1 { font-size: clamp(2rem, 4.5vw, 2.8rem); }
        }

        /* Desktop 1025–1440px: center, bounded width */
        @media (min-width: 1025px) {
          .login-container { max-width: 480px; }
        }

        /* Large / 27" monitor ≥ 2400px — scale up gracefully */
        @media (min-width: 2400px) {
          .login-container { max-width: 600px; }
          .headline-block h1 { font-size: 4rem; }
          .card { padding: 3.5rem 3.2rem; border-radius: 2.5rem; }
          .card-logo { width: 5.5rem; height: 5.5rem; }
          .card h2 { font-size: 2.2rem; }
          .login-form input { font-size: 1.1rem; padding: 1rem 1.3rem; }
          .login-btn { font-size: 1rem; padding: 1.1rem 2rem; }
          .footer-copy h3 { font-size: 1.4rem; }
          .footer-copy p { font-size: 0.96rem; }
        }
      `}</style>

      <section className="login-root">
        <div className="login-container">

          {/* Headline */}
          <div className="headline-block">
            <h1>Return to Your <em>Frequency.</em></h1>
            <h2>Reconnect with the heart of the beat</h2>
          </div>

          {/* Card */}
          <div className="card">
            <img className="card-logo" src="/electric _web.png" alt="Logo" />
            <h2>Log In</h2>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="field-group">
                <div className="field-wrapper">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    autoComplete="email"
                  />
                </div>
                <span className={`error-text ${error && focused !== 'password' ? 'show' : ''}`}>{error}</span>
              </div>

              <div className="field-group">
                <div className="field-wrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleChange}
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused(null)}
                    autoComplete="current-password"
                  />
                </div>
                <span className={`error-text ${error && focused !== 'email' ? 'show' : ''}`}>{error}</span>
              </div>

              <button className="login-btn" type="submit">Log In</button>
            </form>
          </div>

          {/* Footer */}
          <div className="footer-copy">
            <h3>The world went quiet while you were away.</h3>
            <p>
              Every note you've ever loved is waiting just behind this door.
              We've kept your sanctuary warm and your playlists ready —
              all that's missing is the listener.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}