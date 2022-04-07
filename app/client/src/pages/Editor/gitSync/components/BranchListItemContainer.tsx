import styled from "styled-components";
import { getTypographyByKey } from "constants/DefaultTheme";
import { Colors } from "constants/Colors";
import { Classes } from "components/ads";

export const BranchListItemContainer = styled.div<{
  hovered?: boolean;
  active?: boolean;
  isDefault?: boolean;
}>`
  padding: ${(props) =>
    `${props.theme.spaces[4]}px ${props.theme.spaces[5]}px`};
  ${(props) => getTypographyByKey(props, "p1")};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Gallery};
  }

  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${(props) =>
    props.hovered || props.active ? Colors.GREY_3 : ""};

  display: ${(props) => (props.isDefault ? "flex" : "block")};

  .${Classes.TEXT} {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;
