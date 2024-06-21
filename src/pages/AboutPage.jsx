import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <div>
            <h1>About</h1>
            <p>This is a simple Kanban Board application built with React.</p>
            <p>It was created by <a href='https://calluminglis.com?src=react-kanban-board'>Callum Inglis</a>.</p>
            <p>Find out more on <a href='https://github.com/TheCallumInglis/learning-react-kanban-board'>GitHub</a></p>
        </div>
    );
}

export default AboutPage;