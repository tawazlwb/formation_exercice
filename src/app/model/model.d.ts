declare interface ISerie {
  id: number;
  title: string;
  season: number;
  episode: number;
  url: string;
  watched: boolean;
}

declare interface IUser {
  username: string;
  password: string;
}
