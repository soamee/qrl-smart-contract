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
  });

  // Stop emulator, so it could be restarted
  afterEach(async () => {
    return emulator.stop();
  });

  test(`check "name"`, async () => {
    const code = `
      pub fun main(metadata: {String: String}): String{
        return metadata["name"]!
      }  
    `;

    const args = [{
      name: "Boris",
      nickname: "The Blade"
    }];

    const [name, err] = await shallResolve(executeScript({ code, args }));
    expect(name).toBe('Boris');
    expect(err).toBeFalsy();
  });


  test(`check "nickname"`, async () => {
    const code = `
      pub fun main(metadata: {String: String}): String{
        return metadata["nickname"]!
      }  
    `;

    const args = [{
      name: "Boris",
      nickname: "The Blade"
    }];

    const [nickname, err] = await shallResolve(executeScript({ code, args }));
    expect(nickname).toBe('The Blade');
    expect(err).toBeFalsy();
  });
})
