// Preload all meme and static videos for instant switching
function VideoPreloader() {
  return (
    <div style={{ display: 'none' }}>
      {/* Preload meme videos */}
      {MEME_MEDIA.filter(m => m.type === 'video').map((m, i) => (
        <video key={i} src={m.src} preload="auto" />
      ))}
      {/* Preload static transition */}
      <video src={staticVid} preload="auto" />
    </div>
  );
}
// --- Live TV Section ---
const LIVE_CHANNELS = [
  {
    name: 'Al Jazeera English',
    url: 'https://www.youtube.com/embed/gCNeDWCI0vo?si=PRCtVWvcr3ZC_IKZ',
    type: 'youtube',
  },
  {
    name: 'DW News',
    url: 'https://www.youtube.com/embed/LuKwFajn37U?si=G-KnvxUhv5La4A1b',
    type: 'youtube',
  },
  {
    name: 'France 24 English',
    url: 'https://www.youtube.com/embed/Ap-UM1O9RBU?si=w91yQ7PPZ-KvmvuF',
    type: 'youtube',
  },
  {
    name: 'Sky News',
    url: 'https://www.youtube.com/embed/YDvsBbKfLPA?si=ypVICjezPDqFUV08',
    type: 'youtube',
  },
  {
    name: 'ABC News (Australia)',
    url: 'https://www.youtube.com/embed/vOTiJkg1voo?si=20lwHeNfFouzxWKZ',
    type: 'youtube',
  },
];

function LiveTVSection() {
  const [selected, setSelected] = useState(0);
  const channel = LIVE_CHANNELS[selected];
  return (
    <div className="live-tv-section" style={{ margin: '2.5rem auto', maxWidth: 600, width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: 'white', fontFamily: 'inherit', marginBottom: '1rem', fontSize: '2rem', letterSpacing: '1px' }}>Live TV</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        {LIVE_CHANNELS.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSelected(i)}
            style={{
              background: i === selected ? '#ffb347' : '#222',
              color: i === selected ? '#222' : '#fff',
              border: '2px solid #ffb347',
              borderRadius: '1.2rem',
              padding: '0.4rem 1.1rem',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: i === selected ? '0 2px 8px #ffb34755' : '0 2px 8px #0002',
            }}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, borderRadius: '1.2rem', overflow: 'hidden', background: '#000' }}>
        <iframe
          title={channel.name}
          src={channel.url}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
// --- Vintage TV Controls ---
function TVVintageControls({
  onBackward, onPlay, onPause, onForward, onMute, onVolUp, onVolDown, onPower, isMuted
}: {
  onBackward: () => void,
  onPlay: () => void,
  onPause: () => void,
  onForward: () => void,
  onMute: () => void,
  onVolUp: () => void,
  onVolDown: () => void,
  onPower: () => void,
  isMuted: boolean
}) {
  return (
    <>
      {/* Desktop: left side */}
      <div className="tv-controls-vertical left">
        <button className="vintage-button" onClick={onBackward} title="Back">
          <span className="button-icon">
            <svg viewBox="0 0 24 24">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </span>
          <span className="button-label">-CH</span>
        </button>
        <button className="vintage-button" onClick={onPlay} title="Play">
          <span className="button-icon">
            <svg viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </span>
          <span className="button-label">Play</span>
        </button>
        <button className="vintage-button" onClick={onPause} title="Pause">
          <span className="button-icon">
            <svg viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </span>
          <span className="button-label">Pause</span>
        </button>
        <button className="vintage-button" onClick={onForward} title="Forward">
          <span className="button-icon">
            <svg viewBox="0 0 24 24">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </span>
          <span className="button-label">+CH</span>
        </button>
      </div>
      {/* Desktop: right side */}
      <div className="tv-controls-vertical right">
        <button className="vintage-button" onClick={onMute} title="Mute/Unmute">
          <span className="button-icon">
            <svg viewBox="0 0 24 24">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          </span>
          <span className="button-label">{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>
        <button className="vintage-button" onClick={onVolUp} title="Volume Up">
          <span className="button-icon plus-icon"></span>
          <span className="button-label">Vol +</span>
        </button>
        <button className="vintage-button" onClick={onVolDown} title="Volume Down">
          <span className="button-icon minus-icon"></span>
          <span className="button-label">Vol -</span>
        </button>
        <button className="vintage-button" onClick={onPower} title="Power">
          <span className="button-icon">
            <svg viewBox="0 0 24 24">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
              <line x1="12" y1="2" x2="12" y2="12"></line>
            </svg>
          </span>
          <span className="button-label">Power</span>
        </button>
      </div>
      {/* Mobile: horizontal, under TV */}
      <div className="tv-controls-mobile">
        <div className="button-row">
          <button className="vintage-button" onClick={onBackward} title="Back">
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5"></line>
              </svg>
            </span>
            <span className="button-label">-CH</span>
          </button>
          <button className="vintage-button" onClick={onPlay} title="Play">
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </span>
            <span className="button-label">Play</span>
          </button>
          <button className="vintage-button" onClick={onPause} title="Pause">
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            </span>
            <span className="button-label">Pause</span>
          </button>
          <button className="vintage-button" onClick={onForward} title="Forward">
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19"></line>
              </svg>
            </span>
            <span className="button-label">+CH</span>
          </button>
        </div>
        <div className="button-row">
          <button className="vintage-button" onClick={onMute} title="Mute/Unmute">
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            </span>
            <span className="button-label">{isMuted ? 'Unmute' : 'Mute'}</span>
          </button>
          <button className="vintage-button" onClick={onVolUp} title="Volume Up">
            <span className="button-icon plus-icon"></span>
            <span className="button-label">Vol +</span>
          </button>
          <button className="vintage-button" onClick={onVolDown} title="Volume Down">
            <span className="button-icon minus-icon"></span>
            <span className="button-label">Vol -</span>
          </button>
          <button className="vintage-button" onClick={onPower} title="Power">
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
            </span>
            <span className="button-label">Power</span>
          </button>
        </div>
      </div>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import './App.css'

// Add Luckiest Guy font from Google Fonts
const LUCKIEST_GUY_FONT_LINK = 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap';
if (typeof document !== 'undefined' && !document.getElementById('luckiest-guy-font')) {
  const link = document.createElement('link');
  link.id = 'luckiest-guy-font';
  link.rel = 'stylesheet';
  link.href = LUCKIEST_GUY_FONT_LINK;
  document.head.appendChild(link);
}

// Import local video files
import bonk1 from './assets/bonk1.mp4';
import bonk2 from './assets/bonk2.mp4';
import bonk3 from './assets/bonk3.mp4';
import bonk4 from './assets/bonk4.mp4';
import bonk5 from './assets/bonk5.mp4';
import bonk6 from './assets/bonk6.mp4';
import bonk7 from './assets/bonk7.mp4';
import staticVid from './assets/static.mp4';

const MEME_MEDIA = [
  { type: 'video', src: bonk1 },
  { type: 'video', src: bonk2 },
  { type: 'video', src: bonk3 },
  { type: 'video', src: bonk4 },
  { type: 'video', src: bonk5 },
  { type: 'video', src: bonk6 },
  { type: 'video', src: bonk7 },
  // Add more as you add more files
];

const TV_LINKS = [
  { label: 'letsbonk', url: 'https://letsbonk.fun/' },
  { label: 'livemint', url: 'https://t.me/letsbonknewmints' },
  { label: 'twitter', url: 'https://x.com/bonktvonbonk' },
  { label: 'Bonk', url: 'https://bonkcoin.com/' },
]

function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const total = 1800 + 60 * 'Welcome to BonkTv'.length
    const timer = setTimeout(() => {
      setTimeout(onFinish, 400)
    }, total)
    return () => clearTimeout(timer)
  }, [onFinish])

  // Fluffy, animated, per-letter effect
  const text = 'Welcome to BonkTv'
  // Responsive style: clamp font size, add padding, prevent overflow, break on words only
  const style: React.CSSProperties = {
    fontFamily: 'Luckiest Guy, cursive',
    fontWeight: 400,
    fontSize: 'clamp(2.1rem, 7vw, 3.2rem)',
    padding: '1.2rem 0.5rem 0.7rem 0.5rem',
    width: '100%',
    textAlign: 'center',
    wordBreak: 'normal',
    lineHeight: 1.1,
    boxSizing: 'border-box',
    maxWidth: '100vw',
    overflowWrap: 'break-word', // break only at word boundaries
    whiteSpace: 'normal',
  };
  return (
    <div className="bonk-welcome" style={style}>
      {/* Render per-word spans for animation, but break only at spaces */}
      {text.split(' ').map((word, wi, arr) => (
        <span key={wi} style={{ display: 'inline-block', marginRight: wi < arr.length - 1 ? '0.4em' : 0 }}>
          {word.split('').map((char, i) => (
            <span
              key={i}
              className={char === 'o' || char === 'B' || char === 'T' ? 'fluffy' : ''}
              style={{
                animationDelay: `${(wi * 20 + i) * 60}ms`,
                display: 'inline-block',
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

function DoorTransition({ open }: { open: boolean }) {
  return (
    <div className={`door-transition${open ? ' door-open' : ''}`}>
      <div className="door-left" />
      <div className="door-right" />
    </div>
  )
}

function SpeakerHoles() {
  // 10 columns x 25 rows = 250 holes
  return Array.from({ length: 250 }).map((_, i) => (
    <div className="speaker-hole" key={i} />
  ))
}

function ChannelDial() {
  return (
    <div className="channel-dial">
      <div className="channel-numbers">
        {[1,2,3,4,5,6,7,8].map((n) => (
          <div className="channel-number" key={n}>{n}</div>
        ))}
      </div>
    </div>
  )
}

function TVAntique({ children, isStatic }: { children?: React.ReactNode, isStatic?: boolean }) {
  return (
    <div className="tv-container">
      <div className="tv-body">
        <div className="tv-screen-container">
          <div className="tv-screen-outer">
            <div className="tv-screen">
              {isStatic && (
                <div className="static">
                  <div className="tv-static-noise" />
                </div>
              )}
              {!isStatic && children}
              <div className="vignette" />
            </div>
          </div>
        </div>
        <div className="tv-controls">
          <div className="speaker"><SpeakerHoles /></div>
          <div className="knob-container">
            <div className="control-label">Channel</div>
            <ChannelDial />
          </div>
          <div className="power-light" />
        </div>
      </div>
      <div className="tv-stand" />
    </div>
  )
}

// TVVintageControls removed (no buttons on mobile or desktop)

function TVScene() {
  // All button state and effects removed (no controls)
  // TV state for controls
  const [mediaIdx, setMediaIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isStatic, setIsStatic] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const current = MEME_MEDIA[mediaIdx]
  const isVideo = current.type === 'video'

  // Show static.mp4 for 350ms when switching
  const showStaticAndSetIdx = (newIdx: number) => {
    setIsStatic(true);
    setTimeout(() => {
      setMediaIdx(newIdx);
      setIsStatic(false);
    }, 350);
  };

  const backward = () => {
    if (!isStatic) {
      showStaticAndSetIdx((mediaIdx - 1 + MEME_MEDIA.length) % MEME_MEDIA.length);
    }
  }
  const play = () => {
    if (!isStatic && isVideo && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true)
    }
  }
  const pause = () => {
    if (!isStatic && isVideo && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false)
    }
  }
  const forward = () => {
    if (!isStatic) {
      showStaticAndSetIdx((mediaIdx + 1) % MEME_MEDIA.length);
    }
  }
  const mute = () => {
    if (!isStatic && isVideo && videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted)
    }
  }
  const volUp = () => {
    if (!isStatic && isVideo && videoRef.current) {
      const v = Math.min(1, videoRef.current.volume + 0.1); videoRef.current.volume = v
    }
  }
  const volDown = () => {
    if (!isStatic && isVideo && videoRef.current) {
      const v = Math.max(0, videoRef.current.volume - 0.1); videoRef.current.volume = v
    }
  }
  const power = () => {
    if (!isStatic) {
      // Turn off: show static
      if (isVideo && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setIsStatic(true);
    } else {
      // Turn on: go to first media and play (if video)
      setMediaIdx(0);
      setIsStatic(false);
      setTimeout(() => {
        if (MEME_MEDIA[0].type === 'video' && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
        setIsPlaying(true);
      }, 100);
    }
  }

  useEffect(() => {
    if (isVideo && videoRef.current) videoRef.current.muted = isMuted
  }, [isMuted, isVideo])

  useEffect(() => {
    if (isVideo && videoRef.current && !isStatic) {
      // Force reload for instant switch
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [mediaIdx, isPlaying, isStatic, isVideo])

  // When switching to an image, always set isPlaying to true
  useEffect(() => {
    if (!isVideo) setIsPlaying(true)
  }, [mediaIdx, isVideo])

  return (
    <div className="tv-scene" style={{ justifyContent: 'center', position: 'relative' }}>
      <TVVintageControls
        onBackward={backward}
        onPlay={play}
        onPause={pause}
        onForward={forward}
        onMute={mute}
        onVolUp={volUp}
        onVolDown={volDown}
        onPower={power}
        isMuted={isMuted}
      />
      <TVAntique isStatic={false}>
        {isStatic ? (
          <video
            src={staticVid}
            width={320}
            height={200}
            autoPlay
            muted
            preload="auto"
            style={{ borderRadius: '1rem', background: '#000', position: 'relative', zIndex: 2 }}
          />
        ) : isVideo ? (
          <video
            ref={videoRef}
            src={current.src}
            width={320}
            height={200}
            controls={false}
            autoPlay
            loop
            preload="auto"
            style={{ borderRadius: '1rem', background: '#000', position: 'relative', zIndex: 2 }}
          />
        ) : (
          <img
            src={current.src}
            width={320}
            height={200}
            alt="Meme"
            style={{ borderRadius: '1rem', background: '#000', objectFit: 'cover', position: 'relative', zIndex: 2 }}
          />
        )}
      </TVAntique>
      <div className="tv-links" style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        {TV_LINKS.map((l) => (
          <a className="tv-link" href={l.url} target="_blank" rel="noopener noreferrer" key={l.url}>{l.label}</a>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [doorsOpen, setDoorsOpen] = useState(false)

  // Inject Luckiest Guy font from Google Fonts on mount
  useEffect(() => {
    const id = 'luckiest-guy-font';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      setTimeout(() => setDoorsOpen(true), 400)
    }
  }, [showWelcome])

  return (
    <div>
      <VideoPreloader />
      <header style={{
        width: '100%',
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        background: 'rgba(255,179,71,0.97)',
        padding: '0.7rem 0 0.4rem 0',
        fontFamily: 'Luckiest Guy, cursive',
        fontWeight: 400,
        fontSize: '2.2rem',
        letterSpacing: '2px',
        color: 'white',
        boxShadow: '0 2px 12px #0002',
        textShadow: '0 2px 8px #fff8',
      }}>
        BonkTv
      </header>
      <div style={{ paddingTop: '4.2rem' }}>
        {showWelcome && <WelcomeScreen onFinish={() => setShowWelcome(false)} />}
        {!showWelcome && <DoorTransition open={doorsOpen} />}
        {doorsOpen && <>
          <TVScene />
          <LiveTVSection />
        </>}
      </div>
    </div>
  )
}

export default App
