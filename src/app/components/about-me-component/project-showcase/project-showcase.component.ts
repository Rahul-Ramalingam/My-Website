import { Component, OnInit } from '@angular/core';
import { ProjectInfoClass } from 'src/app/models/project-info.model';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Array<ProjectInfoClass> = [
    {
      projectName:"Test Project",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:["https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing"]
    },
    {
      projectName:"Test Project",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:["https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing"]
    },
    {
      projectName:"Test Project",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:["https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing"]
    },
    {
      projectName:"Test Project",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:["https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing"]
    },
    {
      projectName:"Test Project",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:["https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing","https://drive.google.com/file/d/1sQZuZsVr1G_S0VF2glTo7RhkNW2Ff3jgNA/view?usp=sharing"]
    }
  ]
}
