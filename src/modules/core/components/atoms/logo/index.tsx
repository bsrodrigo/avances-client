interface LogoWithName {
  width?: number | string;
}
export const Logo = ({ width = "100%" }: LogoWithName): JSX.Element => {
  return (
    <svg
      width={width}
      viewBox="0 0 121 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.4711 126.149C64.5223 120.393 71.0721 101.469 57.1842 89.5698C43.2964 77.6704 13.6008 84.4442 9.27044 115.338C7.37117 128.887 40.0421 97.0708 9.85976 137.905C2.35151 148.063 43.3548 144.513 59.4711 126.149Z"
        fill="url(#paint0_linear_74_5720)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.6902 83.9151C18.465 89.0471 18.1207 85.9973 18 82.4972C17 53.4972 90.6067 -6.22857 114.257 0.528616C135.257 6.52871 100.115 94.1908 74.8246 105.415C69.7434 107.67 68.2583 105.415 66.7583 98.9973C65.0374 93.9366 62.5 88.9973 54.1902 84.5268C49 81.7346 35.5 80.4973 28.6902 83.9151ZM66.7583 66.5158C58.7583 61.7171 56.1007 51.4458 60.8224 43.5742C65.544 35.7026 75.857 33.2114 83.857 38.0101C91.857 42.8087 94.5146 53.08 89.7929 60.9517C85.0712 68.8233 74.7583 71.3145 66.7583 66.5158Z"
        fill="#29A3FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_74_5720"
          x1="11.5161"
          y1="116.052"
          x2="33.7057"
          y2="52.3264"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF7B1B" />
          <stop offset="1" stop-color="#FF7B1B" stop-opacity="0.16" />
        </linearGradient>
      </defs>
    </svg>
  );
};
