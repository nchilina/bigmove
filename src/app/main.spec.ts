import {Main} from './main';
import {TestBed, async} from '@angular/core/testing';

describe('main component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Main]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(Main);
    fixture.detectChanges();
  });
});
