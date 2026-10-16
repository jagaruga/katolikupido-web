export const metadata = {
  title: 'Child Safety Standards | Katolikupido',
  description: 'Katolikupido\u2019s standards against child sexual abuse and exploitation.',
};

export default function ChildSafety() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', background: '#0D0508', color: '#e8e0d0', minHeight: '100vh' }}>
      <header style={{ background: '#1a0a0a', borderBottom: '1px solid #3a1a1a', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#C9A84C', fontSize: '1.6rem', letterSpacing: '2px' }}>✝ Katolikupido</h1>
        <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>Child Safety Standards</p>
      </header>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}><strong>Last Updated:</strong> October 2026</p>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          Katolikupido is a Catholic dating app for adults. We have zero tolerance for child sexual abuse and exploitation (CSAE),
          including child sexual abuse material (CSAM), grooming, the sexualization of minors, and any attempt to contact or exploit a minor.
        </p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>1. Adults Only</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          Katolikupido is only for people 18 years of age or older. To create an account, a person must confirm that they are 18 or older
          and accept our <a href="/terms" style={{ color: '#C9A84C' }}>Terms of Service</a>. Any account that we find belongs to a person
          under 18 is removed.
        </p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>2. What Is Prohibited</h2>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px', lineHeight: 1.7 }}>
          <li>Any sexual content involving a minor, or content that sexualizes a minor</li>
          <li>Sharing, requesting, or offering child sexual abuse material</li>
          <li>Grooming, or trying to meet, contact, or exploit a minor</li>
          <li>Creating an account while under 18, or helping a minor do so</li>
          <li>Sexually explicit content of any kind</li>
        </ul>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          Violations lead to removal of content and to suspension or permanent termination of the account, as described in our Terms of Service.
        </p>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>3. Reporting and Blocking in the App</h2>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px', lineHeight: 1.7 }}>
          <li><strong>Report:</strong> any user can be reported from the Discover screen or from a match&apos;s profile.</li>
          <li><strong>Block:</strong> any user can be blocked from the same places. A blocked person can no longer see the blocker&apos;s profile, match with them, or message them.</li>
          <li><strong>Unmatch:</strong> a match can be ended at any time, which deletes the conversation for both people.</li>
        </ul>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>4. How We Respond</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          Reports that involve the safety of a child are treated as the highest priority. When we receive such a report, or find content
          that may involve child safety, we:
        </p>
        <ul style={{ color: '#c8b8a8', paddingLeft: '20px', marginBottom: '14px', lineHeight: 1.7 }}>
          <li>review it as a priority;</li>
          <li>remove the content and suspend or permanently terminate the account;</li>
          <li>keep the information that the law requires us to keep, and cooperate with law enforcement; and</li>
          <li>report suspected child sexual abuse and exploitation to the appropriate authorities, including law enforcement in the Philippines.</li>
        </ul>

        <h2 style={{ color: '#C9A84C', margin: '36px 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>5. Contact</h2>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          To raise a child safety concern, use the Report button in the app, or email{' '}
          <a href="mailto:support@katolikupido.com?subject=Child%20Safety" style={{ color: '#C9A84C' }}>support@katolikupido.com</a>{' '}
          with the subject <strong>Child Safety</strong>.
        </p>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          <strong>JP Santiago</strong>, designated contact for child safety<br />
          Email: <a href="mailto:support@katolikupido.com" style={{ color: '#C9A84C' }}>support@katolikupido.com</a>
        </p>
        <p style={{ color: '#c8b8a8', marginBottom: '14px' }}>
          If a child is in immediate danger, contact your local emergency services or police right away.
        </p>
      </div>
      <footer style={{ textAlign: 'center', color: '#555', fontSize: '0.8rem', padding: '24px', borderTop: '1px solid #3a1a1a' }}>
        © 2026 Katolikupido by JP Santiago. All rights reserved. ✝ Love Rooted in Faith
      </footer>
    </main>
  );
}
