// Tạo một bàn cờ 15x15
const board = [];
for (let i = 0; i < 15; i++) {
    board.push(new Array(15).fill(0));
}

// Hàm để kiểm tra xem một nước đi có hợp lệ không
function isValidMove(x, y) {
    return x >= 0 && x < 15 && y >= 0 && y < 15 && board[x][y] === 0;
}

// Hàm để thực hiện nước đi của người chơi
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

// Hàm để kiểm tra xem người chơi đã thắng hay chưa
function isWinningMove(x, y, player) {
    // Kiểm tra hàng ngang
    let consecutiveCount = 0;
    for (let i = Math.max(x - 4, 0); i <= Math.min(x + 4, 14); i++) {
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
    for (let j = Math.max(y - 4, 0); j <= Math.min(y + 4, 14); j++) {
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
    for (let i = Math.max(x - 4, 0), j = Math.max(y - 4, 0); i <= Math.min(x + 4, 14) && j <= Math.min(y + 4, 14); i++, j++) {
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
    for (let i = Math.max(x - 4, 0), j = Math.min(y + 4, 14); i <= Math.min(x + 4, 14) && j >= Math.max(y - 4, 0); i++, j--) {
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


// Hàm để AI thực hiện nước đi
function makeAIMove() {
    const bestMove = getBestMove(2, 0); // Gọi hàm Minimax để lấy nước đi tốt nhất cho AI (AI được đánh dấu là 2).
    const x = bestMove.x;
    const y = bestMove.y;

    if (isValidMove(x, y)) {
        board[x][y] = 2;

        if (isWinningMove(x, y, 2)) {
            console.log("AI thắng!");
            // Xử lý kết thúc trò chơi
        }
    }
}
function getBestMove(player, depth) {
    let bestMove = null;
    let bestScore = -Infinity;

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (isValidMove(i, j)) {
                board[i][j] = player;
                const score = alphaBetaPruning(board, depth - 1, -Infinity, Infinity, false, 2, 1);
                board[i][j] = 0; // Đặt lại giá trị bàn cờ

                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { x: i, y: j };
                }
            }
        }
    }

    return bestMove;
}

function alphaBetaPruning(board, depth, alpha, beta, maximizingPlayer, player, opponent) {
    if (depth === 0 || isGameEnd()) {
        return evaluateBoard(); // Đánh giá tình huống trên bàn cờ (cần triển khai hàm này).
    }

    if (maximizingPlayer) {
        let maxScore = -Infinity;
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                if (isValidMove(i, j)) {
                    board[i][j] = player;
                    maxScore = Math.max(maxScore, alphaBetaPruning(board, depth - 1, alpha, beta, false, opponent, player));
                    board[i][j] = 0; // Đặt lại giá trị bàn cờ

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
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                if (isValidMove(i, j)) {
                    board[i][j] = player;
                    minScore = Math.min(minScore, alphaBetaPruning(board, depth - 1, alpha, beta, true, opponent, player));
                    board[i][j] = 0; // Đặt lại giá trị bàn cờ

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

function isGameEnd() {
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (board[i][j] !== 0) {
                const currentPlayer = board[i][j];

                if (isWinningMove(i, j, currentPlayer)) {
                    return true; // Nếu một người chơi tạo ra cấu trúc chiến thắng, trò chơi kết thúc
                }
            }
        }
    }

    // Kiểm tra xem bàn cờ đã đầy chưa
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (board[i][j] === 0) {
                return false;
            }
        }
    }

    return true; // Nếu không còn ô trống, trò chơi kết thúc hòa.
}

function evaluateBoard() {
    let score = 0;

    // Tiêu chí số lượng quân cờ liên tiếp
    score += evaluateConsecutivePieces(2) - evaluateConsecutivePieces(1);

    // Tiêu chí phòng ngừa thua
    score += evaluatePreventLoss(2) - evaluatePreventLoss(1);

    // Tiêu chí cấu trúc hình thành
    score += evaluateFormation(2) - evaluateFormation(1);

    // Tiêu chí kiểm soát trung tâm
    score += evaluateControlCenter(2) - evaluateControlCenter(1);

    // Tiêu chí phòng ngừa chiến thắng đối phương
    score += evaluatePreventOpponentWin(2) - evaluatePreventOpponentWin(1);

    // Tiêu chí ưu tiên tấn công và phòng ngự
    score += evaluateAggressiveDefense(2) - evaluateAggressiveDefense(1);

    return score;
}

function evaluateConsecutivePieces(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá số lượng quân cờ liên tiếp
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (board[i][j] === player) {
                // Đánh giá số lượng quân cờ liên tiếp theo chiều ngang
                let consecutiveHorizontal = 1;
                for (let k = 1; k < 5; k++) {
                    if (j + k < 15 && board[i][j + k] === player) {
                        consecutiveHorizontal++;
                    } else {
                        break;
                    }
                }

                // Đánh giá số lượng quân cờ liên tiếp theo chiều dọc
                let consecutiveVertical = 1;
                for (let k = 1; k < 5; k++) {
                    if (i + k < 15 && board[i + k][j] === player) {
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
                if (consecutiveHorizontal === 4 && j > 0 && j + 4 < 15 && board[i][j - 1] === 0 && board[i][j + 4] === 0) {
                    score += 50; // Có thể tạo cơ hội chiến thắng
                }

                if (consecutiveVertical === 4 && i > 0 && i + 4 < 15 && board[i - 1][j] === 0 && board[i + 4][j] === 0) {
                    score += 50; // Có thể tạo cơ hội chiến thắng
                }
            }
        }
    }

    return score;
}

function evaluatePreventLoss(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá tình huống để tránh thua
    // Đánh giá cao những tình huống có nguy cơ thua (chặn đối thủ tạo cấu trúc chiến thắng)
    return score;
}

function evaluateFormation(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá cấu trúc hình thành
    // Đánh giá cao những cấu trúc có tiềm năng chiến thắng
    return score;
}

function evaluateControlCenter(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Đánh giá kiểm soát các ô trung tâm của bàn cờ
    // Đánh giá cao việc kiểm soát các ô trung tâm
    return score;
}

function evaluatePreventOpponentWin(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Duyệt qua bàn cờ và đánh giá tình huống để ngăn chặn đối thủ tạo cấu trúc chiến thắng
    // Đánh giá cao những tình huống có nguy cơ đối thủ tạo cấu trúc chiến thắng
    return score;
}

function evaluateAggressiveDefense(player) {
    let score = 0;
    const opponent = 3 - player; // Lấy người chơi đối thủ

    // Đánh giá tình huống trên bàn cờ để quyết định liệu bạn nên tấn công (tạo cơ hội thắng) hay phòng ngự (ngăn chặn đối thủ thắng)
    // Đánh giá cao việc tấn công và đồng thời đánh giá cao việc phòng ngự để tránh thua
    return score;
}

// Khi người chơi nhấn vào một ô trên bàn cờ, gọi makeMove(x, y, player) với player là người chơi hiện tại (1 hoặc 2).
