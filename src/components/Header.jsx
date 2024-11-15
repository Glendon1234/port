// src/components/Header.js
import React from "react";
import { Typography, Link } from "@mui/material";

const Header = () => (
  <header>
    <Typography variant="h3" component="h1" gutterBottom>
      Glendon Dsouza
    </Typography>
    <Typography variant="body1">Phone: +918828201244</Typography>
    <Typography variant="body1">Email: <Link href="mailto:glendondsouza10@gmail.com">sherwingonsalvesalt@gmail.com</Link></Typography>
    <Typography variant="body1">
      LinkedIn: <Link href="https://www.linkedin.com/in/glendon-dsouza-0b7803255/" target="_blank" rel="noopener noreferrer">
        Glendon Dsouza
      </Link>
    </Typography>
  </header>
);

export default Header;
