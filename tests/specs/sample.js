describe("Android Demo Application", () => {
  it("Intracting Multiple Screen", async () => {
    await $("~ENGLISH").click();
    await $("id=com.meesho.supply:id/iv_icon").click();
  });
});
