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
import Header from "../components/common/header/Header.jsx";
import DoneContainer from "../components/todos/done/DoneContainer.jsx";
import PendingContainer from "../components/todos/pending/PendingContainer.jsx";
import CreateTodo from "../components/todos/CreateTodo.jsx";

const TodosLayout = () => {
  useGetAllResource(fetchTodos());
  const data = useSelector(getTodos);
  const apiStatus = useSelector(getNetworkStatus);
  console.log("data", data);

  const errormessage = useSelector(getErrorMessage);

  return (
    <>
      {Object.keys(data).length > 0 ? (
        <div className="todosLayout">
            {/* <Header title={"Todo App"} /> */}
            <CreateTodo />
            <DoneContainer doneItems={data?.done_items} doneCount={data?.done_item_count} />
            <PendingContainer  pendingItems={data?.pending_items} pendingCount={data?.pending_item_count} />
           
        </div>
      ) : (
        apiStatus === APISTATUS.ERROR || apiStatus === APISTATUS.FAILED && (
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
