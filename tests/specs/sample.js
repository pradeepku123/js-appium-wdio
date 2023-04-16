describe("Android Demo Application", () => {
  xit("Interacting Android Element", async () => {
    const findElementFirst = await $("android.widget.TextView");

    await expect(findElementFirst).toHaveText("API Demos");
  });

  it("Intracting Multiple Screen", async () => {
    const findElementFirst = await $("android.widget.TextView");
    await expect(findElementFirst).toHaveText("API Demos");
    await expect(await $("~App")).toHaveText("App");
    await $("~App").click();
    //Action Bar
    await expect(await $("~Action Bar")).toHaveText("Action Bar");
    await $("~Action Bar").click();
    await expect(await $("~Action Bar Mechanics")).toHaveText(
      "Action Bar Mechanics"
    );
  });
});
