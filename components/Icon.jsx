import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import globalStyles from "../styles/globalStyles"
import PropTypes from "prop-types";

function isIconName( props, propName, componentName ){

    const prop = props[propName]

    if(!prop)
        throw new Error("Icon names are required...")

    if(!prop.includes("-"))
        throw new Error("Icon names are required and should be hyphened, not capitalized")
}

export default function Icon({icon}){

    return(
        <FontAwesomeIcon style={globalStyles.text} size={globalStyles.text.fontSize} icon={`fa-${icon.toLowerCase()}`}/>
    )
}

Icon.propTypes = {
    icon: isIconName
};