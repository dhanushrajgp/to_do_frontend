import React from "react";
import { useGetAllResource } from "../hooks/useGetAllResource";
import {
  fetchTodos,
  getErrorMessage,
  getNetworkStatus,
  getTodos,
} from "../reduxstore/features/todo/todoSlice";
import { useSelector } from "react-redux";
import ErrorHandler from "../components/common/errorhandler/Errorhandler";
import { APISTATUS } from "../utilities/helper.ts";
import "../styles/TodosLayout.css"
import DoneContainer from "../components/todos/done/DoneContainer.jsx";
import PendingContainer from "../components/todos/pending/PendingContainer.jsx";
import CreateTodo from "../components/todos/CreateTodo.jsx";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

const TodosLayout = () => {
  const token = localStorage.getItem("token");
  useGetAllResource(fetchTodos(token));
  const data = useSelector(getTodos);
  const apiStatus = useSelector(getNetworkStatus);
  const errormessage = useSelector(getErrorMessage);
  
  if(apiStatus === APISTATUS.TOKEN_FAILED){
    localStorage.removeItem("token")
    return <Navigate to="/login" />;
  }


  return (
    <>
      {data && Object.keys(data).length > 0 && apiStatus != APISTATUS.FAILED  ? (
        <div className="todosLayout">
            <CreateTodo />
            <DoneContainer doneItems={data?.done_items} doneCount={data?.done_item_count} />
            <PendingContainer  pendingItems={data?.pending_items} pendingCount={data?.pending_item_count} />
        </div>
      ) : (apiStatus != APISTATUS.PENDING &&
 (
          <ErrorHandler
            content={errormessage}
            requestStatus={apiStatus}
            name={"Home"}
          />
        )
      )}
    </>
  );
};

export default TodosLayout;
