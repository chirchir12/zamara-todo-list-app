import React from 'react';

function CreateTodo(props) {
  return (
    <div className="container">
      <h1 className="h4 mt-3 text-center">Create Todos</h1>
      <div className="row">
        <div className="col-12 col-md-6 mx-auto">
          <form>
            <div class="form-group">
              <label for="task">Task</label>
              <input
                type="text"
                class="form-control"
                id="task"
                placeholder="task"
              />
            </div>
            <div class="form-group">
              <label for="status">Status</label>
              <input
                type="text"
                class="form-control"
                id="status"
                placeholder="status"
              />
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="category">
                <option>Person</option>
                <option>Work</option>
                <option>Job</option>
              </select>
            </div>

            <div class="form-group">
              <label for="category">Asign To</label>
              <select class="form-control" id="category">
                <option>Chirchir</option>
                <option>Emmanuel</option>
                <option>Kiplimo</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-outline-primary btn-block">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
