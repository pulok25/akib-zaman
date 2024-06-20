import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Wordpress Design" />
        <SkillList src={checkMarkIcon} skill="Elementor" />
        <SkillList src={checkMarkIcon} skill="Node Js" />
        <SkillList src={checkMarkIcon} skill="Problem Solving" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Communication" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="J Query" />
        <SkillList src={checkMarkIcon} skill="MS Word" />
        <SkillList src={checkMarkIcon} skill="MS Excel" />
        <SkillList src={checkMarkIcon} skill="MS Powerpoint" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  )
}

export default Skills
