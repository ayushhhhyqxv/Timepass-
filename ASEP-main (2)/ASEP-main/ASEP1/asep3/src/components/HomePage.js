import React from 'react';

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

export default HomePage;
