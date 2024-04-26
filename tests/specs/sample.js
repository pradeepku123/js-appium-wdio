describe("Meesho Device Under Test", () => {
  beforeEach(async () => {
    await driver.activateApp("com.meesho.supply");
  });
  afterEach(async () => {
    driver.terminateApp("com.meesho.supply");
  });
  it("Explre Intraction With Mesho", async () => {
    await driver.lock(3);
    await driver.isLocked();
    await driver.unlock();
    await driver.isLocked();
  });
});
