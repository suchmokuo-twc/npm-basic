import { transform } from "../src/romanizer";

describe("calculator", () => {
  it("should return X when transform 10", () => {
    const result = transform(10);

    expect(result).toEqual("X");
  });
});
