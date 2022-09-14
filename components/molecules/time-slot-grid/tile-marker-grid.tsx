import styled from '@emotion/styled';
import { useContext, useMemo } from 'react';
import { ConfigContext } from '../../../config-adapter';
import TimeMarkerTile from '../../atoms/time-marker-tile';
import { createIntervals } from '../../../utils';

export interface TileMarkerGridProps {}

const StyledTimeMarkerGrid = styled.div`
  z-index: 1;
  border-top: #dadce0 1px solid;
`;

export function TileMarkerGrid(props: TileMarkerGridProps) {
  const config = useContext(ConfigContext);

  const intervals = createIntervals(config)();
  const renderTiles = useMemo(() => (
    intervals.map((value) => (
      <TimeMarkerTile key={value} />
    ))
  ), [intervals]);

  return (
    <StyledTimeMarkerGrid>
      { renderTiles }
    </StyledTimeMarkerGrid>
  );
}

export default TileMarkerGrid;
