const Footer = () => {
  return (
    <footer className="footer footer-shadow flex-column justify-content-center align-center flex-gap-1 flex-wrap">
      <div className="social-icon-container flex-row align-center flex-gap-2">
        <a
          href="https://github.com/sonishreyas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Github Profile"
          className="no-link"
        >
          <i className="fab fa-github social"></i>
        </a>
        <a
          href="https://twitter.com/ShreyasSoni0204"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Twitter Profile"
          className="no-link"
        >
          <i className="fab fa-twitter social"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shreyas-soni-00752618b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View LinkedIn Profile"
          className="no-link"
        >
          <i className="fab fa-linkedin-in social"></i>
        </a>
      </div>
      <p className="footer-copyright">
        <span className="footer-copyright-icon">
          <i className="far fa-copyright"></i>
        </span>{" "}
        2022 Ripple UI
      </p>
    </footer>
  );
};
export { Footer };
