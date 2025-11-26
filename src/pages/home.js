import profilePhoto from '/public/2022-11-21-Foto.jpg';

export function renderHome() {
  return `
    <section class="section hero">
      <div class="container">
        <h1>Hsin-Rui Lin, Ph.D.</h1>
        <p class="subtitle">Psychology of Music | Data Analyst | Psychometric Research</p>
        <p class="email">hsinrui.lin@gmail.com</p>
        <div class="home-grid">
          <div class="about-photo">
            <img src="${profilePhoto}" alt="Hsin-Rui Lin" class="profile-photo">
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
  `;
}
