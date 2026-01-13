export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="
        fixed right-8 top-0 bottom-0
        hidden lg:flex items-center
        pt-24 pb-16
        pointer-events-none
        z-20
      "
    >
      <span
        className="
          block select-none whitespace-nowrap
          text-white/25 font-light uppercase
          text-[38px] tracking-[0.30em] leading-[1.1]
          [writing-mode:vertical-rl]
          [text-orientation:mixed]
        "
      >
      </span>
    </div>
  );
}
