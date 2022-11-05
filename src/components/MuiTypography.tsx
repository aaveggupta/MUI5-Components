import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/* DEFAULT THEME */}

      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>

      {/* NOTE THE STYLES OF H4 APPLIED BUT THE TAG WILL NOW BE H1 */}
      <Typography variant="h4" component="h1">
        H4 Heading
      </Typography>

      {/* GUTTER BOTTOM -> TO GIVE SOME SPACE IN BOTTOM */}
      <Typography variant="h5" gutterBottom>
        H5 Heading
      </Typography>

      <Typography variant="h6">H6 Heading</Typography>

      {/* VARIANT OF H6 */}
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* VARIANT OF P */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        incidunt autem inventore. Doloribus tenetur nisi deleniti maxime illo,
        ea exercitationem dolorem quis, veritatis vero mollitia hic? Repudiandae
        temporibus assumenda quo, fuga, nobis asperiores sed enim laudantium
        beatae quisquam alias tenetur magnam facilis repellendus quam
        exercitationem consectetur ullam dicta! Incidunt, provident!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        incidunt autem inventore. Doloribus tenetur nisi deleniti maxime illo,
        ea exercitationem dolorem quis, veritatis vero mollitia hic? Repudiandae
        temporibus assumenda quo, fuga, nobis asperiores sed enim laudantium
        beatae quisquam alias tenetur magnam facilis repellendus quam
        exercitationem consectetur ullam dicta! Incidunt, provident!
      </Typography>
    </div>
  );
};

export default MuiTypography;
