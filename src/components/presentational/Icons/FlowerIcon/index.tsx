import React, { FC } from "react"
import { Path, PathColor, SVG, SVGSize } from "../styled"

type FlowerIconProps = {
  color: PathColor
  size?: SVGSize
}

const FlowerIcon: FC<FlowerIconProps> = ({ color, size = "normal" }) => {
  return (
    <SVG size={size} viewBox="0 0 474.438 474.438">
      <Path
        color={color}
        d="M236.764 61.557c6.135-11.504 16.833-22.563 27.97-31.986-6.117-9.943-12.23-18.434-16.035-23.263C245.492 2.241 241.414 0 237.22 0c-4.196 0-8.272 2.241-11.479 6.308-3.891 4.944-10.194 13.725-16.449 23.964 10.945 9.244 21.4 20.04 27.472 31.285zM61.557 237.673C50.056 231.54 39 220.847 29.58 209.714c-9.943 6.116-18.44 12.225-23.274 16.029C2.241 228.947 0 233.023 0 237.219s2.24 8.272 6.309 11.479c4.944 3.892 13.725 10.194 23.964 16.449 9.243-10.946 20.038-21.401 31.284-27.474zM388.375 109.228c5.018 0 10.103.259 15.102.685 2.716-11.381 4.41-21.738 5.14-27.858.571-4.829-.558-9.116-3.179-12.065-2.507-2.821-6.178-4.313-10.615-4.313-.793 0-1.614.05-2.442.148-6.247.745-16.912 2.496-28.574 5.313 1.204 14.274.963 29.299-2.694 41.544 7.541-2.294 16.68-3.454 27.262-3.454zM468.129 225.741c-4.944-3.892-13.725-10.195-23.965-16.449-9.242 10.946-20.037 21.4-31.282 27.473 11.5 6.134 22.556 16.828 31.976 27.96 9.943-6.116 18.44-12.225 23.274-16.03 4.064-3.204 6.305-7.28 6.305-11.475.001-4.196-2.24-8.273-6.308-11.479zM403.284 363.74c-4.973.429-10.026.69-15.005.69-10.273 0-19.15-1.136-26.532-3.344 3.801 12.474 4.058 27.864 2.846 42.407 11.355 2.707 21.684 4.395 27.792 5.123.823.098 1.646.147 2.439.147 4.436 0 8.105-1.491 10.612-4.312 2.621-2.95 3.75-7.236 3.178-12.069-.746-6.261-2.503-16.954-5.33-28.642zM237.673 412.882c-6.133 11.5-16.826 22.556-27.959 31.976 6.115 9.944 12.225 18.44 16.029 23.274 3.204 4.065 7.28 6.305 11.475 6.305 4.196 0 8.273-2.241 11.481-6.309 3.891-4.943 10.193-13.724 16.447-23.962-10.945-9.243-21.4-20.039-27.473-31.284zM237.219 109.726c-70.3 0-127.493 57.193-127.493 127.493s57.193 127.494 127.493 127.494c70.301 0 127.494-57.194 127.494-127.494S307.52 109.726 237.219 109.726zM251.269 85.611c.218.486.544.958.927 1.424 30.11 2.979 57.644 14.849 79.941 32.935 2.009-.136 5.16-1.218 8.689-9.803 8.828-21.467-.745-66.574-5.178-82.143-1.981-6.956-6.811-11.108-12.922-11.108-2.714 0-5.511.8-8.312 2.378-14.108 7.963-52.659 33.324-61.464 54.741-1.498 3.647-3.008 8.616-1.681 11.576zM141.692 120.461l-.007.006c22.214-18.211 49.696-30.219 79.78-33.354h-.001c.38-.467.703-.941.918-1.427 1.311-2.967-.224-7.928-1.742-11.567-8.936-21.421-47.602-46.549-61.746-54.423-2.784-1.55-5.56-2.336-8.252-2.336-6.145 0-10.981 4.178-12.935 11.176-4.345 15.607-13.671 60.798-4.753 82.169 3.593 8.61 6.747 9.634 8.738 9.756zM74.033 221.486c3.544 1.457 6.51 2.196 8.817 2.196 1.549 0 2.915-.51 4.195-1.545l-.005.064c2.985-30.084 14.845-57.592 32.912-79.876v.001c-.058-.642-.17-1.241-.373-1.768-1.171-3.025-5.765-5.448-9.412-6.948-5.812-2.39-13.889-3.602-24.007-3.602-26.903 0-57.83 8.694-58.139 8.782-4.978 1.417-8.601 4.335-10.196 8.215-1.596 3.88-1.074 8.503 1.469 13.016 7.961 14.108 33.323 52.659 54.739 61.465zM391.463 222.883c2.313 0 5.294-.754 8.858-2.241 21.418-8.938 46.545-47.603 54.42-61.747 2.52-4.526 3.018-9.15 1.402-13.023-1.616-3.872-5.253-6.771-10.242-8.164-.302-.084-30.774-8.481-57.527-8.481-10.424 0-18.716 1.254-24.644 3.728-3.639 1.518-8.22 3.964-9.375 6.996-.2.524-.309 1.121-.362 1.76 18.18 22.188 30.174 49.626 33.322 79.662 1.271 1.013 2.622 1.51 4.148 1.51zM400.403 252.951c-3.544-1.457-6.511-2.196-8.816-2.196-1.547 0-2.912.508-4.19 1.542l.01-.113c-2.977 30.105-14.84 57.632-32.917 79.929.058.643.169 1.241.373 1.768 1.171 3.025 5.764 5.448 9.41 6.948 5.812 2.389 13.889 3.601 24.007 3.601 26.983 0 57.828-8.693 58.137-8.781 4.981-1.418 8.604-4.336 10.199-8.216 1.596-3.88 1.073-8.503-1.47-13.017-7.965-14.108-33.327-52.659-54.743-61.465zM332.751 353.975l.006-.005c-22.215 18.212-49.698 30.221-79.783 33.355-.381.468-.704.941-.919 1.428-1.312 2.968.224 7.929 1.742 11.568 8.917 21.37 47.598 46.532 61.749 54.424 2.78 1.547 5.557 2.332 8.249 2.332 6.147 0 10.982-4.178 12.936-11.175 4.344-15.607 13.669-60.802 4.754-82.172-3.591-8.602-6.744-9.631-8.734-9.755zM223.168 388.827c-.218-.486-.543-.957-.926-1.423h.002c-30.111-2.98-57.645-14.85-79.944-32.937-2.009.137-5.16 1.22-8.689 9.803-8.826 21.466.747 66.575 5.18 82.145 1.98 6.956 6.811 11.108 12.922 11.108 2.714 0 5.51-.8 8.311-2.378 14.108-7.963 52.658-33.324 61.463-54.741 1.499-3.647 3.008-8.616 1.681-11.577zM82.976 251.555c-2.313 0-5.294.754-8.858 2.241-21.37 8.917-46.532 47.598-54.424 61.75-2.517 4.522-3.015 9.146-1.4 13.018 1.616 3.873 5.254 6.773 10.244 8.167.3.083 30.774 8.481 57.527 8.481 10.423 0 18.714-1.254 24.642-3.727 3.638-1.518 8.218-3.965 9.374-6.997.201-.526.309-1.124.363-1.764-18.178-22.187-30.17-49.624-33.319-79.657-1.271-1.015-2.623-1.512-4.149-1.512zM71.153 110.698c4.974-.429 10.027-.689 15.005-.689 10.273 0 19.151 1.136 26.534 3.344-3.803-12.477-4.06-27.872-2.848-42.418-11.356-2.705-21.683-4.388-27.789-5.111a20.865 20.865 0 00-2.443-.148c-4.436 0-8.105 1.491-10.612 4.312-2.621 2.95-3.749 7.237-3.177 12.069.747 6.26 2.504 16.953 5.33 28.641zM86.064 365.211c-5.021 0-10.111-.26-15.112-.686-2.714 11.383-4.402 21.738-5.127 27.855-.573 4.834.555 9.12 3.175 12.07 2.506 2.821 6.177 4.312 10.614 4.312.794 0 1.616-.05 2.444-.148 6.248-.744 16.914-2.496 28.577-5.314-1.205-14.274-.964-29.299 2.692-41.543-7.543 2.293-16.683 3.454-27.263 3.454z"
      />
    </SVG>
  )
}

export default FlowerIcon
