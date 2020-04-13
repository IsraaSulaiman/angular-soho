import { EventEmitter, Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input() toggled = false;
  @Output() toggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.toggle.emit();
  }
}
