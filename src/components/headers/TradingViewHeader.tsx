import { View, StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { goBack } from "../../utils/NavigationUtil";
import { useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../global/CustomText";
import Orientation from "react-native-orientation-locker";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TradingViewHeader = () => {
  const { colors } = useTheme();
  const [orientation, setOrientation] = useState("PORTRAIT");
  return (
    <View style={[styles.flexRow, { borderColor: colors.border }]}>
      <Ionicons
        name="arrow-back"
        onPress={() => {
          goBack();
          Orientation.unlockAllOrientations();
          Orientation.lockToPortrait();
        }}
        color={colors.text}
        size={RFValue(18)}
      />
      <CustomText variant="h8">5m</CustomText>

      <CustomText variant="h5" style={{ opacity: 0.5 }}>
        |
      </CustomText>
      <MaterialCommunityIcons
        name="screen-rotation"
        onPress={() => {
          Orientation.unlockAllOrientations();
          if (orientation == "PORTRAIT") {
            Orientation.lockToLandscape();
            setOrientation("LANDSCAPE");
          } else {
            Orientation.lockToPortrait();
            setOrientation("PORTRAIT");
          }
        }}
        color={colors.text}
        size={RFValue(16)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
    borderBottomWidth: 2,
  },
});

export default TradingViewHeader;
