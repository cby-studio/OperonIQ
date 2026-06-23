import Image from 'next/image';

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div
      className={
        compact
          ? 'relative h-14 w-52 sm:h-16 sm:w-60 lg:w-64'
          : 'relative h-20 w-72 sm:h-24 sm:w-[22rem]'
      }
    >
      <Image
        src="/operoniq-logo-transparent.png"
        alt="OperonIQ"
        fill
        priority={compact}
        sizes={compact ? '256px' : '352px'}
        className="object-contain object-left"
      />
    </div>
  );
}
