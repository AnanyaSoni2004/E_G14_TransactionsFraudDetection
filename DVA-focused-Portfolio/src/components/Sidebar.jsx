export default function Sidebar(){
  return(
    <aside className="sidebar">
      <img
        src={`${import.meta.env.BASE_URL}my_photo.jpeg`}
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Ananya Soni</h1>
      <p className="sidebar-username">AnanyaSoni2004</p>
      <p className="sidebar-bio">
        Backend-focused CS undergrad specializing in AI at Rishihood University.
        Passionate about Backend Engineering, GenAI, and System Design.
        Selected AI builder for The Residency (powered by Sam Altman).
        HPAIR Harvard representative. Founder of Booksyell — 1500+ students impacted.
        300+ competitive programming problems solved.
      </p>

      <button className="sidebar-follow-btn">Follow / Contact</button>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
          <span>India</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z"/>
          </svg>
          <a href="mailto:ananya.soni2024@nst.rishihood.edu.in">ananya.soni2024@nst.rishihood.edu.in</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/>
          </svg>
          <a href="https://github.com/AnanyaSoni2004" target="_blank" rel="noreferrer">github.com/AnanyaSoni2004</a>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">Python</span>
          <span className="org-pill">JavaScript</span>
          <span className="org-pill">Node.js</span>
          <span className="org-pill">Express.js</span>
          <span className="org-pill">React</span>
          <span className="org-pill">Next.js</span>
          <span className="org-pill">FastAPI</span>
          <span className="org-pill">GenAI</span>
          <span className="org-pill">Machine Learning</span>
          <span className="org-pill">LLaMA</span>
          <span className="org-pill">ChromaDB</span>
          <span className="org-pill">PostgreSQL</span>
          <span className="org-pill">MongoDB</span>
          <span className="org-pill">MySQL</span>
          <span className="org-pill">Prisma ORM</span>
          <span className="org-pill">Pandas</span>
          <span className="org-pill">NumPy</span>
          <span className="org-pill">Scikit-learn</span>
          <span className="org-pill">Tableau</span>
          <span className="org-pill">Excel</span>
        </div>
      </div>
    </aside>
  )
}
