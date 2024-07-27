import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../reduxstore/features/todo/todoSlice';
import getHeaders from '../../../utilities/helper.ts';

const DoneCard = ({data}) => {

    const dispatch = useDispatch();

    const headers = getHeaders();
    const handleDelete=async(title,status)=>{
        try{
            dispatch(deleteTodo({
              title: title,
              status:status,
              headers:headers
          }))}
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className='doneCard transparent'>
      {data?.title}
      <button onClick={()=>{
        handleDelete(data?.title,data?.status)
      }}>Delete</button>
    </div>
  )
}

export default DoneCard;
