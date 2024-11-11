const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    let totalIslands = 0;

    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function for DFS traversal
    const dfs = (i, j) => {
        // Base case: if out of bounds or water, return
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') {
            return;
        }

        // Mark the current land cell as visited by setting it to water
        grid[i][j] = 'W';

        // Visit all four possible directions (up, down, left, right)
        dfs(i - 1, j); // up
        dfs(i + 1, j); // down
        dfs(i, j - 1); // left
        dfs(i, j + 1); // right
    };

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                totalIslands++; // Found a new island
                dfs(i, j); // Start DFS to mark all connected land cells
            }
        }
    }

    return totalIslands;
};

module.exports = getTotalIsles;
