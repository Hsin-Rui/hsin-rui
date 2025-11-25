export function renderCV() {
  return `
    <section class="section">
      <div class="container">
        <div class="cv-header-section">
          <h1>Curriculum Vitae</h1>
          <a href="/2025-11-22-academic-CV-HRL-long.pdf" download class="download-button">
            <span>⬇</span> Download Full CV
          </a>
        </div>

        <div class="cv-section">
          <h2>Education</h2>
          <div class="cv-item">
            <div class="cv-header">
              <strong>Ph.D. in Systematic Musicology</strong>
              <span class="year">2025</span>
            </div>
            <p class="institution">Hanover University of Music, Drama and Media, Germany</p>
            <p class="details">Dissertation: The musical personality: The relationship between personality traits, efficacy beliefs, and participation in musical culture</p>
          </div>
          <div class="cv-item">
            <div class="cv-header">
              <strong>M.A. in Systematic Musicology</strong>
              <span class="year">2018</span>
            </div>
            <p class="institution">Hanover University of Music, Drama and Media, Germany</p>
            <p class="details">Thesis: The Gold-MSI: Measuring musicality of non-musicians. A replication and validation study in Taiwan</p>
          </div>
          <div class="cv-item">
            <div class="cv-header">
              <strong>M.Mus. in Music Performance (Voice)</strong>
              <span class="year">2012</span>
            </div>
            <p class="institution">Taipei National University of Arts, Taiwan</p>
          </div>
          <div class="cv-item">
            <div class="cv-header">
              <strong>B.Ed. in Special Education</strong>
              <span class="year">2009</span>
            </div>
            <p class="institution">National Taiwan Normal University, Taiwan</p>
          </div>
        </div>

        <div class="cv-section">
          <h2>Professional Experience</h2>
          <div class="cv-item">
            <div class="cv-header">
              <strong>Data Analyst</strong>
              <span class="year">2025-present</span>
            </div>
            <p class="institution">HDI Global SE</p>
            <ul>
              <li>Develop and maintain pricing APIs for various lines of business</li>
              <li>Design and implement markdown reports</li>
              <li>Develop and maintain Shiny apps for clustering contract offers</li>
            </ul>
          </div>
          <div class="cv-item">
            <div class="cv-header">
              <strong>Data Analyst</strong>
              <span class="year">2023-2025</span>
            </div>
            <p class="institution">HDI Global Specialty SE</p>
            <ul>
              <li>Developed and maintained Power BI reports for US Delegated Authority business</li>
              <li>Prepared and cleaned data for regulatory reports (US-Filing, US-TRIA, Solvency II)</li>
              <li>Collaborated with underwriters and US Delegated Authority Agencies</li>
            </ul>
          </div>
          <div class="cv-item">
            <div class="cv-header">
              <strong>Research Assistant with Prof. Dr. Reinhard Kopiez</strong>
              <span class="year">2020-2022</span>
            </div>
            <p class="institution">Systematic Musicology, Hanover University of Music, Drama and Media</p>
            <ul>
              <li>Investigated effects of gender and socio-economic status on musical listening ability using latent growth models</li>
              <li>Validated the Participation in Musical Culture Scale using Multidimensional IRT</li>
              <li>Developed short versions of the Gold-MSI questionnaire using CFA</li>
            </ul>
          </div>
          <div class="cv-item">
            <div class="cv-header">
              <strong>Research Assistant with Prof. Dr. Johannes Hasselhorn</strong>
              <span class="year">2018-2020</span>
            </div>
            <p class="institution">Music Education, Lübeck Academy of Music, Germany</p>
            <ul>
              <li>Revised the Participation in Musical Culture Scale</li>
              <li>Developed and conducted longitudinal surveys for secondary school students</li>
              <li>Published scientific papers and presented results at conferences</li>
            </ul>
          </div>
        </div>

        <div class="cv-section">
          <h2>Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Programming & Data</h3>
              <ul>
                <li>R (Fluent)</li>
                <li>SQL (Fluent)</li>
                <li>Power BI (Fluent)</li>
                <li>Python (Intermediate)</li>
                <li>HTML & CSS (Intermediate)</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Statistical Methods</h3>
              <ul>
                <li>Structural equation modelling</li>
                <li>Item response theory</li>
                <li>Multi-level modelling</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Chinese Mandarin (Native)</li>
                <li>English (Fluent)</li>
                <li>German (Fluent)</li>
                <li>Japanese (Basic)</li>
                <li>Italian (Basic)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="cv-section">
          <h2>Awards</h2>
          <div class="cv-item">
            <div class="cv-header">
              <strong>Scholarship from the Ministry of Education (Taiwan)</strong>
              <span class="year">2016-2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
