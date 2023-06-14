import { IInvite, Invite, Role } from "../common/types";

export const INVITES: IInvite[] = [
  new Invite({
    id: 21,
    phone: "+1 123454785",
    role: Role.Administrator,
  }),
  new Invite({
    id: 22,
    phone: "+1 123456123",
    role: Role.Standard,
  }),
];
