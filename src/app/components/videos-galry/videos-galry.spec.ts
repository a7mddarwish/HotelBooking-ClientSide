import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGalry } from './videos-galry';

describe('VideosGalry', () => {
  let component: VideosGalry;
  let fixture: ComponentFixture<VideosGalry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosGalry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosGalry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
