export class EmployeeData {
    Skills = [
        { skillId: 1, skillName: 'HTML', technologyId:1,technologyName:'Frontend'},
        { skillId: 2, skillName: 'CSS',technologyId:1,technologyName:'Frontend' },
        { skillId: 3, skillName: 'JavaScript',technologyId:1,technologyName:'Frontend'},
        { skillId: 4, skillName: 'Angular' ,technologyId:1,technologyName:'Frontend'},
        { skillId: 5, skillName: 'C#',technologyId:2,technologyName:'Backend'},
        { skillId: 6, skillName: '.Net Core' ,technologyId:2,technologyName:'Backend'},
        { skillId: 7, skillName: 'SQL' ,technologyId:3,technologyName:'Database'},

    ]
    Designations = [
        {designationId:1,designationName:'Software Engineer'},
        {designationId:2,designationName:'Senior Software Engineer'}
    ]
    Employees = [
        { employeeId:1, employeeName: 'Navdeep', email: 'navdeepbakshi47@gmail.com', designationName: 'Software Engineer', gEmployeeSkills: [{ skillId: 1,isCertified:true,certificationCompletionDate:new Date() }, { skillId: 2,isCertified:false,certificationCompletionDate:null }] },
        { employeeId:2, employeeName: 'Sahil', email: 'sahil@gmail.com', designationName: 'Senior Software Engineer', gEmployeeSkills: [{ skillId: 1,isCertified:true,certificationCompletionDate:new Date() }, { skillId: 3,isCertified:false,certificationCompletionDate:null }] }
    ]
}