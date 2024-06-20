import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h2><span className="icon">🚀</span> Kanban Board</h2>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/tasks"><li>All Tasks</li></Link>
                <Link to="/tasks/new"><li>New Task</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;