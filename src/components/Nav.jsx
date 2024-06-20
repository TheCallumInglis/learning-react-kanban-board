import { Link } from 'react-router-dom';
import { FaChartBar, FaPlus, FaTasks, FaInfo } from 'react-icons/fa';

const Nav = () => {
    return (
        <nav>
            <h2><span className="icon">🚀</span> Kanban Board</h2>
            <ul>
                <Link to="/">
                    <li>
                        <span className="icon"><FaChartBar /></span> Home
                    </li>
                </Link>
                <Link to="/tasks/new">
                    <li>
                        <span className="icon"><FaPlus /></span> New Task
                    </li>
                </Link>
                <Link to="/tasks">
                    <li>
                        <span className="icon"><FaTasks /></span> All Tasks
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        <span className="icon"><FaInfo /></span> About
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;