import styled, { keyframes } from 'styled-components';

/* amnation load */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #116193;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin-bottom: 10px;
  svg {
    animation: ${rotate} 3s linear infinite;
    fill: #116193;
  }
`;
