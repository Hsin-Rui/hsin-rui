(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const r="/hsin-rui/assets/2022-11-21-Foto-ChK4IMBv.jpg";function d(){return`
    <section class="section hero">
      <div class="container">
        <h1>Hsin-Rui Lin, Ph.D.</h1>
        <p class="subtitle">Psychology of Music | Data Analyst | Psychometric Research</p>
        <p class="email">hsinrui.lin@gmail.com</p>
        <div class="home-grid">
          <div class="about-photo">
            <img src="${r}" alt="Hsin-Rui Lin" class="profile-photo">
          </div>
          <div class="home-content">
            <p class="bio">
              Welcome to my academic portfolio. I completed my Ph.D. in Systematic Musicology at Hanover University of Music, Drama and Media, specializing in questionnaire development and psychometric evaluations. My research focuses on the development of personality and musical skills during adolescence.
            </p>
            <p class="bio">
              Since 2023, I have been working as a Data Analyst at HDI, where I develop pricing APIs, create analytical reports, and build data-driven applications. I am currently open to pursuing further opportunities in academia while remaining excited about data science projects in the industry.
            </p>
          </div>
        </div>

        <div class="home-details">
          <h2>Background</h2>
          <p>
            I am a researcher and data analyst with a passion for understanding the intersection of psychology, music, and quantitative methods. My academic journey has taken me across multiple continents and disciplines, shaping my approach to research and problem-solving.
          </p>

          <h2>Academic Focus</h2>
          <p>
            My Ph.D. research examined the musical personality—the relationship between personality traits, efficacy beliefs, and participation in musical culture. Throughout my doctoral studies, I specialized in:
          </p>
          <ul>
            <li>Questionnaire development and validation</li>
            <li>Psychometric evaluation using advanced statistical methods</li>
            <li>Longitudinal studies with adolescent populations</li>
            <li>Understanding how individual differences influence musical development</li>
          </ul>

          <h2>Professional Transition</h2>
          <p>
            In 2023, I transitioned into the data analytics field at HDI, where I apply my research expertise to real-world business challenges. I develop data pipelines, create analytical reports, and build applications that inform strategic decision-making. This role has deepened my skills in data management, visualization, and communication of complex insights.
          </p>

          <h2>Current Interests</h2>
          <p>
            I am passionate about bridging the gap between academic research and practical application. Whether exploring how personality shapes musical engagement or analyzing complex datasets, I bring a rigorous, methodical approach to understanding patterns in human behavior and organizational data.
          </p>

          <h2>Languages</h2>
          <p>
            I am fluent in Chinese Mandarin (native), English, and German, with basic proficiency in Japanese and Italian. This multilingual background enables me to engage with international research communities and diverse professional environments.
          </p>
        </div>
      </div>
    </section>
  `}const p="/hsin-rui/assets/2025-11-22-academic-CV-HRL-long-CWtYiP8m.pdf";function u(){return`
    <section class="section">
      <div class="container">
        <div class="cv-header-section">
          <h1>Curriculum Vitae</h1>
          <a href="${p}" download class="download-button">
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
  `}function h(){return`
    <section class="section">
      <div class="container">
        <h1>Publications</h1>

        <div class="publication-list">
          <div class="publication-item">
            <p class="pub-authors">Li, J., Lin, H.-R., Wolf, A., & Lothwesen, K.</p>
            <p class="pub-year">(2024)</p>
            <p class="pub-title">Measuring musical sophistication in the Chinese general population: Validation and replication of the Simplified Chinese Gold-MSI.</p>
            <p class="pub-journal">Musicae Scientiae, 28(2), 197–121.</p>
            <a href="https://doi.org/10.1177/10298649231183264" target="_blank" class="pub-link">https://doi.org/10.1177/10298649231183264</a>
          </div>

          <div class="publication-item">
            <p class="pub-authors">Schurig, E., Busch, V., Schröder, S., Beisiegel, J., Hasselhorn, J., Hienen, T., Krupp, V., Langer, R., Lehmann-Wermser, A., Lin, H.-R., & Wirag, A.</p>
            <p class="pub-year">(2023)</p>
            <p class="pub-title">What influences student participation in music groups in secondary school? A multi-lab analysis.</p>
            <p class="pub-journal">In E. Schurig & A. Lehmann-Wermser (Eds.), Aspects of multiculturalism in arts education: Proceedings of the 3rd German-Dutch Colloquium (pp. 124–147).</p>
          </div>

          <div class="publication-item">
            <p class="pub-authors">Hasselhorn, J., Krupp, V., Lin, H.-R., Beisiegel, J., & Kopiez, R.</p>
            <p class="pub-year">(2022)</p>
            <p class="pub-title">Music-cultural participation as a predictor for subjective wellbeing: are personality traits significant?</p>
            <p class="pub-journal">Zeitschrift für Erziehungswissenschaft, 25(3), 603–628.</p>
            <a href="https://doi.org/10.1007/s11618-022-01104-0" target="_blank" class="pub-link">https://doi.org/10.1007/s11618-022-01104-0</a>
          </div>

          <div class="publication-item">
            <p class="pub-authors">Lin, H.-R., Kopiez, R., Müllensiefen, D., & Hasselhorn, J.</p>
            <p class="pub-year">(2022)</p>
            <p class="pub-title">Predicting academic achievement in music in secondary schools: The role of personality and self-theories of musicality.</p>
            <p class="pub-journal">Psychology of Music, 50(6), 2077–2088.</p>
            <a href="https://doi.org/10.1177/03057356211073479" target="_blank" class="pub-link">https://doi.org/10.1177/03057356211073479</a>
          </div>

          <div class="publication-item">
            <p class="pub-authors">Lin, H.-R., Kopiez, R., Müllensiefen, D., & Wolf, A.</p>
            <p class="pub-year">(2021)</p>
            <p class="pub-title">The Chinese version of the Gold-MSI: Adaptation and validation of an inventory for the measurement of musical sophistication in a Taiwanese sample.</p>
            <p class="pub-journal">Musicae Scientiae, 25(2), 226–251.</p>
            <a href="https://doi.org/10.1177/1029864919871987" target="_blank" class="pub-link">https://doi.org/10.1177/1029864919871987</a>
          </div>

          <div class="publication-item">
            <p class="pub-authors">Wolf, A., Kopiez, R., Platz, F., Lin, H.-R., & Mütze, H.</p>
            <p class="pub-year">(2018)</p>
            <p class="pub-title">Tendency towards the average? The aesthetic evaluation of a quantitatively average music performance: A successful replication of Repp's (1998) Study.</p>
            <p class="pub-journal">Music Perception, 36(1), 98–108.</p>
            <a href="https://doi.org/10.1525/mp.2018.36.1.98" target="_blank" class="pub-link">https://doi.org/10.1525/mp.2018.36.1.98</a>
          </div>
      </div>
    </section>
  `}function v(){return`
    <section class="section">
      <div class="container">
        <h1>Research Projects</h1>

        <div class="project-grid">
          <div class="project-card">
            <h2>Gold-MSI Development</h2>
            <p>Development and validation of the Goldsmiths Musical Sophistication Index (Gold-MSI) in multiple languages including Chinese and German. Created short forms of the questionnaire using confirmatory factor analysis.</p>
            <div class="project-tags">
              <span class="tag">Psychometrics</span>
              <span class="tag">CFA</span>
              <span class="tag">Questionnaire Development</span>
            </div>
          </div>

          <div class="project-card">
            <h2>Music and Personality</h2>
            <p>Longitudinal study investigating the relationship between personality traits, musical efficacy beliefs, and participation in musical culture among adolescents. Examined how gender and socio-economic status affect the development of musical abilities.</p>
            <div class="project-tags">
              <span class="tag">Longitudinal Analysis</span>
              <span class="tag">Multi-level Modeling</span>
              <span class="tag">Development Psychology</span>
            </div>
          </div>

          <div class="project-card">
            <h2>Participation in Musical Culture Scale</h2>
            <p>Development and validation of a scale measuring adolescents' participation in musical activities. Applied multidimensional item response theory to assess the psychometric properties and validate the construct.</p>
            <div class="project-tags">
              <span class="tag">IRT</span>
              <span class="tag">Scale Development</span>
              <span class="tag">Validation Studies</span>
            </div>
          </div>

          <div class="project-card">
            <h2>LongGold Project</h2>
            <p>Ongoing research examining the long-term effects of learning musical instruments on both musical and non-musical traits. Uses latent growth models to track developmental trajectories across adolescence.</p>
            <div class="project-tags">
              <span class="tag">Longitudinal Data</span>
              <span class="tag">SEM</span>
              <span class="tag">Musical Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const c={"/":d,"/cv":u,"/publications":h,"/projects":v};function l(t){const e=c[t]||c["/"],s=document.getElementById("app");s.innerHTML=e(),m(t),window.scrollTo(0,0)}function m(t){document.querySelectorAll(".nav-link").forEach(e=>{e.classList.remove("active"),e.getAttribute("href")===t&&e.classList.add("active")})}function g(){document.querySelectorAll(".nav-link").forEach(s=>{s.addEventListener("click",n=>{n.preventDefault();const i=s.getAttribute("href");window.history.pushState({path:i},"",i),l(i)})}),window.addEventListener("popstate",s=>{var i;const n=((i=s.state)==null?void 0:i.path)||"/";l(n)});const e=window.location.pathname||"/";l(e)}document.addEventListener("DOMContentLoaded",()=>{g()});const f=new MutationObserver(()=>{document.querySelectorAll(".cv-item, .publication-item, .project-card, .about-photo, .about-text").forEach(e=>{if(!e.hasAttribute("data-animated")){e.setAttribute("data-animated","true"),e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="opacity 0.6s ease, transform 0.6s ease";const s={root:null,rootMargin:"-100px",threshold:.1};new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.style.opacity="1",a.target.style.transform="translateY(0)")})},s).observe(e)}})});f.observe(document.getElementById("app"),{childList:!0,subtree:!0});
