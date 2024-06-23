import React, { FC } from "react";
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView";
import CenteredLogo from "../../components/global/CenteredLogo";
import CustomText from "../../components/global/CustomText";

const HomeScreen: FC = () => {
  return (
    <CustomSafeAreaView>
      <CenteredLogo />
      <CustomText>Bottom Tabs</CustomText>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
