import React, { useState } from "react";
import Semiheader from "../common/semiheader/Semiheader";
import { useCreateResource } from "../../hooks/useCreateResource";
import { createTodoAPI } from "../../api/todo";
import { useGetAllResource } from "../../hooks/useGetAllResource";
import { fetchTodos } from "../../reduxstore/features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { APISTATUS } from "../../utilities/helper.ts";


const CreateTodo = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const {initCreateData} = useCreateResource();
  const dispatch = useDispatch();

  const handleCreate = ()=>{
    try{
        initCreateData(createTodoAPI(value))
        dispatch(fetchTodos())
        
    }
    catch(err){
        console.log("failed to create todo",err);
    }
  }
  
  return (
    <>
      <Semiheader title={"Create To do"} />
      <div className="createTodo">
        <input
          value={value}
          onChange={(e) => {
            handleChangeValue(e);
          }}
        ></input>
        <button onClick={handleCreate}>Create</button>
      </div>
    </>
  );
};

export default CreateTodo;
