import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "50px",
        display: "flex",
        marginTop: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          textAlign: "center",
          fontFamily: "monospace",
          color: "white",
        }}
      >
        Copyright © 2024 TOCFL-Learning - All rights reserved.
      </Typography>
    </Box>
  );
}
