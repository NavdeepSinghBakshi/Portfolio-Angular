import { Component, OnInit } from '@angular/core';
import { FusionchartService } from 'src/app/common/services/fusion-chart.service';

@Component({
  selector: 'app-fusion-chart',
  templateUrl: './fusion-chart.component.html',
  styleUrls: ['./fusion-chart.component.css']
})
export class FusionChartComponent implements OnInit{
  graph: any
  dataSourceEmployeeVsAge: any
  dataSourceEmployeeVsSalary: any
  dataSourceEmployeeVsSkills: any
  EmployeeData = [
    {
      employeeName: "Palak",
      employeeAge: "21",
      employeeSalary: "40000",
      employeeNoOfFrontendSkills: "2",
      employeeNoOfBackendSkills: "4"
    },
    {
      employeeName: "Kritika",
      employeeAge: "43",
      employeeSalary: "32000",
      employeeNoOfFrontendSkills: "1",
      employeeNoOfBackendSkills: "3"
    },
    {
      employeeName: "Virat",
      employeeAge: "32",
      employeeSalary: "80000",
      employeeNoOfFrontendSkills: "5",
      employeeNoOfBackendSkills: "1"
    },
    {
      employeeName: "Gurdil",
      employeeAge: "12",
      employeeSalary: "20000",
      employeeNoOfFrontendSkills: "2",
      employeeNoOfBackendSkills: "6"
    },
    {
      employeeName: "Mansi",
      employeeAge: "50",
      employeeSalary: "40000",
      employeeNoOfFrontendSkills: "5",
      employeeNoOfBackendSkills: "5"
    },
    {
      employeeName: "Vinny",
      employeeAge: "67",
      employeeSalary: "51000",
      employeeNoOfFrontendSkills: "7",
      employeeNoOfBackendSkills: "4"
    },
    {
      employeeName: "Malik",
      employeeAge: "40",
      employeeSalary: "200000",
      employeeNoOfFrontendSkills: "7",
      employeeNoOfBackendSkills: "8"
    },
    {
      employeeName: "Saurav",
      employeeAge: "47",
      employeeSalary: "100000",
      employeeNoOfFrontendSkills: "8",
      employeeNoOfBackendSkills: "2"
    }
  ];
  EmployeeAnalysisDropDown = ['Age', 'Salary Expense', 'Skill Set']
  constructor(private _fusionChartService: FusionchartService) {
    this.graph = {
      index0: true,
      index1: false,
      index2: false
    }
  }

  ngOnInit(): void {
    this.EmployeeVsAgecolumn3d();
    this.EmployeeVsAgedoughnut2d();
    this.EmployeeVsSkillsmsline();
  }
  responding(evt:any) {
    if (evt.target.tagName === 'LI')
        alert(evt.target.innerText)
}
   listadd() {
    //  const customUI = document.getElementById('list');
    //  for (var i = 1; i <= 10; i++) {
    //    const newElement = document.createElement('li');
    //    newElement.textContent = "This is line " + i;
    //    customUI.appendChild(newElement);
    //  }
    //  customUI.addEventListener('click', this.responding);
   }
  selectElement(index: number) {
    this.graph.index0 = false;
    this.graph.index1 = false;
    this.graph.index2 = false;
    this.graph['index' + index] = true;
  }
  EmployeeVsAgecolumn3d() {
    let chartData : any[] = []
    this.EmployeeData.forEach(x => chartData.push({ label: x.employeeName, value: x.employeeAge }))
    let caption = "Employee With Ages";
    let subCaption = "Analysis by Navdeep Singh Bakshi";
    let xAxisName = "Employee";
    let yAxisName = "Age (years)";
    let numberSuffix = "";
    this.dataSourceEmployeeVsAge = this._fusionChartService.column3d(chartData, caption, subCaption, xAxisName, yAxisName, numberSuffix, "Target Age = 25", "25");
  }
  EmployeeVsAgedoughnut2d() {
    let chartData : any[] = []
    this.EmployeeData.forEach(x => chartData.push({ label: x.employeeName, value: x.employeeSalary }))
    let caption = "Split of Expense by Employees";
    let subCaption = "Analysis by Navdeep Singh Bakshi";
    this.dataSourceEmployeeVsSalary = this._fusionChartService.doughnut2d(chartData, caption, subCaption);
  }
  EmployeeVsSkillsmsline() {
    let category: any[] = [];
    this.EmployeeData.forEach(x => category.push({ label: x.employeeName }));
    let categories = [{ category }];
    let frontendSkillsData :  any[] = [];
    this.EmployeeData.forEach(x => frontendSkillsData.push({ value: x.employeeNoOfFrontendSkills }));
    let backendSkillsData : any[] = [];
    this.EmployeeData.forEach(x => backendSkillsData.push({ value: x.employeeNoOfBackendSkills }));
    let dataset = [
      {
        seriesname: "Backend Skills",
        data: backendSkillsData
      },
      {
        seriesname: "Frontend Skills",
        data: frontendSkillsData
      }
    ]
    let caption = "Comparison of Skillset of Employees";
    let subCaption = "Analysis by Navdeep Singh Bakshi";
    this.dataSourceEmployeeVsSkills = this._fusionChartService.msline(categories, dataset, caption, subCaption)
  }
}
