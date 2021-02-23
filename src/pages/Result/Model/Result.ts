import { Game } from "../../Game/Model/Game";

export interface Result{
    id:number,
    Game:Game,
    result:string,
    created_at:string,
    updated_at:string,
    status:boolean
}