'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { playgroundItems, type PlaygroundItem } from '@/lib/playground';

const rows = [playgroundItems.slice(0, 5), playgroundItems.slice(5, 10), playgroundItems.slice(10)];

export function PlaygroundGrid() {
  const [selected, setSelected] = useState<PlaygroundItem>(playgroundItems[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openInterview = () => {
      if (window.location.hash === '#interview') {
        setSelected(playgroundItems.find((item) => item.title === 'A Shared Curiosity')!);
        setOpen(true);
      }
    };
    openInterview();
    window.addEventListener('hashchange', openInterview);
    return () => window.removeEventListener('hashchange', openInterview);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="playground-grid" data-paused={open || undefined} aria-label="Creative work gallery">
        {rows.map((items, row) => (
          <div className="playground-track" key={row}>
            {[0, 1, 2].map((copy) => (
              <div className="playground-group" key={copy} aria-hidden={copy > 0 || undefined}>
                {items.map((item) => (
                  <DialogTrigger
                    className="playground-item"
                    key={item.title}
                    tabIndex={copy > 0 ? -1 : 0}
                    aria-label={`View ${item.title}`}
                    onClick={() => setSelected(item)}
                  >
                    <img src={item.src} alt={item.alt} loading="eager" draggable={false} />
                    <span className="playground-item-title">{item.title}</span>
                  </DialogTrigger>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <DialogContent className="playground-dialog" showCloseButton={false}>
        <DialogClose className="playground-dialog-close" aria-label="Close image"><X size={22} /></DialogClose>
        <div className="playground-dialog-image"><img src={selected.src} alt={selected.alt} /></div>
        <div className="playground-dialog-copy">
          <span className="playground-category">{selected.category}</span>
          <DialogTitle className="playground-dialog-title">{selected.title}</DialogTitle>
          <DialogDescription className="playground-dialog-description">{selected.description}</DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
