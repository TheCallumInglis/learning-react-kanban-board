const TaskCard = ({ task, toggleBlockedAction }) => {

    const isPastDueDate = (task) => {
        return task.status !== 'done' && new Date(task.dueDate) <  new Date();
    };

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('text/plain', taskId);
    };

    return (
        <>
            <div 
                className={`
                    task-card 
                    prevent-select
                    ${task.blocked ? 'task-blocked' : ''} 
                    ${isPastDueDate(task) ? 'task-overdue' : ''}`
                } 
                onDoubleClick={() => toggleBlockedAction(task)}
                onDragStart={(e) => handleDragStart(e, task.id)}
                draggable={true}
            >
                <div className='task-detail'>
                    <div className='task-id'>{task.id}</div>
                    <div className="task-title">{task.text}</div>

                    {task.blocked ? <div className="task-impedent">🚩</div> : null}
                </div>

                <br/>

                <div className="task-detail">
                    <p className="due-date">Due: {task.dueDate}</p>
                </div>
            </div>
        </>
    )
}

export default TaskCard;