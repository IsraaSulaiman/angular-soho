import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts = [
    {
      title: "5 Reasons Why Your Store is Great",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices metus in orci eleifLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices metus in orci eleif",
      date: "3/1/2016",
      src: "./../../../../../../assets/images/blog-1.jpg"
    },
    {
      title: "5 Reasons Why Your Store is Great",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices metus in orci eleifLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices metus in orci eleif",
      date: "3/1/2016",
      src: "./../../../../../../assets/images/blog-2.jpg"
    },
    {
      title: "5 Reasons Why Your Store is Great",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices metus in orci eleifLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices metus in orci eleif",
      date: "3/1/2016",
      src: "./../../../../../../assets/images/blog-3.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}

  substring(text) {
    return text.substring(0, 100);
  }
}
