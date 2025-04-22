"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import { Playaudio, Audio } from "../icon";
import Image from "next/image";

export default function CustomAudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seek, setSeek] = useState(0);
  const [volume, setVolume] = useState(1); 

  const playerRef = useRef<Howl | null>(null);

 
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (playing) {
      timer = setInterval(() => {
        if (playerRef.current) {
          setSeek(playerRef.current.seek() as number);
        }
      }, 200);
    }

    return () => clearInterval(timer);
  }, [playing]);

  const handleLoad = () => {
    const howl = playerRef.current;
    if (howl) {
      setDuration(howl.duration());
      setLoaded(true);
    }
  };

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setSeek(newTime);
    if (playerRef.current) {
      playerRef.current.seek(newTime);
    }
  };



  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };
 
  return (
    <div className="bg-gray-100 py-[8px] px-[8px] rounded-xl w-full max-w-[903px] shadow-md flex items-center">
      <ReactHowler
        src="/horse.mp3"
        playing={playing}
        volume={volume}
        html5={true}
        onLoad={handleLoad}
        ref={(ref) => {
          playerRef.current = (ref as any)?.howler ?? null;
        }}
      />

      <div className="flex justify-between items-center">
        <button onClick={togglePlay} className=" px-4 py-2">
          {playing ? <Playaudio /> :    <Image
                      src="/home-images/pauseaudio.svg"
                      width={60}
                      height={60}
                      alt="pause-audio"
                     
                    /> }
        </button>
      </div>
   
     

      <input
        type="range"
        min={0}
        max={duration}
        value={seek}
        onChange={handleSeekChange}
        className=" max-w-[725px] w-full custom-slider"
      /> 
      <div className="bg-[#CD508C] ml-[27px] rounded-[41px] w-[73px] h-[59px] flex items-center justify-center flex-col">
        <Audio />
        <span className="text-[10px] font-[400] text-white"> {formatTime(duration)}</span>
      </div>

    
    </div>
  );
}
