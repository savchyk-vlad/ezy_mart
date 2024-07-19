import { StyleSheet } from "react-native";
import { ThemeColors, ThemeFonts, ThemeLayouts } from "~assets";
import { screenHeight, screenWidth } from "~constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: screenHeight,
    width: screenWidth,
    resizeMode: "cover",
  },
  skipButton: {
    fontFamily: "Poppins_500Medium",
    textAlign: "right",
    fontSize: ThemeFonts.fontSize.xxxxl,
    paddingHorizontal: ThemeLayouts.padding.xxxxxxl,
    paddingVertical: ThemeLayouts.padding.xl,
    color: ThemeColors.riverBed,
  },
  bottomPopUp: {
    paddingVertical: 40,
    paddingHorizontal: 40,
    height: "42%",
    top: "60%",
    borderRadius: 40,
    overflow: "hidden",
  },
  popUpText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 36,
    lineHeight: 54,
  },
  popUpBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 10,
  },
  popUpPointsContainer: { flexDirection: "row", marginTop: 6 },
  popUpPoint: {
    backgroundColor: "#A7A8AC",
    height: 8,
    width: 22,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  popUpPointActive: {
    backgroundColor: "#FFF",
    height: 8,
    width: 32,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  popUpNextButton: {
    backgroundColor: "#4C46B8",
    padding: 20,
    borderRadius: 50,
  },
});

export default styles;
