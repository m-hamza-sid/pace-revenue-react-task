import styled from '@emotion/styled';
import { TileMarkerGrid } from './tile-marker-grid';
import TileContentGrid from './tile-content-grid';
import { Event } from '../../../contracts';

export interface TimeCellGridProps {
  events: Event[]
}

const StyledTimeCellGrid = styled.div`
  flex: 1 1 0;
  overflow-x: auto;
  overflow-y: scroll;
  display: flex;
  align-items: flex-start;

  .container {
    position: relative;
    min-width: 100%;
    flex: none;
    display: inline-flex;
    vertical-align: top;
  }
`;

export function TimeSlotGrid({ events }: TimeCellGridProps) {
  return (
    <StyledTimeCellGrid>
      <div className="container">
        <TileMarkerGrid />
        <TileContentGrid events={events} />
      </div>
    </StyledTimeCellGrid>
  );
}

export default TimeSlotGrid;
