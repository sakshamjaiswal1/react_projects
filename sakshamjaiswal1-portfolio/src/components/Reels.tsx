import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { reels, type Reel } from '../data/content';

function ReelPlayer({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const manuallyPaused = useRef(false);
  const manuallyStarted = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed || !reel.src) return;
    let disposed = false;
    const syncPlayback = () => {
      const shouldPlay = visible.current && !document.hidden && !manuallyPaused.current
        && (reducedMotion === false || manuallyStarted.current);
      if (!shouldPlay) { video.pause(); return; }
      void video.play().then(() => {
        if (disposed || !visible.current || document.hidden || manuallyPaused.current) video.pause();
        else setBlocked(false);
      }).catch(() => { if (!disposed) setBlocked(true); });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting && entry.intersectionRatio >= 0.6;
      syncPlayback();
    }, { threshold: [0, 0.6] });
    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, [reducedMotion, reel.src, failed]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      manuallyPaused.current = true;
      video.pause();
    } else {
      manuallyPaused.current = false;
      manuallyStarted.current = true;
      void video.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
    }
  };

  return <article className="reel-card">
    <div className="reel-media">
      {reel.src && !failed ? <video ref={videoRef} src={reel.src} poster={reel.poster}
        muted={muted} loop playsInline preload="none" aria-label={reel.label}
        aria-describedby={`${reel.id}-description`}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onError={() => setFailed(true)} />
        : <img src={reel.poster} alt={reel.label} loading="lazy" />}
      <span className="reel-badge">REEL / {reel.number}</span>
      {reel.src && !failed ? <div className="reel-controls">
        <button type="button" onClick={togglePlayback} aria-label={`${playing ? 'Pause' : 'Play'} ${reel.title}`}>
          {playing ? <Pause size={18}/> : <Play size={18}/>}<span>{playing ? 'Pause' : 'Play'}</span>
        </button>
        <button type="button" onClick={() => setMuted(value => !value)}
          aria-label={`${muted ? 'Unmute' : 'Mute'} ${reel.title}`} aria-pressed={!muted}>
          {muted ? <VolumeX size={18}/> : <Volume2 size={18}/>}<span>{muted ? 'Sound off' : 'Sound on'}</span>
        </button>
      </div> : <a className="reel-fallback" href={reel.href} target="_blank" rel="noreferrer">Watch on Instagram <ArrowUpRight size={18}/></a>}
    </div>
    <div className="reel-caption"><div><p className="eyebrow">{reel.date}</p><h3>{reel.title}</h3></div>
      <a href={reel.href} target="_blank" rel="noreferrer" aria-label={`Open ${reel.title} on Instagram`}><ArrowUpRight size={22}/></a>
    </div>
    <p className="reel-description" id={`${reel.id}-description`}>{reel.label}</p>
    {blocked && !failed && <p className="reel-status" role="status">Tap Play to start, or <a href={reel.href} target="_blank" rel="noreferrer">watch on Instagram</a>.</p>}
  </article>;
}

export default function Reels() {
  return <section id="reels" className="section reels">
    <div className="section-heading"><div><p className="eyebrow">04 / LIFE IN MOTION</p>
      <h2>Beyond the <em>still.</em></h2></div>
      <p className="muted">Little escapes. Open roads. Showing up.<br/>Three moments, in motion.</p>
    </div>
    <div className="reels-grid">{reels.map(reel => <ReelPlayer key={reel.id} reel={reel}/>)}</div>
  </section>;
}
