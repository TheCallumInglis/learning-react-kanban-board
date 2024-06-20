import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const NewTask = ({ addTaskHandler, taskStates }) => {

    const emptyStatusMsg = { statusMsg: '', isError: false };
    const [{statusMsg, isError}, setStatusMsg] = useState(emptyStatusMsg);

    const emptyNewTask = { id: null, text: '', dueDate: '', blocked: false, status: 'todo' };
    const [newTask, setNewTask] = useState(emptyNewTask);

    const [createdTaskId, setCreatedTaskId] = useState(null);

    const handleTaskChange = (event) => {
        const {
          target: { name, value }
        } = event;
    
        setNewTask({ 
          ...newTask, 
          [name]: value,
        });
    }

    const cancelFormhandler = () => {
        setNewTask(emptyNewTask); // Reset Form
        setStatusMsg(emptyStatusMsg); // Reset Status Message
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!newTask.text || newTask.text.length == 0 || !newTask.dueDate || newTask.dueDate.length == 0) {
            setStatusMsg({statusMsg: `Please enter a task and due date`, isError: true});
            return;
        }

        if (newTask.status === '') {
            setNewTask({ ...newTask, status: 'todo' });
        }

        const newTaskId = addTaskHandler({ _newTask: newTask }); // Create Task
        setCreatedTaskId(newTaskId);
        setStatusMsg({statusMsg: `Task #${newTaskId} added successfully!`, isError: false});
        setNewTask(emptyNewTask); // Reset Form
    }

    return (
        <div className="new-task">
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text"><span className="form-label">Task </span>
                        <input type="text" name="text" id="text" placeholder="My New Task" value={newTask.text} onChange={handleTaskChange}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="dueDate"><span className="form-label">Due Date </span>
                        <input type="date" name="dueDate" id="dueDate" placeholder="Due Date" value={newTask.dueDate} onChange={handleTaskChange}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="status"><span className="form-label">Status </span>
                        <select name="status" id="status" value={newTask.status} onChange={handleTaskChange}>
                            {taskStates.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </label>
                </div>

                <div>
                    <div className="form-actions">
                        <button type="button" className="cancel" onClick={cancelFormhandler}>Cancel</button>
                        <button type="submit" className="create">Add Task</button>
                    </div>

                    {createdTaskId &&
                        <div className="task-link">
                            <Link to={`/tasks/${createdTaskId}`}>
                                <span className="icon"><FaExternalLinkAlt /></span> 
                                View Task
                            </Link>
                        </div>
                    }                    

                    {statusMsg &&
                        <div className={`status-msg ${isError ? 'error' : 'success'}`}>{statusMsg}</div>
                    }
                </div>
            </form>
        </div>
    );
}

export default NewTask;