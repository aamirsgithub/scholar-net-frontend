import { useState } from "react";
import { OuterDiv, IconBox, Icon, Title, Description } from "./style";
import BookRoundedIcon from '@mui/icons-material/BookRounded';

const StepMiniCard = (props) => {
  const {
    box = 0,
    Icon = BookRoundedIcon,
    Type = "",
    desc = "",
    active = false,
    setActive = () => {},
  } = props;

  return (
    <OuterDiv
      onClick={() => setActive((p) => ({ [box]: true }))}
      active={active}
      box={box}
    >
      <IconBox>
      {Icon && <Icon style={{ fontSize: 40 }} />}
      </IconBox>
      <Title>{Type}</Title>
      <Description>{desc}</Description>
    </OuterDiv>
  );
};

export default StepMiniCard;
