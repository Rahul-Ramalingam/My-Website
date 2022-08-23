import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectInfoClass } from 'src/app/models/project-info.model';
import { ProjectMoreInfoComponent } from './project-more-info/project-more-info.component';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog(id:number) {
    this.projects.forEach(element => {
      if (element.id == id) {
        const dialogRef = this.dialog.open(ProjectMoreInfoComponent,
          {
            width: '800px',
            enterAnimationDuration: '200ms',
            exitAnimationDuration: '200ms',
            data: { projectName:element.projectName, techStackUsed:element.techStackUsed, demoImageLinks:element.demoImageLinks, description:element.description }
          }); 
        dialogRef.afterClosed().subscribe(
          result => {
            console.log(result);
          }
        )
        return; 
      }
    });
  }

  projects: Array<ProjectInfoClass> = [
    {
      id:1,
      projectName:"Test Project1",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:[{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"}]
    },
    {
      id:2,
      projectName:"Test Project2",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:[{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"}]
    },
    {
      id:3,
      projectName:"Test Project3",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:[{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"}]
    },
    {
      id:4,
      projectName:"Test Project4",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:[{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"},{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png2"}]
    },
    {
      id:5,
      projectName:"Test Project5",
      description:"qwr hjiod aklnlknvsa kldkhf iasop dgnklasdkgn ihnoias hngio;rkn,mlsdkj gfkop;avnfklnknga isopgnronboia;sdhigi   oas;bndklnkfangkla;fsd  gknkksangl;asdkgnasdkglas;likhnjkl;akhjkl;asdgkn",
      techStackUsed:["python","SQL","OpenCV"],
      demoImageLinks:[{path:"https://www.w3schools.com/images/w3schools_green.jpg"},{path:"https://www.w3schools.com/images/w3schools_green.jpg"},{path:"https://www.w3schools.com/images/w3schools_green.jpg"}]
    }
  ]
}
