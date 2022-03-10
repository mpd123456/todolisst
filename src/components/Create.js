import React from "react";

const Create=(props)=>{
   
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
            e.preventDefault(); 
            if (!value) return;
            props.addTask(value);
            setValue("");
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className="input"
            value={value}
            placeholder="thêm task"
            onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}
export default Create;