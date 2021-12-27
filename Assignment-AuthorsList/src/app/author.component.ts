import { AuthorService } from './author.service';
import { Component } from "@angular/core";



@Component({
    selector: 'authors',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>
    `
})
export class AuthourComponent {
    getTitle(){
        return "3 Authors"
    }
    authors;
    constructor(service:AuthorService){
        this.authors = service.getAuthors();
    }
}