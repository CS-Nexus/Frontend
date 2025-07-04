export interface ITeamData {
  id: number;
  name: string;
  role: string[];
  description: string;
  social:{
    icon: string;
    link: string;
  }[];
  toolsUsed: string[];
  image: string;
}
