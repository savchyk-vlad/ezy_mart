import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input_container: {
    borderColor: '#E5E7EB',
    borderWidth: 0.8,
    paddingHorizontal: 20,
    borderRadius: 30,
    paddingRight: 36,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    marginVertical: 10,
  },
  input_inner_view: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 40,
  },
  input_icon_container: {
    paddingRight: 20,
  },
  input: {
    width: '100%',
    height: 50,
    color: '#A7A8AC',
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
  },
  error_text: {
    position: 'absolute',
    bottom: -17,
    left: 0,
    fontFamily: 'Inter_500Medium',
  },
  success_icon: {
    opacity: 1,
  },
});

export default styles;
