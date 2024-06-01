import './App.css';
import {
    MyClassComponent,
    MyContextComponent,
    MyFirstComponent, MyFormAuthComponent,
    MyFuncComponentWithState,
    MySecondComponent
} from "./components";
import {useState} from "react";

export default function App() {
    const [state, setState] = useState();
  return (
    <>
      {/*     <MyFirstComponent/>    */}
      {/*<MyFirstComponent/>*/}
      {/*<MyFirstComponent/>*/}
      {/*  <MySecondComponent/>*/}
      {/*  <MyClassComponent/>*/}
      {/*  <MyFuncComponentWithState counter={0}/>*/}
      {/*  <MyContextComponent/>*/}
        <MyFormAuthComponent/>
    </>
  );
}
