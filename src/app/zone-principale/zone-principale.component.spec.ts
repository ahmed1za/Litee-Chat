import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonePrincipaleComponent } from './zone-principale.component';

describe('ZonePrincipaleComponent', () => {
  let component: ZonePrincipaleComponent;
  let fixture: ComponentFixture<ZonePrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonePrincipaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonePrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
