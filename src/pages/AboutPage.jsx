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
        </div>
    );
}

export default AboutPage;