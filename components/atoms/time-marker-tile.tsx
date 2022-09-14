import styled from '@emotion/styled';
import { useContext } from "react";
import { ConfigContext } from "../../config-adapter";

export interface TimeTileProps {}

export function TimeMarkerTile(props: TimeTileProps) {
  const config = useContext(ConfigContext);

  const StyledTimeMarkerTile = styled.div`
    &:not(:last-of-type) {
      height: ${config.get('VIEW_INTERVAL_MARKER')}px;
    }
    &:after {
      content: "";
      border-bottom: #dadce0 1px solid;
      position: absolute;
      width: 100%;
      margin-top: -1px;
      z-index: 3;
      pointer-events: none;
    }
  `;

  return (
    <StyledTimeMarkerTile />
  );
}

export default TimeMarkerTile;
