import styles from './footer.module.css';
import { Figtree } from '@next/font/google';
import Image from 'next/image';
import nowPlayingImg from 'public/now_playing.jpeg';
import { AiFillHeart, AiFillPlayCircle, AiOutlineExpandAlt } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { ImLoop } from 'react-icons/im';
import { IoMdShuffle, IoMdVolumeHigh } from 'react-icons/io';
import { MdDevices, MdOutlineQueueMusic } from 'react-icons/md';

const font = Figtree();

export const Footer = () => {
  return (
    <footer className={font.className}>
      <div className={styles.footer}>
        <section className={styles.nowPlaying}>
          <Image src={nowPlayingImg} alt="Now playing image"/>
          <div className={styles.nowPlayingText}>
            <p className={styles.nowPlayingTitle}>Web Engineer</p>
            <p className={styles.nowPlayingArtist}>Spotify</p>
          </div>
          <AiFillHeart className={styles.nowPlayingHeart}/>
        </section>

        <section className={styles.mediaControl}>
          <div className={styles.mediaControlButtons}>
            <IoMdShuffle size={18}/>
            <BiSkipPrevious size={34}/>
            <AiFillPlayCircle size={38}/>
            <BiSkipNext size={34}/>
            <ImLoop size={18}/>
          </div>
          <div className={styles.mediaControlProgress}>
            <p>0:12</p>
            <div className={styles.mediaControlBar}>
              <div className={styles.mediaControlGreen}></div>
              <div className={styles.mediaControlDot}></div>
              <div className={styles.mediaControlWhite}></div>
            </div>
            <p>3:28</p>
          </div>
        </section>

        <section className={styles.audioControl}>
          <MdOutlineQueueMusic/>
          <MdDevices/>
          <IoMdVolumeHigh/>
          <div className={styles.audioControlWhite}></div>
          <AiOutlineExpandAlt/>
        </section>
      </div>
    </footer>
  );
};