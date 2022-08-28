import { Component, OnInit } from '@angular/core';
import { BlogBaseModel } from 'src/app/models/blog-base.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {
  blogs: BlogBaseModel[] = [];
  hashTags: string[] = ["AI", "Machine Learning", "ASP.Net", "SQLServer", "LifeStyle", "Meditation", "LifeStruggles", "CloudAssert", "ProgrammerLife", "ProgrammerLife", "ProgrammerLife", "ProgrammerLife", "ProgrammerLife", "LifeStruggles", "CloudAssert", "ProgrammerLife", "ProgrammerLife", "ProgrammerLife", "ProgrammerLife", "ProgrammerLife", "AI", "Machine Learning", "ASP.Net", "SQLServer", "LifeStyle", "Meditation", "LifeStruggles"];
  constructor(private blogApiService: ApiServiceService) { }

  ngOnInit(): void {
    this.blogs = this.blogApiService.getBlogList();
    this.hashTags.concat(this.blogs[0].hashtags);
    console.log(this.blogs);
  }

  filterBlogList(tag:string){
    console.log(tag);
  }
}
