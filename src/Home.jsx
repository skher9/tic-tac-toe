import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Table = styled.table`
  border: 3px solid;
  align-items: center;
  margin-left: 500px;
  margin-top: 70px;
`;

const Tbody = styled.tbody``;

const TR = styled.tr``;

const TD = styled.td``;

const Button = styled.button`
  height: 100px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  font-size: 50px;
  border: 2px solid black;
  background-color: transparent;
`;

const WinnerAnnouncemnt = styled.h2`
  margin-top: 50px;
`;

const Home = () => {
  const [matrix, setmatrix] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [winner, setWinner] = useState(null);

  const count = useRef(null);

  function checkWinner() {
    // Row
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2] &&
        matrix[i][0] !== null
      ) {
        setWinner(matrix[i][0] + " is the Winner!!!!!!!!!!!");
      }
    }

    // Column
    for (let j = 0; j < 3; j++) {
      if (
        matrix[0][j] === matrix[1][j] &&
        matrix[1][j] === matrix[2][j] &&
        matrix[0][j] !== null
      ) {
        setWinner(matrix[0][j] + " is the Winner!!!!!!!!!!!");
      }
    }

    // Diagonal
    if (
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2] &&
      matrix[0][0] !== null
    ) {
      setWinner(matrix[0][0] + " is the Winner!!!!!!!!!!!");
    }

    if (
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0] &&
      matrix[0][2] !== null
    ) {
      setWinner(matrix[0][2] + " is the Winner!!!!!!!!!!!");
    }
  }

  const handleClick = (rowIndex, collIndex) => {
    count.current = count.current + 1;
    let XO = "";

    if (count.current % 2 === 0) {
      XO = "O";
    } else if (count.current % 2 !== 0) {
      XO = "X";
    }

    matrix[rowIndex][collIndex] = XO;
    setmatrix([...matrix]);
    checkWinner();
  };

  return (
    <Container>
      <Wrapper>
        <Title>Tic Tac Toe Game!</Title>
        <Table>
          <Tbody>
            {matrix.map((row, rowIndex) => (
              <TR key={rowIndex}>
                {row.map((coll, collIndex) => (
                  <TD>
                    <Button
                      onClick={(e) => {
                        handleClick(rowIndex, collIndex);
                      }}
                    >
                      {matrix[rowIndex][collIndex]}
                    </Button>
                  </TD>
                ))}
              </TR>
            ))}
          </Tbody>
        </Table>
        <WinnerAnnouncemnt>{winner}</WinnerAnnouncemnt>
      </Wrapper>
    </Container>
  );
};

export default Home;
