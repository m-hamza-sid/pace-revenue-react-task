import styled from '@emotion/styled';
import TimeLabelsGrid from "../molecules/time-labels-grid";
import TimeSlotGrid from "../molecules/time-slot-grid";
import { Event } from '../../contracts';

export interface DayViewProps {
  events: Event[]
}

const StyledSingleDayView = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  padding: 5px;
  max-width: 100vw;

  display: flex;
  overflow: hidden;
  align-items: stretch;
  flex: 1 1 auto;
`;

export function SingleDayView({ events }: DayViewProps) {
  return (
    <StyledSingleDayView>
      <TimeLabelsGrid />
      <TimeSlotGrid events={events} />
    </StyledSingleDayView>
  );
}

export default SingleDayView;
