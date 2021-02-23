import { Game } from "../../Game/Model/Game";

export interface Coordinator{
    id:number,
    Game:Game,
    coordinator:string,
    coordinators:string,
    created_at:string,
    updated_at:string,
    status:boolean
}