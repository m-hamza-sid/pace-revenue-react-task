import styled from '@emotion/styled';
import { useContext } from 'react';
import { ConfigContext } from '../../../config-adapter';
import TimeContentCell from '../../atoms/time-content-cell';
import { Event } from '../../../contracts';

export interface TileContentGridProps {
  events: Event[]
}

export function TileContentGrid({ events }: TileContentGridProps) {
  const config = useContext(ConfigContext);

  const StyledTileContentGrid = styled.div`
    padding: 0 12px;
    box-sizing: border-box;
    flex: 1 0 auto;
    width: 129px;
    min-width: 129px;
    border-right: white 1px solid;
    overflow: visible;

    .cells-wrapper {
      grid-column-gap: 2px;
      display: grid;
      grid-template-rows: repeat(${config.get('VIEW_TOTAL_DURATION')}, 1px);
    }
  `;
  return (
    <StyledTileContentGrid>
      <div className="cells-wrapper">
        {
          events.map((event) => <TimeContentCell {...event} key={event.id} />)
        }
      </div>
    </StyledTileContentGrid>
  );
}

export default TileContentGrid;
