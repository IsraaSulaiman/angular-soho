import { Component, OnInit } from "@angular/core";

@Component({
  selector: "new-products",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class NewComponent implements OnInit {
  products = [
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/new-p-3.jpg"
    },
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/newp-2.jpg"
    },
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/newp-1.jpg"
    },
    {
      id: 1,
      title: "Santorini Collar",
      price: 47,
      src: "./../../../../../../assets/images/new-p-3.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
