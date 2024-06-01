import {useState} from "react";
import {H2} from "./MySecondComponent";

// Context API -> React
// Other Library -> Redux, Recoil, MobX

const MyFuncComponentWithState = ({counter}) => {
    const [slovo, setSlovo] = useState(counter); // [state, setState]

    const handleClick = () => {
        console.log('Clicked');
        setSlovo(slovo + 1);
    }

    return <div onClick={handleClick}>
        <H2 title={slovo}/>
    </div>
}
export default MyFuncComponentWithState;