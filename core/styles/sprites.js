// small spritesheet
const Sprites = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <symbol id="arrow" viewBox="0 0 32 32">
        <path d="M16 0l-2.8 2.8 11.2 11.2h-24.4v4h24.4l-11.2 11.2 2.8 2.8 16-16-16-16z" />
      </symbol>
      <symbol id="checkmark" viewBox="0 0 32 32">
        <path d="M9.877 23.479l-6.619-6.619c-0.743-0.743-1.944-0.745-2.688-0.006-0.756 0.752-0.76 1.963-0.013 2.705l7.7 7.702c0.895 0.895 2.346 0.895 3.242 0l19.943-19.943c0.745-0.743 0.745-1.949 0-2.692-0.745-0.745-1.949-0.745-2.692 0l-18.872 18.853z" />
      </symbol>
    </defs>
  </svg>
);

export default Sprites;
