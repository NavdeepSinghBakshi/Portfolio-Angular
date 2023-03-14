export class IActivity {
    //subjectId: number = 0;
    weightagePercent: number = 0;
    //skillId: number = 0;// 
    topicName: string = "";
    //isActive: boolean = true;
    //topicId:number = 0;
     column1WeightagePercent: number = 0;
     column2WeightagePercent: number = 0;
     column3WeightagePercent: number = 0;
     column4WeightagePercent: number = 0;
     column5WeightagePercent: number = 0;
     columnName1: string = "";
     columnName2: string = "";
     columnName3: string = "";
     columnName4: string = "";
     columnName5: string = "";
}
export class IColumn {
    id: number = 0;
}
export class IProjectMapping {
    projectId: number = 0;
    effortRate: number = 0;
    isActive: boolean = true;
    disableProject: boolean = false;
}
export class ITechnologyMapping {
    technologyId: number = 0;
    projectId: number = 0;
    value : boolean = false;
}
export class ISubject{
    subjectName: string = "";
    columnName1: string = "";
    columnName2: string = "";
    columnName3: string = "";
    columnName4: string = "";
    columnName5: string = "";
    isActive: boolean = true;
    status: string = "";
    isStd: boolean = true;
    skillId: number = 0;
    technologyId: number = 0;
    employeeId: number = 0;
    subjectImageUrl: string = "";
    projectMapping : Array<IProjectMapping> = new Array<IProjectMapping>()
    technologyMapping : Array<ITechnologyMapping> = new Array<ITechnologyMapping>()
    topic : Array<ITopic> = new Array<ITopic>()
}
export class ITopic {
    subjectId: number = 0;
    weightagePercent: number = 0;
    column1WeightagePercent: number = 0;
    column2WeightagePercent: number = 0;
    column3WeightagePercent: number = 0;
    column4WeightagePercent: number = 0;
    column5WeightagePercent: number = 0;
    columnName1: string = "";
    columnName2: string = "";
    columnName3: string = "";
    columnName4: string = "";
    columnName5: string = "";
    parentTopicId : number = 0;
    skillId: number = 0;
    topicName: string = "";
    isActive: boolean = true;
}
