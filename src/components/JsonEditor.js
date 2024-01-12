import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJson } from "../redux/jsonSlice";
import "../styles/JsonEditor.css";

function JsonEditor() {
  const dispatch = useDispatch();
  const json = useRef(null);
  const state = useSelector((state) => state);
  React.useEffect(() => {
    console.log(state);
  });
  useEffect(() => {
    console.log("re-render");
  });

  async function handleChange() {
    if (json) {
      try {
        const data = await JSON.parse(json);
        dispatch(updateJson(data));
      } catch (err) {
        alert("Invalid JSON");
        console.log(err);
      }
    }
  }

  return (
      <div id="input">
        <textarea
          id="ta"
          ref={json}
          placeholder="Type/Paste JSON & Press ENTER"
        />
        <button onClick={handleChange}>Submit</button>
      </div>
  );
}

export default JsonEditor;
