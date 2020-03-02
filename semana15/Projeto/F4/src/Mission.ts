import { Teacher } from "./Teacher";

export abstract class Mission {
    constructor(
        protected startDate: Date,
        protected endDate: Date,
        protected teacherList: Teacher[]=[],
    
    ){}
}