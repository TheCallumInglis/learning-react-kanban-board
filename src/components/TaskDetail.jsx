import { prettyDate, isPastDueDate, ucFirst } from '../utils';

const TaskDetail = ({ task }) => {
    return (
        <>
            {task ? (
                <table className="tbl-task-detail">
                    <tbody>
                        <tr>
                            <td>Task ID:</td>
                            <td>{task.id}</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{ucFirst(task.status)}</td>
                        </tr>
                        <tr>
                            <td>Due Date:</td>
                            <td>{prettyDate(task.dueDate)}</td>
                        </tr>
                        <tr>
                            <td>Overdue:</td>
                            <td>{isPastDueDate(task) ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td>Blocked:</td>
                            <td>{task.blocked ? "Yes" : "No"}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Task not found.</p>
            )}
        </>
    );
}

export default TaskDetail;