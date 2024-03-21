import styled from "@emotion/styled";
import { Typography, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestDiv = styled.div`
  width: 86%;
  padding: 6rem 7% 1.75rem;
  @media (max-width: 1440px) {
    width: 90%;
    padding: 6rem 5% 1.75rem;
  }
  @media (max-width: 1000px) {
    width: 94%;
    padding: 1rem 3% 1.75rem;
  }
`;

export const MainLogo = styled.img`
  width: 4.625rem;
  height: 4.625rem;
  margin-top: 0.5rem;
`;

export const Heading = styled(Typography)`
  color: var(--White-Theme-Gray---8, #2e2e3a);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Noto Sans";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.125rem; /* 121.429% */
  letter-spacing: 0.00706rem;
  margin-top: 0.3rem;
  @media (max-width: 1440px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const SubHeading = styled(Typography)`
  color: var(--White-Theme-Gray---5, #7e7e8f);
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
  @media (max-width: 1440px) {
    font-size: 0.9375rem;
    line-height: 1.3125rem;
  }
`;

export const SerialNo = styled(Typography)`
  color: var(--White-Theme-Gray---8, #2e2e3a);
  font-family: "Noto Sans";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem; /* 81.818% */
  @media (max-width: 1440px) {
    font-size: 1.15rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const SmallImgs = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 600px) {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const AppearedDiv = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  border: 1px solid var(--White-Theme-Gray---3, #c6cbd9);
  color: var(--White-Theme-Gray---4, #9a9aaf);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
  @media (max-width: 1440px) {
    font-size: 0.9375rem;
    line-height: 1.375rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8125rem;
  }
`;

export const QuestionNoDiv = styled.div`
  display: flex;
  border-bottom: 1px solid var(--White-Theme-Gray---2, #e2e2ea);
  justify-content: space-between;
  padding: 2rem 0rem 1rem;
`;

export const RemainingTimeText = styled(Typography)`
  color: #f66;
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
  @media (max-width: 1440px) {
    font-size: 0.9375rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8125rem;
    width: 6.9rem;
  }
`;

export const NewDiv = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: rgba(0, 230, 195, 0.1);
  color: #00e6c3;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  @media (max-width: 1440px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8125rem;
  }
`;

export const PredictionDiv = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: rgba(253, 60, 101, 0.1);
  color: #fd3c65;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  @media (max-width: 1440px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8125rem;
  }
`;

export const PracticedDiv = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: rgba(153, 108, 254, 0.1);
  color: var(--Brand-Purple, #996cfe);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  @media (max-width: 1440px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8125rem;
  }
`;

export const PurpleBtn = styled.div`
  display: inline-flex;
  padding: 0.75rem 1.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: var(--Brand-Purple, #996cfe);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  @media (max-width: 1400px) {
    font-size: 0.875rem;
    line-height: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0.625rem 0.75rem;
  }
`;

export const AnswerBtn = styled.div`
  display: inline-flex;
  padding: 0.7rem 1.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: var(--Brand-Purple, #996cfe);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  @media (max-width: 1400px) {
    font-size: 0.875rem;
    line-height: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0.6rem 0.75rem;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  width: 18.75rem;
  height: 2.625rem;
  border-radius: 0.5rem;
  background: #fff;
  @media (max-width: 600px) {
    width: 12.4375rem;
    height: 2.25rem;
  }
`;

export const ButtonListDiv = styled.div`
  padding: 0rem 7% 1.75rem;
  width: 86%;
  @media (max-width: 1440px) {
    padding: 0rem 5% 1.75rem;
    width: 90%;
  }
  @media (max-width: 1000px) {
    padding: 0rem 3% 1.75rem;
    width: 94%;
  }
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const MyScoreText = styled(Typography)`
  color: var(--White-Theme-Gray---4, #9a9aaf);
  font-family: "Noto Sans";
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3rem; /* 282.353% */
  @media (max-width: 1400px) {
    font-size: 0.9375rem;
    line-height: 2.875rem;
  }
  @media (max-width: 450px) {
    font-size: 13px;
    line-height: 282.353%;
  }
`;

export const BookmarksText = styled(Typography)`
  color: var(--White-Theme-Gray---4, #9a9aaf);
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 3rem; /* 282.353% */
  @media (max-width: 450px) {
    font-size: 13px;
    line-height: 353.846%;
  }
`;

export const GrayLineDiv = styled.div`
  background: #e8e8e8;
  display: flex;
  height: 0.125rem;
  width: 100%;
`;

export const GrayLineDiv2 = styled.div`
  background: #e8e8e8;
  display: flex;
  height: 0.05rem;
  width: 100%;
  margin-left: -20px;
`;

export const PurpleLineDiv = styled.div`
  background: var(--Brand-Purple, #996cfe);
  height: 0.125rem;
  width: 7rem;
`;

export const ShowScoreDiv = styled.div`
  height: 4.875rem;
  border-radius: 0.5rem;
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
`;

export const MyWorkImg = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  @media (max-width: 800px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const MyWorkTime = styled(Typography)`
  color: var(--White-Theme-Gray---7, #535362);
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 100% */
  @media (max-width: 800px) {
    font-size: 0.8125rem;
  }
`;

export const ActionBtn = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  @media (max-width: 800px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const MyWorkRedDiv = styled.div`
  display: flex;
  width: 8rem;
  height: 2.375rem;
  border-radius: 2.5rem;
  border: 1px solid #ff5d5d;
  @media (max-width: 800px) {
    width: 3.19738rem;
    height: 1.10456rem;
    border-radius: 1.16269rem;
    border: 0.708px solid #ff5d5d;
  }
`;

export const MyWorkSmallRedDiv = styled.div`
  width: 2rem;
  height: 1.8rem;
  border-radius: 6.25rem;
  background: #ff5d5d;
  color: #fff;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 144.444% */
  text-transform: capitalize;
  margin: 0.19rem 0.88rem 0rem 0.13rem;
  text-align: center;
  padding-top: 0.2rem;
  @media (max-width: 800px) {
    padding-top: 0rem;
    margin: 0.19rem 0.35rem 0rem 0.13rem;
    width: 0.81388rem;
    height: 0.81388rem;
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: Montserrat;
    font-size: 0.40688rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.86419rem; /* 212.403% */
    text-transform: capitalize;
  }
`;

export const MyWorkRedDivText = styled(Typography)`
  color: #ff5d5d;
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 112.5% */
  margin-top: 0.54rem;
  @media (max-width: 800px) {
    margin-top: 0.35rem;
    font-size: 0.40694rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.46506rem;
  }
`;

export const MyWorkBlueDiv = styled.div`
  display: flex;
  width: 7.3125rem;
  height: 2.375rem;
  border-radius: 2.5rem;
  background: #2d2966;
  @media (max-width: 800px) {
    width: 3.1975rem;
    height: 1.10456rem;
    border-radius: 1.16275rem;
  }
`;

export const MyWorkSmallBlueDiv = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  background: #fff;
  border-radius: 50%;
  margin: 0.31rem 0.75rem 0rem 0.31rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  text-transform: capitalize;
  @media (max-width: 800px) {
    margin: 0.15rem 0.35rem 0rem 0.15rem;
    width: 0.81394rem;
    height: 0.81394rem;
    font-size: 0.5rem;
  }
`;

export const MyWorkBlueDivImg = styled.img`
  width: 1rem;
  height: 1rem;
  @media (max-width: 800px) {
    width: 0.46506rem;
    height: 0.46506rem;
  }
`;

export const MyWorkBlueDivText = styled(Typography)`
  color: #fff;
  font-family: "Noto Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin-top: 0.54rem;
  @media (max-width: 800px) {
    margin-top: 0.32rem;
    font-size: 0.40694rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.46506rem;
  }
`;

export const SPParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SPToogleIcon = styled.div`
  margin-right: -30px;
  position: fixed;
  right: ${(props) => (props.isOpen ? "79vw" : "0vw")};
  top: 50vh;
  cursor: pointer;
  transition: right 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  @media (min-width: 1080px) and (max-width: 1300px) {
    right: ${(props) => (props.isOpen ? "80vw" : "0vw")};
  }
  @media (min-width: 1000px) and (max-width: 1079px) {
    right: ${(props) => (props.isOpen ? "80.5vw" : "0vw")};
  }
  @media (min-width: 900px) and (max-width: 999px) {
    right: ${(props) => (props.isOpen ? "81vw" : "0vw")};
  }
  @media (min-width: 700px) and (max-width: 899px) {
    right: ${(props) => (props.isOpen ? "82vw" : "0vw")};
  }
  @media (min-width: 600px) and (max-width: 699px) {
    right: ${(props) => (props.isOpen ? "84.5vw" : "0vw")};
  }
  @media (max-width: 599px) {
    margin-right: ${(props) => (props.isOpen ? "10px" : "-30px")};
  }
`;

export const SPMainDiv = styled.div`
  width: 75vw;
  height: 100vh;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  position: fixed;
  z-index: 2000;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  top: 0;
  transition: right 0.5s ease-in-out;
  // @media (max-width: 650px) {
  //   padding: 15px;
  //   width: 85vw;
  // }
  // @media (max-width: 1200px) {
  //   right: ${(props) => (props.isOpen ? "0" : "-90vw")};
  // }
`;

export const SPHeading = styled(Typography)`
  color: var(--White-Theme-Gray---8, #2e2e3a);
  font-family: "Noto Sans";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.125rem; /* 121.429% */
  @media (max-width: 1440px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }

  @media (max-width: 500px) {
    font-size: 0.95rem;
    line-height: 1rem;
  }
`;

// export const SearchField = styled(TextField)(({ theme }) => ({
//   width: "256px",
//   "& .MuiOutlinedInput-root": {
//     height: "32px",
//     "& fieldset": {
//       border: "1px solid var(--White-Theme-Gray---3, #C6CBD9)",
//     },
//     "&:hover fieldset": {
//       borderColor: "var(--White-Theme-Gray---3, #996CFE)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "var(--White-Theme-Gray---3, #996CFE)",
//     },
//   },
//   "& .MuiInputBase-root": {
//     borderRadius: "32px",
//     backgroundColor: "#fff",
//     transition: "box-shadow 0.2s ease",
//   },
//   "& .MuiOutlinedInput-input": {
//     fontFamily: "Noto Sans",
//     fontSize: "14px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "16px",
//   },
//   "& .MuiInputBase-input::placeholder": {
//     color: "var(--White-Theme-Gray---3, #C6CBD9)",
//     fontFamily: "Noto Sans",
//     fontSize: "14px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "16px",
//   },
//   // "@media (max-width: 750px)": {
//   //   width: "240px",
//   // },
//   "@media (max-width: 550px)": {
//     width: "200px",
//   },
//   "@media (max-width: 500px)": {
//     width: "160px",
//   },
//   "@media (max-width: 450px)": {
//     width: "150px",
//   },
// }));

export const SearchField = styled(TextField)`
  width: 256px;

  & .MuiOutlinedInput-root {
    height: 32px;

    & fieldset {
      border: 1px solid var(--White-Theme-Gray---3, #c6cbd9);
    }

    &:hover fieldset {
      bordercolor: var(--White-Theme-Gray---3, #996cfe);
    }

    &.Mui-focused fieldset {
      bordercolor: var(--White-Theme-Gray---3, #996cfe);
    }
  }

  & .MuiInputBase-root {
    border-radius: 32px;
    background-color: #fff;
    transition: box-shadow 0.2s ease;
  }

  & .MuiOutlinedInput-input {
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  & .MuiInputBase-input::placeholder {
    color: var(--White-Theme-Gray---3, #c6cbd9);
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  @media (max-width: 550px) {
    width: 200px;
  }

  @media (max-width: 500px) {
    width: 160px;
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const PurpleLineDiv2 = styled.div`
  background: var(--Brand-Purple, #996cfe);
  height: 0.125rem;
  width: 4rem;
`;

export const QuestionsCountText = styled.div`
  color: var(--Brand-Purple, #996cfe);
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 106.667%;
  margin-left: 2px;
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const SortByText = styled.div`
  color: var(--White-Theme-Gray---4, #9a9aaf);
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px; /* 306.667% */
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const TopicsCard = styled.div`
  // width: 970px;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--White-Theme-Gray---2, #e2e2ea);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const TopicsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 650px) {
  }
`;

export const TopicsBoxesDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 650px) {
    margin: auto;
    gap: 5px;
  }
`;

// export const TopicsOuterDiv = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   @media (max-width: 650px) {
//     flex-direction: column;
//     justify-content: flex-start;
//   }
// `;

export const TopicText = styled.div`
  color: var(--White-Theme-Gray---8, #2e2e3a);
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const TopicTextDiv = styled.div`
  display: inline-flex;
  padding: 3px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  ${({ border }) => border && `border: ${border};`}
  text-align: center;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const ReadingAnswerDiv = styled.div`
  padding: 0rem 7% 1.75rem;
  width: 86%;
  @media (max-width: 1440px) {
    padding: 0rem 5% 1.75rem;
    width: 90%;
  }
  @media (max-width: 1000px) {
    padding: 0rem 3% 1.75rem;
    width: 94%;
  }
`;

export const ReadingAnswerHeader = styled.div`
  color: var(--White-Theme-Gray---10, #16161e);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-right: 20px;
`;

export const ReadingAnswerText = styled.div`
  color: var(--Brand-Purple, #996cfe);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const AllBookmarkPredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justifycontent: space-start;
  gap: 44px;
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
  position: absolute;
  left: 10px;
  color: white;
  font-size: 24px;
  z-index: 1000;
`;

export const StyledArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
  position: absolute;
  left: 10px;
  color: white;
  font-size: 24px;
  z-index: 1000;
`;
