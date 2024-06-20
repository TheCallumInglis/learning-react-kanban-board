import NewTask from '../components/NewTask';

const NewTaskPage = ({ addTaskHandler, taskChangeHandler, taskStates, newTask }) => {
    return (    
        <>
            <h1>Create New Task</h1>
            <NewTask 
                onSubmit={addTaskHandler} 
                handleChange={taskChangeHandler} 
                taskStates={taskStates} 
                newTask={newTask}/>
        </>
    );
};

export default NewTaskPage;