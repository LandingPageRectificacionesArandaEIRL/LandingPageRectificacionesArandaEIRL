import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionClientComponent } from './attention-client.component';

describe('AttentionClientComponent', () => {
  let component: AttentionClientComponent;
  let fixture: ComponentFixture<AttentionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttentionClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
