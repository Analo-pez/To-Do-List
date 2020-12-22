import { ItemList } from './list-items.model';


export class List {

    id: number;
    title: string;
    createAt: Date;
    completedAt: Date;
    completed: boolean;
    items: ItemList[];


    constructor(title: string) {

        this.title = title;
        this.createAt = new Date();
        this.completed = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}