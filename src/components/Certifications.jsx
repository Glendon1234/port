// src/components/Certifications.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Certifications = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Certifications
    </Typography>
    <List>
      <ListItem>INDUSTRAIL TRAINING AND INTERSHIP</ListItem>
      <ListItem> Google Cybersecurity Professional Certificate</ListItem>
    </List>
  </Box>
);

export default Certifications;
