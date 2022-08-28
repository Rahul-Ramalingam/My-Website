export class BlogBaseModel{
    public id?:number;
    public title:string = "";
    public updatedTime:string = "";
    public readTime:string = "";
    public hashtags:string[] = [];
    public summary:string = "";
}