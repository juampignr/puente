import globalStyles from "../styles/globalStyles"
import { Context } from '../App';
import { View, TextInput, StyleSheet } from "react-native"
import { useRef,useEffect,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from "./Icon"

export default function SearchBar({children}){

  const ref = useRef(null);
  const ctx = useContext(Context);

  const handleChangeText = text => {

    console.log(`typed ${text}`)
  };

  return(<View style={styles.container}>
          <View style={styles.searchBar}>
            <TextInput
              style={globalStyles.textInput}
              placeholder="A dónde vamos?"
              onChangeText={text => handleChangeText(text)}
            />
            <Icon icon="magnifying-glass-location"/>
          </View>
        </View>
        );

}

const styles = StyleSheet.create({

  container: {
    justifyContent: "center",
    flexDirection: "row",
  },
  searchBar: {
    position: "absolute",
    bottom: -10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "99%",
    height: 100,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: "#169594d0",
    backgroundColor: "#16959466",
    borderWidth: 3,
    margin: "auto"
  },
  font: {
    color: "white",
    fontSize: 40,
  },  
})