import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskDetail from '../components/TaskDetail';

const TaskDetailPage = ({ tasks }) => {
    const { taskId } = useParams();

    const selectedTask = tasks.find(
        (task) => task.id === Number(taskId)
    );

    useEffect(() => {
        document.title = `Task Not Found`;
    }, []);

    useEffect(() => {
        document.title = `Task #${selectedTask.id}`;
    }, [selectedTask]);

    return (
        <>
            <h1>Task Detail</h1>
            <TaskDetail task={selectedTask} />
        </>
    );
}

export default TaskDetailPage;