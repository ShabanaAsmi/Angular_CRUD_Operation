import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDataService } from '../service/all-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
elements:any=[]
headElements:any=[]
  tableData: any;
  tableContent: any;
  tableHeadData: any = [];
  searchText:any;
  filterData :any
  constructor(private router: Router,private allData:AllDataService) { }

  ngOnInit() {
  
    this.tableContent=JSON.parse(localStorage.getItem('tableConData'));
   if( this.tableContent == null || this.tableContent == undefined || this.tableContent.length == 0 ){
      this.allData.getTableData().subscribe(res => {
        this.tableData = res
        this.elements =  this.tableData.tablecontent;
        this.headElements =  this.tableData.tableHead
        localStorage.setItem('tableHeadData', JSON.stringify(    this.headElements));
       localStorage.setItem('tableConData', JSON.stringify(   this.elements));

      })
  
   }
   else{
    this.tableHeadData=JSON.parse(localStorage.getItem('tableHeadData'));
    this.headElements =  this.tableHeadData
    this.elements = this.tableContent

   }
  
  }
  search(term: string) {
    if(!term) {
      this.filterData   =   this.elements ;
    } else {
      this.filterData   =  this.elements.filter(x => 
         x.name.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
  }
view(item,index){
  
 this.allData.viewConData.next(item);
    this.router.navigate(['/view']);
}
addApplication(){
  this.router.navigate(['/addTab']);
}
delete(index){
  this.elements.splice(index, 1);
  localStorage.setItem('tableConData', JSON.stringify(   this.elements));
}
}
