'use client';

import { useEffect, useState } from 'react';

const roles = ['Product Designer', 'UX Designer', 'Brand Strategist'];

export function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(roles[0].length);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const role = roles[roleIndex];
    const atEnd = characterCount === role.length;
    const atStart = characterCount === 0;
    const delay = deleting ? 55 : atEnd ? 1450 : 95;

    const timer = window.setTimeout(() => {
      if (atEnd && !deleting) {
        setDeleting(true);
        return;
      }

      if (atStart && deleting) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setCharacterCount((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterCount, deleting, reduceMotion, roleIndex]);

  const visibleRole = reduceMotion ? roles[0] : roles[roleIndex].slice(0, characterCount);

  return (
    <span className="typing-role">
      <span aria-hidden="true">({visibleRole}<span className="typing-caret" />)</span>
      <span className="sr-only">(Product Designer, UX Designer, and Brand Strategist)</span>
    </span>
  );
}
