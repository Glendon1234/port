// src/components/Projects.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Projects = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Projects
    </Typography>
    <List>
      <ListItem><strong> Fitness App</strong>: A fitness app with a demonstration of all basic workouts for a beginner, it demonstrates how to learn the
 right form.
 It also has different yoga asanas, features like BMI calculator, motivation quotes, direct connectivity to
 spotify..</ListItem>
      <ListItem><strong>Smart Blind Stick</strong>: </ListItem>
    </List>
  </Box>
);

export default Projects;
