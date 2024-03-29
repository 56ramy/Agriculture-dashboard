﻿import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;
    
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    
    showInfo: boolean = false;
    

  toggleInfo() {
    this.showInfo = !this.showInfo;
}



}