import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { removeJson, updateJson } from "../redux/jsonSlice";
import "../styles/JsonEditor.css";

function JsonEditor() {
  const dispatch = useDispatch();
  const [json, setJson] = useState("");
const clearHandler=()=>{
setJson("");
dispatch(removeJson());
console.log("clearHandler");
}
  function handleChange(e) {
    setJson(e?.target?.value);
  }
  const submitHandler = async () => {
    if (json) {
      try {
        if(json!==undefined && json!==null){
          const data = await JSON.parse(json);
          if(Object.keys(data).length===0){
            alert('INVALID JSON');
            return 0;
          }
          dispatch(updateJson(data));
        }
      } catch (err) {
        alert("Invalid JSON");
        console.log(err);
      }
    }
  };
  return (
    <>
      <div id="input"  style={{marginLeft:"1vw"}}>
        
          <h2 style={{marginLeft:"15vw"}}>Your JSON Editor:</h2>
          <div style={{ display: "flex",marginTop:"-15px", marginBottom:"5px", gap:"9.5vw"}}>
            <button onClick={clearHandler} id="ba">
              Clear
            </button>
            <button onClick={submitHandler} id="ca">
              Submit
            </button>
          </div>
       
        <textarea
          id="ta"
          onChange={handleChange}
          value={json}
          placeholder="Type/Paste JSON & Press SUBMIT"
        />
      </div>
    </>
  );
}

export default JsonEditor;
