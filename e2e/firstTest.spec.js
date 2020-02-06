describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have game list', async () => {
    await expect(element(by.text('Game List'))).toBeVisible();
  });

  it('should show chart list', async () => {
    await expect(element(by.text('Chart List'))).toBeVisible();
  });
});
