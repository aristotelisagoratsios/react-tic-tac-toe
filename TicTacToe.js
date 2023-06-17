import React, { useState, useEffect } from 'react';

function TicTacToe() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
    );
}