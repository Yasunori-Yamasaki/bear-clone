import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NoteItemComponent } from "./note-item.component";

describe("NoteItemComponent", () => {
  let component: NoteItemComponent;
  let fixture: ComponentFixture<NoteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("メモタイトルが表示されている。", () => {});

  it("メモ本文が表示されている", () => {});

  it("更新日時が表示されている。", () => {});
});
