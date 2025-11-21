const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="100%" x2="100%" y1="100%" y2="100%">
          <stop offset="0%" stopColor="#0463CE" />
          <stop offset="100%" stopColor="#3CE0F5" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#0463CE" />
          <stop offset="100%" stopColor="#3CE0F5" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#0463CE" />
          <stop offset="100%" stopColor="#3CE0F5" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%">
          <stop offset="0%" stopColor="#0463CE" />
          <stop offset="100%" stopColor="#3CE0F5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
