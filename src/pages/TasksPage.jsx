import TaskList from "../components/TaskList";

const TasksPage = ({ tasks, taskStates }) => {
    return (    
        <>
            <h1>All Tasks</h1>
            <div>
                <TaskList tasks={tasks} />
            </div>
        </>
    );
};

export default TasksPage;