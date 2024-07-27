import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../../reduxstore/features/todo/todoSlice';
import getHeaders from '../../../utilities/helper.ts';


const PendingCard = ({data}) => {
  const headers = getHeaders();
    const dispatch = useDispatch();
    const handleEdit = (title)=>{
        try{
          console.log("headers",headers)
          dispatch(updateTodo({title:title,status:"DONE",headers}))
        }
        catch(err){
            console.log("failed to update todo",err)
        }
        
    }
  return (
    <div className='pendingCard transparent'>
      {data?.title}
      <button onClick={()=>{
        handleEdit(data?.title)
      }}>Edit</button>
    </div>
  )
}

export default PendingCard;
