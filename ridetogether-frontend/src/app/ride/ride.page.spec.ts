import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RidePage } from './ride.page';

describe('RidePage', () => {
  let component: RidePage;
  let fixture: ComponentFixture<RidePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RidePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
