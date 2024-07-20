import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../../reduxstore/features/todo/todoSlice';

const PendingCard = ({data}) => {

    const dispatch = useDispatch();
    const handleEdit = (title)=>{
        try{
          dispatch(updateTodo({title:title,status:"DONE"}))
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
