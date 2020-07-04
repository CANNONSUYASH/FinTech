import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeOverviewDialogComponent } from './dialoge-overview-dialog.component';

describe('DialogeOverviewDialogComponent', () => {
  let component: DialogeOverviewDialogComponent;
  let fixture: ComponentFixture<DialogeOverviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogeOverviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
