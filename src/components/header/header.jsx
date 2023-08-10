import React from "react";
import { Box, Flex, Select, Text } from "@mantine/core";

function Header() {
  return (
    <>
      <Box
        pos="absolute"
        maw="100%"
        w="100%"
        className="header"
        h={80}
        bg="FFFFFF"
      >
        <Flex
          className="wne"
          pt={15}
          ml={110}
          mr={110}
          wrap="wrap"
          justify="center"
          align="center"
        >
          <Flex
            justify="center"
            ta="center"
            text-align="center"
            gap={10}
            align="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
            >
              <path
                d="M3.48438 15.3778C3.55815 14.4587 3.97541 13.601 4.65308 12.9757C5.33075 12.3504 6.21908 12.0032 7.14118 12.0034H29.2544C30.1765 12.0032 31.0648 12.3504 31.7425 12.9757C32.4202 13.601 32.8374 14.4587 32.9112 15.3778L34.3838 33.7168C34.4243 34.2215 34.3599 34.7291 34.1946 35.2077C34.0293 35.6862 33.7667 36.1254 33.4234 36.4975C33.0801 36.8696 32.6634 37.1666 32.1997 37.3698C31.7359 37.5729 31.2351 37.6779 30.7288 37.6781H5.66672C5.16042 37.6779 4.65964 37.5729 4.1959 37.3698C3.73215 37.1666 3.3155 36.8696 2.97216 36.4975C2.62883 36.1254 2.36625 35.6862 2.20096 35.2077C2.03567 34.7291 1.97125 34.2215 2.01176 33.7168L3.48438 15.3778V15.3778Z"
                stroke="url(#paint0_linear_65_3378)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5334 17.5051V8.33561C25.5334 6.39009 24.7606 4.52425 23.3849 3.14855C22.0092 1.77286 20.1433 1 18.1978 1C16.2523 1 14.3864 1.77286 13.0107 3.14855C11.635 4.52425 10.8622 6.39009 10.8622 8.33561V17.5051"
                stroke="url(#paint1_linear_65_3378)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_65_3378"
                  x1="28.3624"
                  y1="11.6978"
                  x2="2.76413"
                  y2="36.9139"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E61717" />
                  <stop offset="1" stop-color="#EEDD3F" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_65_3378"
                  x1="26.8672"
                  y1="2.66719"
                  x2="10.8622"
                  y2="17.3384"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE712" />
                  <stop offset="1" stop-color="#FF3636" />
                </linearGradient>
              </defs>
            </svg>
            <Text ta="center" fz={20}>
              Online Shop
            </Text>
          </Flex>

          <Flex justify="center" gap={90} align="center" ml="auto">
            <Flex align="center" gap={20} justify="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <path
                  d="M9.39118 0.442331C9.54397 0.631519 9.63757 0.86305 9.65989 1.10701C9.68221 1.35096 9.63223 1.59614 9.5164 1.81085C8.61149 3.50391 8.13892 5.40168 8.14216 7.32958C8.14216 13.7431 13.2729 18.9365 19.5963 18.9365C20.4211 18.9365 21.2241 18.8487 21.9957 18.6813C22.2323 18.6291 22.4786 18.649 22.7041 18.7387C22.9296 18.8283 23.1242 18.9836 23.2635 19.1853C23.4106 19.3949 23.4856 19.6483 23.4769 19.9059C23.4681 20.1635 23.376 20.4109 23.215 20.6096C21.9874 22.1463 20.4387 23.3845 18.6819 24.2338C16.9251 25.0831 15.0045 25.5222 13.06 25.5191C5.84445 25.5191 0 19.5952 0 12.2964C0 6.80323 3.30883 2.09157 8.02007 0.094619C8.25475 -0.00645374 8.51528 -0.0271985 8.76252 0.0355011C9.00976 0.0982006 9.23036 0.240959 9.39118 0.442331Z"
                  fill="#040310"
                />
              </svg>
              <Text fz={20}>Categories</Text>
            </Flex>
            <Flex justify="center" align="center" gap={70}>
              <Select
                className="select"
                maw={80}
                fz={2}
                mx="auto"
                placeholder="UZB"
                data={["UZB", "RUS", "ENG"]}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 80,
                  timingFunction: "ease",
                }}
                withinPortal
              />
              <Box>
                <button className="submitBtn" type="submit" mt="sm">
                  <span className="next">Sign In</span>
                  <svg
                    type="submit"
                    xmlns="http://www.w3.org/2000/svg"
                    width="126"
                    height="48"
                    viewBox="0 0 126 48"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_57_236)">
                      <path
                        d="M8.79639 6.14261L16.5928 0H120.072V28.823L111.095 35.2019L102.117 41.5808H1V12.2852L8.79639 6.14261Z"
                        fill="url(#paint0_linear_57_236)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_57_236"
                        x="0"
                        y="0"
                        width="125.072"
                        height="47.5808"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2" dy="3" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.94902 0 0 0 0 0.596078 0 0 0 0 0.341176 0 0 0 0.7 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_57_236"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_57_236"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_57_236"
                        x1="1"
                        y1="20.7904"
                        x2="120.072"
                        y2="20.7904"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF512F" />
                        <stop offset="1" stop-color="#DD2476" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
