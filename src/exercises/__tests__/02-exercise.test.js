const path = require("path");
const fs = require("fs").promises;

const { uppercase } = require("../02-exercise/02-exercise");

describe("02-exercise", () => {
  const FILE_PATH = path.resolve(__dirname, "..", "02-exercise", "names.txt");

  beforeAll(async () => {
    await fs.writeFile(FILE_PATH, "ana;alex;dani;alex;smith", "utf-8");
  });

  afterAll(async () => {
    await fs.writeFile(FILE_PATH, "ana;alex;dani;alex;smith", "utf-8");
  });

  test("uppercase each name in the file and call the callback when done", (done) => {
    function getData(data) {
      expect(data).toMatch(/ANA;ALEX;DANI;ALEX;SMITH/);
      done();
    }

    uppercase(getData);
  });

  test("write the results back to the disk overwriting the previous text", async () => {
    const data = await fs.readFile(FILE_PATH, "utf-8");

    expect(data).toMatch(/ANA;ALEX;DANI;ALEX;SMITH/);
  });
});
