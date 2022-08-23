import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { imagePath, ProjectInfoClass } from 'src/app/models/project-info.model';

@Component({
  selector: 'app-project-more-info',
  templateUrl: './project-more-info.component.html',
  styleUrls: ['./project-more-info.component.css']
})
export class ProjectMoreInfoComponent implements OnInit {

  title:string="";
  techStackUsed:string[]=[];
  demoImageUrls:imagePath[]=[];
  description:string="";

  constructor(public dialogRef: MatDialogRef<ProjectMoreInfoComponent>,@Inject(MAT_DIALOG_DATA) public data: ProjectInfoClass) {
    this.title = data.projectName;
    this.demoImageUrls = data.demoImageLinks;
    this.techStackUsed = data.techStackUsed;
    this.description = data.description;
   }

  ngOnInit(): void {
  }
}