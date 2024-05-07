export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export type Info = {
  name: string;
  favoriteFood: string;
  favoriteMovie: string;
  status: Status;
  lastExecution?: Date;
};
