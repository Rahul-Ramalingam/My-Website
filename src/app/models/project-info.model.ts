export interface ProjectInfoClass{
    id:number;
    projectName:string;
    description:string;
    demoImageLinks:imagePath[];
    techStackUsed:string[];
}

export interface imagePath{
    path:string;
}