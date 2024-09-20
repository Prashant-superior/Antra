import React, { useState, useRef, useEffect } from 'react';

const IconPlay = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 fill-white">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);

const IconPause = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
);


export default function SongBar({ songUrl }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(1);
    const audioRef = useRef(songUrl);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

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
    const handleSeek = (event) => {
        const seekBar = event.target;
        const rect = seekBar.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const newTime = Math.max(0, Math.min((offsetX / seekBar.clientWidth) * duration, duration));
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
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
                                    className="text-white p-8 rounded-full bg-red-400 shadow-lg "
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
                                <div className="h-2 bg-gray-600 rounded-full cursor-pointer" onClick={handleSeek}>
                                    <div
                                        className="h-2 bg-red-400 rounded-full relative"
                                        style={{ width: `${(currentTime / duration) * 100}%` }}
                                    >
                                        <span className="w-4 h-4 bg-red-500 pl-1 absolute right-[-0.25rem] bottom-0 -mb-1 rounded-full shadow"></span>
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
                        autoPlay
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