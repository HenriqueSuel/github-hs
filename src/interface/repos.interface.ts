export interface IRepo {
  id: number;
  created_at: Date;
  full_name: string;
  owner: {
    avatar_url: string;
  }
}
