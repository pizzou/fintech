import React, { FC } from "react";
import CustomText from "../../components/global/CustomText";
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView";
import { FONTS } from "../../constants/Fonts";
import { Image, StyleSheet, View, useColorScheme } from "react-native";
import LoginImageDark from "../../assets/images/darks.png";
import LoginImageLight from "../../assets/images/lights.png";
import GoogleIcon from "../../assets/images/google.png";
import {
  normalizeModerately,
  screenHeight,
  screenWidth,
} from "../../utils/Scaling";
import SocialLoginButton from "../../components/auth/SocialLoginButton";

import { Ionicons } from '@expo/vector-icons';
import TouchableText from "../../components/auth/TouchableText";
import { navigate } from "../../utils/NavigationUtil";
import BottomText from "../../components/auth/BottomText";

const LoginScreen: FC = () => {
  const theme = useColorScheme();

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together we Brain Works Group
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Invest • Pay • Loans
        </CustomText>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={theme === "dark" ? LoginImageDark : LoginImageLight}
          />
        </View>

        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          text="Continue with Google"
          onPress={() => {}}
        />
        <SocialLoginButton
          icon={<Ionicons name="logo-apple" size={18} color="black" />}
          text="Continue with Apple"
          onPress={() => {}}
        />

        <TouchableText
          firstText="Use other email ID"
          onPress={() => navigate("EmailScreen")}
          style={styles.touchText}
        />

        <BottomText />
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  gimg: {
    height: 20,
    width: 20,
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(25),
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
