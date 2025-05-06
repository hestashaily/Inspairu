

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Next, Playbtn } from "../icon";

type CustomVideoPlayerProps = {
  videoSrc: string;
};

export default function CustomVideoPlayer({ videoSrc }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handlePlayPause = (): void => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);  
  };

  const handleNext = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = (): void => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = (): void => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative w-full max-w-full h-[300px]">
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full rounded-[8px] object-cover"
          src={videoSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          muted 
        />
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 m-auto w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold"
          style={{ zIndex: 10 }}
        >
          {isPlaying ? (
            <Image
              src="/home-images/pause.svg"
              width={23}
              height={23}
              alt="pause icon"
            />
          ) : (
            <Image
              src="/home-images/play.svg"
              width={23}
              height={23}
              alt="play icon"
            />
          )}
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[8px]">
        <div className="flex items-center justify-between gap-4 mb-2 bg-[#2222229E] rounded-[9px]">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePlayPause}
              className="text-black px-3 py-1 rounded text-sm font-medium"
            >
              {isPlaying ? (
                <Image
                  src="/home-images/vediopause.svg"
                  width={32}
                  height={32}
                  alt="vediopause"
                />
              ) : (
                <Playbtn />
              )}
            </button>
            <span className="text-white text-xs">{formatTime(currentTime)}</span>
          </div>

          <input
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full accent-white"
          />
          <span className="text-white text-xs">
            {duration ? formatTime(duration) : "--:--"}
          </span>

          <button
            onClick={handleNext}
            className="px-3 py-1 rounded text-sm font-medium"
          >
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
}
