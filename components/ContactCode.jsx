import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://basilk.com" target="_blank" rel="noopener">
          basilk.com
        </a>
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:basilkhan76@gmail.com"
          target="_blank"
          rel="noopener"
        >
          basilkhan76@gmail.com
        </a>

      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/basilk76" target="_blank" rel="noopener">
          basilk76
        </a>
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/basilk76/"
          target="_blank"
          rel="noopener"
        >
          basilk76
        </a>
      
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://twitter.com/RealBasilKhan"
          target="_blank"
          rel="noopener"
        >
          realbasilkhan
        </a>
        </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
