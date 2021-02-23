import { Game } from "../../Game/Model/Game";

export interface LiveScore{
    id:number,
    team1:string,
    team2:string,
    team1_score:string,
    team2_score:string,
    toss_status:string,
    created_at:string,
    updated_at:string,
    status:boolean;
    Game:Game

}