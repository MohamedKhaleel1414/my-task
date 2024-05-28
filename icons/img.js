const Img = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <mask
        id="a"
        width="30"
        height="30"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h30v30H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill={color}
          d="M6.25 26.25a2.407 2.407 0 0 1-1.766-.734 2.407 2.407 0 0 1-.734-1.766V6.25c0-.688.245-1.276.734-1.766A2.407 2.407 0 0 1 6.25 3.75h17.5a2.41 2.41 0 0 1 1.766.734c.49.49.734 1.079.734 1.766v17.5a2.41 2.41 0 0 1-.734 1.766c-.49.49-1.078.734-1.766.734H6.25ZM7.5 15.719l5-5 5 5 5-5 1.25 1.25V6.25H6.25v8.219l1.25 1.25ZM6.25 23.75h17.5V15.5l-1.25-1.25-5 5-5-5-5 5L6.25 18v5.75Zm0 0V15.5 18 6.25v17.5Z"
        />
      </g>
    </svg>
  );
};

export default Img;
