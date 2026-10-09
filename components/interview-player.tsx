'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function InterviewPlayer() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <div className="interview-player">
    <div className="interview-screen" aria-busy={playing && !loaded && !failed}>
      <img src="/assets/interview-poster.png" width="1280" height="720" alt="Krishand RK seated on stage during the interview." />
      {playing && !failed && <img className="interview-animation" src="/assets/interview.webp" width="1280" height="720" alt="Silent interview excerpt showing Krishand RK speaking and gesturing." onLoad={() => setLoaded(true)} onError={() => { setFailed(true); setPlaying(false); }} />}
      {!playing && <Button className="play-clip" onClick={() => { setFailed(false); setPlaying(true); }} aria-label="Play the 15-second silent interview clip"><span aria-hidden="true">▶</span></Button>}
    </div>
    <div className="player-caption"><p aria-live="polite">{failed ? 'The clip could not load. Please try again.' : playing && !loaded ? 'Loading interview clip…' : '15-second interview excerpt · Silent'}</p><Button className="player-control" variant="ghost" onClick={() => { setFailed(false); setPlaying(!playing); }} aria-pressed={playing}>{playing ? 'Stop clip' : 'Play clip'}<span aria-hidden="true">{playing ? '■' : '▶'}</span></Button></div>
  </div>;
}
