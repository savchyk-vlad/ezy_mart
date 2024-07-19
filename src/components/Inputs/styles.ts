import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  email_input_container: {
    borderColor: "#E5E7EB",
    borderWidth: 0.8,
    paddingHorizontal: 20,
    borderRadius: 30,
    paddingRight: 36,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    marginVertical: 10,
  },
  email_input_inner_view: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  email_input: {
    width: "100%",
    height: 50,
    color: "#A7A8AC",
    fontFamily: "Inter_400Regular",
    fontSize: 20,
  },

  password_input_container: {
    borderColor: "#E5E7EB",
    borderWidth: 0.8,
    paddingLeft: 20,
    paddingRight: 8,
    borderRadius: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    marginTop: 10,
  },
  password_input_inner_view: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  password_input: {
    width: "100%",
    height: 50,
    color: "#A7A8AC",
    fontFamily: "Inter_400Regular",
    fontSize: 20,
  },
  error_text: {
    position: "absolute",
    bottom: -17,
    left: 0,
    fontFamily: "Inter_500Medium",
  },
});

export default styles;
