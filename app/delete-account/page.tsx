export const metadata = {
  title: 'Delete Your Account | Katolikupido',
  description: 'How to delete your Katolikupido account and all associated data.',
};

export default function DeleteAccount() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#0D0508', color: '#e8e0d0', minHeight: '100vh' }}>
      <header style={{ background: '#1a0a0a', borderBottom: '1px solid #3a1a1a', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#C9A84C', fontSize: '1.6rem', letterSpacing: '2px' }}>✝ Katolikupido</h1>
        <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>Delete Your Account</p>
      </header>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          You can delete your Katolikupido account and all of its data at any time. Deletion is permanent and cannot be undone.
          There are two ways to do it.
        </p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Option 1: In the App (fastest)</h2>
        <ol style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px', lineHeight: 1.7 }}>
          <li>Open Katolikupido and sign in.</li>
          <li>Go to your <strong>Profile</strong> screen.</li>
          <li>Scroll to the bottom and tap <strong>DELETE ACCOUNT</strong>.</li>
          <li>Confirm by tapping <strong>Yes, Delete My Account</strong>.</li>
          <li>On the &quot;Last Step&quot; window, type <strong>DELETE</strong> and tap <strong>DELETE MY ACCOUNT</strong>.</li>
        </ol>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>Your account is removed right away and you are signed out.</p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Option 2: Without the App</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          If you can no longer open the app, or you have uninstalled it, send us a request by email:
        </p>
        <ol style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px', lineHeight: 1.7 }}>
          <li>
            Email <a href="mailto:support@katolikupido.com?subject=Delete%20my%20account" style={{ color: '#C9A84C' }}>support@katolikupido.com</a> with
            the subject <strong>Delete my account</strong>.
          </li>
          <li>Send it from the <strong>same email address you used to register</strong>, so we can confirm the account is yours.</li>
          <li>We may reply to ask you to confirm the request.</li>
          <li>We will delete your account and data within <strong>30 days</strong> of confirming your request.</li>
        </ol>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>What Gets Deleted</h2>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px', lineHeight: 1.7 }}>
          <li>Your profile information, including your name, bio, interests, and faith-related answers</li>
          <li>Your profile photo</li>
          <li>Your messages, matches, and swipes</li>
          <li>Reports you filed, and reports filed about you</li>
          <li>Your push notification token</li>
          <li>Your login (email address and password)</li>
        </ul>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          Once your account is deleted, other users can no longer see your profile or any conversations with you.
          If you want to use Katolikupido again later, you will need to create a new account.
        </p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Questions</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          Write to <a href="mailto:support@katolikupido.com" style={{ color: '#C9A84C' }}>support@katolikupido.com</a>.
          You can also read our <a href="/privacy" style={{ color: '#C9A84C' }}>Privacy Policy</a>.
        </p>
      </div>
      <footer style={{ textAlign: 'center', color: '#555', fontSize: '0.8rem', padding: '24px', borderTop: '1px solid #3a1a1a' }}>
        © 2026 Katolikupido by JP Santiago. All rights reserved. ✝ Love Rooted in Faith
      </footer>
    </main>
  );
}
