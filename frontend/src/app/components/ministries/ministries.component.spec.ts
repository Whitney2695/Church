import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistriesComponent } from './ministries.component';

describe('MinistriesComponent', () => {
  let component: MinistriesComponent;
  let fixture: ComponentFixture<MinistriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinistriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
