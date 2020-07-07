import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebReadersComponent } from './celeb-readers.component';

describe('CelebReadersComponent', () => {
  let component: CelebReadersComponent;
  let fixture: ComponentFixture<CelebReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
