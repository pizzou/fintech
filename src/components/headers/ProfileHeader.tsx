import { View, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { goBack } from "../../utils/NavigationUtil";
import { useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

const ProfileHeader: FC = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.flexRowBetween}>
      <Ionicons
        name="arrow-back"
        onPress={() => {
          goBack();
        }}
        color={colors.text}
        size={RFValue(18)}
      />

      <View style={styles.flexRow}>
        <Feather
          name="settings"
          onPress={() => {}}
          color={colors.text}
          size={RFValue(18)}
        />
        <Feather
          name="bell"
          onPress={() => {}}
          color={colors.text}
          size={RFValue(18)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:10
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
});

export default ProfileHeader;
