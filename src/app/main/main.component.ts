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
    
    ngOnInit(): void {
        $('.slider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: false,
            responsive: [
                // {
                //     breakpoint: 768,
                //     settings: {
                //         arrows: false,
                //         centerMode: true,
                //         centerPadding: '40px',
                //         slidesToShow: 3
                //     }
                // },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}