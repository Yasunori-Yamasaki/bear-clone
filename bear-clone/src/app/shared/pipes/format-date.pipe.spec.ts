import { FormatDatePipe } from "./format-date.pipe";

describe("FormatDatePipe", () => {
  it("create an instance", () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });

  it("与えられた日時から1分以内なら『~~ seconds ago』と表示される。", () => {});

  it("与えられた日時から1分以上1時間以内なら『~~ minutes ago』と表示される。", () => {});

  it("与えられた日時から1時間以上1日以内なら『~~ hours ago』と表示される。", () => {});

  it("与えられた日時から1日以上なら『Jan 26』の様に表示される。", () => {});
});
