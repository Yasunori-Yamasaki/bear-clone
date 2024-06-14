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

  describe("formatUpdateAt", () => {
    it("メモ作成から1分以内なら『~~ seconds ago』と表示される。", () => {});

    it("メモ作成から1分以上1時間以内なら『~~ minutes ago』と表示される。", () => {});

    it("メモ作成から1時間以上1日以内なら『~~ hours ago』と表示される。", () => {});

    it("メモ作成から1日以上なら『Jan 26』の様に表示される。", () => {});
  });
});
