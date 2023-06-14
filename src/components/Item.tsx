import { FC } from "react";

import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

interface IItemProps {
  label: string;
  invited?: boolean;
}

const Item: FC<IItemProps> = ({ label, invited }) => {
  return (
    <Grid item sx={{ borderBottom: "1px solid #E7EBF0" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        mt={4}
        paddingLeft={2}
        paddingRight={2}
      >
        <Typography>{label}</Typography>
        <Grid display="flex" alignItems="center">
          {invited && <Chip label="Invited" size="small" />}
          <ArrowForwardIosIcon sx={{ width: 16, marginLeft: 2 }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Item };
