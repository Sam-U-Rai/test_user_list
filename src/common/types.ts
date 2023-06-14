export interface IInvite {
  id: number;
  phone: string;
  role: Role;
}

export interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

export enum Role {
  Administrator = "Administrator",
  Standard = "Standard",
}

export enum Status {
  request = "request",
  pending = "pending",
  approved = "approved",
  declined = "declined",
  invited = "invited",
}

export class User implements TeamMember {
  public id: number;
  public user: UserShortData;
  public role: Role;
  public status: Status;
  constructor({ id, user, role, status }: TeamMember) {
    this.id = id;
    this.role = role;
    this.user = user;
    this.role = role;
    this.status = status;
  }
}

export class Invite implements IInvite {
  public id: number;
  public role: Role;
  public phone: string;
  constructor({ id, phone, role }: IInvite) {
    this.id = id;
    this.role = role;
    this.phone = phone;
  }
}
