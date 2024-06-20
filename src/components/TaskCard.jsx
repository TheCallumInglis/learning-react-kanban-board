import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isPastDueDate, prettyDate } from '../utils';

const TaskCard = ({ task, toggleBlockedAction }) => {
    const navigate = useNavigate();

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('text/plain', taskId);
    };

    const showTaskDetail = (e, task) => {
        navigate(`/tasks/${task.id}`);
    }

    const onContextMenu = (e, task) => {
        e.preventDefault();
        toggleBlockedAction(task);
    }

    return (
        <>
            <div 
                className={`
                    task-card 
                    prevent-select
                    ${task.blocked ? 'task-blocked' : ''} 
                    ${isPastDueDate(task) ? 'task-overdue' : ''}`
                } 
                onDragStart={(e) => handleDragStart(e, task.id)}
                onClick={(e) => showTaskDetail(e, task)}
                onContextMenu={(e) => onContextMenu(e, task)}
                draggable={true}
            >
                <div className='task-detail'>
                    <div className='task-id'>{task.id}</div>
                    <div className="task-title">{task.text}</div>

                    {task.blocked ? <div className="task-impedent">🚩</div> : null}
                </div>

                <br/>

                <div className="task-detail">
                    <p className="due-date">Due: {prettyDate(task.dueDate)}</p>
                </div>
            </div>
        </>
    )
}

export default TaskCard;