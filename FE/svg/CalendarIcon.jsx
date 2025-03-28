function CalendarIcon({ height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width || "24"}
      height={height || "24"}
      fill="currentColor"
    >
      <g id="_01_align_center" data-name="01 align center">
        <path d="M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z" />
        <rect x="15" y="13" width="2" height="2" />
        <rect x="11" y="13" width="2" height="2" />
        <rect x="7" y="13" width="2" height="2" />
        <rect x="15" y="17" width="2" height="2" />
        <rect x="11" y="17" width="2" height="2" />
        <rect x="7" y="17" width="2" height="2" />
      </g>
    </svg>
  );
}

export default CalendarIcon;
