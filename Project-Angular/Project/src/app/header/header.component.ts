import { Component, OnDestroy, OnInit } from "@angular/core";
import { DAtaStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscribable, Subscription } from "rxjs";

@Component({
    'selector':'app-header',
    templateUrl:'./header.component.html'
})


export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
    constructor(private dataStorageService: DAtaStorageService, private authService: AuthService){}

   
    ngOnInit(){
        this.userSub = this.authService.user.subscribe(user  => {
            this.isAuthenticated = !user ? false : true;
        });
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}