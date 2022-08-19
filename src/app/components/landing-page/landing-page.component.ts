import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  name : string = "";
  email: string = "";
  message: string = "";

  roles:string[] = ["Full Stack Developer", "Flutter App Dev", "AI Enthusiast"]
  rolesPointer:number = 0

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    const colors = ["#00FFF0", "#D9D9D9", "#F45656", "#FF9900", "#FFC700"];
    generateRandomParticles(25,colors);
    setTimeout(() =>{     
      this.type(document.getElementById('replace'), this.roles[this.rolesPointer],0);
   },1000);   
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent,
      {
        width: '450px',
        enterAnimationDuration: '200ms',
        exitAnimationDuration: '200ms',
        data: { name:this.name, email:this.email, message:this.message }
      }); 
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    )
  }

  type($el:any, text:string, position:number) {
    if (text.length >= position) {
      var rchars = 'qwerty';
      if (position % 3 == 0 && Math.random() > 0.9) {
        var typo;
        var chr = text.substring(position, 1);
        if (chr == chr.toUpperCase()) { typo = chr.toLowerCase(); }
        else { typo = rchars.substring(Math.floor(Math.random() * rchars.length), 1); }
        $el.innerHTML = text.substring(0, position - 1) + typo + '_';
        setTimeout(() => { this.type($el, text, position - 1); }, 200)
      }
      else {
        $el.innerHTML = (text.substring(0, position) + '_');
        setTimeout(() => { this.type($el, text, position + 1); }, 150)
      }
    }
    else {
      setTimeout(() => { this.erase($el, text, text.length); }, 400)
    }
  }
  
  erase(this: any, $el:any, text:string, position:number){
    if (position >= 0) {
      $el.innerHTML = (text.substring(0,position) + '_');
      setTimeout(() => { this.erase($el, text, position - 1); }, 150)
    } else {
      if(this.rolesPointer < this.roles.length - 1){
        this.rolesPointer += 1;
        setTimeout(() => { this.type($el, this.roles[this.rolesPointer], 0); }, 400)
      }else{
        this.rolesPointer = 0;
        setTimeout(() => { this.type($el, this.roles[this.rolesPointer], 0); }, 400)
      }      
    }
  }  
}

function generateRandomParticles(numBalls: number, colors:string[]) {
  const balls = [];

    //create partices
    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()*1.2})`;
      ball.style.width = `${Math.random()*2}em`;
      ball.style.height = ball.style.width;
      ball.style.position = `absolute`;
      ball.style.borderRadius = `100%`;
      ball.style.opacity = `0.7`;
      balls.push(ball);
      document.getElementById("landing_page")?.append(ball);
    }

    // animation
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}vw, ${to.y}vh)` }
        ],
        {
          duration: (Math.random() + 1) * 20000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
}




