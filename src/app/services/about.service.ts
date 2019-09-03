import { Injectable } from "@angular/core";
import { About } from "../modal/about.modal";
@Injectable({
  providedIn: "root"
})
export class AboutService {
  abouts: About[] = [
    new About(
      1,
      "R.J Tibrewal College of Computer Application",
      "Bachelors of Computer Application",
      "2008",
      "Gujarat",
      "India",
      `I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
    ),
    new About(
      2,
      "R.J Tibrewal College of Computer Application",
      "Bachelors of Computer Application",
      "2008",
      "Gujarat",
      "India",
      `I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
    ),
    new About(
      3,
      "R.J Tibrewal College of Computer Application",
      "Bachelors of Computer Application",
      "2008",
      "Gujarat",
      "India",
      `I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
    ),
    new About(
      4,
      "R.J Tibrewal College of Computer Application",
      "Bachelors of Computer Application",
      "2008",
      "Gujarat",
      "India",
      `I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
    ),
    new About(
      5,
      "R.J Tibrewal College of Computer Application",
      "Bachelors of Computer Application",
      "2008",
      "Gujarat",
      "India",
      `I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
    ),
    new About(
      6,
      "R.J Tibrewal College of Computer Application",
      "Bachelors of Computer Application",
      "2008",
      "Gujarat",
      "India",
      `I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
    )
  ];
  private selectedAbout: About = null;
  constructor() {}

  setSelected(about: About) {
    this.selectedAbout = about;
  }

  getSelected() {
    return this.selectedAbout;
  }
}
