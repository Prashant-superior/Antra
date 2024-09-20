import React, { useState, useRef } from 'react';

const IconPlay = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);

const IconPause = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
);


export default function SongBar({ songUrl, albumCover, title, artist }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center '>
                <div className='w-screen p-5'>
                    <div className="flex">

                        <div className="w-full flex justify-center">

                            <div className="flex justify-between items-center ">
                                <button
                                    onClick={togglePlay}
                                    className="text-white p-4 rounded-full bg-red-400 shadow-lg"
                                >
                                    {isPlaying ? <IconPause /> : <IconPlay />}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-lg rounded-lg w-[45rem]">
                        <div className="mx-8 py-4">
                            <div className="flex justify-between text-sm text-gray-500">
                                <p>{formatTime(currentTime)}</p>
                                <p>{formatTime(duration)}</p>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 bg-gray-600 rounded-full">
                                    <div
                                        className="h-1 bg-red-400 rounded-full relative"
                                        style={{ width: `${(currentTime / duration) * 100}%` }}
                                    >
                                        <span className="w-3 h-3 bg-red-500 absolute right-0 bottom-0 -mb-1 rounded-full shadow"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <audio
                        ref={audioRef}
                        src={songUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                    />
                </div>

            </div>







        </>
    );
}

// <MusicPlayer
//   songUrl="path/to/your/song.mp3"
//   albumCover="path/to/album/cover.jpg"
//   title="A Sky Full of Stars"
//   artist="Coldplay"
// />