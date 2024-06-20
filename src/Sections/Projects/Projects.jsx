
import styles from './ProjectStyles.module.css'
import Portfolio from '../../assets/online-portfolio.svg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/pulok25/web---portfolio" target='_blank'>
            <img className='hover' src={Portfolio} alt="Portfolio" />
            <h3>Portfolio</h3>
            <p>Complete By HTML| CSS </p>
            
            </a>
        </div>
    </section>
  )
}

export default Projects
