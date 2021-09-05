import styled from 'styled-components';

const HistoryItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  background: rgba(245, 245, 245, 1);
  border-radius: 6px;
  padding: 0 2rem;
  font-size: 1rem;
  color: black !important;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  &.active {
    background: rgba(240, 252, 248, 1);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: rgba(0, 184, 124, 1);
  width: 100%;
  margin-left: 2.5rem;
  margin-top: 1rem !important;
  margin-bottom: 0.5rem;
`;

const Button = styled.div`
  color: rgba(0, 184, 124, 1);
  border: 0;
`;

export { HistoryItems, Row, Button };
