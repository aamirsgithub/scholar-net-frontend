import { useState } from "react";
import { OuterDiv, IconBox, Icon, Title, Description } from "./style";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

const StepMiniCard = (props) => {
  const {
    box = 0,
    Icon = BookRoundedIcon,
    Type = "",
    desc = "",
    active = false,
    setActive = () => {},
  } = props;

  const isUnavailable = box === 2 || box === 3;

  const handleClick = () => {
    if (!isUnavailable) {
      setActive((p) => ({ ...p, [box]: true }));
    }
  };

  return (
    <OuterDiv
      onClick={handleClick}
      active={active}
      box={box}
      style={{
        color: isUnavailable ? "red" : "inherit",
        border: isUnavailable
          ? "3px solid red"
          : box === 1
          ? "2px solid green"
          : "1px solid black",
        opacity: isUnavailable ? 0.5 : 1,
        transform: isUnavailable ? "none" : "scale(1.05)",
        cursor: isUnavailable ? "not-allowed" : "pointer",
      }}
    >
      <IconBox>{Icon && <Icon style={{ fontSize: 40 }} />}</IconBox>
      <Title>{Type}</Title>
      <Description>{desc}</Description>
    </OuterDiv>
  );
};

export default StepMiniCard;

// import { useState } from "react";
// import { OuterDiv, IconBox, Icon, Title, Description } from "./style";
// import BookRoundedIcon from '@mui/icons-material/BookRounded';

// const StepMiniCard = (props) => {
//   const {
//     box = 0,
//     Icon = BookRoundedIcon,
//     Type = "",
//     desc = "",
//     active = false,
//     setActive = () => {},
//   } = props;

//   return (
//     <OuterDiv
//       onClick={() => setActive((p) => ({ [box]: true }))}
//       active={active}
//       box={box}
//     >
//       <IconBox>
//       {Icon && <Icon style={{ fontSize: 40 }} />}
//       </IconBox>
//       <Title>{Type}</Title>
//       <Description>{desc}</Description>
//     </OuterDiv>
//   );
// };

// export default StepMiniCard;
