import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDeGaucheComponent } from './zone-de-gauche.component';

describe('ZoneDeGaucheComponent', () => {
  let component: ZoneDeGaucheComponent;
  let fixture: ComponentFixture<ZoneDeGaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDeGaucheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDeGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
