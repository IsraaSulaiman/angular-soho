import { Component, OnInit } from "@angular/core";

@Component({
  selector: "featured-products",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.scss"]
})
export class FeaturedComponent implements OnInit {
  products = [
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/fproduct-1.jpg"
    },
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/fproduct-2.jpg"
    },
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/fproduct-3.jpg"
    },
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/fproduct-4.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
