import axios from "axios";
import React from "react";


function Todo() {
  const [todo, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5)
  const [totalCount, setTotalCount] = React.useState(0);
  // console.log(totalCount);

  console.log("page", page);
  React.useEffect(() => {
    getTodos(page,limit);
  }, [page,limit]);
  const getTodos = async (page,limit) => {
    let res = await axios.get(
      `http://localhost:8080/todos?_page=${page}&_limit=${limit}`
    );
    console.log(res);
    setTodos(res.data);
    setTotalCount(Number(res.headers["x-total-count"]));
  };
  return (
    <div className="Todo">
      {todo.map((todo) => (
        <div key={todo.id}>
          {todo.id} {` : `} {todo.value}
        </div>
      ))}
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        pre
      </button>
      <select onChange={(e) =>setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button
        disabled={(totalCount < (5 * page))||(totalCount < (page * limit))}
        onClick={() => setPage(page + 1)}
      >
        next
      </button>
    </div>
  );
}

export default Todo;
