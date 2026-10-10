'use client';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ArrowTone = 'red' | 'white';

function FlowArrow({ tone, className }: { tone: ArrowTone; className: string }) {
  return <img className={cn('flow-cta-arrow', className)} src={`/assets/arrow-${tone}.svg`} width="17" height="15" alt="" aria-hidden="true" />;
}

function FlowContent({ children, arrowTone, hoverArrowTone }: { children: ReactNode; arrowTone: ArrowTone; hoverArrowTone: ArrowTone }) {
  return <><FlowArrow tone={hoverArrowTone} className="flow-cta-arrow-in" /><span className="flow-cta-label">{children}</span><span className="flow-cta-fill" aria-hidden="true" /><FlowArrow tone={arrowTone} className="flow-cta-arrow-out" /></>;
}

type FlowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; arrowTone?: ArrowTone; hoverArrowTone?: ArrowTone };

export function FlowLink({ children, className, arrowTone = 'red', hoverArrowTone = 'white', ...props }: FlowLinkProps) {
  return <a className={cn('flow-cta', className)} {...props}><FlowContent arrowTone={arrowTone} hoverArrowTone={hoverArrowTone}>{children}</FlowContent></a>;
}

type FlowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; arrowTone?: ArrowTone; hoverArrowTone?: ArrowTone };

export function FlowButton({ children, className, arrowTone = 'white', hoverArrowTone = 'white', type = 'button', ...props }: FlowButtonProps) {
  return <button type={type} className={cn('flow-cta', className)} {...props}><FlowContent arrowTone={arrowTone} hoverArrowTone={hoverArrowTone}>{children}</FlowContent></button>;
}
