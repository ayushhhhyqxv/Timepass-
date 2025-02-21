import React from 'react';
import ReactDOM from 'react-dom';
const { BrowserRouter, Route, Switch, Link } = ReactRouterDOM;

function App() {
    return (
        <BrowserRouter>
            <div className="p-4 bg-gray-800 text-white">
                <nav className="flex justify-around">
                    <Link to="/login" className="text-white">Login</Link>
                    <Link to="/home" className="text-white">Home</Link>
                    <Link to="/calendar" className="text-white">Calendar</Link>
                    <Link to="/clubs" className="text-white">Clubs</Link>
                </nav>
            </div>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/clubs" component={ClubsPage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
}

function LoginPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.endsWith('@vit.edu')) {
            setError('Email must be a @vit.edu domain');
            return;
        }
        // Handle login/signup logic here
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4 text-center">Login/Signup</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
                <p className="mt-4 text-gray-600 text-center">Random loading text: "Loading your dashboard...", "Almost there..."</p>
            </form>
        </div>
    );
}

function HomePage() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl mb-4 text-center">Welcome to ASEP3 Website</h1>
            <p className="text-center">Explore upcoming events, join exciting clubs, and more!</p>
            <p className="mt-4 text-gray-600 text-center">Random placeholder data: "Explore upcoming events", "Join exciting clubs"</p>
            <div className="mt-8">
                <h2 className="text-2xl mb-4 text-center">About Us</h2>
                <p className="text-center">ASEP3 is a platform for students to explore and join various clubs, participate in events, and enhance their skills. Our mission is to provide a comprehensive platform for students to engage in extracurricular activities and build a strong community.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl mb-4 text-center">Features</h2>
                <ul className="list-disc list-inside">
                    <li>Interactive calendar to keep track of events</li>
                    <li>Join and participate in various clubs</li>
                    <li>Personalized dashboard for each user</li>
                    <li>Secure authentication and user management</li>
                </ul>
            </div>
        </div>
    );
}

function CalendarPage() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl mb-4 text-center">Calendar</h1>
            <p className="text-center">Workshop on AI - Oct 15</p>
            <p className="text-center">Coding Competition - Oct 20</p>
            <p className="mt-4 text-gray-600 text-center">Random placeholder data for events: "Workshop on AI - Oct 15", "Coding Competition - Oct 20"</p>
            <div className="mt-8">
                <h2 className="text-2xl mb-4 text-center">Upcoming Events</h2>
                <ul className="list-disc list-inside">
                    <li>AI Workshop - Oct 15</li>
                    <li>Coding Competition - Oct 20</li>
                    <li>Robotics Seminar - Nov 5</li>
                    <li>Hackathon - Nov 20</li>
                </ul>
            </div>
        </div>
    );
}

function ClubsPage() {
    React.useEffect(() => {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl mb-4 text-center">Clubs</h1>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="p-4 bg-white rounded shadow-md">
                            <h2 className="text-xl">Tech Club</h2>
                            <p>Description of Tech Club</p>
                            <p className="mt-4 text-gray-600">Random placeholder data for clubs: "Tech Club", "Drama Club", "Sports Club"</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="p-4 bg-white rounded shadow-md">
                            <h2 className="text-xl">Drama Club</h2>
                            <p>Description of Drama Club</p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="p-4 bg-white rounded shadow-md">
                            <h2 className="text-xl">Sports Club</h2>
                            <p>Description of Sports Club</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
