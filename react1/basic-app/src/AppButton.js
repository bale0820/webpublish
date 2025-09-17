import { MyButton } from "./components/MyButton.jsx";
import './App.css'

export default function App() {
    // function handleProps() {}
    // const handleProps = function() {} 
    const handleProps = (result) => {
        console.log(`(부모)result--> `, result);
    } //이게 많이쓰임
    return(
        <div>
        <MyButton name="Button #1" type="button" style="button" handleProps={handleProps}/>
        <MyButton name="Button #2" type="button" style="button" handleProps={handleProps}/>
        </div>
        
    );
}   