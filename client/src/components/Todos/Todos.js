import React, { useContext } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Todo from './Todo';

function Todos(props) {
  const { todos, isAuthicated } = useContext(UserContext);
  if (!isAuthicated) {
    return <Redirect to="/user/login" />;
  } else {
    return (
      <div className="container">
        <h1 className="text-center mt-2">Todos</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex">
              <h5 className="mr-3">filter by</h5>
              <form>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="category">status</label>
                      <select class="form-control" id="category">
                        <option>done</option>
                        <option>progress</option>
                        <option>started</option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="status">supervisor</label>
                      <input
                        type="text"
                        class="form-control"
                        id="status"
                        placeholder="supervisor"
                      />
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-group">
                      <label for="status">Responsible</label>
                      <input
                        type="text"
                        class="form-control"
                        id="status"
                        placeholder="responsible"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              {todos.length > 0 ? (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Todo</th>
                      <th scope="col">Status</th>
                      <th colspan="2" scope="col">
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map((item) => (
                      <Todo key={item.id} todo={item} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h2>no todos</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
