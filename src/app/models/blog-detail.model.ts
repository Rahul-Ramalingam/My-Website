import { BlogBaseModel } from "./blog-base.model";

export class BlogDetailedViewModel extends BlogBaseModel{
    public coverImageLink:string = "";
    public innerHtml:string="";
    public likes:number=0;
    public comments:string[]=[];
}