import styled from '@emotion/styled';
import { useContext } from "react";
import { ConfigContext } from "../../config-adapter";

export interface TimeLabelProps {
  label: string;
}

export function TimeLabel(props: TimeLabelProps) {
  const config = useContext(ConfigContext);

  const StyledTimeLabel = styled.div`
    position: relative;
    padding-inline-end: 8px;
    text-align: right;

    &:not(:last-of-type) {
      height: ${config.get('VIEW_INTERVAL_MARKER')}px;
    }

    &:first-of-type .label {
      top: 0;
    }

    .label {
      display: block;
      color: #70757a;
      font-size: 10px;
      position: relative;
      top: -6px;
    }
  `;

  return (
    <StyledTimeLabel>
      <div className="label">
        {props.label}
      </div>
    </StyledTimeLabel>
  );
}

export default TimeLabel;
