import { useState } from 'react';
import { StyleSheet,Pressable } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


export default function BackButton({children}) {

    const navigation = useNavigation()
    const [buttonStyles,setButtonStyles] = useState(styles.button)
    const [fontStyles,setFontStyles] = useState(styles.font)

    const setStyles = ()=> {setButtonStyles(styles.buttonClicked); setFontStyles(styles.fontClicked)}

    return(
        <Pressable style={buttonStyles} onLongPress={()=>false} onPressOut={()=>{setStyles()}}>
            <FontAwesomeIcon style={fontStyles} icon="fa-arrow-left" size={40}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    font: {
        color: "#8c8c5a",
        transform: [
            { rotate: "-45deg" },
        ]
    },
    fontClicked: {
        color: "#fcfc9d",
        transform: [
            { rotate: "-45deg" },
        ]
    },
    button: {
        margin: 20,
        backgroundColor: "#fcfc9d",
        borderRadius: 15,
        borderColor: "#c3c37e",
        borderWidth: 3,
        transform: [
        { rotate: "45deg" },
        ],      
        padding: 15
    },
    buttonClicked: {
        margin: 20,
        backgroundColor: "#646464",
        borderRadius: 15,
        borderColor: "#fcfc9d",
        borderWidth: 3,
        transform: [
        { rotate: "45deg" },
        ],      
        padding: 20
    }
});