const Footer = () => {
    return (
        <footer>
            <div className="tips">
                <b>Tips</b>
                <ul>
                    <li>Double click a task to toggle the blocked status. </li>
                    <li>Drag and drop tasks between columns to change their status.</li>
                </ul>
            </div>
            <div className="about">
                <b>About</b>
                <p>By <a href='https://calluminglis.com?src=react-kanban-board'>Callum Inglis</a></p>
            </div>
        </footer>
    )
};

export default Footer;