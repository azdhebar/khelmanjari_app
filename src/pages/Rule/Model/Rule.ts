import { Game } from "../../Game/Model/Game";

export interface Rule{
    id:number,
    descriptions:string,
    created_at :string,
    updated_at:string,
    status:boolean,
    Game:Game,
}