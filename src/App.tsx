import { FC, useEffect, useState } from "react";

import { IInvite, Role, TeamMember } from "./common/types";
import { INVITES } from "./fake-data/invites";
import { USERS } from "./fake-data/users";

import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

import Grid from "@mui/material/Grid";
import { List } from "./components/List";

const App: FC = () => {
  const [administrators, setAdministrators] = useState<
    (TeamMember | IInvite)[]
  >([]);
  const [standardStuff, setStandardStuff] = useState<(TeamMember | IInvite)[]>(
    []
  );

  useEffect(() => {
    (async () => {
      try {
        const users = await Promise.resolve(USERS);
        const invites = await Promise.resolve(INVITES);
        setAdministrators([
          ...users.filter((user) => user.role === Role.Administrator),
          ...invites.filter((invite) => invite.role === Role.Administrator),
        ]);
        setStandardStuff([
          ...users.filter((user) => user.role === Role.Standard),
          ...invites.filter((invite) => invite.role === Role.Standard),
        ]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Grid
      container
      alignItems="start"
      justifyContent="start"
      direction="row"
      p={2}
      height="100vh"
      sx={{ background: "#E7EBF0" }}
    >
      <Grid item xs={12}>
        <List
          stuff={administrators}
          titleComponent={
            <Grid container>
              <AddModeratorIcon sx={{ width: 16, marginRight: 1 }} />
              <Typography>Administrators</Typography>
            </Grid>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <List
          stuff={standardStuff}
          titleComponent={
            <Grid container>
              <PersonIcon sx={{ width: 16, marginRight: 1 }} />
              <Typography>Standard Users</Typography>
            </Grid>
          }
        />
      </Grid>
    </Grid>
  );
};

export default App;
