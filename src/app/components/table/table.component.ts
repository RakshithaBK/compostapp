import { Component, OnInit, ViewChild,Output,EventEmitter, Input} from '@angular/core';
import {MatLegacyPaginator as MatPaginator} from '@angular/material/legacy-paginator';
import {MatLegacyTableDataSource as MatTableDataSource} from '@angular/material/legacy-table';
import { UserserviceService } from '../../services/userservice.service';
import { Posts, User } from '../../Models/user';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [UserserviceService]
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'totalposts', 'totalcomments'];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users: any;
  selectedRowIndex = -1;
  @Input() isSelected = false;
  @Output() toggle = new EventEmitter();
  private eventsSubscription: Subscription;
  loading = false;
  listsofusers;

@Input() events: Observable<void>;

  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
   this.getTableData()
   this.userservice.getUsers().subscribe({
     next: (data) => {this.listsofusers = data},
     error: (e) => console.error(e),
     complete: () => console.log("success")
   })
  }

  getTableData(){
 //API call to get users/posts/comments data
 this.loading = true;
 this.userservice.getUserData().subscribe({
   next: (data) => { 
     this.users = data[0][0]; this.dataSource = new MatTableDataSource(this.users); 
   
     this.users.forEach(user => {
       let comments = 0;
      user.posts.forEach(post => {
         comments = comments + post.comments;
         user.totalcomments = comments;
       });
     });
     console.log(this.users);
 },
   error: (e) => console.error(e),
   complete: () => {this.loading = false;console.info('complete'); this.dataSource.paginator = this.paginator;}
  })
  this.eventsSubscription = this.events.subscribe((data) => {
    this.users.forEach(element => {
      if(data== element.id){
       element.posts.length =  element.posts.length  + 1;
      }
    });
   this.deselectrow();
  });
  }

//Deselction of row
 deselectrow(){
  this.isSelected = true;
  this.selectedRowIndex = -1;
 }

//Table row select and emit row on selection
selectRow(row: any){
    this.toggle.emit( {make: this.isSelected, name: row});
    this.isSelected = !this.isSelected;
    if(this.selectedRowIndex == row.id){
      this.selectedRowIndex = -1;
    }else{
      this.selectedRowIndex = row.id;
    }
    
}

//Unsubscribe the subscription on destroy
ngOnDestroy() {
  this.eventsSubscription.unsubscribe();
}
}

