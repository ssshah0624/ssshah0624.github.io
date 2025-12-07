import { PropsWithChildren } from 'react';
import Prism from './Prism';

type PrismBackgroundProps = PropsWithChildren<{
  height?: number;
}>;

export function PrismBackground({ children, height = 640 }: PrismBackgroundProps) {
  return (
    <div className="prism-hero" style={{ minHeight: height }}>
      <div className="prism-hero__canvas" aria-hidden="true">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
      <div className="prism-hero__overlay" />
      <div className="container prism-hero__content">{children}</div>
    </div>
  );
}

export default PrismBackground;
