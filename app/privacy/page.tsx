export default function PrivacyPolicy() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#0D0508', color: '#e8e0d0', minHeight: '100vh' }}>
      <header style={{ background: '#1a0a0a', borderBottom: '1px solid #3a1a1a', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#C9A84C', fontSize: '1.6rem', letterSpacing: '2px' }}>✝ Katolikupido</h1>
        <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>Privacy Policy</p>
      </header>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic', borderTop: '1px solid #3a1a1a', borderBottom: '1px solid #3a1a1a', padding: '12px 0', margin: '24px 0 40px' }}>
          "Katolikupido runs on the virtues of honesty, modesty and chastity."
        </p>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}><strong>Effective Date:</strong> September 1, 2026</p>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>This Privacy Policy describes how Katolikupido, operated by <strong>Jan Paolo S. Santiago</strong>, collects, uses, and protects your personal information when you use the Katolikupido mobile application.</p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>1. Information We Collect</h2>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px' }}>
          <li>Account Information: email address and password</li>
          <li>Profile Information: name, gender, birth year, parish, diocese, region, profession, education, marital status, bio, interests, and profile photo</li>
          <li>Usage Data: swipes, matches, and messages</li>
          <li>Last Active Status: used to display the "Active Today" badge</li>
        </ul>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>2. How We Use Your Information</h2>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px' }}>
          <li>Create and manage your account</li>
          <li>Display your profile to other users for matchmaking</li>
          <li>Facilitate matches and in-app messaging</li>
          <li>Improve and maintain the App</li>
          <li>Respond to user reports and enforce our Terms of Service</li>
        </ul>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>3. Information Sharing</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>We do not sell, trade, or rent your personal information to third parties. Your profile is visible to other registered users for matchmaking purposes. We use Supabase to store and manage data securely.</p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>4. Data Storage and Security</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>Your data is stored securely using Supabase, hosted in the Singapore region. We implement reasonable technical measures to protect your personal information.</p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>5. Your Rights</h2>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px' }}>
          <li>Access and update your profile at any time through the App</li>
          <li>Delete your account and all associated data permanently through the App</li>
          <li>Request a copy of your personal data by contacting us</li>
        </ul>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>6. Children's Privacy</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>Katolikupido is intended for users 18 years of age or older. We do not knowingly collect personal information from minors.</p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>7. Contact Us</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          <strong>Jan Paolo S. Santiago</strong><br />
          Email: <a href="mailto:thejayarugashow@gmail.com" style={{ color: '#C9A84C' }}>thejayarugashow@gmail.com</a>
        </p>
      </div>
      <footer style={{ textAlign: 'center', color: '#555', fontSize: '0.8rem', padding: '24px', borderTop: '1px solid #3a1a1a' }}>
        © 2026 Katolikupido by Jan Paolo S. Santiago. All rights reserved. ✝ Love Rooted in Faith
      </footer>
    </main>
  );
}