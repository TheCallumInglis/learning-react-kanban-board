import { ucFirst, prettyDate } from "../utils";

const TaskList = ({ tasks }) => {
    return (
        <table className="tasks">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={task.id}>
                        <td className="col-task-id">{task.id}</td>
                        <td className="col-task-status">{ucFirst(task.status)}</td>
                        <td className="col-task-date">{prettyDate(task.dueDate)}</td>
                        <td className="col-task-title">{task.text}</td>
                        <td className="col-task-actions">EDIT</td>{/* TODO Add a button to edit the task */}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TaskList;