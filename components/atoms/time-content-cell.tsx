import styled from '@emotion/styled';
import { getTime } from '../../utils';

export interface TimeContentCellProps {
  start: number;
  end: number;
  title: string;
}

export function TimeContentCell({ title, end, start }: TimeContentCellProps) {
  const StyledTimeContentCell = styled.div`
    z-index: 2;
    border-radius: 4px;
    background-color: #66a6bf;
    padding: 0 4px;
    color: white;
    font-size: 12px;
    display: flex;
    gap: 4px;
    grid-row: ${start + 1} / ${end + 1};
  `;

  return (
    <StyledTimeContentCell>
      <div>{title}</div>
      <div>{getTime(start)}-{getTime(end)}</div>
    </StyledTimeContentCell>
  );
}

export default TimeContentCell;
