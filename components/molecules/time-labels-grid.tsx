import styled from '@emotion/styled';
import TimeLabel from "../atoms/time-label";
import { useContext, useMemo } from "react";
import { ConfigContext } from "../../config-adapter";
import { createIntervals, formatNumber } from '../../utils';

export interface TimeLabelListProps {}

const StyledTimeLabelsGrid = styled.div`
  height: auto;
  overflow-y: hidden;
  flex: none;
  display: flex;
  align-items: flex-start;
  min-width: 40px;

  .wrapper {
    margin-left: auto;
  }
`;

export function TimeLabelsGrid(props: TimeLabelListProps) {
  const config = useContext(ConfigContext);

  const intervals = createIntervals(config)();
  const renderLabels = useMemo(() => (
    intervals.map((value) => (
      <TimeLabel key={value} label={`${formatNumber(value)}:00`} />
    ))
  ), [intervals]);

  return (
    <StyledTimeLabelsGrid>
      <div className="wrapper">
        { renderLabels }
      </div>
    </StyledTimeLabelsGrid>
  );
}

export default TimeLabelsGrid;
