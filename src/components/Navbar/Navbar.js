/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import mainLogo2 from "../../static/8ca5247b6d4d3f4e6ffc52e3629ba81f/9e992/main_logo-2.png";
import telegramIcon from "../../static/telegram_link-5a88893fee62eef4675a8e2695ef402e.png";
export default function Navbar() {
  return (
    <header className=" disconnected">
      <div className="header_container">
        <div className="header_container">
          <a aria-current="page" className="mobileLogo" href="/">
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained logo"
            >
              <div style={{ maxWidth: "5654px", display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='637' width='5654' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                data-placeholder-image=""
                style={{
                  opacity: 0,
                  transition: "opacity 500ms linear",
                  backgroundColor: "#e8e8f8",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  objectFit: "cover",
                }}
              ></div>
              <img
                width="5654"
                height="637"
                data-main-image=""
                style={{ objectFit: "cover", opacity: 1 }}
                sizes="(min-width: 5654px) 5654px, 100vw"
                decoding="async"
                loading="lazy"
                src={mainLogo2}
                alt="logo"
              />
            </div>
          </a>
          <a aria-current="page" className="desktopLogo" href="/"></a>

          <ul className="menu">
            <li className="dropdown">
              <a>Marketplace</a>
              <ul className="subMenu">
                <li className="nftMp">
                  <a href="/marketplace">Planets</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 31.59 27.95"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M18.36,10.76l1,4.75a3.67,3.67,0,0,0,2.83,2.83l4.75,1-4.75,1a3.7,3.7,0,0,0-2.83,2.83l-1,4.75-1-4.75a3.7,3.7,0,0,0-2.83-2.83l-4.75-1,4.75-1a3.67,3.67,0,0,0,2.83-2.83Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M5.54,10.26a2.71,2.71,0,0,1-2.07,2.07L0,13.07l3.47.74a2.71,2.71,0,0,1,2.07,2.07l.75,3.48L7,15.88A2.71,2.71,0,0,1,9.1,13.81l3.48-.74L9.1,12.33A2.71,2.71,0,0,1,7,10.26L6.29,6.78Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M25.77,7.42a2.21,2.21,0,0,1-1.71,1.71l-2.88.62,2.88.61a2.23,2.23,0,0,1,1.71,1.72L26.39,15,27,12.08a2.26,2.26,0,0,1,1.72-1.72l2.87-.61-2.87-.62A2.23,2.23,0,0,1,27,7.42l-.61-2.88Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M14.18,2.51A2,2,0,0,1,12.68,4l-2.51.53,2.51.54a2,2,0,0,1,1.5,1.5l.54,2.51.53-2.51a2,2,0,0,1,1.5-1.5l2.51-.54L16.75,4a2,2,0,0,1-1.5-1.5L14.72,0Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="coordMp">
                  <a href="/coordmarketplace">Coordinates</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a>DIGITAL ASSETS</a>
              <ul className="subMenu">
                <li className="collection">
                  <a href="/collections">Collections</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 31.59 27.95"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M18.36,10.76l1,4.75a3.67,3.67,0,0,0,2.83,2.83l4.75,1-4.75,1a3.7,3.7,0,0,0-2.83,2.83l-1,4.75-1-4.75a3.7,3.7,0,0,0-2.83-2.83l-4.75-1,4.75-1a3.67,3.67,0,0,0,2.83-2.83Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M5.54,10.26a2.71,2.71,0,0,1-2.07,2.07L0,13.07l3.47.74a2.71,2.71,0,0,1,2.07,2.07l.75,3.48L7,15.88A2.71,2.71,0,0,1,9.1,13.81l3.48-.74L9.1,12.33A2.71,2.71,0,0,1,7,10.26L6.29,6.78Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M25.77,7.42a2.21,2.21,0,0,1-1.71,1.71l-2.88.62,2.88.61a2.23,2.23,0,0,1,1.71,1.72L26.39,15,27,12.08a2.26,2.26,0,0,1,1.72-1.72l2.87-.61-2.87-.62A2.23,2.23,0,0,1,27,7.42l-.61-2.88Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M14.18,2.51A2,2,0,0,1,12.68,4l-2.51.53,2.51.54a2,2,0,0,1,1.5,1.5l.54,2.51.53-2.51a2,2,0,0,1,1.5-1.5l2.51-.54L16.75,4a2,2,0,0,1-1.5-1.5L14.72,0Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="attribute">
                  <a href="/attributes">Attributes</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">MetaVerse</a>
              <ul className="subMenu">
                <li className="gameplay">
                  <a href="#">Gameplay</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="tokenomics">
                  <a href="/tokenomics">Tokenomics</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="mythology">
                  <a href="#">Mythology</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a>About</a>
              <ul className="subMenu">
                <li className="team">
                  <a href="/team">Team</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="roadmap">
                  <a href="/roadmap">Roadmap</a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: 0.47 }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="contact">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </li>

            <li className="dropdown" style={{ minWidth: "8vw" }}>
              <a>
                <div
                  className="translate"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    columnGap: "16px",
                  }}
                >
                  <p className="header_language_text_mobile">Language</p>
                </div>
              </a>
              <ul className="subMenu">
                <li
                  className="english"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <a
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    English
                  </a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: "0.47" }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="portuguese">
                  <a
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Português
                  </a>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29.91 27.7"
                  width="2vw"
                  height="2vw"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1" style={{ opacity: "0.47" }}>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M9.16,18.31l-1.09-5a3.9,3.9,0,0,0-3-3L0,9.16,5.06,8.07a3.9,3.9,0,0,0,3-3L9.16,0l1.08,5.06a3.9,3.9,0,0,0,3,3l5,1.09-5,1.08a3.9,3.9,0,0,0-3,3Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M24,17.59a2.88,2.88,0,0,1,2.21-2.21l3.7-.79-3.7-.79A2.88,2.88,0,0,1,24,11.59l-.79-3.7-.79,3.7a2.88,2.88,0,0,1-2.21,2.21l-3.7.79,3.7.79a2.88,2.88,0,0,1,2.21,2.21l.79,3.7Z"
                        ></path>
                        <path
                          className="cls-2"
                          fill="#662d91"
                          d="M13.61,25a2.07,2.07,0,0,1,1.59-1.6l2.68-.57-2.68-.57a2.07,2.07,0,0,1-1.59-1.6L13,18l-.57,2.67a2.07,2.07,0,0,1-1.59,1.6l-2.68.57,2.68.57A2.07,2.07,0,0,1,12.46,25L13,27.7Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <li className="chinese">
                  <a
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    汉语
                  </a>
                </li>
              </ul>
            </li>
            <li className="header_icons">
              <a
                href="#"
                className="whitepaper"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"></path>
                </svg>
              </a>
            </li>
            <li className="header_icons">
              <a
                href="https://discord.gg/exoworlds"
                className="discord"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="header_icons">
              <a
                href="https://twitter.com/ExoWorldsNFT"
                className="twitter"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="header_icons">
              <a
                href="https://www.instagram.com/exoworldsbrasil/"
                target="_blank"
                className="instagram"
                rel="noreferrer"
              ></a>
            </li>
            <li className="header_icons">
              <a
                href="https://t.me/+hmvHOCKmyj4zZWZi"
                className="telegram"
                target="_blank"
                rel="noreferrer"
              ></a>
            </li>
            <li className="dropdown header_icons_mobile">
              <a>Social Links</a>
              <ul className="item_opened subMenu">
                <li className="header_icons">
                  <a
                    href="https://discord.gg/exoworlds"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 25 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1135 1.75241C19.585 1.04963 17.9467 0.530187 16.2335 0.234816C16.2182 0.23183 16.2024 0.233754 16.1883 0.240324C16.1742 0.246893 16.1624 0.257782 16.1546 0.271483C15.9448 0.647317 15.711 1.13723 15.5472 1.52426C13.7302 1.24747 11.8829 1.24747 10.0658 1.52426C9.88337 1.09532 9.6776 0.677083 9.44948 0.271483C9.44175 0.257614 9.43005 0.246478 9.41595 0.239563C9.40185 0.232647 9.38602 0.230281 9.37056 0.232779C7.65833 0.52815 6.02002 1.0476 4.49059 1.75139C4.47743 1.75702 4.46628 1.76662 4.45862 1.77889C1.34983 6.43863 0.497704 10.9833 0.916273 15.4709C0.917438 15.4819 0.920784 15.4925 0.926108 15.5021C0.931431 15.5118 0.938622 15.5202 0.947241 15.5269C2.76176 16.8738 4.78562 17.8999 6.93407 18.5621C6.94905 18.5668 6.96507 18.5668 6.98004 18.5621C6.99501 18.5573 7.00823 18.5481 7.01799 18.5356C7.47951 17.9041 7.89109 17.237 8.24273 16.5362C8.2637 16.4955 8.24372 16.4466 8.20177 16.4303C7.55644 16.1825 6.93116 15.8835 6.33169 15.5361C6.32092 15.5298 6.31185 15.5209 6.30528 15.5102C6.29871 15.4994 6.29486 15.4872 6.29407 15.4746C6.29327 15.462 6.29557 15.4494 6.30074 15.4379C6.30591 15.4264 6.3138 15.4164 6.3237 15.4087C6.44957 15.314 6.57544 15.2152 6.69532 15.1164C6.70611 15.1075 6.71911 15.1019 6.73286 15.1001C6.74662 15.0983 6.7606 15.1004 6.77324 15.1062C10.6962 16.9029 14.9448 16.9029 18.8218 15.1062C18.8345 15.1001 18.8486 15.0977 18.8626 15.0993C18.8765 15.1009 18.8898 15.1065 18.9007 15.1154C19.0206 15.2152 19.1455 15.314 19.2724 15.4087C19.2824 15.4162 19.2904 15.4261 19.2957 15.4375C19.3011 15.4489 19.3035 15.4614 19.3029 15.474C19.3024 15.4867 19.2987 15.4989 19.2923 15.5097C19.2859 15.5206 19.277 15.5296 19.2664 15.5361C18.669 15.8864 18.0476 16.1828 17.3953 16.4293C17.3853 16.433 17.3762 16.4389 17.3685 16.4464C17.3609 16.454 17.3549 16.4632 17.3511 16.4733C17.3472 16.4834 17.3455 16.4943 17.346 16.5051C17.3466 16.516 17.3494 16.5266 17.3543 16.5362C17.714 17.236 18.1255 17.9021 18.5781 18.5346C18.5875 18.5476 18.6006 18.5573 18.6156 18.5624C18.6306 18.5675 18.6468 18.5677 18.662 18.5631C20.8141 17.9027 22.8413 16.8762 24.6578 15.5269C24.6667 15.5206 24.6741 15.5124 24.6796 15.5029C24.6851 15.4934 24.6886 15.4829 24.6898 15.4719C25.1893 10.2835 23.8526 5.77557 21.1444 1.78093C21.1378 1.76795 21.1268 1.75783 21.1135 1.75241ZM8.82912 12.7382C7.64834 12.7382 6.67434 11.6494 6.67434 10.3141C6.67434 8.9778 7.62936 7.89002 8.82912 7.89002C10.0379 7.89002 11.0029 8.98697 10.9839 10.3141C10.9839 11.6504 10.0289 12.7382 8.82912 12.7382ZM16.7959 12.7382C15.6141 12.7382 14.6411 11.6494 14.6411 10.3141C14.6411 8.9778 15.5952 7.89002 16.7959 7.89002C18.0047 7.89002 18.9697 8.98697 18.9507 10.3141C18.9507 11.6504 18.0057 12.7382 16.7959 12.7382Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span style={{ marginLeft: "20px" }}>Discord</span>
                  </a>
                </li>
                <li className="header_icons">
                  <a
                    href="https://twitter.com/ExoWorldsNFT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8404 5.17267C20.1043 5.49882 19.3136 5.71918 18.4824 5.81879C19.3401 5.30559 19.9818 4.49788 20.2877 3.54636C19.4819 4.02499 18.6 4.36189 17.6803 4.54242C17.0618 3.88208 16.2427 3.4444 15.35 3.29732C14.4573 3.15025 13.541 3.30201 12.7434 3.72905C11.9458 4.15608 11.3115 4.83451 10.9389 5.65898C10.5664 6.48346 10.4765 7.40786 10.6832 8.28867C9.05041 8.20669 7.45313 7.78231 5.995 7.04307C4.53687 6.30383 3.25047 5.26625 2.21929 3.99767C1.8667 4.60589 1.66396 5.31106 1.66396 6.06207C1.66357 6.73816 1.83006 7.40389 2.14866 8.00019C2.46727 8.5965 2.92813 9.10494 3.49037 9.48042C2.83832 9.45967 2.20067 9.28348 1.63047 8.96652V9.01941C1.6304 9.96764 1.9584 10.8867 2.55882 11.6206C3.15923 12.3546 3.99507 12.8581 4.92452 13.046C4.31964 13.2097 3.68547 13.2338 3.06991 13.1165C3.33214 13.9324 3.84295 14.6459 4.53083 15.157C5.2187 15.6682 6.0492 15.9514 6.90607 15.9672C5.45149 17.109 3.6551 17.7284 1.80588 17.7257C1.47831 17.7258 1.15101 17.7066 0.825684 17.6684C2.70275 18.8753 4.8878 19.5158 7.11938 19.5133C14.6736 19.5133 18.8033 13.2566 18.8033 7.8303C18.8033 7.65401 18.7989 7.47595 18.7909 7.29966C19.5942 6.71875 20.2876 5.9994 20.8386 5.17532L20.8404 5.17267Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span style={{ marginLeft: "20px" }}>Twitter</span>
                  </a>
                </li>
                <li className="header_icons"></li>
                <li className="header_icons">
                  <a
                    href="https://t.me/+hmvHOCKmyj4zZWZi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      data-gatsby-image-wrapper=""
                      className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                      <div style={{ maxWidth: "17px", display: "block" }}>
                        <img
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                          src="data:image/svg+xml;charset=utf-8,%3Csvg height='17' width='17' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                          style={{
                            maxWidth: "100%",
                            display: "block",
                            position: "static",
                          }}
                        />
                      </div>
                      <div
                        aria-hidden="true"
                        data-placeholder-image=""
                        style={{
                          opacity: "0",
                          transition: "opacity 500ms linear 0s",
                          backgroundColor: "rgb(248, 248, 248)",
                          position: "absolute",
                          inset: "0px",
                          objectFit: "cover",
                        }}
                      ></div>
                      <img
                        width="17"
                        height="17"
                        data-main-image=""
                        style={{ objectFit: "cover", opacity: "1" }}
                        sizes="(min-width: 17px) 17px, 100vw"
                        decoding="async"
                        loading="lazy"
                        src={telegramIcon}
                        alt="telegram"
                      />
                    </div>
                    <span style={{ marginLeft: "20px" }}>Telegram</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative z-10">
              <div
                id="connectWalletButton"
                className="flex items-center font-montserrat"
              >
                <div className="connectIcon"></div>
                <span className="uppercase text-[0.7vw] connect_btn_text">
                  connect
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
