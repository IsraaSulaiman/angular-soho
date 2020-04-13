import { Component, OnInit } from "@angular/core";

@Component({
  selector: "soho-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  slides = [
    {
      title: "Clean & Versatile",
      paragraph:
        "Soho's ample white space and elegant typography let you show off a wide range of products in style.",
      btnText: "Take a look",
      imgSrc: "../../../assets/images/soho_classic_carousel_1.jpg"
    },
    {
      title: "A Boutique Theme",
      paragraph:
        "Soho's ample white space and elegant typography let you show off a wide range of products in style.",
      btnText: "check it out",
      imgSrc: "../../../assets/images/soho_classic_carousel_2.jpg"
    },
    {
      title: "Checkout-Ready",
      paragraph:
        "Colorful features and strong calls to action invite customers to engage with your products and brand.",
      btnText: "Take a look",
      imgSrc: "../../../assets/images/soho_classic_carousel_3.jpg"
    }
  ];

  toggled: false;

  constructor() {}

  ngOnInit() {}
}
