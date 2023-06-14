import { FC, ReactNode } from "react";

import Card from "@mui/material/Card";

import { IInvite, TeamMember, Invite, User } from "../common/types";
import { Item } from "./Item";

interface ListProps {
  stuff: (TeamMember | IInvite)[];
  titleComponent: ReactNode;
}
const List: FC<ListProps> = ({ stuff, titleComponent }) => {
  return (
    <>
      {titleComponent}
      <Card sx={{ borderRadius: "1rem" }}>
        {stuff.map((admin) => {
          if (admin instanceof User) {
            return (
              <Item
                key={admin.id}
                label={`${admin.user.lastName} ${admin.user.name}`}
              />
            );
          }
          if (admin instanceof Invite) {
            return <Item key={admin.id} label={admin.phone} invited />;
          }
          return "";
        })}
      </Card>
    </>
  );
};

export { List };
