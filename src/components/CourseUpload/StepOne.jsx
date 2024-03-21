import { useState } from "react";
import StepMiniCard from "./StepMiniCard";
import { OuterDiv2, Text, Boxes } from "./style";
import TopStepsCountBar from "./TopStepsCountBar";
import BottomBarContinue from "./BottomBarContinue";
import { StepCardData } from "./data";
import { useNavigate } from "react-router-dom";

const StepOne = (props) => {
  const { currentStep = 1 } = props;
  const [active, setActive] = useState({});
  const [courseType, setcourseType] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    Object.keys(active).forEach((key) => {
      if (active[key]) {
        const selectedItem = StepCardData.find(
          (item) => item.box === parseInt(key.replace("box", ""))
        );
        if (selectedItem) {
          console.log("You Selected: ", selectedItem.Type);
          setcourseType(selectedItem.Type);
          handleCourseUpload();
        }
      }
    });
  };

  const handleCourseUpload = () => {
    navigate("/upload-course-video-lectures");
  };

  return (
    <>
      <TopStepsCountBar step={1} totalSteps={3} />
      <OuterDiv2>
        <Text>First, let's find out what type of course you're making.</Text>
        <Boxes>
          {StepCardData?.map((item) => (
            <StepMiniCard
              box={item.box}
              active={active}
              setActive={setActive}
              key={item.id}
              Icon={item.icon}
              Type={item.Type}
              desc={item.desc}
            />
          ))}
        </Boxes>
      </OuterDiv2>
      <BottomBarContinue onContinue={handleContinue} />
    </>
  );
};

export default StepOne;
