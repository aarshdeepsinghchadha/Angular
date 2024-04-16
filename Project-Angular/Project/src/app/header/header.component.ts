import { Component } from "@angular/core";
import { DAtaStorageService } from "../shared/data-storage.service";

@Component({
    'selector':'app-header',
    templateUrl:'./header.component.html'
})


export class HeaderComponent{
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
    constructor(private dataStorageService: DAtaStorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}