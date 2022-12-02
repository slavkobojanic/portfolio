import styles from './sidebar.module.css';
import { BiUserPlus } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import Image, { StaticImageData } from 'next/image';
import expSpotify from 'public/exp_spotify.png';
import expCanva from 'public/exp_canva.png';
import expQps from 'public/exp_qps.jpeg';
import expVivo from 'public/exp_vivo.jpg';

type Experience = {
  icon: StaticImageData,
  title: string,
  duration: string,
  location: string,
  skills: string
}

const experience: Experience[] = [
  {
    title: 'Spotify',
    icon: expSpotify,
    duration: '2023 -',
    location: 'Sydney, Australia',
    skills: 'Megaphone & Metrognome',
  },
  {
    title: 'Canva',
    icon: expCanva,
    duration: '2019 - 2023',
    location: 'Sydney, Australia',
    skills: 'Ecosystem & APIs',
  },
  {
    title: 'QPS Benchmarking',
    icon: expQps,
    duration: '2018 - 2019',
    location: 'Wollongong, Australia',
    skills: 'Aged care reporting',
  },
  {
    title: 'Vivo Digital',
    icon: expVivo,
    duration: '2017 - 2018',
    location: 'Wollongong, Australia',
    skills: 'Bespoke websites',
  },
]

const ExperienceItem = ({
  icon,
  title,
  duration,
  location,
  skills
}: Experience) => {
  return (
    <div className={styles.exp}>
      <Image src={icon} alt={title} className={styles.expIcon}/>
      <div className={styles.expText}>
        <div className={styles.expHeader}>
          <p className={styles.expTitle}>{title}</p>
          <p className={styles.expDuration}>{duration}</p>
        </div>
        <p className={styles.expLocation}>{location}</p>
        <p className={styles.expSkills}>{skills}</p>
      </div>
    </div>
  )
};

export const Sidebar = () => {
  const experienceItems = experience.map(ExperienceItem);

  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <p>Experience</p>
        <div>
          <BiUserPlus size={24}/>
          <IoMdClose size={24}/>
        </div>
      </div>

      <div className={styles.sidebarExp}>
        {experienceItems}
      </div>
    </section>
  );
};