import React from "react";
import { Container } from "react-bootstrap";

import "./footer.css"

const Footer = () => (
    <footer className="footer navbar-static-bottom">
      <Container>
        <hr />
        <p className="link">
          © {new Date().getFullYear()} - developed by{" "}
          <a
            href="https://github.com/dongquan1504"
            target="_blank"
            rel="noopener noreferrer"
          >
            Duong Dong Quan
          </a>
        </p>
      </Container>
    </footer>
  );

export default Footer;
