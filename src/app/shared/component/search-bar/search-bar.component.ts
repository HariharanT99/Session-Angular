import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {

    @Output() searchEmitter = new EventEmitter<string>();



    EmitSearch(searchString: string){
        this.searchEmitter.emit(searchString);
    }

}