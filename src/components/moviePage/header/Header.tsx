function Header() {
  return (
    <div className="flex ml-[80px] mt-[26px] ">
      <div className="w-[263px] h-[47px] text-[40px] font-[700] font-roboto not-italic leading-normal">
        <h1>The Gray Man</h1>
      </div>
      <div className="ml-[830px] items-center border-x-2 border-y-2 w-[249px] h-[57px] bg-[#D9D9D9] rounded-[30px]">
        <h3 className="flex items-center justify-center font-roboto text-[15px] not-italic font-[500] leading-normal mt-[14px] mb-[13.1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="24"
            viewBox="0 0 19 24"
            fill="none"
            className="w-[18.197px] h-[23.394px] shrink-0 mr-2"
          >
            <path
              d="M1.15665 22.355L1.15358 22.3533C1.1073 22.3272 1.06875 22.2894 1.0419 22.2436C1.01514 22.1979 1.00095 22.146 1.00075 22.0931V3.02821V3.01694L1.0005 3.00568C0.988859 2.48931 1.18117 1.98916 1.53577 1.61361C1.88678 1.24186 2.36881 1.02186 2.87922 1H15.3176C15.828 1.02186 16.31 1.24186 16.661 1.61361C17.0156 1.98916 17.2079 2.48931 17.1963 3.00568L17.196 3.01695V3.02821V22.0903C17.1954 22.1419 17.1814 22.1924 17.1555 22.237C17.1292 22.2823 17.0915 22.3198 17.0462 22.3459L17.0462 22.346C17.0006 22.3723 16.949 22.3861 16.8964 22.3861C16.8438 22.3861 16.7921 22.3723 16.7465 22.346L16.7466 22.3459L16.7392 22.3418L9.37012 18.1698L8.86267 17.8826L8.36272 18.1827L1.43552 22.3416L1.42916 22.3454L1.42286 22.3494C1.3821 22.3747 1.33593 22.3898 1.28825 22.3935C1.24206 22.391 1.197 22.3779 1.15665 22.355Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          Add to watchlist
        </h3>
      </div>
    </div>
  );
}

export default Header;
