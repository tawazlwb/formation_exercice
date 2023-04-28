import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeriesItemComponent } from './list-series-item.component';

describe('ListSeriesItemComponent', () => {
  let component: ListSeriesItemComponent;
  let fixture: ComponentFixture<ListSeriesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeriesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSeriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
