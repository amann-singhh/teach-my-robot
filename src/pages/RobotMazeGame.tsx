import React, { useState } from 'react';

const GRID_SIZE = 5;
const MAX_MOVES = 20;
const initialRobot = { x: 0, y: 4, dir: 0 }; // dir: 0=up, 1=right, 2=down, 3=left
const goal = { x: 4, y: 0 };
const walls = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 1, y: 3 },
];
const directions = ['↑', '→', '↓', '←'];

const COMMANDS = [
  { label: 'Move Forward', value: 'F' },
  { label: 'Turn Left', value: 'L' },
  { label: 'Turn Right', value: 'R' },
];

interface RobotState {
  x: number;
  y: number;
  dir: number;
}

function getNextState(robot: RobotState, command: string): RobotState {
  let { x, y, dir } = robot;
  if (command === 'F') {
    if (dir === 0) y -= 1;
    if (dir === 1) x += 1;
    if (dir === 2) y += 1;
    if (dir === 3) x -= 1;
  } else if (command === 'L') {
    dir = (dir + 3) % 4;
  } else if (command === 'R') {
    dir = (dir + 1) % 4;
  }
  return { x, y, dir };
}

function isWall(x: number, y: number): boolean {
  return walls.some(w => w.x === x && w.y === y);
}

const RobotMazeGame: React.FC = () => {
  const [robot, setRobot] = useState<RobotState>(initialRobot);
  const [moves, setMoves] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleCommand = (cmd: string) => {
    if (result) return;
    let next = getNextState(robot, cmd);
    let newMoves = moves + 1;
    // Check for out of bounds or wall
    if (
      next.x < 0 ||
      next.x >= GRID_SIZE ||
      next.y < 0 ||
      next.y >= GRID_SIZE
    ) {
      setRobot(next);
      setResult('Crashed! Out of bounds.');
      return;
    }
    if (isWall(next.x, next.y)) {
      setRobot(next);
      setResult('Crashed into a wall!');
      return;
    }
    setRobot(next);
    setMoves(newMoves);
    if (next.x === goal.x && next.y === goal.y) {
      setResult('Success! The robot reached the goal!');
      return;
    }
    if (newMoves >= MAX_MOVES) {
      setResult('Move limit reached. Try again!');
      return;
    }
  };

  const handleReset = () => {
    setRobot(initialRobot);
    setMoves(0);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-4">Robot Maze Game</h1>
      <p className="mb-2 text-gray-700 max-w-xl text-center">
        Help the robot reach the goal! Use the buttons to move. The robot starts at the bottom-left, facing up. Avoid walls and don&apos;t go off the grid.
      </p>
      <p className="mb-6 text-gray-700">Moves: {moves} / {MAX_MOVES}</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Maze Grid */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-5 grid-rows-5 gap-1">
            {[...Array(GRID_SIZE * GRID_SIZE)].map((_, idx) => {
              const x = idx % GRID_SIZE;
              const y = Math.floor(idx / GRID_SIZE);
              const isGoal = x === goal.x && y === goal.y;
              const isRobot = x === robot.x && y === robot.y;
              const isWallCell = isWall(x, y);
              return (
                <div
                  key={idx}
                  className={`w-12 h-12 flex items-center justify-center rounded border text-lg font-bold
                    ${isGoal ? 'bg-green-200 border-green-400' : isWallCell ? 'bg-gray-400 border-gray-500' : 'bg-blue-50 border-blue-200'}
                  `}
                >
                  {isRobot ? <span className="text-blue-700">🤖<span className="text-xs">{directions[robot.dir]}</span></span> : isGoal ? '🏁' : ''}
                </div>
              );
            })}
          </div>
        </div>
        {/* Command Controls */}
        <div className="flex flex-col items-center">
          <div className="mb-4 flex gap-2">
            {COMMANDS.map(cmd => (
              <button
                key={cmd.value}
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                onClick={() => handleCommand(cmd.value)}
                disabled={!!result}
              >
                {cmd.label}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            onClick={handleReset}
          >
            Reset
          </button>
          {result && <div className="mt-4 text-lg font-semibold text-center text-blue-700">{result}</div>}
        </div>
      </div>
    </div>
  );
};

export default RobotMazeGame; 