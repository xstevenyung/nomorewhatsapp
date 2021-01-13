function Footer() {
  return (
    <footer className="bg-white border-t shadow">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* <a
            href="https://twitter.com/recodable"
            target="_blank"
            className="text-gray-400 hover:text-blue-500"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a> */}

          <a
            href="https://github.com/recodable"
            target="_blank"
            className="text-gray-400 hover:text-blue-500"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 md:mt-0 md:order-1 flex gap-1">
          <span>Made by</span>
          <a href="https://twitter.com/hyiuen">@hyiuen</a>
          <span>under</span>
          <a
            href="https://recodable.io"
            target="_blank"
            className="text-center text-base text-gray-400"
          >
            <RecodableLogo className="h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function RecodableLogo(props) {
  return (
    <svg
      // width={508}
      // height={108}
      viewBox="0 0 508 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <rect x={4} width={500} height={100} rx={10} fill="#3B82F6" />
        <path
          d="M89.43 53.922h-7.422V74H68.297V17.125H90.68c6.744 0 12.018 1.497 15.82 4.492 3.802 2.995 5.703 7.227 5.703 12.695 0 3.959-.807 7.24-2.422 9.844-1.588 2.604-4.088 4.714-7.5 6.328l11.875 22.93V74H99.469l-10.04-20.078zm-7.422-10.586h8.672c2.604 0 4.557-.677 5.86-2.031 1.327-1.38 1.991-3.295 1.991-5.742 0-2.448-.664-4.363-1.992-5.743-1.328-1.406-3.281-2.11-5.86-2.11h-8.671v15.626zm58.32 31.445c-6.484 0-11.732-1.927-15.742-5.781-4.01-3.88-6.016-8.92-6.016-15.117v-1.094c0-4.323.795-8.138 2.383-11.445 1.615-3.308 3.958-5.86 7.031-7.657 3.073-1.822 6.719-2.734 10.938-2.734 5.937 0 10.625 1.85 14.062 5.547 3.438 3.672 5.157 8.802 5.157 15.39v5.118h-26.172c.469 2.37 1.497 4.232 3.086 5.586 1.588 1.354 3.646 2.031 6.172 2.031 4.166 0 7.421-1.458 9.765-4.375l6.016 7.11c-1.641 2.265-3.972 4.075-6.992 5.43-2.995 1.327-6.224 1.991-9.688 1.991zm-1.484-33.672c-3.854 0-6.146 2.552-6.875 7.657h13.281V47.75c.052-2.11-.482-3.737-1.602-4.883-1.119-1.172-2.721-1.758-4.804-1.758zm42.5 23.516c1.849 0 3.281-.495 4.297-1.484 1.015-1.016 1.51-2.422 1.484-4.22h12.344c0 4.636-1.667 8.438-5 11.407-3.308 2.969-7.578 4.453-12.813 4.453-6.146 0-10.989-1.927-14.531-5.781-3.542-3.854-5.313-9.193-5.313-16.016v-.547c0-4.27.782-8.033 2.344-11.289 1.589-3.28 3.867-5.794 6.836-7.539 2.969-1.77 6.485-2.656 10.547-2.656 5.495 0 9.857 1.524 13.086 4.57 3.229 3.047 4.844 7.175 4.844 12.383h-12.344c0-2.187-.534-3.867-1.602-5.039-1.067-1.172-2.5-1.758-4.296-1.758-3.412 0-5.404 2.175-5.977 6.524-.182 1.38-.273 3.281-.273 5.703 0 4.245.507 7.187 1.523 8.828 1.016 1.64 2.63 2.461 4.844 2.461zm22.031-12.148c0-4.22.82-7.97 2.461-11.25 1.641-3.308 3.997-5.847 7.07-7.618 3.073-1.77 6.68-2.656 10.821-2.656 6.328 0 11.315 1.966 14.961 5.899 3.645 3.906 5.468 9.231 5.468 15.976v.469c0 6.588-1.836 11.823-5.508 15.703-3.645 3.854-8.593 5.781-14.843 5.781-6.016 0-10.847-1.797-14.493-5.39-3.645-3.62-5.611-8.516-5.898-14.688l-.039-2.226zm13.164.82c0 3.906.612 6.77 1.836 8.594 1.224 1.823 3.034 2.734 5.43 2.734 4.687 0 7.083-3.607 7.187-10.82v-1.328c0-7.579-2.422-11.368-7.265-11.368-4.401 0-6.784 3.269-7.149 9.805l-.039 2.383zm31.758-.742c0-6.693 1.445-11.966 4.336-15.82 2.89-3.855 6.927-5.782 12.109-5.782 3.776 0 6.953 1.485 9.531 4.453V14h13.204v60h-11.836l-.664-4.531c-2.709 3.541-6.146 5.312-10.313 5.312-5.026 0-9.01-1.927-11.953-5.781-2.943-3.854-4.414-9.336-4.414-16.445zm13.164.82c0 7.5 2.187 11.25 6.562 11.25 2.917 0 5-1.224 6.25-3.672V44.86c-1.197-2.5-3.255-3.75-6.171-3.75-4.063 0-6.263 3.282-6.602 9.844l-.039 2.422zM318.766 74c-.469-.86-.886-2.122-1.25-3.79-2.422 3.048-5.808 4.571-10.157 4.571-3.984 0-7.369-1.198-10.156-3.594-2.786-2.421-4.18-5.455-4.18-9.101 0-4.583 1.693-8.047 5.079-10.39 3.385-2.344 8.307-3.516 14.765-3.516h4.063v-2.227c0-3.88-1.68-5.82-5.039-5.82-3.125 0-4.688 1.536-4.688 4.61h-13.164c0-4.09 1.732-7.41 5.195-9.962 3.49-2.552 7.93-3.828 13.321-3.828 5.39 0 9.648 1.315 12.773 3.945s4.727 6.237 4.805 10.82V64.43c.052 3.88.651 6.849 1.797 8.906V74h-13.164zm-8.243-8.594c1.641 0 2.995-.351 4.063-1.054 1.094-.704 1.875-1.498 2.344-2.383V55.21h-3.828c-4.584 0-6.875 2.057-6.875 6.172 0 1.198.403 2.174 1.211 2.93.807.729 1.835 1.093 3.085 1.093zm66.172-12.187c0 6.927-1.432 12.252-4.297 15.976-2.864 3.724-6.901 5.586-12.109 5.586-4.297 0-7.76-1.706-10.391-5.117L349.352 74h-11.797V14h13.164v21.133c2.448-2.787 5.612-4.18 9.492-4.18 5.26 0 9.323 1.888 12.187 5.664 2.865 3.776 4.297 9.089 4.297 15.938v.664zm-13.203-.82c0-4.063-.547-6.954-1.64-8.672-1.068-1.745-2.722-2.618-4.961-2.618-2.969 0-5.026 1.133-6.172 3.399v16.797c1.12 2.24 3.203 3.36 6.25 3.36 3.099 0 5.065-1.511 5.898-4.532.417-1.485.625-4.063.625-7.735zM396.422 74h-13.203V14h13.203v60zm28.594.781c-6.485 0-11.732-1.927-15.743-5.781-4.01-3.88-6.015-8.92-6.015-15.117v-1.094c0-4.323.794-8.138 2.383-11.445 1.614-3.308 3.958-5.86 7.031-7.657 3.073-1.822 6.719-2.734 10.937-2.734 5.938 0 10.625 1.85 14.063 5.547 3.437 3.672 5.156 8.802 5.156 15.39v5.118h-26.172c.469 2.37 1.498 4.232 3.086 5.586 1.589 1.354 3.646 2.031 6.172 2.031 4.167 0 7.422-1.458 9.766-4.375l6.015 7.11c-1.64 2.265-3.971 4.075-6.992 5.43-2.995 1.327-6.224 1.991-9.687 1.991zm-1.485-33.672c-3.854 0-6.146 2.552-6.875 7.657h13.282V47.75c.052-2.11-.482-3.737-1.602-4.883-1.12-1.172-2.721-1.758-4.805-1.758z"
          fill="#F9FAFB"
        />
        <circle cx={450} cy={69} r={5} fill="url(#prefix__paint0_linear)" />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={445}
          y1={68.667}
          x2={455}
          y2={68.667}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86EFAC" />
          <stop offset={1} stopColor="#4ADE80" />
        </linearGradient>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={508}
          height={108}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Footer;
