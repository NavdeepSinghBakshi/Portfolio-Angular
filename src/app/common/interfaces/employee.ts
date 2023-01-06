export class IAddEmployee {
    employeeName: string = "";
    email: string = ""
    designationId: number = 0
    employeeSkills : Array<IEmployeeSkills> = new Array<IEmployeeSkills>()
}
export class IEmployeeSkills {
    skillId:number = 0 
    isCertified: boolean = false
    certificationCompletionDate?: Date 
}