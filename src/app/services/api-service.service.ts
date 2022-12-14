import { Injectable } from '@angular/core';
import { BlogBaseModel } from '../models/blog-base.model';
import { BlogDetailedViewModel } from '../models/blog-detail.model';

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
    let blog2 = new BlogBaseModel();
    let blog3 = new BlogBaseModel();

    blog.id = 1;
    blog.readTime = "5 mins";
    blog.hashtags = ["ComputerVision", "Python", "OpenCV"];
    blog.title = "Introduction to OpenCV";
    blog.updatedTime = "28/8/2022";
    blog.summary = "Thats how Im feeling about the Biden Administration at the moment. This past winter, Biden seemed cursed. Despite delivering a trillion dollars in direct aid to millions with the American Rescue Plan and then a similar amount in investment in domestic needs with the Bipartisan Infrastructure Act, his presidency seemed completely stuck in a ditch.";
    
    blog2.id = 2;
    blog2.readTime = "5 mins";
    blog2.hashtags = ["ComputerVision", "Python", "OpenCV"];
    blog2.title = "Introduction to OpenCV";
    blog2.updatedTime = "28/8/2022";
    blog2.summary = "Thats how Im feeling about the Biden Administration at the moment. This past winter, Biden seemed cursed. Despite delivering a trillion dollars in direct aid to millions with the American Rescue Plan and then a similar amount in investment in domestic needs with the Bipartisan Infrastructure Act, his presidency seemed completely stuck in a ditch.";

    blog3.id = 3;
    blog3.readTime = "5 mins";
    blog3.hashtags = ["ComputerVision", "Python", "OpenCV"];
    blog3.title = "Introduction to OpenCV";
    blog3.updatedTime = "28/8/2022";
    blog3.summary = "Thats how Im feeling about the Biden Administration at the moment. This past winter, Biden seemed cursed. Despite delivering a trillion dollars in direct aid to millions with the American Rescue Plan and then a similar amount in investment in domestic needs with the Bipartisan Infrastructure Act, his presidency seemed completely stuck in a ditch.";

    return [blog,blog2,blog3];
  }

  /**
   * getBlogDetails
    id:number   */
  public getBlogDetails(id:number): BlogDetailedViewModel {
    let html = '<h1><strong>Angular DI: Using Inject Instead of Constructor</strong></h1><p><br></p><p><img src="https://miro.medium.com/max/875/1*CqmldfbX8ehI67U0XNqf-w.png"></p><p><br></p><p><span style="color: rgb(41, 41, 41);">As we learned in my&nbsp;</span><a href="https://netbasal.com/unleash-the-power-of-di-functions-in-angular-2eb9f2697d66" target="_blank" style="color: inherit; background-color: rgb(255, 255, 255);">previous</a><span style="color: rgb(41, 41, 41);">&nbsp;article, we can now use the&nbsp;</span><code style="color: rgb(41, 41, 41); background-color: rgb(242, 242, 242);">inject()</code><span style="color: rgb(41, 41, 41);">&nbsp;function inside components, directives, and pipes. Here are the reasons I chose it over the&nbsp;</span><code style="color: rgb(41, 41, 41); background-color: rgb(242, 242, 242);">constructor</code><span style="color: rgb(41, 41, 41);">&nbsp;for dependency injection. The first thing I noticed is that it is cleaner and more readable:</span></p><p><br></p><pre class="ql-syntax" spellcheck="false">export class AppComponent \
    \{\
      constructor(\
        @Inject(FOO) private foo: string,\
        @Optional() @Inject(BAR) private bar: string | null,\
        private http: HttpClient,\
        private todosService: TodosService\
      ) { }\
    }\
  </pre><p><br></p><p><br></p>;';
    let blogDetails = new BlogDetailedViewModel();
    blogDetails.innerHtml = html;
    return blogDetails;
  }
}
