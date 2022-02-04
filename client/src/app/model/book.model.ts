import { NumberValueAccessor } from '@angular/forms';

export class Book
{
    constructor(
        public _id?: number,
        public name?: string,
        public author?: string,
        public publicshed?: string,
        public description?: string,
        public price?: number
    ){}
}

