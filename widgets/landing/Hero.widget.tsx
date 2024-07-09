import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Star } from "@mui/icons-material";
import styles from "@/styles/landing.styles";
import { heroConfig } from "@/config/landing.config";

/**
 * HeroSection component - Displays the hero section of the landing page.
 *
 * The HeroSection component renders the main hero section of the landing page, including
 * a header with a title and button, a search box, and a list of top service workers.
 * It uses Material UI for styling and layout.
 *
 * @returns {React.FC} - The hero section component.
 */
const HeroSection: React.FC = () => {
  const { main, services, footer } = heroConfig;

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.subtitle}>{main.subtitle}</Typography>
      <Box sx={styles.searchBox}>
        <TextField
          sx={styles.inputField}
          label={main.searchPlaceholder}
          variant="outlined"
        />
        <Button sx={styles.button} variant="contained" color="primary">
          {main.searchButton}
        </Button>
      </Box>
      <Typography sx={styles.subtitle} mt={4}>
        {services.subtitle}
      </Typography>
      <Grid container spacing={2} sx={styles.cardGrid}>
        {services.workers.map((worker, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={styles.card}>
              <Avatar sx={styles.avatar}>{worker.avatar}</Avatar>
              <Typography variant="h6">{worker.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {worker.profession}
              </Typography>
              <Box sx={styles.rating}>
                <Star sx={styles.starIcon} />
                <Typography variant="body2">{worker.rating}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography sx={styles.footer}>{footer}</Typography>
    </Box>
  );
};

export default HeroSection;
