import React from 'react';

function Todo(props) {
  console.log(props.item);
  return (
    <>
      <tr>
        <td>{props.todo.task}</td>
        <td>{props.todo.status}</td>
        <td>
          <form action="" method="post">
            <div class="form-group">
              <select class="form-control" id="category">
                <option>Done</option>
                <option>Progress</option>
                <option>started</option>
              </select>
            </div>
          </form>
        </td>
      </tr>
    </>
  );
}

export default Todo;
