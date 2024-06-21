import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const NewTask = ({ formSubmitHandler, formSubmitBtnText, taskStates, task }) => {
    const navigate = useNavigate();

    const emptyStatusMsg = { statusMsg: '', isError: false };
    const [{statusMsg, isError}, setStatusMsg] = useState(emptyStatusMsg);

    const emptyNewTask = { id: null, text: '', dueDate: '', blocked: false, status: 'todo' };
    const [newTask, setNewTask] = useState(emptyNewTask);

    const [createdTaskId, setCreatedTaskId] = useState(null);

    useEffect(() => {
        if (task) {
            setNewTask(task);
        }
    }, []);

    const handleTaskChange = (event) => {
        const {
          target: { name, value }
        } = event;

        // Special sauce for blocked field
        if (name === 'blocked') {
            setNewTask({ ...newTask, blocked: !newTask.blocked });
            return;
        }
    
        setNewTask({ 
          ...newTask, 
          [name]: value,
        });
    }

    const cancelFormhandler = () => {
        if (task) { // Handle Cancel for Edit Task
            navigate(`/`);
        } else {
            setNewTask(emptyNewTask); // Reset Form
            setStatusMsg(emptyStatusMsg); // Reset Status Message
        }
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

        // Save Task
        const newTaskId = formSubmitHandler({ _task: newTask });
        if (!newTaskId) {
            setCreatedTaskId(null);
            setStatusMsg({statusMsg: `Task not found.`, isError: true});

        } else if (newTask.id) { // Update Existing Task
            setCreatedTaskId(newTask.id);
            setStatusMsg({statusMsg: `Task #${newTask.id} updated successfully!`, isError: false});
            
        } else { // Creating New Task
            setCreatedTaskId(newTaskId);
            setStatusMsg({statusMsg: `Task #${newTaskId} added successfully!`, isError: false});
        }
    }

    return (
        <div className="new-task">
            <form onSubmit={onSubmit}>
                {newTask.id && (
                <div>
                    <label htmlFor="id"><span className="form-label">Task # </span>
                        <input type="text" name="id" id="id" placeholder="Task ID" value={newTask.id} onChange={handleTaskChange} readOnly={true}/>
                    </label>
                </div>
                )}

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
                    <label htmlFor="blocked"><span className="form-label">Blocked </span>
                        <div>
                            <input type="checkbox" name="blocked" id="blocked" checked={newTask.blocked} onChange={handleTaskChange}/>
                        </div>
                    </label>
                </div>

                <div>
                    <div className="form-actions">
                        <button type="button" className="cancel" onClick={cancelFormhandler}>Cancel</button>
                        <button type="submit" className="create">{formSubmitBtnText}</button>
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