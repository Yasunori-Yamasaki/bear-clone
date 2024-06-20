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

  describe("isNotes", () => {
    it("メモデータの配列なら true を返却。", () => {});

    it("メモデータの配列以外なら false を返却。", () => {});
  });

  describe("isNote", () => {
    it("メモデータ用オブジェクトなら true を返却。", () => {});

    it("メモデータ用オブジェクト以外なら false を返却。", () => {});
  });
});
