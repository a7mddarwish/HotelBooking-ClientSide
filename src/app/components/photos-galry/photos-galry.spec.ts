import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosGalry } from './photos-galry';

describe('PhotosGalry', () => {
  let component: PhotosGalry;
  let fixture: ComponentFixture<PhotosGalry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosGalry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosGalry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
