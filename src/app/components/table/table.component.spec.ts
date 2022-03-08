import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableComponent } from './table.component';
import { UserserviceService } from '../../services/userservice.service';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let table = fixture.nativeElement.querySelector('table');
  let userService;
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

  beforeEach(inject([UserserviceService], s => {
    userService = s;
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should display original title', () => {
    expect(table.length).toEqual(10);
  });
  
});


