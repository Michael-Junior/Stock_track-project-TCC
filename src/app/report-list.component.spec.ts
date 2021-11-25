import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reportsListaComponent } from './report-list.component';

describe('reportsListaComponent', () => {
  let component: reportsListaComponent;
  let fixture: ComponentFixture<reportsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ reportsListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(reportsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
