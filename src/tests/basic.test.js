describe("Test should work", () => {
  it('should return true for 1 === 1, and false for 1 === -1', (done) => {
    expect(1 === 1).toBeTruthy();
    expect(1 === -1).toBeFalsy();
    done();
  }) 
})

