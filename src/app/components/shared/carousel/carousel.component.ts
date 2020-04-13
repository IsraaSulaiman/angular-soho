import {
  Component,
  OnInit,
  QueryList,
  ContentChildren,
  ElementRef,
  ViewChildren,
  ViewChild,
  Input,
  Directive,
  AfterViewInit,
  OnChanges,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";
import { CarouselItemDirective } from "./carousel-item.directive";

import {
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  animate,
  style
} from "@angular/animations";

@Directive({
  selector: ".slide"
})
export class CarouselItemElement {}

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() slides = [];
  @Input() showControls = true;
  timer;

  currentSlide = 0;

  ngOnInit(): void {
    this.play();
  }

  next() {
    if (this.currentSlide == this.slides.length - 1)
      return (this.currentSlide = 0);
    else this.currentSlide = this.currentSlide + 1;
  }

  prev() {
    if (this.currentSlide == 0) this.currentSlide = this.slides.length - 1;
    else this.currentSlide = this.currentSlide - 1;
  }

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit() {}

  play() {
    this.timer = setInterval(() => {
      this.next();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.timer.clearInterval();
  }
}
