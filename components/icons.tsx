//adding SVG icons as code

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="682.667"
      height="682.667"
      version="1"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M173.6 143.2c-1.2 4.7-1.2 4.7 12.5 5 11.3.3 13.3.6 14.3 2 .8 1.4-1.3 11.3-9.8 45.5-13.2 53-12.5 50.3-13.6 50.3-.4 0-1.2-1.5-1.5-3.3-1.9-8.7-9.7-18.2-17.7-21.7-7.2-3.1-20.3-2.5-29.6 1.3-13.3 5.5-28.9 18.6-38.9 32.8-9.4 13.3-17.8 34.3-20.4 51.3-1.6 9.9-.6 27.5 2 35.7 8.1 25.7 32 36.6 55.1 25.3 5.9-2.9 9.6-5.8 17.3-13.5 6-6.1 9.7-9.2 9.7-8.1 0 .9-1.1 6-2.5 11.2s-2.5 9.8-2.5 10.2c0 .5 10.3.8 23 .8h22.9l.9-3.3.8-3.2-9.5-.5c-5.3-.3-10.2-.9-10.8-1.3-.7-.5-1.3-2.1-1.3-3.8 0-2.2 49.6-203.3 52.6-213.2.5-1.6-1.2-1.7-25.9-1.7h-26.5zm-15 87.4c9 5.1 14.2 19.1 13.1 34.8-.3 4.7-3 17.7-6.2 30.6-6.6 26.3-11.6 38.1-21.2 49.4-6.5 7.8-16.2 15-22.6 16.7-5.9 1.6-15.1.7-18.5-1.8-3.6-2.7-6.9-7.7-8.4-12.7-2.1-7.1-1.4-26.5 1.6-40.7 7.7-37.6 21.4-65.8 36.3-75 8.5-5.3 18.3-5.8 25.9-1.3M280.1 144.7c-.6 2.1-1.1 4.1-1.1 4.5 0 .5 4.7.8 10.4.8 12.8 0 16.3.7 18.2 3.5 1.3 2-.6 10.4-23.1 100.6-23.5 94-24.7 98.5-27.5 101.1-3 2.8-3.2 2.8-16.5 2.8h-13.4l-1 3.7c-.6 2.1-1.1 4.4-1.1 5 0 2 112.2 1.8 124.5-.2 37-6 64.1-28 72.6-59 5.8-21.3-2.4-41.1-21.2-51-3.8-2-9.7-4.2-13-4.9-3.3-.6-5.9-1.6-5.9-2.1.1-.6 2.9-1.8 6.2-2.7 14-3.9 28.6-12.8 38.9-23.5 11.4-11.9 17.1-24.7 17.2-38.8.1-11.6-2.7-18.1-11.2-26.5-7.6-7.6-15.9-12.1-27.5-15-7.5-1.9-11.2-2-66.2-2h-58.3zm118.7 8.8c19.8 8.9 23.5 31.5 9.7 60-8.1 16.9-20.3 26.8-36.2 29.4-4.2.7-16.3 1.1-31.4.9l-24.6-.3 10.7-43.2c5.9-23.7 11.4-44.3 12.4-45.7.9-1.4 2.9-2.8 4.4-3.2 1.5-.3 3.2-.8 3.7-1 .6-.2 10.9-.2 23-.1 21.7.3 22.1.4 28.3 3.2m-25.7 103.3c7.2 2.9 13.1 8 16.1 14 3.4 6.9 3.2 22.8-.6 36.5-6.3 23.4-16 36.9-32.2 45-9.8 4.9-15.3 5.7-40.1 5.7-25.2 0-26.7-.3-26.6-5.6.1-2.3 22.1-92.4 23.8-97.2.4-1.1 5.6-1.3 27.3-1 24.7.4 27.1.6 32.3 2.6"></path>
    </svg>
  ),
  mail: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};
