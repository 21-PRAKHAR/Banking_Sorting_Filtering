import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordtableComponent } from './recordtable.component';

describe('RecordtableComponent', () => {
  let component: RecordtableComponent;
  let fixture: ComponentFixture<RecordtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
