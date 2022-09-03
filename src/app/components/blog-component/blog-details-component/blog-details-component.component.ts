import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDetailedViewModel } from 'src/app/models/blog-detail.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-blog-details-component',
  templateUrl: './blog-details-component.component.html',
  styleUrls: ['./blog-details-component.component.css']
})
export class BlogDetailsComponentComponent implements OnInit {

  innerHtml:string="";
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _blogApiService: ApiServiceService) { }

  ngOnInit(): void {
    var id = this._Activatedroute.snapshot.params['id'];
    let blogDetails = new BlogDetailedViewModel();
    blogDetails = this._blogApiService.getBlogDetails(id);
    this.innerHtml = blogDetails.innerHtml;
    console.log(blogDetails.innerHtml);
  }

}
