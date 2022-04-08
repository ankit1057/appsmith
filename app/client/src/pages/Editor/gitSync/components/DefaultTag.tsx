import Button, { Category, Size } from "components/ads/Button";
import React from "react";
import styled from "styled-components";

const StyledDefaultTag = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export default function DefaultTag() {
  return (
    <StyledDefaultTag data-testid="t--default-tag">
      <Button
        category={Category.tertiary}
        disabled
        size={Size.xxs}
        text={"DEFAULT"}
      />
    </StyledDefaultTag>
  );
}
