import { Component, OnInit } from '@angular/core';
import { AllDataService } from '../service/all-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewData: any;
  appName: any;
  commentsval: any;
  tableContent:any;
  constructor(private allData:AllDataService,private router: Router) { }

  ngOnInit() {
    this.tableContent=JSON.parse(localStorage.getItem('tableConData'));
  
    this.allData.viewConData.subscribe((res: any) =>
    { 
      this.viewData = res;
      if( this.viewData == null || this.viewData == undefined ){
        this.router.navigate(['/mainTablePage']);
      }else{
        this.appName = this.viewData.ApplicationName
        this.commentsval =  this.viewData.comments

      }
      
    }
   );
  }
  clearData(){
    this.appName='';
    this.commentsval =''
  }
  saveEditdata(){
for(let  i =0;i< this.tableContent.length;i++){
  if(this.viewData.id == this.tableContent[i].id ){
    this.tableContent[i].ApplicationName = this.appName
    this.tableContent[i].comments =this.commentsval
  }
}
localStorage.setItem('tableConData', JSON.stringify( this.tableContent));

this.router.navigate(['/mainTablePage']);

  }
}
