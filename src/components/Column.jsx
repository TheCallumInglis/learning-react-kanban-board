import TaskCard from './TaskCard'

const Column = ({ status, tasks }) => {
    return (
        <div className="board-column">
            <h3>{status}</h3>
            {tasks.map((task) => (
                <TaskCard task={task} key={task.id}/>
            ))}
        </div>
    );
}

export default Column;