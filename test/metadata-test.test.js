import path from "path";
import { emulator, executeScript, init, shallResolve } from "flow-js-testing";

// Increase timeout if your tests failing due to timeout
jest.setTimeout(10000);

describe("setup-test", () => {
  beforeEach(async () => {
    const basePath = path.resolve(__dirname, "../contracts");
    // You can specify different port to parallelize execution of describe blocks
    const port = 8080;
    // Setting logging flag to true will pipe emulator output to console
    const logging = false;

    await init(basePath, { port });
    emulator.start(port, logging);

    const code = `
    pub fun main(metadata: {String: String}): String{
      return metadata["name"]!
    }  
  `;

    // Define arguments we want to pass
    const args = [{ name: "Boris", nickname: "The Blade" }];

    // If something goes wrong with script execution, the method will throw an error
    // so we need to catch it and proce
    const [name, err] = await shallResolve(executeScript({ code, args }));
    console.log(name, err);
  });

  // Stop emulator, so it could be restarted
  afterEach(async () => {
    return emulator.stop();
  });

  test("+++", async () => {
    // WRITE YOUR ASSERTS HERE
  })
})
