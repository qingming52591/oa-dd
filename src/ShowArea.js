import React from "react"
import {store} from "./store";

const ShowArea = (props) => {
    const state = store.useContext();
    return <div style={{color: state.color.color}}>字体颜色展示为{state.color.color}</div>;
};

export default ShowArea;