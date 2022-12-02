import styles from './content.module.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';
import imgPersonal from 'public/img_personal.jpeg';
import { AiFillCaretDown, AiOutlineEllipsis, AiOutlineUserAdd } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { HiDownload } from 'react-icons/hi';

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
        <div className={styles.contentProjectsControls}>
          <div className={styles.controlPlay}>
            <BiPlay className={styles.controlPlayIcon}/>
          </div>
          <p>Enhance</p>
          <div className={styles.controlDownload}>
            <HiDownload className={styles.controlDownloadIcon}/>
          </div>
          <AiOutlineUserAdd size={38}/>
          <AiOutlineEllipsis size={44}/>
        </div>

        <div className={styles.projectTableHeader}>
          <p>#</p>
          <p>Title</p>
          <p>Date Added</p>
          <p>View</p>
        </div>

        <div className={styles.projectTableRow}>
          <p>1.</p>
          <p>Portfolio</p>
          <p>Dec 3, 2022</p>
          <p>Link</p>
        </div>

        <div className={styles.projectTableRow}>
          <p>2.</p>
          <p>FFIITT - Macro Tracking</p>
          <p>Aug 14, 2022</p>
          <p>Link</p>
        </div>

        <div className={styles.projectTableRow}>
          <p>3.</p>
          <p>Horizon iTerm theme</p>
          <p>Nov 20, 2018</p>
          <p>Link</p>
        </div>
      </div>
    </section>
  );
};