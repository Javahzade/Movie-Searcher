import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#26456e',
  },
  title: {
    flex: 1,
    color: 'white',
    backgroundColor: '#26456e',
    alignSelf: 'center',
    fontSize: 50,
    fontFamily: 'cursive',
  },
  icon: {
    width: 100,
    height: 100,
  },
  input: {
    flex: 1,
    backgroundColor: '#c8c9ca',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#283448',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#283448',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#cf4235',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonSize: {
    fontSize: 18,
  },
});

export const movieStyle = StyleSheet.create({
  header: {
    borderWidth: 3,
    borderColor: '#283448',
    borderRadius: 20,
    marginBottom: 20,
  },
  container: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  titleSize: {
    flex: 2,
    paddingTop: 10,
  },
  img: {
    width: 120,
    height: 170,
    borderRadius: 20,
    marginRight: 20,
  },
  text: {
    flex: 2,
    color: 'white',
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
