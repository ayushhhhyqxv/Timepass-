import React from 'react';

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

export default CalendarPage;
