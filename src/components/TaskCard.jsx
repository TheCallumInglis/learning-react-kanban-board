const TaskCard = ({task}) => {

    const isPastDueDate = (task) => {
        return task.status !== 'done' && new Date(task.dueDate) <  new Date();
    };

    return (
        <>
            <div className={`task-card ${task.blocked ? 'task-blocked' : ''} ${isPastDueDate(task) ? 'task-overdue' : ''}`}>
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