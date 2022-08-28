import { Injectable } from '@angular/core';
import { BlogBaseModel } from '../models/blog-base.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  /**
   * getBlogList
   */
  public getBlogList(): BlogBaseModel[] {
    let blog = new BlogBaseModel();
    blog.id = 1;
    blog.readTime = "5 mins";
    blog.hashtags = ["ComputerVision", "Python", "OpenCV"];
    blog.title = "Introduction to OpenCV";
    blog.updatedTime = "28/8/2022";
    blog.summary = "Thats how Im feeling about the Biden Administration at the moment. This past winter, Biden seemed cursed. Despite delivering a trillion dollars in direct aid to millions with the American Rescue Plan and then a similar amount in investment in domestic needs with the Bipartisan Infrastructure Act, his presidency seemed completely stuck in a ditch."
    
    return [blog,blog,blog];
  }
}
