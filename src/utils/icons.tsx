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
  email: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
      >
        <path
          d="M18.125 2.5C19.1406 2.5 20 3.35938 20 4.375C20 5 19.6875 5.54688 19.2188 5.89844L10.7422 12.2656C10.2734 12.6172 9.6875 12.6172 9.21875 12.2656L0.742188 5.89844C0.273438 5.54688 0 5 0 4.375C0 3.35938 0.820312 2.5 1.875 2.5H18.125ZM8.47656 13.2812C9.375 13.9453 10.5859 13.9453 11.4844 13.2812L20 6.875V15C20 16.4062 18.8672 17.5 17.5 17.5H2.5C1.09375 17.5 0 16.4062 0 15V6.875L8.47656 13.2812Z"
          fill="#3E3232"
          fill-opacity="0.75"
          className={pathClass}
        />
      </svg>
    );
  },
  linkedin: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={svgClass}
      >
        <path
          d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"
          fill="currentColor"
          className={pathClass}
        />
      </svg>
    );
  },
  instagram: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={svgClass}
      >
        <path
          d="M12.0033 7.37793C9.45101 7.37793 7.38477 9.44643 7.38477 11.9964C7.38477 14.5487 9.45326 16.6149 12.0033 16.6149C14.5555 16.6149 16.6218 14.5464 16.6218 11.9964C16.6218 9.44418 14.5533 7.37793 12.0033 7.37793ZM12.0033 14.9942C10.3465 14.9942 9.00552 13.6524 9.00552 11.9964C9.00552 10.3404 10.3473 8.99868 12.0033 8.99868C13.6593 8.99868 15.001 10.3404 15.001 11.9964C15.0018 13.6524 13.66 14.9942 12.0033 14.9942Z"
          fill="currentColor"
          className={pathClass}
        />
        <path
          d="M15.7112 3.05654C14.0552 2.97929 9.95342 2.98304 8.29592 3.05654C6.83942 3.12479 5.55467 3.47654 4.51892 4.51229C2.78792 6.24329 3.00917 8.57579 3.00917 11.9965C3.00917 15.4975 2.81417 17.776 4.51892 19.4808C6.25667 21.2178 8.62292 20.9905 12.0032 20.9905C15.4712 20.9905 16.6682 20.9928 17.8944 20.518C19.5617 19.8708 20.8202 18.3805 20.9432 15.7038C21.0212 14.047 21.0167 9.94604 20.9432 8.28854C20.7947 5.12879 19.0989 3.21254 15.7112 3.05654ZM18.3324 18.3355C17.1977 19.4703 15.6234 19.369 11.9814 19.369C8.23142 19.369 6.72767 19.4245 5.63042 18.3243C4.36667 17.0665 4.59542 15.0468 4.59542 11.9845C4.59542 7.84079 4.17017 4.85654 8.32892 4.64354C9.28442 4.60979 9.56567 4.59854 11.9709 4.59854L12.0047 4.62104C16.0014 4.62104 19.1372 4.20254 19.3254 8.36054C19.3682 9.30929 19.3779 9.59429 19.3779 11.9958C19.3772 15.7023 19.4477 17.215 18.3324 18.3355Z"
          fill="currentColor"
          className={pathClass}
        />
        <path
          d="M16.8048 8.27471C17.4009 8.27471 17.8841 7.79151 17.8841 7.19546C17.8841 6.59941 17.4009 6.11621 16.8048 6.11621C16.2088 6.11621 15.7256 6.59941 15.7256 7.19546C15.7256 7.79151 16.2088 8.27471 16.8048 8.27471Z"
          fill="currentColor"
          className={pathClass}
        />
      </svg>
    );
  },
  telegram: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={svgClass}
      >
        <path
          d="M9.84784 14.5451L9.517 19.0122C9.99034 19.0122 10.1953 18.817 10.4412 18.5827L12.6604 16.5467L17.2588 19.7794C18.1022 20.2306 18.6964 19.993 18.9239 19.0346L21.9423 5.45712L21.9431 5.45632C22.2106 4.25952 21.4923 3.79153 20.6706 4.08512L2.9285 10.6059C1.71764 11.0571 1.73598 11.7051 2.72267 11.9987L7.25861 13.3531L17.7947 7.02431C18.2905 6.70911 18.7414 6.88351 18.3705 7.19871L9.84784 14.5451Z"
          fill="currentColor"
          className={pathClass}
        />
      </svg>
    );
  },
  twitter: (svgClass?: string, pathClass?: string) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={svgClass}
      >
        <path
          d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0396 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39061 9.09676 5.17597 7.4669 2.997 4.78599C1.85984 6.74741 2.44095 9.25477 4.325 10.516C3.64371 10.4941 2.97753 10.3096 2.382 9.97799C2.382 9.99599 2.382 10.014 2.382 10.032C2.38239 12.0751 3.82237 13.8351 5.825 14.24C5.19306 14.4119 4.53021 14.4372 3.887 14.314C4.4502 16.0613 6.06055 17.2583 7.896 17.294C6.37583 18.4871 4.49848 19.1342 2.566 19.131C2.22347 19.1315 1.88121 19.1118 1.541 19.072C3.50339 20.333 5.78737 21.0023 8.12 21C11.3652 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"
          fill="currentColor"
          className={pathClass}
        />
      </svg>
    );
  },
};

export default icons;