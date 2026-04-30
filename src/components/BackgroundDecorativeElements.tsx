import { Fragment, type FC } from 'react';

export const BackgroundDecorativeElements: FC = () => {
  return (
    <Fragment>
      {/* Decorative Gold & Green Gradient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="bg-gold-bright/10 absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
        <div className="bg-royal-green/10 absolute top-[20%] right-[-10%] h-[30%] w-[30%] rounded-full blur-[100px]" />
        <div className="bg-royal-green/5 absolute bottom-[-10%] left-[20%] h-[40%] w-[40%] rounded-full blur-[120px]" />
      </div>

      {/* Soft Royal Checkered Overlay */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#0a3d2e 0.5px, transparent 0.5px), linear-gradient(90deg, #0a3d2e 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </Fragment>
  );
};
