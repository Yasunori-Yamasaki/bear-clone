import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SidebarComponent } from "./sidebar.component";

describe("SidebarComponent", () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("背景色が #DB43AF になっている", () => {});

  it("メモの存在に関わらず 『Notes, Trash』のグループが表示されている。", () => {});

  it("『Notes』の下層には『Untagged, Todo, Today, Locked』のグループが表示されている。", () => {});

  it("タグ付きのメモがある場合、タグ名に合わせたグループが表示されている。", () => {});

  it("タグがスラッシュ区切りになっているなら、タググループが階層構造になっている。", () => {});
});
