import { Component, OnInit } from '@angular/core';

declare var $: any;

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
    selectedDate4 = new Date();
    
    ngOnInit(): void {
        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: false,
            nextArrow: false,
            dots: false,
            centerMode: true,
            variableWidth: true,
            infinite: true,
            focusOnSelect: true,
            cssEase: 'linear',
            touchMove: true,
            centerPadding: '10px'
        });
    }
}