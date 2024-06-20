import { useEffect } from 'react';
import NewTask from '../components/NewTask';

const NewTaskPage = ({ addTaskHandler, taskStates }) => {
    useEffect(() => {
        document.title = 'New Task';
        document.getElementById('text').focus();
    }, []);

    return (    
        <>
            <h1>Create New Task</h1>
            <NewTask 
                addTaskHandler={addTaskHandler} 
                taskStates={taskStates} 
            />
        </>
    );
};

export default NewTaskPage;