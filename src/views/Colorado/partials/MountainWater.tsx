import classNames from 'classnames';

//
const MountainWater = ({ isHBigThanW }: { isHBigThanW: boolean }) => {
  return (
    <svg
      className={classNames(
        'xl:w-full xl:h-auto md:w-[125%] w-[200%] h-[15%] left-[-30%]  md:h-[28%] block absolute md:left-0  xl:bottom-[0px] bottom-0 z-[9]  mountain-water _mountain-water',
        isHBigThanW && '!h-[20%]'
      )}
      viewBox="0 0 1440 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1523 25H-33V205H1523V25Z" fill="#EAF5FF" />
      <g opacity="0.7">
        <path
          d="M1495.5 32.8192V204.5H-12.5V32.8192C-12.5 31.9305 -12.0302 31.0267 -11.056 30.147C-10.0818 29.2674 -8.64417 28.4524 -6.82524 27.7576C-3.19081 26.3693 1.8635 25.5 7.4701 25.5H1475.53C1481.14 25.5 1486.19 26.3693 1489.83 27.7576C1491.64 28.4524 1493.08 29.2674 1494.06 30.147C1495.03 31.0267 1495.5 31.9305 1495.5 32.8192Z"
          fill="#7CC7FD"
          stroke="black"
        />
      </g>
      <path
        opacity="0.2"
        d="M764.458 38.9694C1088.81 38.9694 1351.74 38.0808 1351.74 36.9847C1351.74 35.8886 1088.81 35 764.458 35C440.111 35 177.176 35.8886 177.176 36.9847C177.176 38.0808 440.111 38.9694 764.458 38.9694Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M754.616 57.5026C916.784 57.5026 1048.25 56.614 1048.25 55.5179C1048.25 54.4218 916.784 53.5332 754.616 53.5332C592.448 53.5332 460.984 54.4218 460.984 55.5179C460.984 56.614 592.448 57.5026 754.616 57.5026Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M976.889 75.9011C1139.06 75.9011 1270.52 75.0125 1270.52 73.9164C1270.52 72.8202 1139.06 71.9316 976.889 71.9316C814.721 71.9316 683.258 72.8202 683.258 73.9164C683.258 75.0125 814.721 75.9011 976.889 75.9011Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M536.135 105.691C698.303 105.691 829.766 104.803 829.766 103.706C829.766 102.61 698.303 101.722 536.135 101.722C373.967 101.722 242.504 102.61 242.504 103.706C242.504 104.803 373.967 105.691 536.135 105.691Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M928.979 139.112C1091.15 139.112 1222.61 138.223 1222.61 137.127C1222.61 136.031 1091.15 135.143 928.979 135.143C766.811 135.143 635.348 136.031 635.348 137.127C635.348 138.223 766.811 139.112 928.979 139.112Z"
        fill="white"
      />
    </svg>
  );
};

export default MountainWater;