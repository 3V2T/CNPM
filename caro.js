// Khởi tạo bàn cờ 15x15
const BOARD_SIZE = 15;
const EMPTY_CELL = 0;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

const board = [];
for (let i = 0; i < BOARD_SIZE; i++) {
    board.push(new Array(BOARD_SIZE).fill(EMPTY_CELL));
}

// Kiểm tra nước đi hợp lệ
function isValidMove(x, y) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE && board[x][y] === EMPTY_CELL;
}

// Thực hiện nước đi của người chơi
function makeMove(x, y, player) {
    if (isValidMove(x, y)) {
        board[x][y] = player;
        // Kiểm tra xem người chơi đã chiến thắng hay chưa
        if (isWinningMove(x, y, player)) {
            console.log(`Người chơi ${player} thắng!`);
            // Xử lý kết thúc trò chơi
        }
        // Gọi hàm để lượt AI thực hiện nước đi
        makeAIMove();
    }
}

// Kiểm tra xem người chơi đã thắng hay chưa
function isWinningMove(x, y, player) {
    // Kiểm tra hàng ngang
    let consecutiveCount = 0;
    for (let i = Math.max(x - 4, 0); i <= Math.min(x + 4, BOARD_SIZE - 1); i++) {
        if (board[i][y] === player) {
            consecutiveCount++;
            if (consecutiveCount >= 5) {
                return true;
            }
        } else {
            consecutiveCount = 0;
        }
    }

    // Kiểm tra hàng dọc
    consecutiveCount = 0;
    for (let j = Math.max(y - 4, 0); j <= Math.min(y + 4, BOARD_SIZE - 1); j++) {
        if (board[x][j] === player) {
            consecutiveCount++;
            if (consecutiveCount >= 5) {
                return true;
            }
        } else {
            consecutiveCount = 0;
        }
    }

    // Kiểm tra đường chéo chính
    consecutiveCount = 0;
    for (let i = Math.max(x - 4, 0), j = Math.max(y - 4, 0); i <= Math.min(x + 4, BOARD_SIZE - 1) && j <= Math.min(y + 4, BOARD_SIZE - 1); i++, j++) {
        if (board[i][j] === player) {
            consecutiveCount++;
            if (consecutiveCount >= 5) {
                return true;
            }
        } else {
            consecutiveCount = 0;
        }
    }

    // Kiểm tra đường chéo phụ
    consecutiveCount = 0;
    for (let i = Math.max(x - 4, 0), j = Math.min(y + 4, BOARD_SIZE - 1); i <= Math.min(x + 4, BOARD_SIZE - 1) && j >= Math.max(y - 4, 0); i++, j--) {
        if (board[i][j] === player) {
            consecutiveCount++;
            if (consecutiveCount >= 5) {
                return true;
            }
        } else {
            consecutiveCount = 0;
        }
    }

    return false;
}

// Thực hiện nước đi của AI
function makeAIMove() {
    const difficulty = 3; // Điều chỉnh độ khó ở đây, ví dụ: 1 (dễ), 2 (trung bình), 3 (khó)

    const bestMove = getBestMove(PLAYER_TWO, difficulty); // Gọi hàm Minimax để lấy nước đi tốt nhất cho AI (AI được đánh dấu là 2).
    const x = bestMove.x;
    const y = bestMove.y;

    if (isValidMove(x, y)) {
        board[x][y] = PLAYER_TWO;

        if (isWinningMove(x, y, PLAYER_TWO)) {
            console.log("AI thắng!");
            // Xử lý kết thúc trò chơi
        }
    }
}

// Tìm nước đi tốt nhất cho AI
function getBestMove(player, depth) {
    let bestMove = null;
    let bestScore = -Infinity;

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (isValidMove(i, j)) {
                board[i][j] = player;
                const score = alphaBetaPruning(board, depth - 1, -Infinity, Infinity, false, PLAYER_TWO, PLAYER_ONE);
                board[i][j] = EMPTY_CELL; // Đặt lại giá trị bàn cờ

                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { x: i, y: j };
                }
            }
        }
    }

    return bestMove;
}

// Hàm đánh giá tình huống trên bàn cờ
function alphaBetaPruning(board, depth, alpha, beta, maximizingPlayer, player, opponent) {
    if (depth === 0 || isGameEnd()) {
        return evaluateBoard(); // Đánh giá tình huống trên bàn cờ (cần triển khai hàm này).
    }

    if (maximizingPlayer) {
        let maxScore = -Infinity;
        for (let [i, row] of board.entries()) {
            for (let [j, cell] of row.entries()) {
                if (cell === EMPTY_CELL) {
                    board[i][j] = player;
                    maxScore = Math.max(maxScore, alphaBetaPruning(board, depth - 1, alpha, beta, false, opponent, player));
                    board[i][j] = EMPTY_CELL; // Đặt lại giá trị bàn cờ

                    alpha = Math.max(alpha, maxScore);
                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let [i, row] of board.entries()) {
            for (let [j, cell] of row.entries()) {
                if (cell === EMPTY_CELL) {
                    board[i][j] = player;
                    minScore = Math.min(minScore, alphaBetaPruning(board, depth - 1, alpha, beta, true, opponent, player));
                    board[i][j] = EMPTY_CELL; // Đặt lại giá trị bàn cờ

                    beta = Math.min(beta, minScore);
                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }
        return minScore;
    }
}

// Kiểm tra xem trò chơi đã kết thúc chưa
function isGameEnd() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] !== EMPTY_CELL) {
                const currentPlayer = board[i][j];

                if (isWinningMove(i, j, currentPlayer)) {
                    return true; // Nếu một người chơi tạo ra cấu trúc chiến thắng, trò chơi kết thúc
                }
            }
        }
    }

    // Kiểm tra xem bàn cờ đã đầy chưa
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === EMPTY_CELL) {
                return false;
            }
        }
    }

    return true; // Nếu không còn ô trống, trò chơi kết thúc hòa.
}

// Đánh giá tình huống trên bàn cờ
function evaluateBoard() {
    let score = 0;

    // Tiêu chí số lượng quân cờ liên tiếp
    score += evaluateConsecutivePieces(PLAYER_TWO) - evaluateConsecutivePieces(PLAYER_ONE);

    // Tiêu chí phòng ngừa thua
    score += evaluatePreventLoss(PLAYER_TWO) - evaluatePreventLoss(PLAYER_ONE);

    // Tiêu chí cấu trúc hình thành
    score += evaluateFormation(PLAYER_TWO) - evaluateFormation(PLAYER_ONE);

    // Tiêu chí kiểm soát trung tâm
    score += evaluateControlCenter(PLAYER_TWO) - evaluateControlCenter(PLAYER_ONE);

    // Tiêu chí phòng ngừa chiến thắng đối phương
    score += evaluatePreventOpponentWin(PLAYER_TWO) - evaluatePreventOpponentWin(PLAYER_ONE);

    // Tiêu chí ưu tiên tấn công và phòng ngự
    score += evaluateAggressiveDefense(PLAYER_TWO) - evaluateAggressiveDefense(PLAYER_ONE);

    return score;
}

// Đánh giá tiêu chí số lượng quân cờ liên tiếp
function evaluateConsecutivePieces(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá số lượng quân cờ liên tiếp
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === player) {
                // Đánh giá số lượng quân cờ liên tiếp theo chiều ngang
                let consecutiveHorizontal = 1;
                for (let k = 1; k < 5; k++) {
                    if (j + k < BOARD_SIZE && board[i][j + k] === player) {
                        consecutiveHorizontal++;
                    } else {
                        break;
                    }
                }

                // Đánh giá số lượng quân cờ liên tiếp theo chiều dọc
                let consecutiveVertical = 1;
                for (let k = 1; k < 5; k++) {
                    if (i + k < BOARD_SIZE && board[i + k][j] === player) {
                        consecutiveVertical++;
                    } else {
                        break;
                    }
                }

                // Tính điểm cho người chơi
                if (consecutiveHorizontal >= 5) {
                    score += 1000;
                } else if (consecutiveHorizontal === 4) {
                    score += 100;
                } else if (consecutiveHorizontal === 3) {
                    score += 10;
                } else if (consecutiveHorizontal === 2) {
                    score += 1;
                }

                if (consecutiveVertical >= 5) {
                    score += 1000;
                } else if (consecutiveVertical === 4) {
                    score += 100;
                } else if (consecutiveVertical === 3) {
                    score += 10;
                } else if (consecutiveVertical === 2) {
                    score += 1;
                }

                // Cân nhắc trường hợp chặn đối thủ
                if (consecutiveHorizontal === 4 && j > 0 && j + 4 < BOARD_SIZE && board[i][j - 1] === EMPTY_CELL && board[i][j + 4] === EMPTY_CELL) {
                    score += 50; // Có thể tạo cơ hội chiến thắng
                }

                if (consecutiveVertical === 4 && i > 0 && i + 4 < BOARD_SIZE && board[i - 1][j] === EMPTY_CELL && board[i + 4][j] === EMPTY_CELL) {
                    score += 50; // Có thể tạo cơ hội chiến thắng
                }
            }
        }
    }

    return score;
}

// Đánh giá tiêu chí phòng ngừa thua
function evaluatePreventLoss(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá tình huống để tránh thua
    // Đánh giá cao những tình huống có nguy cơ thua (chặn đối thủ tạo cấu trúc chiến thắng)
    return score;
}

// Đánh giá tiêu chí cấu trúc hình thành
function evaluateFormation(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá cấu trúc hình thành
    // Đánh giá cao những cấu trúc có tiềm năng chiến thắng
    return score;
}

// Đánh giá tiêu chí kiểm soát trung tâm
function evaluateControlCenter(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Đánh giá kiểm soát các ô trung tâm của bàn cờ
    // Đánh giá cao việc kiểm soát các ô trung tâm
    return score;
}

// Đánh giá tiêu chí phòng ngừa chiến thắng đối phương
function evaluatePreventOpponentWin(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá tình huống để ngăn chặn đối thủ tạo cấu trúc chiến thắng
    // Đánh giá cao những tình huống có nguy cơ đối thủ tạo cấu trúc chiến thắng
    return score;
}

// Đánh giá tiêu chí ưu tiên tấn công và phòng ngự
function evaluateAggressiveDefense(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Đánh giá tình huống trên bàn cờ để quyết định liệu bạn nên tấn công (tạo cơ hội thắng) hay phòng ngự (ngăn chặn đối thủ thắng)
    // Đánh giá cao việc tấn công và đồng thời đánh giá cao việc phòng ngự để tránh thua
    return score;
}

// Khi người chơi nhấn vào một ô trên bàn cờ, gọi makeMove(x, y, player) với player là người chơi hiện tại (1 hoặc 2).
