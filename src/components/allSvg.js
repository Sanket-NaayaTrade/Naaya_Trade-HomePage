export const CameraSVG = (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <g clip-path="url(#clip0_1_1289)">
      <path
        d="M4.16667 5.83325H5C5.44203 5.83325 5.86595 5.65766 6.17851 5.3451C6.49107 5.03254 6.66667 4.60861 6.66667 4.16659C6.66667 3.94557 6.75446 3.73361 6.91074 3.57733C7.06702 3.42105 7.27899 3.33325 7.5 3.33325H12.5C12.721 3.33325 12.933 3.42105 13.0893 3.57733C13.2455 3.73361 13.3333 3.94557 13.3333 4.16659C13.3333 4.60861 13.5089 5.03254 13.8215 5.3451C14.134 5.65766 14.558 5.83325 15 5.83325H15.8333C16.2754 5.83325 16.6993 6.00885 17.0118 6.32141C17.3244 6.63397 17.5 7.05789 17.5 7.49992V14.9999C17.5 15.4419 17.3244 15.8659 17.0118 16.1784C16.6993 16.491 16.2754 16.6666 15.8333 16.6666H4.16667C3.72464 16.6666 3.30072 16.491 2.98816 16.1784C2.67559 15.8659 2.5 15.4419 2.5 14.9999V7.49992C2.5 7.05789 2.67559 6.63397 2.98816 6.32141C3.30072 6.00885 3.72464 5.83325 4.16667 5.83325Z"
        stroke="#2C3E50"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 10.8333C7.5 11.4963 7.76339 12.1322 8.23223 12.601C8.70107 13.0699 9.33696 13.3333 10 13.3333C10.663 13.3333 11.2989 13.0699 11.7678 12.601C12.2366 12.1322 12.5 11.4963 12.5 10.8333C12.5 10.1702 12.2366 9.53433 11.7678 9.06548C11.2989 8.59664 10.663 8.33325 10 8.33325C9.33696 8.33325 8.70107 8.59664 8.23223 9.06548C7.76339 9.53433 7.5 10.1702 7.5 10.8333Z"
        stroke="#2C3E50"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1289">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const TickSVG = (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
    <path
      d="M13.5564 19.9622C13.4111 20.1075 13.2052 20.2286 13.0236 20.2286C12.842 20.2286 12.6361 20.1015 12.4847 19.9562L9.09412 16.5655L10.1719 15.4878L13.0297 18.3456L20.5859 10.7349L21.6455 11.8308L13.5564 19.9622Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
  </svg>
);

export const SearchSVG = (
  <svg width="16" height="16" viewBox="0 0 13 13" fill="none">
    <g clip-path="url(#clip0_1_1267)">
      <path
        d="M5.95833 10.2917C8.35157 10.2917 10.2917 8.35157 10.2917 5.95833C10.2917 3.5651 8.35157 1.625 5.95833 1.625C3.5651 1.625 1.625 3.5651 1.625 5.95833C1.625 8.35157 3.5651 10.2917 5.95833 10.2917Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.375 11.375L9.01874 9.0188"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1267">
        <rect width="13" height="13" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CategoriesSVG = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

export const StarSVG = (rating, height = 14, width = 14) =>
  [...Array(5)].map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className={`h-[${height}px] w-[${width}px] fill-current ${
        index < rating ? "text-[#FED500]" : "text-gray-300"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ));

export const SoloStarSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[14px] w-[14px] fill-current text-[#FED500]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const ThumpsUpSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M19.525 9.2402C19.2675 8.93096 18.9452 8.68203 18.5809 8.51097C18.2166 8.33991 17.8192 8.25089 17.4167 8.2502H13.2367L13.75 6.93937C13.9636 6.36543 14.0347 5.74826 13.9573 5.1408C13.8799 4.53334 13.6563 3.95372 13.3056 3.45166C12.955 2.94961 12.4878 2.5401 11.9442 2.25827C11.4005 1.97644 10.7966 1.83069 10.1842 1.83354C10.0079 1.8339 9.83539 1.88512 9.68744 1.98105C9.53948 2.07698 9.42234 2.21354 9.35004 2.37437L6.73754 8.2502H4.58337C3.85403 8.2502 3.15456 8.53994 2.63883 9.05566C2.12311 9.57138 1.83337 10.2709 1.83337 11.0002V17.4169C1.83337 18.1462 2.12311 18.8457 2.63883 19.3614C3.15456 19.8771 3.85403 20.1669 4.58337 20.1669H16.2525C16.8959 20.1667 17.5188 19.9409 18.0128 19.5289C18.5069 19.1169 18.8409 18.5447 18.9567 17.9119L20.1209 11.4952C20.1929 11.0986 20.1768 10.6911 20.0739 10.3014C19.9709 9.91173 19.7835 9.54944 19.525 9.2402ZM6.41671 18.3335H4.58337C4.34026 18.3335 4.1071 18.237 3.93519 18.0651C3.76328 17.8931 3.66671 17.66 3.66671 17.4169V11.0002C3.66671 10.7571 3.76328 10.5239 3.93519 10.352C4.1071 10.1801 4.34026 10.0835 4.58337 10.0835H6.41671V18.3335ZM18.3334 11.1652L17.1692 17.5819C17.1302 17.7954 17.0166 17.9882 16.8487 18.1258C16.6809 18.2635 16.4696 18.3371 16.2525 18.3335H8.25004V9.35937L10.7434 3.74937C11 3.82419 11.2384 3.95141 11.4434 4.12299C11.6484 4.29457 11.8156 4.50678 11.9345 4.74624C12.0534 4.9857 12.1213 5.24719 12.134 5.51423C12.1467 5.78126 12.1039 6.04803 12.0084 6.2977L11.5225 7.60854C11.419 7.8856 11.3841 8.18361 11.4207 8.47711C11.4573 8.77061 11.5644 9.0509 11.7328 9.29405C11.9012 9.5372 12.1259 9.736 12.3878 9.87347C12.6497 10.0109 12.9409 10.083 13.2367 10.0835H17.4167C17.5514 10.0833 17.6844 10.1128 17.8064 10.1698C17.9284 10.2268 18.0364 10.3101 18.1225 10.4135C18.2108 10.5156 18.2755 10.6359 18.312 10.7658C18.3484 10.8957 18.3557 11.0321 18.3334 11.1652Z"
      fill="white"
    />
  </svg>
);

export const SendSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <g clip-path="url(#clip0_313_46)">
      <path
        d="M9.16669 12.8333L19.25 2.75"
        stroke="black"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.25 2.75L13.2917 19.25C13.2515 19.3378 13.1869 19.4121 13.1056 19.4643C13.0244 19.5164 12.9299 19.5441 12.8333 19.5441C12.7368 19.5441 12.6423 19.5164 12.561 19.4643C12.4798 19.4121 12.4152 19.3378 12.375 19.25L9.16667 12.8333L2.75 9.625C2.66224 9.58478 2.58787 9.52021 2.53573 9.43896C2.48359 9.35772 2.45587 9.26321 2.45587 9.16667C2.45587 9.07013 2.48359 8.97562 2.53573 8.89437C2.58787 8.81312 2.66224 8.74855 2.75 8.70833L19.25 2.75Z"
        stroke="black"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_313_46">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const OrderSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <g clip-path="url(#clip0_1_1247)">
      <path
        d="M20.875 10C20.6262 9.29405 20.1718 8.67871 19.5703 8.23317C18.9689 7.78763 18.2478 7.53229 17.5 7.5H12.5C11.5054 7.5 10.5516 7.89509 9.84835 8.59835C9.14509 9.30161 8.75 10.2554 8.75 11.25C8.75 12.2446 9.14509 13.1984 9.84835 13.9017C10.5516 14.6049 11.5054 15 12.5 15H17.5C18.4946 15 19.4484 15.3951 20.1517 16.0983C20.8549 16.8016 21.25 17.7554 21.25 18.75C21.25 19.7446 20.8549 20.6984 20.1517 21.4017C19.4484 22.1049 18.4946 22.5 17.5 22.5H12.5C11.7522 22.4677 11.0311 22.2124 10.4297 21.7668C9.82819 21.3213 9.37381 20.706 9.125 20"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 3.75V7.5M15 22.5V26.25"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1247">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const DollarPouchSVG = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <g clip-path="url(#clip0_1_1276)">
      <path
        d="M5.9375 1.875H9.0625C9.31114 1.875 9.5496 1.97377 9.72541 2.14959C9.90123 2.3254 10 2.56386 10 2.8125C10 3.39266 9.76953 3.94906 9.3593 4.3593C8.94906 4.76953 8.39266 5 7.8125 5H7.1875C6.60734 5 6.05094 4.76953 5.6407 4.3593C5.23047 3.94906 5 3.39266 5 2.8125C5 2.56386 5.09877 2.3254 5.27459 2.14959C5.4504 1.97377 5.68886 1.875 5.9375 1.875Z"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 10.625V10C2.5 8.67392 3.02678 7.40215 3.96447 6.46447C4.90215 5.52678 6.17392 5 7.5 5C8.82608 5 10.0979 5.52678 11.0355 6.46447C11.9732 7.40215 12.5 8.67392 12.5 10V10.625C12.5 11.288 12.2366 11.9239 11.7678 12.3928C11.2989 12.8616 10.663 13.125 10 13.125H5C4.33696 13.125 3.70107 12.8616 3.23223 12.3928C2.76339 11.9239 2.5 11.288 2.5 10.625Z"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.49148 7.7017L9.3402 8.25994H6.51278L6.66619 7.7017H9.49148ZM8.07031 11L6.57884 9.20597L6.5767 8.73295H7.31392C7.49006 8.73295 7.63707 8.70384 7.75497 8.6456C7.87429 8.58594 7.96449 8.50284 8.02557 8.39631C8.08807 8.28835 8.11932 8.16193 8.11932 8.01705C8.11932 7.79972 8.0554 7.625 7.92756 7.4929C7.79972 7.3608 7.59517 7.29474 7.31392 7.29474H6.51278L6.67898 6.63636H7.31392C7.67188 6.63636 7.96804 6.69176 8.20241 6.80256C8.43821 6.91193 8.61435 7.06676 8.73082 7.26705C8.84872 7.46733 8.90767 7.7017 8.90767 7.97017C8.90767 8.20739 8.86435 8.41903 8.7777 8.60511C8.69105 8.79119 8.55469 8.94389 8.36861 9.06321C8.18253 9.18253 7.93892 9.26207 7.63778 9.30185L7.61222 9.31037L8.95881 10.9616V11H8.07031ZM9.49574 6.63636L9.3402 7.20312L7.04759 7.1946L7.20312 6.63636H9.49574Z"
        fill="#2C3E50"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1276">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const TagSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M8.30671 18.7119C8.06657 18.7138 7.82847 18.6678 7.60633 18.5766C7.38418 18.4853 7.18246 18.3507 7.01296 18.1806L1.71296 12.8806C1.53366 12.701 1.39381 12.4859 1.30233 12.2492C1.21086 12.0124 1.16977 11.7592 1.18171 11.5056C1.21272 10.9912 1.43577 10.5072 1.80671 10.1494L10.0005 1.94939C10.1909 1.7487 10.4208 1.58958 10.6757 1.48203C10.9307 1.37447 11.2051 1.3208 11.4817 1.32439L16.6567 1.45564C17.1265 1.46542 17.5738 1.65852 17.9031 1.99369C18.2325 2.32885 18.4177 2.77951 18.4192 3.24939L18.5505 8.41814C18.5527 8.69552 18.4984 8.97044 18.391 9.22617C18.2835 9.4819 18.1251 9.71309 17.9255 9.90564L9.74421 18.1244C9.38863 18.4984 8.90331 18.7221 8.38796 18.7494L8.30671 18.7119ZM7.90046 17.2994C7.95774 17.3559 8.02635 17.3996 8.10177 17.4276C8.17719 17.4556 8.25769 17.4673 8.33796 17.4619C8.5339 17.448 8.71818 17.3637 8.85671 17.2244L17.063 9.01814C17.1386 8.94535 17.1986 8.85795 17.2394 8.76126C17.2803 8.66457 17.301 8.56059 17.3005 8.45564L17.1692 3.28064C17.1692 3.13311 17.1106 2.99163 17.0063 2.88731C16.902 2.78299 16.7605 2.72439 16.613 2.72439L11.438 2.59314C11.3332 2.59363 11.2295 2.61487 11.133 2.65564C11.0364 2.6964 10.9489 2.75588 10.8755 2.83064L2.66921 11.0369C2.52993 11.1754 2.44556 11.3597 2.43171 11.5556C2.42631 11.6359 2.438 11.7164 2.46601 11.7918C2.49403 11.8672 2.53772 11.9359 2.59421 11.9931L7.90046 17.2994Z"
      fill="black"
      stroke="black"
      stroke-width="0.5"
    />
    <circle cx="13.5" cy="6.5" r="1.5" stroke="black" stroke-width="1.5" />
  </svg>
);

export const CartSVG = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

export const UserSVG = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-4 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

export const MessageSVG = (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    />
  </svg>
);