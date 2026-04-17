export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Custom App — Built with AI, Deployed via Varity</h1>
      <p>This app was built with an AI coding tool and deployed using the Varity orchestration platform.</p>
      <ul>
        <li>Framework: Next.js 15</li>
        <li>Hosting: Akash (auto-selected by Varity orchestration)</li>
        <li>Database: PostgreSQL (auto-configured)</li>
        <li>Auth: Auto-configured by Varity</li>
      </ul>
    </main>
  )
}
