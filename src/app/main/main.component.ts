import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    selectedDate = new Date();
    selectedDate1 = new Date();
    selectedDate2 = new Date();
    selectedDate3 = new Date();
    
    ngOnInit(): void {
    }
}