import { TestBed } from "@angular/core/testing";

import { LocalStorageService } from "./local-storage.service";

describe("LocalStorageService", () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("save", () => {
    it("ローカルストレージにメモデータを保存している。", () => {});
  });

  describe("get", () => {
    it("メモデータが保存されていれば、そのデータを返却する。", () => {});

    it("メモデータが保存されていなければ、から配列を返却する。", () => {});
  });
});
