import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableComponent } from './table.component';
import { UserserviceService } from '../../services/userservice.service';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TableComponent ],
      providers:[
        UserserviceService
      ]
    })
    
    .compileComponents();
  });


  it('should create', () => {
    expect(component.displayedColumns.length).toEqual(4);
  });
  
});


