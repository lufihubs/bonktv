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
          <span className="button-label">Back</span>
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
          <span className="button-label">Forward</span>
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
            <span className="button-label">Back</span>
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
            <span className="button-label">Forward</span>
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



// Now supports both videos and images
const MEME_MEDIA = [
  { type: 'video', src: 'https://github.com/Nasabdul1/videolink/raw/refs/heads/main/tLVICRGwSDeuSIms.mp4' },
  { type: 'video', src: 'https://github.com/Nasabdul1/videolink/raw/refs/heads/main/1GjQThSqxzr18zCb.mp4' },
  { type: 'video', src: 'https://github.com/Nasabdul1/videolink/raw/refs/heads/main/zgMm0juHt4jOUMU4.mp4' },
  { type: 'video', src: 'https://github.com/Nasabdul1/videolink/raw/refs/heads/main/K0rFykD_jiXcdlJw.mp4' },
  { type: 'video', src: 'https://github.com/Nasabdul1/videolink/raw/refs/heads/main/39uTKEL0TisrlOya.mp4' },
  { type: 'video', src: 'https://github.com/Nasabdul1/videolink/raw/refs/heads/main/R0TuhX9K5AqJEBKu%20(1).mp4' },
]

const TV_LINKS = [
  { label: 'letsbonk', url: 'https://letsbonk.fun/' },
  { label: 'livemint', url: 'https://t.me/letsbonknewmints' },
  { label: 'twitter', url: 'https://x.com/bonktvonbonk' },
  { label: 'Bonk', url: 'https://bonkcoin.com/' },
]

function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  // const [done, setDone] = useState(false)
  useEffect(() => {
    const total = 1800 + 60 * 'Welcome to BonkTv'.length
    const timer = setTimeout(() => {
      setTimeout(onFinish, 400)
    }, total)
    return () => clearTimeout(timer)
  }, [onFinish])

  // Fluffy, animated, per-letter effect
  const text = 'Welcome to BonkTv'
  return (
    <div className="bonk-welcome">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={char === 'o' || char === 'B' || char === 'T' ? 'fluffy' : ''}
          style={{
            animationDelay: `${i * 60}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
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

  // Controls
  const backward = () => {
    if (!isStatic) {
      setIsPlaying(false);
      setTimeout(() => {
        setMediaIdx((i) => (i - 1 + MEME_MEDIA.length) % MEME_MEDIA.length);
        setIsPlaying(true);
      }, 0);
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
      setIsPlaying(false);
      setTimeout(() => {
        setMediaIdx((i) => (i + 1) % MEME_MEDIA.length);
        setIsPlaying(true);
      }, 0);
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
      if (isPlaying) {
        // Force reload for instant switch
        videoRef.current.load();
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, mediaIdx, isStatic, isVideo])

  // When switching to an image, always set isPlaying to true
  useEffect(() => {
    if (!isVideo) setIsPlaying(true)
  }, [mediaIdx, isVideo])

  return (
    <div className="tv-scene" style={{ justifyContent: 'center', position: 'relative' }}>
      {/* Desktop: vertical controls left/right of TV, Mobile: horizontal under TV */}
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
      <TVAntique isStatic={isStatic}>
        {isVideo ? (
          <video
            ref={videoRef}
            src={current.src}
            width={320}
            height={200}
            controls={false}
            autoPlay
            loop
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

  useEffect(() => {
    if (!showWelcome) {
      setTimeout(() => setDoorsOpen(true), 400)
    }
  }, [showWelcome])

  return (
    <div>
      {showWelcome && <WelcomeScreen onFinish={() => setShowWelcome(false)} />}
      {!showWelcome && <DoorTransition open={doorsOpen} />}
      {doorsOpen && <TVScene />}
    </div>
  )
}

export default App
