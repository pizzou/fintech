import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import CustomText from "../global/CustomText";
import { FONTS } from "../../constants/Fonts";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { holdingsData } from "../../utils/staticData";
import HoldingListItem from "./HoldingListItem";
import TouchableText from "../auth/TouchableText";

const HoldingList = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <CustomText variant="h9" fontFamily={FONTS.Medium}>
            Sort
          </CustomText>
          <FontAwesome name="sort" size={RFValue(11)} color={colors.text} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <View style={styles.arrowIcon}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={RFValue(11)}
              color={colors.text}
            />
            <MaterialIcons
              name="keyboard-arrow-right"
              size={RFValue(11)}
              style={{ marginLeft: -5 }}
              color={colors.text}
            />
          </View>
          <CustomText variant="h9" fontFamily={FONTS.Medium}>
            Current (Invested)
          </CustomText>
        </TouchableOpacity>
      </View>

      {holdingsData?.map((item, index) => {
        return <HoldingListItem key={index} item={item} />;
      })}

      <TouchableText
        firstText="Verify holdings"
        style={styles.verifyHoldingText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
  },
  arrowIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  verifyHoldingText: {
    fontSize: RFValue(11),
    textAlign: "center",
    marginVertical: 30,
    fontFamily: FONTS.Medium,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
export default HoldingList;
