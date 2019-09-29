import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  appID:any;
  appName:any;
  createDate:any;
  createBy:any;
  ModifiedDate:any;
  commentsval:any
  tableContent: any;
  formdatavalue: {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.tableContent=JSON.parse(localStorage.getItem('tableConData'));
  }
  saveAdddata(){
    this.formdatavalue = {
      id:this.appID,
      ApplicationName:this.appName,
      createDate:this.createDate,
      createdBy:this.createBy,
      modifiedDate:this.ModifiedDate,
      comments:this.commentsval
    }
    this.tableContent.push(  this.formdatavalue);
    localStorage.setItem('tableConData', JSON.stringify( this.tableContent));

    this.router.navigate(['/mainTablePage']);
  }
  cancelData(){
    this.router.navigate(['/mainTablePage']);
  }
}
