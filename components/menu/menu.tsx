import styles from './menu.module.css';
import { AiFillHeart, AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { VscLibrary } from 'react-icons/vsc';
import { Spacer } from 'components/spacer/spacer';
import React from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';

export const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.macOSWindow}>
        <div className={styles.macOSClose}></div>
        <div className={styles.macOSMinimise}></div>
        <div className={styles.macOSMaximise}></div>
      </div>

      <div className={styles.scrollable}>
        <nav className={styles.menuFake}>
          <div className={styles.menuFakeLink}>
            <AiOutlineHome size={27}/>
            <p>Home</p>
          </div>
          <div className={styles.menuFakeLink}>
            <FiSearch size={27}/>
            <p>Search</p>
          </div>
          <div className={styles.menuFakeLink}>
            <VscLibrary size={27}/>
            <p>Your library</p>
          </div>
        </nav>

        <Spacer/>

        <nav className={styles.menuFake}>
          <div className={styles.menuFakeLink}>
            <div
              className={styles.gradientMenuItem}
              style={{background: `linear-gradient(135deg, #B2B2B2 0%, #B2B2B2 100%)`}}>
              <AiOutlinePlus color="#000000"/>
            </div>
            <p>Create playlist</p>
          </div>
          <div className={styles.menuFakeLink}>
            <div
              className={styles.gradientMenuItem}
              style={{background: `linear-gradient(135deg, #3214A3 0%, #889C99 100%)`}}>
              <AiFillHeart color="#BBBBBB"/>
            </div>
            <p>Liked songs</p>
          </div>
          <div className={styles.menuFakeLink}>
            <div
              className={styles.gradientMenuItem}
              style={{background: `linear-gradient(135deg, #1D4439 0%, #1D4439 100%)`}}>
              <BsFillBookmarkFill color="#47944D"/>
            </div>
            <p>Saved episodes</p>
          </div>

          <div className={styles.hRule}/>

          <div className={styles.blogLinks}>
            <p>Euismod nisi porta lorem mollissssssss</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
            <p>Euismod nisi porta lorem mollis</p>
          </div>

          <div className={styles.blogLinksGradient}/>
        </nav>
      </div>
    </section>
  );
};