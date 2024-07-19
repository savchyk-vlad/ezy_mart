import { StyleSheet } from "react-native";
import { ThemeColors, ThemeFonts, ThemeLayouts } from "~assets";
import { screenHeight, screenWidth } from "~constants";

export const styles = StyleSheet.create({
  touchable_opacity_container: {
    marginBottom: 18,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
  },
  touchable_opacity_text: {
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    paddingLeft: 20,
  },
});

export default styles;
