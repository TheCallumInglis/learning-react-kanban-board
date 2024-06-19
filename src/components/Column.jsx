import TaskCard from './TaskCard'

const Column = ({ status, tasks, toggleBlockedAction }) => {
    return (
        <div className="board-column">
            <h3>{status}</h3>
            {tasks.map((task) => (
                <TaskCard 
                    key={task.id}
                    task={task}
                    toggleBlockedAction={toggleBlockedAction}
                />
            ))}
        </div>
    );
}

export default Column;