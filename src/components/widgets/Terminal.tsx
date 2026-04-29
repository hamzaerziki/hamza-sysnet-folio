import { useEffect, useState } from 'react';

interface Line {
  prompt: string;
  cmd: string;
  out?: string[];
  pause?: number; // ms after output before next line
}

const SCRIPT: Line[] = [
  {
    prompt: 'hamza@erziki:~$',
    cmd: 'whoami',
    out: ['hamza — IT & Cybersecurity'],
    pause: 700,
  },
  {
    prompt: 'hamza@erziki:~$',
    cmd: 'uname -a',
    out: ['Linux erziki 6.6.0 #1 SMP x86_64 GNU/Linux'],
    pause: 700,
  },
  {
    prompt: 'hamza@erziki:~$',
    cmd: 'nmap -sV 10.0.0.0/24',
    out: [
      'Starting Nmap 7.94 ( https://nmap.org )',
      '24 hosts up. Scan completed in 8.42s',
    ],
    pause: 900,
  },
  {
    prompt: 'hamza@erziki:~$',
    cmd: 'systemctl status zabbix-server',
    out: ['● zabbix-server.service — active (running)'],
    pause: 800,
  },
  {
    prompt: 'hamza@erziki:~$',
    cmd: 'echo "ready to build"',
    out: ['ready to build'],
    pause: 1200,
  },
];

export const Terminal = () => {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showOut, setShowOut] = useState(false);
  const [history, setHistory] = useState<Array<Line & { typed: string; outVisible: boolean }>>([]);

  useEffect(() => {
    const current = SCRIPT[lineIdx];
    if (charIdx < current.cmd.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 50 + Math.random() * 60);
      return () => clearTimeout(t);
    }
    if (!showOut) {
      const t = setTimeout(() => setShowOut(true), 250);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setHistory(h => [...h, { ...current, typed: current.cmd, outVisible: true }]);
      setCharIdx(0);
      setShowOut(false);
      setLineIdx((lineIdx + 1) % SCRIPT.length);
      // wipe history after full loop to keep terminal clean
      if ((lineIdx + 1) % SCRIPT.length === 0) {
        setTimeout(() => setHistory([]), 300);
      }
    }, current.pause ?? 600);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, showOut]);

  const current = SCRIPT[lineIdx];
  const typedNow = current.cmd.slice(0, charIdx);

  return (
    <div className="rounded-lg border border-border-solid bg-surface-2 shadow-sm overflow-hidden font-mono text-[13px]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border-solid bg-surface-offset">
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="ml-2 text-[11px] text-muted-foreground tracking-wide">~/erziki</span>
      </div>
      <div className="p-4 leading-relaxed min-h-[220px] max-h-[260px] overflow-hidden">
        {history.map((h, i) => (
          <div key={i} className="mb-1.5">
            <div>
              <span className="text-primary">{h.prompt}</span>{' '}
              <span className="text-foreground">{h.typed}</span>
            </div>
            {h.out?.map((o, j) => (
              <div key={j} className="text-muted-foreground">{o}</div>
            ))}
          </div>
        ))}
        {/* Active line */}
        <div>
          <span className="text-primary">{current.prompt}</span>{' '}
          <span className="text-foreground">{typedNow}</span>
          <span className="inline-block w-2 h-[1em] align-middle bg-primary/80 ml-0.5 animate-blink" />
        </div>
        {showOut && current.out?.map((o, j) => (
          <div key={j} className="text-muted-foreground">{o}</div>
        ))}
      </div>
    </div>
  );
};
