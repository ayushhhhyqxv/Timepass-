import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

function ClubsPage() {
    useEffect(() => {
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

export default ClubsPage;
