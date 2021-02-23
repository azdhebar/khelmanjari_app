export interface Game{
    id:number,
    name:string,
    image:string,
    created_at:string,
    updated_at:string,
    status:boolean,
    group_game:boolean,
    individual_game:boolean,
    game_play:boolean
}

export interface OnTheSpot{
    id:number,
    Game:Game,
    description:string,
    created_at:string,
    updated_at:string,
    status:boolean
}