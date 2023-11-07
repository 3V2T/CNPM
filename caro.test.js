describe("evaluateConsecutivePieces", () => {
  it("should return 0 when there are no consecutive pieces", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const player = 1;
    const score = evaluateConsecutivePieces(player, board);
    expect(score).toBe(0);
  });

  it("should return correct score for horizontal consecutive pieces", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const player = 1;
    const score = evaluateConsecutivePieces(player, board);
    expect(score).toBe(1100);
  });

  it("should return correct score for vertical consecutive pieces", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ];
    const player = 1;
    const score = evaluateConsecutivePieces(player, board);
    expect(score).toBe(1100);
  });

  it("should return correct score for blocking opponent's horizontal consecutive pieces", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const player = 1;
    const score = evaluateConsecutivePieces(player, board);
    expect(score).toBe(1150);
  });

  it("should return correct score for blocking opponent's vertical consecutive pieces", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ];
    const player = 1;
    const score = evaluateConsecutivePieces(player, board);
    expect(score).toBe(1150);
  });
});