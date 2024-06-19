const NewTask = ({ onSubmit, handleChange, taskStates, newTask }) => {
    return (
        <div className="new-task">
            <h2>New Task</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="text">Task: 
                    <input type="text" name="text" id="text" placeholder="My New Task" value={newTask.text} onChange={handleChange} required/>
                </label>

                <label htmlFor="dueDate">Due Date: 
                    <input type="date" name="dueDate" id="dueDate" placeholder="Due Date" value={newTask.dueDate} onChange={handleChange} required/>
                </label>

                <label htmlFor="status">Status: 
                    <select name="status" id="status" value={newTask.status} onChange={handleChange} required>
                        {taskStates.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </label>

                <button type="submit">Add Task</button>
            </form>
            <hr/>
        </div>
    );
}

export default NewTask;