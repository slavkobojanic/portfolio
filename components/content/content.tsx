import styles from './content.module.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';
import imgPersonal from 'public/img_personal.jpeg';
import { AiFillCaretDown } from 'react-icons/ai';

export const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.gradient}/>

      <div className={styles.contentWrapper}>
        <div className={styles.contentHeading}>
          <div className={styles.contentHeadingArrows}>
            <MdArrowBackIosNew className={styles.contentHeadingBack}/>
            <MdArrowForwardIos className={styles.contentHeadingForward}/>
          </div>

          <div className={styles.contentHeadingPersonal}>
            <Image className={styles.contentHeadingPersonalImg} src={imgPersonal} alt="Portrait"/>
            <p>Slavko Bojanic</p>
            <AiFillCaretDown className={styles.contentHeadingPersonalCaret}/>
          </div>
        </div>

        <div className={styles.contentProfile}>
          <Image className={styles.contentProfilePortrait} src={imgPersonal} alt="Portrait"/>
          <div className={styles.contentProfileDetails}>
            <p className={styles.detailTitle}>SOFTWARE ENGINEER</p>
            <p className={styles.detailName}>Slavko Bojanic</p>
            <p className={styles.detailLocation}>Sydney, Australia · slavkobojj@gmail.com</p>
          </div>
        </div>
      </div>

      <div className={styles.contentProjects}>

      </div>
    </section>
  );
}