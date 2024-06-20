import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Untitled_design-removebg-preview.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import facebookLight from "../../assets/facebook-light.svg";
import facebookDark from "../../assets/icons8-facebook-circled.gif";
import CV from "../../assets/Akibs Resume_2.pdf";
import { useTheme } from "../../common/Themecontext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          {" "}
          Akib Zaman <br />
          Pulok
        </h1>
        <h2>Front End Developer | Content Writer | Entrepreneur</h2>
        <span>
          <a href="https://x.com/AkibzamanPulok" target="_blank" id="akib">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://github.com/pulok25" target="_blank">
            <img src={githubIcon} alt="giuthub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/akib-zaman-pulok7/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://www.facebook.com/akibzamanpulok" target="blank">
            <img src={facebookIcon} alt="facebook Icon" />
          </a>
        </span>
        <p className={styles.description}>
          
          creating responsive and visually appealing user interfaces for
          commercial busineesses
        </p>
        <a href={CV}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
