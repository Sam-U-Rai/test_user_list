import { Role, Status, TeamMember, User } from "../common/types";

export const USERS: TeamMember[] = [
  new User({
    id: 1,
    user: {
      id: 1,
      name: "Lillian",
      lastName: "Burgess",
      phone: "+1 123454785",
      email: "burgess@mail.com",
    },
    role: Role.Administrator,
    status: Status.approved,
  }),
  new User({
    id: 2,
    user: {
      id: 2,
      name: "Bird",
      lastName: "Ramsey",
      phone: "+1 123456123",
      email: "bird@mail.com",
    },
    role: Role.Administrator,
    status: Status.declined,
  }),
  new User({
    id: 3,
    user: {
      id: 3,
      name: "Kristie",
      lastName: "Cole",
      phone: "+1 123457412",
      email: "cole@mail.com",
    },
    role: Role.Standard,
    status: Status.invited,
  }),
  new User({
    id: 4,
    user: {
      id: 4,
      name: "Leonor",
      lastName: "Cross",
      phone: "+1 123458945",
      email: "cross@mail.com",
    },
    role: Role.Standard,
    status: Status.invited,
  }),
  new User({
    id: 5,
    user: {
      id: 5,
      name: "Marsh",
      lastName: "Mccall",
      phone: "+1 123455289",
      email: "mccall@mail.com",
    },

    role: Role.Standard,
    status: Status.invited,
  }),
];
