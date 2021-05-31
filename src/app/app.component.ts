import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  scroll: boolean = false;
  value: number;
  min: number;
  max: number;

  sliderincome: number;
  sliderexpense: number;

  constructor() {}

  ngOnInit() {
    window.addEventListener("scroll", this.scrolling, true);

    this.slider1();
    this.slider2();
  }

  scrolling = (s) => {
    let sc = s.target.scrollingElement.scrollTop;
    if (sc >= 100) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }

    if (this.scroll == true) {
      let header = document.getElementById("header");
      header.className = "header-trans";
    } else {
      let header = document.getElementById("header");
      header.className = "header";
    }
  };

  slider1() {
    let slider1 = document.getElementById("slider1");

    this.min = 100000;
    this.max = 300000;
    this.value = 150000;
    this.sliderincome = 150000;
    console.log(this.min, this.max, this.value);

    slider1.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;

    

    // slider1.oninput = function () {
    //   this.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
    //     ((this.value - this.min) / (this.max - this.min)) * 100
    //   }%, #DEE2E6 ${
    //     ((this.value - this.min) / (this.max - this.min)) * 100
    //   }%, #DEE2E6 100%)`;
    // };
  }

  slider2() {
    let slider2 = document.getElementById("slider2");

    this.min = 0;
    this.max = 100000;
    this.value = 50000;
    this.sliderexpense = 50000;

    slider2.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;

    // slider2.oninput = function () {
    //   this.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
    //     ((this.value - this.min) / (this.max - this.min)) * 100
    //   }%, #DEE2E6 ${
    //     ((this.value - this.min) / (this.max - this.min)) * 100
    //   }%, #DEE2E6 100%)`;
    // };
  }

  slider1val(e) {
    this.sliderincome = e.target.value;
    this.min = e.target.min;
    this.max = e.target.max;
    this.value = e.target.value;
    this.sliderincome = e.target.value;

    e.target.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;

    e.target.oninput = function () {
      this.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%)`;
    };
  }

  slider2val(e) {
    this.sliderexpense = e.target.value;
    this.min = e.target.min;
    this.max = e.target.max;
    this.value = e.target.value;
    this.sliderexpense = e.target.value;

    e.target.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;

    e.target.oninput = function () {
      this.style.background = `linear-gradient(to right, #663399 0%, #663399 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%)`;
    };
  }
}
