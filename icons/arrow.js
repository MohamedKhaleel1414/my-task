const Arrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g filter="url(#a)">
        <rect
          width="20"
          height="20"
          x="20"
          y="20"
          fill="#F9F9F9"
          rx="10"
          transform="rotate(180 20 20)"
        />
        <path
          fill="#17AA9D"
          fill-rule="evenodd"
          d="M10 11.623 6.222 7.875a.72.72 0 0 0-1.012 0 .704.704 0 0 0 0 1.001l4.285 4.249a.718.718 0 0 0 1.012 0l4.285-4.249a.704.704 0 0 0 0-1.001.72.72 0 0 0-1.012 0L10 11.623Z"
          clip-rule="evenodd"
          opacity=".8"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="380"
          height="380"
          x="-180"
          y="-180"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="90" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1965_596"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1965_596"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Arrow;
