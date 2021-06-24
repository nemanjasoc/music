import { Component, OnInit } from '@angular/core';

interface Language {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    showDropdownMenu: boolean = false;
    selectedOption = 'en';

    languages: Language[] = [
        {value: 'en', viewValue: 'EN'},
        {value: 'sr', viewValue: 'SR'}
    ];

    ngOnInit(): void {
    }

}