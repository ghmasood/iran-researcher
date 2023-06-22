const icons = {
  arrow: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
      >
        <path
          className={pathClass}
          d="M17 29C16.5781 29 16.2031 28.8594 15.9219 28.5781C15.3125 28.0156 15.3125 27.0312 15.9219 26.4688L22.3438 20L15.9219 13.5781C15.3125 13.0156 15.3125 12.0312 15.9219 11.4688C16.4844 10.8594 17.4688 10.8594 18.0312 11.4688L25.5312 18.9688C26.1406 19.5312 26.1406 20.5156 25.5312 21.0781L18.0312 28.5781C17.75 28.8594 17.375 29 17 29Z"
          fill="#3E3232"
        />
      </svg>
    );
  },
};

export default icons;
