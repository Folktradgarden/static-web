import React, { FC } from "react"
import { FTLogoRoot } from "./styled"

type FTLogoProps = {
  size?: "small" | "medium" | "large"
}

const sizeMap = {
  small: {
    width: "128px",
    height: "100px",
  },
  medium: {
    width: "256px",
    height: "200px",
  },
  large: {
    width: "512px",
    height: "400px",
  },
}

const FTLogo: FC<FTLogoProps> = ({ size = "large" }) => {
  return (
    <FTLogoRoot>
      <svg
        className="themed-logo"
        width="auto"
        height="auto"
        version="1.1"
        viewBox="0 0 511.995 375.383"
        xmlSpace="preserve"
      >
        <g transform="matrix(1.33333 0 0 -1.33333 -46.496 509.883)">
          <g transform="translate(-427.13 -79.688)">
            <g
              clip-path="url(#clipPath464)"
              transform="translate(37.875 -37.125)"
            >
              <g
                stroke="#6a381f"
                strokeDasharray="none"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="7.689"
                transform="translate(734.771 358.457) scale(.35751)"
              >
                <path
                  id="logoCircle"
                  fillOpacity="0"
                  stroke="#5f321c"
                  strokeDasharray="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="7.689"
                  d="M-335.17 387.453c-203.515 0-370.368-156.915-386.207-356.358h772.42C35.202 230.538-131.653 387.453-335.17 387.453zm-374.283-487.87c44.239-165.299 195.033-287.036 374.284-287.036S-5.124-265.716 39.115-100.418h-748.568z"
                />
              </g>
              <path
                id="logoTree"
                fill="#5f321c"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                strokeDasharray="none"
                strokeDashoffset="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="10.705"
                d="M270.824 35.043a2.677 2.677 0 00-2.515 1.674c-2.054 4.857-3.068 11.587-4.497 18.154-1.428 6.567-3.325 12.865-5.984 16.11-4.463 5.445-6.837 12.436-7.906 18.958-.125.76-.227 1.51-.318 2.252-2.47-6.899-6.058-14.73-11.424-19.949-5.052-4.913-6.088-10.31-6.389-15.818-.3-5.508.664-10.98-2.062-15.578a2.677 2.677 0 10-4.604 2.728c1.23 2.074.992 7.088 1.322 13.14.33 6.054 1.759 13.292 8.002 19.364 7.238 7.04 11.675 22.868 13.84 29.733a2.677 2.677 0 00.135.355 4.462 4.462 0 00.097.572c.426 1.745 1.254 4.345 1.731 7.131.477 2.786.129 5.457-.006 5.69-1.401 2.42-2.068 4.853-2.332 7.156-2.13-5.03-5.174-10.184-8.851-14.47a2.677 2.677 0 00-.018-.02c-2.332-2.753-2.637-4.924-2.604-7.7.034-2.775.69-6.071 0-9.882-.864-4.778-4.44-8.559-9.308-13.217a2.677 2.677 0 10-3.7 3.867c4.701 4.499 7.289 7.803 7.74 10.3.471 2.602-.044 5.46-.085 8.866-.003.267.007.544.014.818-2.923-1.961-5.94-3.59-8.733-5.166-5.103-2.878-9.33-5.61-11.428-8.771-3.533-5.152-7.677-15.014-7.867-22.545-.276-11.003-5.804-19.98-12.627-26.51a2.678 2.678 0 10-3.703 3.87c6.106 5.843 10.745 13.483 10.979 22.773.17 6.793 2.531 14.073 5.49 19.894-5.165-3.927-11.944-6.562-18.26-6.59-2.24-.009-7.347-1.792-12.312-4.505-4.966-2.713-10.03-6.274-13.192-9.268a2.677 2.677 0 10-3.681 3.885c3.674 3.48 8.97 7.163 14.306 10.078 5.336 2.915 10.475 5.145 14.856 5.164 6.291.027 14.97 4.394 18.785 9.045a2.677 2.677 0 00.2.22c3.655 5.152 9.025 8.186 14.071 11.032 5.233 2.952 10.22 5.712 13.432 9.185 4.522 4.892 8.648 13.129 10.172 18.639a7.882 7.882 0 00.115.606c1.083 4.628 2.09 7.778 2.842 10.535-1.26-1.161-2.54-3.432-4.067-6.547-1.852-3.782-4.221-8.733-9.605-11.354-5.067-2.466-9.84-6.33-18.316-10.23-4.46-2.958-10.534-8.229-17.21-13.108-7.651-5.592-16.24-10.828-25.349-11.31a2.677 2.677 0 10-.285 5.344c7.168.38 15.115 4.909 22.476 10.289 2.827 2.065 5.505 4.2 8.098 6.265-6.46-1.362-13.391-1.107-19.601-.726-4.273.261-8.215.603-11.319.633-3.104.03-5.337-.467-5.838-.805-5.862-3.958-11.835-8.347-17.21-11.922-5.377-3.576-9.94-6.422-14.153-7.113a2.677 2.677 0 10-.865 5.283c2.178.357 6.84 2.817 12.054 6.285 5.215 3.468 11.197 7.862 17.18 11.902 2.49 1.681 5.44 1.754 8.883 1.721 3.443-.033 7.41-.386 11.594-.642 4.27-.262 8.747-.391 12.97-.053-.911.276-1.794.574-2.62.9-4.748 1.873-8.135 3.834-13.903 2.963-12.39-1.87-22.937.698-30.979 6.57a2.677 2.677 0 001.4 4.858 2.677 2.677 0 001.759-.535c6.863-5.012 15.77-7.3 27.021-5.602 7.323 1.106 12.334-1.567 16.664-3.275 4.174-1.647 7.784-2.734 14.604-.246a4.461 4.461 0 00.299.142c7.96 3.575 12.324 7.309 18.74 10.432 2.01.978 3.464 3.248 5.072 6.431-.637-.353-1.182-.639-1.887-1.046-2.876-1.665-6.344-3.71-10.029-5.58-7.37-3.742-15.666-7.226-22.738-4.346-5.304 2.16-8.988 2.925-12.682 4.095-3.694 1.17-7.344 2.82-11.662 6.448a2.678 2.678 0 103.447 4.1c3.829-3.218 6.494-4.386 9.828-5.442 3.335-1.056 7.394-1.924 13.088-4.242 3.968-1.616 11.32.618 18.295 4.16 2.981 1.513 5.82 3.152 8.414 4.656-4.292-.917-8.308-1.216-11.607-.049-2.975 1.053-6.575 2.894-11.701 3.662a2.677 2.677 0 10.793 5.293c6.007-.9 10.406-3.1 12.693-3.91 1.706-.603 6.405-.422 11.187.823 3.83.996 7.809 2.566 10.88 4.265 2.519 1.707 3.962 2.823 4.646 3.797.334.476.618 1.052.853 1.846-.019 4.087-.009 7.385-.01 10.941h20.667c0-3.163-.01-6.046.005-9.63.028-.354.063-.635.09-1.005.128-1.704.087-1.79 1.877-3.398.534-.48 1.304-1.063 2.2-1.703 4.457-2.326 7.022-3.46 8.63-3.854 1.95-.476 3.096-.189 6.483.137 4.07.392 6.56-.321 8.998-.404 2.437-.083 5.328.262 11.246 2.82a2.677 2.677 0 102.123-4.914c-6.37-2.754-10.36-3.367-13.553-3.258-3.193.11-5.085.737-8.303.428-1.3-.125-2.413-.255-3.494-.334l.844-.457c5.281-2.87 10.69-5.744 12.961-6.23 8.055-1.725 21.009-3.566 43.793 4.609a2.677 2.677 0 101.809-5.04c-20.483-7.348-34.147-6.935-42.961-5.511 2.6-1.57 10.72-2.26 18.662-2.197 3.97.03 7.951.149 11.437.135 3.486-.015 6.382-.09 8.73-.758 7.026-1.997 26.712-3.792 31.329-3.57a2.677 2.677 0 10.256-5.346c-6.326-.303-24.525 1.343-33.047 3.765-1.14.324-3.943.541-7.29.555-3.345.014-7.327-.103-11.374-.135-8.095-.064-16.228-.196-21.469 2.967-8.247 4.976-14.82 9.073-20.635 12.701a4.461 4.461 0 00-.27.15c-3.08 1.879-5.59 3.412-7.697 4.797l-.123.077a2.677 2.677 0 00-.148.037c.027-.154.054-.32.082-.473.898-4.913 2.08-8.853 4.398-11.693 1.971-2.415 3.214-4.308 4.131-5.81 2.682-3.98 7.86-6.871 13.403-8.284 5.587-1.424 11.497-1.26 14.71-.043 4.801 1.819 9.515 1.613 14.337.674 4.82-.94 9.877-2.57 15.994-3.897a2.677 2.677 0 10-1.135-5.23c-6.397 1.387-11.532 3.023-15.883 3.871-4.351.848-7.79.949-11.414-.424-4.058-1.537-9.29-1.737-14.658-.818a138.384 138.384 0 014.846-3.078 4.461 4.461 0 00.533-.38 2.677 2.677 0 00.133-.062c5.794-2.997 11.28-3.878 16.884-4.861 5.606-.983 11.39-2.082 16.963-5.858 7.092-4.803 11.532-4.38 17.85-3.603 6.318.776 14.24 2.073 25.539-1.488a2.677 2.677 0 10-1.608-5.106c-10.294 3.245-16.772 2.08-23.279 1.281-6.507-.799-13.314-1.065-21.506 4.485-4.554 3.085-9.34 4.045-14.882 5.017-1.256.22-2.557.449-3.881.698 1.958-.858 3.764-1.72 5.341-2.715 2.065-1.302 3.912-2.923 4.623-5.348 1.294-4.41 7.016-9.721 13.96-14.656 6.943-4.935 14.848-9.588 20.205-14.227a2.677 2.677 0 10-3.502-4.045c-4.694 4.065-12.607 8.79-19.805 13.907-7.199 5.116-13.942 10.528-15.992 17.515-.157.533-.805 1.356-2.344 2.327-1.539.97-3.802 1.996-6.432 3.11-4.881 2.071-11.03 4.504-16.695 8.423-3.341 2.136-5.156 3.49-6.55 4.66-1.796 1.506-2.631 2.417-5.944 4.793a24.019 24.019 0 00-3.113 2.639c.06-.51.12-1.027.185-1.532.385-3.029.782-5.92 1.346-8.115.563-2.195 1.397-3.521 1.762-3.781 9.283-6.633 13.205-10.498 21.992-19.93a2.677 2.677 0 10-3.914-3.648c-8.747 9.389-12.118 12.74-21.192 19.222-2.265 1.62-3.145 4.124-3.834 6.807-.688 2.683-1.083 5.72-1.47 8.77-.737 5.796-1.8 11.685-3.217 13.869-.104.14-.203.28-.303.422a2.677 2.677 0 00-.088.125c-1.577 2.243-2.666 4.65-3.482 7.113-.543-1.887-1.095-3.831-1.592-5.92-.048-.234-.101-.47-.14-.697-.535-3.09-.677-5.417.982-8.282 2.338-4.036 1.683-8.113 1.076-11.662-.507-2.96-1.22-5.438-1.596-6.793.033-.519.107-.964.225-1.322.281-.853.76-1.498 1.713-2.332 1.903-1.668 5.66-3.632 10.008-7.434 4.392-3.841 5.997-9.756 7.187-14.795.595-2.519 1.058-4.858 1.535-6.584.477-1.725 1.223-2.711.963-2.513 2.27-1.729 7.95-4.73 14.225-8.72 6.273-3.991 13.282-9.097 18.787-15.724a2.677 2.677 0 10-4.117-3.42c-4.934 5.94-11.498 10.779-17.543 14.624-6.046 3.845-11.433 6.571-14.596 8.98-1.898 1.445-2.315 3.308-2.879 5.35-.564 2.041-1.022 4.38-1.588 6.777-1.131 4.792-2.8 9.634-5.498 11.994-3.858 3.373-7.246 5.013-10.014 7.438-.426.373-.829.79-1.214 1.226-.073-2.473.078-5.36.562-8.31.96-5.854 3.158-12.034 6.766-16.436 3.876-4.73 5.604-11.608 7.074-18.365 1.47-6.757 2.627-13.496 4.195-17.205a2.677 2.677 0 00-2.414-3.758h-.002zm-26.226 200.516c-.117 2.84-.272 6.03-.592 10.224-.769 10.072-6.281 14.715-10.705 16.467a5.353 5.353 0 00-1.352.758 3.569 3.569 0 00-.6.195c-5.358 2.203-15.09 2.78-25.296 4.043-1.114.138-2.157.284-3.186.434-9.373.76-19.625 1.328-28.846 2.183-9.634.894-18.043 2.028-23.486 4.336-4.04 1.714-10.955 1.708-19.006 1.33-8.05-.377-17.254-1.011-26.304.108a2.125 2.125 0 10.52 4.215c8.501-1.052 17.47-.457 25.587-.077 4.058.191 7.9.356 11.414.184 3.514-.172 6.698-.686 9.447-1.852 4.39-1.861 12.71-3.133 22.22-4.015 2.752-.256 5.625-.482 8.536-.7-1.46.64-2.987 1.336-4.635 2.13-19.444 7.833-25.963 7.525-34.96 8.492-4.597.493-7.584 2.124-10.782 3.953-3.197 1.829-6.768 3.926-13.334 5.959a2.125 2.125 0 00.63 4.16 2.125 2.125 0 00.628-.102c6.95-2.15 11.014-4.517 14.184-6.33 3.17-1.813 5.282-3.003 9.129-3.416 6.592-.708 12.565-.806 23.707-4.293-2.76 1.891-5.152 4.337-7.49 8.028-3.96 6.248-6.232 7.036-10.03 8.603-3.797 1.567-8.927 3.7-16.297 11.46a2.125 2.125 0 001.574 3.609 2.125 2.125 0 001.506-.682c6.985-7.353 11.002-8.878 14.834-10.46 3.832-1.58 7.674-3.429 12-10.257 2.612-4.121 4.823-6.07 8.006-7.861 2.258-1.271 5.095-2.442 8.725-4.014a3.569 3.569 0 00.754-.273c.834-.404 1.57-.742 2.338-1.1.595-.266 1.127-.495 1.761-.787a2.125 2.125 0 00.268-.149 96.246 96.246 0 013.267-1.396 73.692 73.692 0 00-4.95 3.277c-8.534 6.165-14.842 13.4-16.11 20.493-1.382 7.73-5.97 14.548-17.793 19.986a2.125 2.125 0 00.957 4.066 2.125 2.125 0 00.818-.205c12.713-5.847 18.593-14.114 20.2-23.101.898-5.026 6.402-12.005 14.417-17.795 7.651-5.528 17.464-10.072 27.143-11.76 3.92-.391 7.758-.762 11.354-1.36-3.01 1.498-6.107 3.021-9.186 4.551-4.416 2.195-8.699 4.394-12.312 6.557-2.351 1.407-4.409 2.734-6.104 4.203-4.764 3.266-8.801 5.536-11.95 8.149-3.557 2.952-5.919 6.722-5.884 12.044.028 4.103-3.116 8.752-6.797 13.979-3.681 5.227-7.795 11.053-8.312 18.14a2.125 2.125 0 002.144 2.307 2.125 2.125 0 002.096-2c.407-5.583 3.883-10.802 7.545-16.002 3.66-5.198 7.614-10.358 7.574-16.449v-.004c-.027-4.205 1.323-6.234 4.348-8.744 1.704-1.414 4.007-2.894 6.691-4.633-1.07 1.106-2.168 2.25-3.164 3.567-1.95 2.578-3.344 6.01-2.709 10.431 1.044 7.264-.165 21.276-6.748 29.637a2.125 2.125 0 001.686 3.463 2.125 2.125 0 001.65-.836c7.786-9.888 8.823-24.487 7.62-32.867-.484-3.362.36-5.243 1.89-7.266 1.268-1.678 3.112-3.32 4.906-5.375a3.569 3.569 0 00.703-.715c.718-.95 3.173-2.925 6.479-4.904 3.305-1.979 7.468-4.123 11.826-6.29 6.868-3.412 14.136-6.816 19.787-10.083-1.17 1.34-2.304 2.663-3.402 3.887-2.92 3.252-6.22 6.527-13.284 11.855-6.126 4.511-9.357 11.441-11.859 17.7-2.604 6.513-4.743 12.343-7.055 14.173-2.94 2.328-4.272 5.498-4.58 8.61-.308 3.11.255 6.217.85 9.117.595 2.9 1.225 5.615 1.29 7.685.067 2.07-.259 3.205-1.407 4.09a2.125 2.125 0 001.209 3.824 2.125 2.125 0 001.38-.459c2.44-1.88 3.152-4.835 3.065-7.59-.087-2.754-.801-5.598-1.377-8.404s-1.01-5.55-.783-7.847c.227-2.297.964-4.092 2.99-5.696 4.218-3.34 5.837-9.604 8.365-15.927a82.781 82.781 0 011.875-4.352c-.052.472-.085.94-.088 1.398-.026 4.52 1.622 7.762 1.153 11.405-.644 5.002 1.573 9.956 2.58 15.37 1.007 5.416 1.11 11.098-3.022 17.721a2.125 2.125 0 001.842 3.272 2.125 2.125 0 001.764-1.022c4.752-7.617 4.697-14.802 3.592-20.748-1.106-5.945-2.956-10.844-2.543-14.05.646-5.021-1.138-8.67-1.12-11.924.017-2.844.964-5.899 6.043-10.555a3.569 3.569 0 00.131-.092c7.342-5.538 11.165-9.3 14.295-12.787 2.212-2.463 4.07-4.735 6.678-7.498-1.096 2.392-1.807 4.25-2.38 6.104-.977 3.152-1.699 6.315-4.265 13.75a3.569 3.569 0 00-.125.443c-1.978 6.247-4.687 12.109-6.603 17.666-1.991 5.775-3.185 11.398-1.19 16.71 2.634 7.007 2.529 13.26 1.217 18.169-1.311 4.91-3.95 8.464-5.898 9.826a2.125 2.125 0 001.246 3.883 2.125 2.125 0 001.19-.402c3.16-2.21 6.035-6.482 7.566-12.213 1.53-5.732 1.597-12.932-1.344-20.758-1.442-3.837-.65-8.379 1.23-13.83 1.103-3.198 2.554-6.681 3.993-10.381.165 4.012 1.723 7.148 3.408 9.684 1.348 2.028 2.698 3.766 3.553 5.511.854 1.745 1.285 3.433.925 5.778-1.687 10.984-5.96 23.286.467 35.884a2.125 2.125 0 001.81 1.186 2.125 2.125 0 001.971-3.117c-5.565-10.908-1.82-21.782-.05-33.309.496-3.229-.19-6.001-1.31-8.289-1.121-2.287-2.6-4.155-3.827-6-2.453-3.69-4.206-6.912-1.5-14.053a2.125 2.125 0 00.078-.236c2.581-7.498 3.419-11.022 4.275-13.789.718-2.319 1.547-4.394 3.57-8.39 1.235 6.58 2.813 12.146 6.73 22.152a3.569 3.569 0 00.14.316c1.113 4.026.973 8.397.627 12.531-.422 5.03-1.46 9.63.734 13.323 9.01 15.162.72 32.718-2.035 38.011a2.125 2.125 0 001.883 3.131 2.125 2.125 0 001.889-1.172c2.898-5.57 12.22-24.795 1.912-42.142-.816-1.372-.583-5.62-.149-10.797.256-3.059.447-6.468.037-9.947 1.928 3.121 4.032 5.855 5.813 8.46 3.37 4.93 5.6 9.166 4.428 15.503-.976 5.27.839 12.328 3.26 19.244 2.42 6.916 5.537 13.475 7.906 17.142a2.125 2.125 0 001.71.992 2.125 2.125 0 001.858-3.298c-2.02-3.126-5.145-9.619-7.463-16.24-2.318-6.622-3.739-13.591-3.096-17.065 1.424-7.692-1.548-13.486-5.095-18.676-2.641-3.863-5.577-7.55-7.727-11.947-3.871-9.895-5.238-14.731-6.396-21.067 1.986 5.672 5.544 10.203 9.603 13.977 4.835 4.495 10.38 8.096 15.418 11.822 5.58 5.296 8.739 15.221 7.248 24.354-1.064 6.52-1.423 11.455.156 16.363 1.58 4.908 4.97 9.491 10.88 15.645a2.125 2.125 0 001.447.671 2.125 2.125 0 001.619-3.613c-5.738-5.974-8.634-10.062-9.903-14.006-1.269-3.943-1.04-8.04-.006-14.373 1.456-8.919-.687-18.382-5.638-24.972a3.569 3.569 0 00.047-.053c1.759 1.175 3.355 2.344 4.7 3.582 3.178 2.922 5.103 6.058 5.386 11.154.368 6.641 5.466 11.56 9.775 16.862 4.309 5.3 8.024 10.772 7.494 18.275a2.125 2.125 0 002.149 2.303 2.125 2.125 0 002.091-2.006c.64-9.062-3.97-15.761-8.435-21.254-4.465-5.493-8.585-9.989-8.83-14.414-.341-6.147-3.027-10.615-6.754-14.043-3.45-3.173-7.732-5.625-12.186-8.41-4.251-3.058-8.401-5.953-11.8-9.114-3.021-2.808-5.435-5.744-7.006-9.246a92.04 92.04 0 003.18 1.475c4.078 1.813 8.785 3.59 13.437 5.434 8.51 3.372 16.798 7.465 19.873 10.605 4.499 6.47 5.76 15.106 5.293 20.684-.248 2.957 1.362 5.532 3.455 7.916 2.093 2.383 4.842 4.685 7.697 6.97 5.711 4.57 11.844 9.343 13.469 12.545a2.125 2.125 0 001.81 1.188 2.125 2.125 0 001.979-3.114c-2.594-5.113-9.002-9.455-14.604-13.937-2.8-2.241-5.4-4.452-7.16-6.455-1.758-2.003-2.502-3.687-2.412-4.76.218-2.594.142-5.67-.355-8.904 3.366 4.894 7.574 9.852 12.978 11.844 12.75 4.698 15.313 10.69 21.455 20.558a2.125 2.125 0 001.909 1.026 2.125 2.125 0 001.699-3.27c-6.03-9.687-9.853-17.236-23.592-22.299-3.934-1.45-8.015-5.933-11.225-10.66a71.493 71.493 0 01-1.105-1.682c2.896 2.511 6.43 4.787 10.996 6.112 8.335 2.418 20.29 5.693 36.91 20.836a2.125 2.125 0 001.488.574 2.125 2.125 0 001.372-3.715c-17.157-15.632-30.293-19.367-38.586-21.773-8.922-2.59-13.132-9.445-18.082-14.434a2.125 2.125 0 00-.057-.057c-5.014-5.695-13.907-9-22.576-12.435-.631-.25-1.227-.482-1.854-.729 5.801 1.134 11.705 2.06 16.696 2.545 5.946.578 8.91 1.978 11.406 3.518 1.617.998 3.12 2.23 4.996 3.29 3.697 2.708 7.658 6.905 11.863 10.759 4.684 4.292 9.765 8.285 15.834 8.832 5.293.477 11.98 1.23 17.983 2.787 6.002 1.557 11.22 3.99 13.744 7.238a2.125 2.125 0 001.578.84 2.125 2.125 0 001.773-3.447c-3.555-4.574-9.612-7.08-16.031-8.744-6.419-1.665-13.299-2.419-18.666-2.903-4.364-.393-8.852-3.62-13.344-7.736-2.503-2.295-4.98-4.814-7.511-7.137a3.569 3.569 0 00.144-.174c2.614 1.385 5.509 2.982 8.533 4.483 5.64 2.798 11.734 5.278 17.672 4.777 10.52-.887 26.776 2.335 35.299 7.28a2.125 2.125 0 001.156.3 2.125 2.125 0 00.975-3.976c-9.78-5.673-26.117-8.823-37.79-7.838-4.452.375-10.014-1.669-15.423-4.352-5.102-2.53-9.983-5.525-14.182-7.213-.817-.474-1.668-1.047-2.697-1.74a338.9 338.9 0 016.615.668c9.217 1.03 19.406 2.746 24.362 5.105 5.736 2.732 13.768 2.316 22.718 1.985 8.95-.331 18.778-.736 27.461 1.068a2.125 2.125 0 00.356.045 2.125 2.125 0 00.508-4.207c-9.422-1.957-19.557-1.48-28.485-1.15-8.927.33-16.693.35-20.732-1.575-6.17-2.937-16.357-4.448-25.717-5.494-4.68-.523-9.122-.899-12.629-1.187-3.507-.289-6.243-.529-6.871-.639a2.125 2.125 0 00-.473-.027 42.434 42.434 0 00-3.736-.54c-6.544-.635-15.191-2.131-22.711-3.855a155.66 155.66 0 01-7.002-1.77c-5.642-4.729-9.08-10.292-9.226-25.868h-20.797z"
                transform="matrix(.75 0 0 -.75 424.127 499.225)"
              />
              <path
                id="logoSign"
                fill="#e7dfc6"
                fillOpacity="0"
                fillRule="evenodd"
                stroke="#5f321c"
                strokeDasharray="none"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="2.749"
                d="M425.501 369.573H806.75v-47.016H425.5z"
                opacity="1"
              />
              <g
                id="logoLetters"
                transform="matrix(.8876 0 0 -.99073 38.352 22.254)"
                fill="#5f321c"
              >
                <path d="M466.441-336.84h-19.865c-.72 0-1.332.612-1.332 1.332v.072c0 .756.612 1.332 1.332 1.332h3.994v19.721h-3.994c-.72 0-1.332.612-1.332 1.332v.072c0 .756.612 1.331 1.332 1.331h10.688c.72 0 1.332-.575 1.332-1.331v-.072c0-.72-.612-1.332-1.332-1.332h-3.959v-7.09h7.342v1.476c0 .756.576 1.368 1.331 1.368h.072c.72 0 1.332-.612 1.332-1.368v-5.758c0-.72-.612-1.332-1.332-1.332h-.072c-.755 0-1.331.612-1.331 1.332v1.512h-7.342v-9.861h11.589v2.519c0 .756.755 1.331 1.475 1.331h.072c.756 0 1.332-.575 1.332-1.331v-3.923c0-.72-.576-1.331-1.332-1.331z" />
                <path d="M484.328-337.343c-7.521 0-13.64 5.83-13.64 13.028 0 7.233 6.119 13.063 13.64 13.063 7.522 0 13.64-5.83 13.64-13.063 0-7.198-6.118-13.028-13.64-13.028zm.072 23.212c-5.902 0-10.688-4.534-10.688-10.113 0-5.578 4.786-10.112 10.688-10.112 5.902 0 10.653 4.534 10.653 10.112 0 5.579-4.75 10.113-10.653 10.113z" />
                <path d="M521.337-318.234h-.072c-.72 0-1.332.576-1.332 1.332v2.52h-11.732v-19.722h3.959c.72 0 1.331-.576 1.331-1.332v-.072c0-.72-.611-1.331-1.331-1.331H501.47c-.72 0-1.331.611-1.331 1.331v.072c0 .756.612 1.332 1.331 1.332h3.995v19.721h-3.995c-.72 0-1.331.612-1.331 1.332v.072c0 .756.612 1.331 1.331 1.331h19.866c.756 0 1.331-.575 1.331-1.331v-3.923c0-.756-.575-1.331-1.331-1.331z" />
                <path d="M553.98-314.383h-4.283l-8.314-10.76 8.457-8.961h2.88c.72 0 1.331-.576 1.331-1.332v-.072c0-.72-.612-1.331-1.331-1.331h-9.897c-.756 0-1.332.611-1.332 1.331v.072c0 .756.576 1.332 1.332 1.332h3.239l-12.452 13.207v-13.207h3.959c.755 0 1.331-.576 1.331-1.332v-.072c0-.72-.576-1.331-1.331-1.331h-10.653c-.756 0-1.331.611-1.331 1.331v.072c0 .756.575 1.332 1.331 1.332h3.959v19.721h-3.959c-.756 0-1.331.612-1.331 1.332v.072c0 .756.575 1.331 1.331 1.331h10.653c.755 0 1.331-.575 1.331-1.331v-.072c0-.72-.576-1.332-1.331-1.332h-3.96v-2.519-.036l5.867-6.154 6.73 8.71h-2.915c-.72 0-1.332.611-1.332 1.33v.073c0 .756.612 1.331 1.332 1.331h10.688c.756 0 1.332-.575 1.332-1.331v-.072c0-.72-.576-1.332-1.332-1.332z" />
                <path d="M581.068-336.84h-22.24c-.756 0-1.332.612-1.332 1.332v3.923c0 .756.576 1.331 1.331 1.331h.072c.756 0 1.332-.575 1.332-1.331v-2.52h8.35v19.686h-3.996c-.72 0-1.331.612-1.331 1.332v.072c0 .756.612 1.331 1.331 1.331h10.689c.72 0 1.331-.575 1.331-1.331v-.072c0-.72-.611-1.332-1.331-1.332h-3.959v-19.685h8.35v2.519c0 .756.611 1.331 1.331 1.331h.072c.756 0 1.332-.575 1.332-1.331v-3.923c0-.72-.576-1.331-1.332-1.331z" />
                <path d="M613.213-317.91c-.756-.144-1.476.324-1.62 1.044-.648 2.88-2.375 2.88-2.95 2.88-1.692 0-2.556-1.764-3.816-4.68-.611-1.439-1.295-3.058-2.303-4.354 5.003-.72 6.694-3.49 6.694-6.802 0-3.886-2.087-7.017-9.357-7.017h-12.848c-.755 0-1.331.611-1.331 1.331v.072c0 .756.576 1.332 1.331 1.332h3.959v19.721h-3.959c-.755 0-1.331.612-1.331 1.332v.072c0 .756.576 1.331 1.331 1.331h10.653c.756 0 1.331-.575 1.331-1.331v-.072c0-.72-.575-1.332-1.331-1.332h-3.959v-8.457h4.319c2.087.144 2.915 2.087 4.282 5.254 1.26 2.987 2.735 6.334 6.334 6.334 2.88 0 4.93-1.835 5.614-5.002.18-.756-.288-1.476-1.043-1.656zm-13.1-7.665h-6.406v-8.53h6.478c4.534 0 6.262 1.908 6.262 4.283 0 2.34-1.512 4.247-6.334 4.247z" />
                <path d="M645.833-314.383h-3.419l-8.637-21.377c-.288-.72-.864-1.08-2.267-1.08h-6.982c-.72 0-1.332.576-1.332 1.332v.072c0 .756.612 1.332 1.332 1.332h4.75l-7.953 19.721h-3.455c-.72 0-1.331.576-1.331 1.332v.072c0 .72.611 1.331 1.331 1.331h10.689c.72 0 1.331-.611 1.331-1.331v-.072c0-.756-.612-1.332-1.331-1.332h-4.283l2.555-6.298h10.077l2.52 6.298h-4.247c-.756 0-1.332.576-1.332 1.332v.072c0 .72.576 1.331 1.332 1.331h10.652c.756 0 1.368-.611 1.368-1.331v-.072c0-.756-.612-1.332-1.368-1.332zm-17.886-9.069l3.923-9.717 3.922 9.717zm2.699-19.325a2.05 2.05 0 00-2.051-2.052c-1.116 0-2.016.9-2.016 2.052 0 1.115.9 2.015 2.016 2.015 1.115 0 2.051-.9 2.051-2.015zm6.514 0c0-1.152-.9-2.052-2.015-2.052a2.05 2.05 0 00-2.052 2.052c0 1.115.936 2.015 2.052 2.015 1.115 0 2.015-.9 2.015-2.015z" />
                <path d="M661.16-336.84h-10.077c-.756 0-1.368.612-1.368 1.332v.072c0 .756.612 1.332 1.368 1.332h3.958v19.721h-3.958c-.756 0-1.368.612-1.368 1.332v.072c0 .756.612 1.331 1.368 1.331h10.076c10.473 0 15.043-5.506 15.043-12.523 0-7.018-4.534-12.668-15.043-12.668zm.215 22.457h-3.563v-19.721h3.131c8.422 0 12.452 4.21 12.452 9.932 0 5.687-4.03 9.79-12.02 9.79z" />
                <path d="M702.255-324.244h-5.65c-.755 0-1.331.612-1.331 1.332v.072c0 .756.576 1.368 1.331 1.368h4.21v4.678c-1.727 1.763-4.318 2.7-7.34 2.7-5.867 0-10.653-4.535-10.653-10.15 0-5.578 4.786-10.112 10.652-10.112 2.196 0 4.859.756 6.226 1.98-.612.287-.971.79-1.151 1.33-.432 1.404.755 2.88 2.555 2.7 1.403-.144 2.16-1.404 2.087-2.7-.144-3.274-4.39-6.297-9.753-6.297-7.557 0-13.64 5.866-13.64 13.064 0 7.197 5.723 13.027 13.64 13.027 2.664 0 5.399-1.007 7.378-2.59v1.259c0 .755.612 1.331 1.367 1.331h.072c.72 0 1.332-.576 1.332-1.331v-10.329c0-.72-.612-1.331-1.332-1.331z" />
                <path d="M735.452-314.383h-3.42l-8.636-21.377c-.288-.72-.864-1.08-2.268-1.08h-6.981c-.72 0-1.332.576-1.332 1.332v.072c0 .756.612 1.332 1.332 1.332h4.75l-7.953 19.721h-3.455c-.72 0-1.332.576-1.332 1.332v.072c0 .72.612 1.331 1.332 1.331h10.688c.72 0 1.332-.611 1.332-1.331v-.072c0-.756-.612-1.332-1.332-1.332h-4.282l2.555-6.298h10.077l2.519 6.298h-4.247c-.756 0-1.331.576-1.331 1.332v.072c0 .72.575 1.331 1.331 1.331h10.653c.755 0 1.367-.611 1.367-1.331v-.072c0-.756-.612-1.332-1.367-1.332zm-17.886-9.069l3.922-9.717 3.923 9.717zm3.886-23.896c-2.339 0-4.246 1.836-4.246 4.067s1.907 4.066 4.246 4.066c2.375 0 4.283-1.835 4.283-4.066s-1.908-4.067-4.283-4.067zm0 6.226c-1.26 0-2.267-.972-2.267-2.16 0-1.187 1.008-2.158 2.267-2.158 1.296 0 2.303.971 2.303 2.159 0 1.187-1.007 2.16-2.303 2.16z" />
                <path d="M766.865-317.91c-.756-.144-1.476.324-1.62 1.044-.648 2.88-2.375 2.88-2.95 2.88-1.692 0-2.556-1.764-3.816-4.68-.611-1.439-1.295-3.058-2.303-4.354 5.003-.72 6.694-3.49 6.694-6.802 0-3.886-2.087-7.017-9.357-7.017h-12.848c-.755 0-1.331.611-1.331 1.331v.072c0 .756.576 1.332 1.331 1.332h3.96v19.721h-3.96c-.755 0-1.331.612-1.331 1.332v.072c0 .756.576 1.331 1.331 1.331h10.653c.756 0 1.331-.575 1.331-1.331v-.072c0-.72-.575-1.332-1.331-1.332h-3.959v-8.457h4.319c2.087.144 2.915 2.087 4.282 5.254 1.26 2.987 2.735 6.334 6.334 6.334 2.88 0 4.93-1.835 5.614-5.002.18-.756-.288-1.476-1.043-1.656zm-13.1-7.665h-6.406v-8.53h6.478c4.534 0 6.262 1.908 6.262 4.283 0 2.34-1.512 4.247-6.334 4.247z" />
                <path d="M781.986-336.84H771.91c-.756 0-1.368.612-1.368 1.332v.072c0 .756.612 1.332 1.368 1.332h3.958v19.721h-3.958c-.756 0-1.368.612-1.368 1.332v.072c0 .756.612 1.331 1.368 1.331h10.076c10.473 0 15.043-5.506 15.043-12.523 0-7.018-4.534-12.668-15.043-12.668zm.216 22.457h-3.562v-19.721h3.13c8.422 0 12.452 4.21 12.452 9.932 0 5.687-4.03 9.79-12.02 9.79z" />
                <path d="M820.453-336.84h-19.865c-.756 0-1.368.576-1.368 1.332v.072c0 .756.612 1.332 1.368 1.332h3.958v19.721h-3.958c-.756 0-1.368.576-1.368 1.332v.072c0 .72.612 1.331 1.368 1.331h19.865c.72 0 1.332-.611 1.332-1.331v-3.923c0-.756-.612-1.331-1.332-1.331h-.108c-.72 0-1.331.575-1.331 1.331v2.52h-11.697v-8.458h7.306v1.512c0 .72.612 1.331 1.332 1.331h.072c.755 0 1.331-.612 1.331-1.331v-5.759c0-.755-.576-1.367-1.331-1.367h-.072c-.72 0-1.332.612-1.332 1.367v1.476h-7.306v-8.493h11.697v2.519c0 .756.611 1.332 1.331 1.332h.108c.72 0 1.332-.576 1.332-1.332v-3.923c0-.755-.612-1.331-1.332-1.331z" />
                <path d="M830.307-334.104v19.721h-3.96c-.755 0-1.33.612-1.33 1.332v.072c0 .756.575 1.331 1.33 1.331H837c.756 0 1.332-.575 1.332-1.331v-.072c0-.72-.576-1.332-1.332-1.332h-3.958v-16.662c4.75 6.19 14.107 18.498 14.395 18.821.324.36.648.576 1.223.576.756 0 1.332-.576 1.332-1.331v-21.125h3.995c.72 0 1.331-.576 1.331-1.332v-.072c0-.72-.612-1.331-1.331-1.331h-10.689c-.756 0-1.331.611-1.331 1.331v.072c0 .756.575 1.332 1.331 1.332h3.959v17.13s-13.927-18.246-14.431-18.858c-.54-.755-1.188-1.007-1.908-1.007h-4.57c-.756 0-1.332.611-1.332 1.331v.072c0 .756.576 1.332 1.332 1.332z" />
              </g>
              <path
                id="logoLeaves"
                fill="#498000"
                fillOpacity="1"
                stroke="none"
                strokeWidth="0.121"
                d="M631.45 491.115a10.384 10.384 0 01-6.842-7.714 10.384 10.384 0 013.207-9.799 10.384 10.384 0 016.839 7.715 10.384 10.384 0 01-3.205 9.798zm-43.123-2.384a10.752 10.752 0 01-2.643-10.343 10.752 10.752 0 017.594-7.501 10.752 10.752 0 012.641 10.342 10.752 10.752 0 01-7.592 7.502zm78.656-7.825a8.858 8.858 0 01-7.27-3.376 8.858 8.858 0 01-1.264-8.702 8.858 8.858 0 018.15 3.302 8.858 8.858 0 011.266 8.702 8.858 8.858 0 01-.882.074zm-103.928-1.047a6.226 6.226 0 01-2.6-5.608 6.226 6.226 0 013.53-5.075 6.226 6.226 0 012.599 5.61 6.226 6.226 0 01-3.53 5.073zm56.585-1.086a5.509 5.509 0 01-1.827-.33 5.509 5.509 0 011.915-5.124 5.509 5.509 0 015.389-.932 5.509 5.509 0 01-1.917 5.122 5.509 5.509 0 01-3.56 1.264zm32.759-.743a6.047 6.047 0 01-1.327-5.856 6.047 6.047 0 014.385-4.1 6.047 6.047 0 011.327 5.854 6.047 6.047 0 01-4.385 4.102zm-51.005-.179a5.812 5.812 0 01-4.322-1.934 5.812 5.812 0 01-1.192-5.646 5.812 5.812 0 015.475 1.82 5.812 5.812 0 011.194 5.646 5.812 5.812 0 01-1.155.114zm-30.395-2.505a4.648 4.648 0 01-3.432-1.6 4.648 4.648 0 01-.885-4.53 4.648 4.648 0 014.356 1.524 4.648 4.648 0 01.885 4.527 4.648 4.648 0 01-.924.079zm63.924-.783a5.36 5.36 0 01-1.27-.136 5.36 5.36 0 01-3.9-3.621 5.36 5.36 0 015.095-1.539 5.36 5.36 0 013.9 3.621 5.36 5.36 0 01-3.825 1.675zm-48.713-1.539a6.16 6.16 0 01-4.588-2.033 6.16 6.16 0 014.58-4.054 6.16 6.16 0 015.812 1.907 6.16 6.16 0 01-4.581 4.054 6.16 6.16 0 01-1.223.126zm-31.051-.466a8.582 8.582 0 01-6.804-3.739 8.582 8.582 0 017.085-4.733 8.582 8.582 0 017.663 3.725 8.582 8.582 0 01-7.086 4.734 8.582 8.582 0 01-.858.013zm65.735-.842a3.63 3.63 0 01-3.106-1.827 3.63 3.63 0 013.147-1.758 3.63 3.63 0 013.105 1.828 3.63 3.63 0 01-3.146 1.757zm-20.963-1.513a3.724 3.724 0 01-2.774-1.23 3.724 3.724 0 012.768-2.45 3.724 3.724 0 013.514 1.152 3.724 3.724 0 01-2.77 2.45 3.724 3.724 0 01-.738.078zm-27.339-.15a4.648 4.648 0 01-.644-.052 4.648 4.648 0 01-3.61-2.873 4.648 4.648 0 014.303-1.666 4.648 4.648 0 013.61 2.874 4.648 4.648 0 01-3.659 1.717zm58.753-.952a4.333 4.333 0 01-2.588-.84 4.333 4.333 0 012.58-3.443 4.333 4.333 0 014.273.489 4.333 4.333 0 01-2.58 3.444 4.333 4.333 0 01-1.685.35zm33.336-.113a6.047 6.047 0 01-4.95-2.33 6.047 6.047 0 014.774-3.641 6.047 6.047 0 015.552 2.282 6.047 6.047 0 01-4.773 3.641 6.047 6.047 0 01-.603.048zm-73.913-2.004a4.246 4.246 0 01-2.533-.836 4.246 4.246 0 01-1.68-3.866 4.246 4.246 0 014.186.501 4.246 4.246 0 011.68 3.866 4.246 4.246 0 01-1.653.335zm97.214-2.092a6.415 6.415 0 01-3.861-5.065 6.415 6.415 0 012.422-5.89 6.415 6.415 0 013.861 5.066 6.415 6.415 0 01-2.422 5.889zm-125.684-.216a4.648 4.648 0 01-3.43-1.6 4.648 4.648 0 01-.886-4.529 4.648 4.648 0 014.357 1.523 4.648 4.648 0 01.885 4.53 4.648 4.648 0 01-.926.076zm96.799-.123a4.378 4.378 0 01-1.104-4.204 4.378 4.378 0 013.071-3.075 4.378 4.378 0 011.104 4.203 4.378 4.378 0 01-3.071 3.076zm-113.364-2.963a7.363 7.363 0 01-4.882-5.443 7.363 7.363 0 012.233-6.959 7.363 7.363 0 014.881 5.441 7.363 7.363 0 01-2.232 6.96zm-15.682-1.443a10.035 10.035 0 01-2.367-.343 10.035 10.035 0 012.69-9.594 10.035 10.035 0 019.637-2.52 10.035 10.035 0 01-2.69 9.592 10.035 10.035 0 01-7.27 2.865zm149.254-.68a4.802 4.802 0 01-.665-.04 4.802 4.802 0 01.672-4.72 4.802 4.802 0 014.412-1.804 4.802 4.802 0 01-.67 4.72 4.802 4.802 0 01-3.75 1.844zm16.319-1.917a6.415 6.415 0 01-1.523-.142 6.415 6.415 0 01-4.729-4.265 6.415 6.415 0 016.07-1.929 6.415 6.415 0 014.73 4.267 6.415 6.415 0 01-4.548 2.069zm-4.364-6.771a5.57 5.57 0 01-2.352-.59 5.57 5.57 0 012.532-4.92 5.57 5.57 0 015.522-.298 5.57 5.57 0 01-2.532 4.918 5.57 5.57 0 01-3.17.89zm-39.125-1.416a7.33 7.33 0 01-5.838-3.15 7.33 7.33 0 01-.615-7.252 7.33 7.33 0 016.57 3.131 7.33 7.33 0 01.615 7.252 7.33 7.33 0 01-.732.019zm-116.76-2.77a7.363 7.363 0 01-3.133-.677 7.363 7.363 0 01-4.227-5.963 7.363 7.363 0 017.282-.637 7.363 7.363 0 014.227 5.963 7.363 7.363 0 01-4.149 1.314zm58.375-.598a3.857 3.857 0 01-2.594-2.816 3.857 3.857 0 011.12-3.663 3.857 3.857 0 012.595 2.818 3.857 3.857 0 01-1.12 3.66zm47.03-.353a4.446 4.446 0 01-.596-4.374 4.446 4.446 0 013.474-2.723 4.446 4.446 0 01.595 4.374 4.446 4.446 0 01-3.474 2.723zm-56.384-.814a6.523 6.523 0 01-3.338-.959 6.523 6.523 0 013.434-5.491 6.523 6.523 0 016.473.193 6.523 6.523 0 01-3.434 5.49 6.523 6.523 0 01-3.135.767zm119.162-2.424a6.513 6.513 0 01-3.465-5.46 6.513 6.513 0 012.963-5.747 6.513 6.513 0 013.465 5.46 6.513 6.513 0 01-2.963 5.747zM519.13 439.71a7.404 7.404 0 01-.657-7.321 7.404 7.404 0 015.988-4.264 7.404 7.404 0 01.657 7.323 7.404 7.404 0 01-5.988 4.262zm132.303-.007a5.043 5.043 0 01-4.113-1.972 5.043 5.043 0 014.002-3.007 5.043 5.043 0 014.617 1.935 5.043 5.043 0 01-4.003 3.009 5.043 5.043 0 01-.503.035zm-11.355-.397a3.427 3.427 0 01-.475-.01 3.427 3.427 0 01-2.779-1.964 3.427 3.427 0 013.098-1.408 3.427 3.427 0 012.779 1.963 3.427 3.427 0 01-2.623 1.42zm73.254-1.376a7.404 7.404 0 01-3.823-.964 7.404 7.404 0 01-3.73-6.334 7.404 7.404 0 017.352-.022 7.404 7.404 0 013.728 6.334 7.404 7.404 0 01-3.527.986zm-125.123-.626a4.75 4.75 0 01-2.02-.454 4.75 4.75 0 01-2.695-3.868 4.75 4.75 0 014.701-.374 4.75 4.75 0 012.697 3.87 4.75 4.75 0 01-2.683.826zm-38.895-1.38a4.378 4.378 0 01-1.825-3.945 4.378 4.378 0 012.485-3.567 4.378 4.378 0 011.824 3.946 4.378 4.378 0 01-2.484 3.566zm99.565-.892a3.537 3.537 0 01-1.516-.27 3.537 3.537 0 011.382-3.228 3.537 3.537 0 013.483-.437 3.537 3.537 0 01-1.382 3.229 3.537 3.537 0 01-1.967.706zm-137.231-1.46a8.916 8.916 0 01-5.336-1.704 8.916 8.916 0 015.277-7.109 8.916 8.916 0 018.798.965 8.916 8.916 0 01-5.275 7.108 8.916 8.916 0 01-3.464.74zm30.145-1.784a7.404 7.404 0 01-5.454-2.575 7.404 7.404 0 015.621-4.738 7.404 7.404 0 016.926 2.459 7.404 7.404 0 01-5.62 4.739 7.404 7.404 0 01-1.473.115zm169.87-2.17a7.404 7.404 0 01-4.345-1.653 7.404 7.404 0 014.696-5.656 7.404 7.404 0 017.252 1.196 7.404 7.404 0 01-4.695 5.657 7.404 7.404 0 01-2.907.456zm-6.587-2.824a4.65 4.65 0 01-1.329-4.422 4.65 4.65 0 013.146-3.38 4.65 4.65 0 011.328 4.423 4.65 4.65 0 01-3.145 3.379zm-157.139-1.926a5.391 5.391 0 01-3.613-1.452 5.391 5.391 0 01-1.567-5.118 5.391 5.391 0 015.209 1.232 5.391 5.391 0 011.567 5.118 5.391 5.391 0 01-1.596.22zm-29.278-1.952a7.404 7.404 0 01-4.474-1.272 7.404 7.404 0 01-3.212-6.611 7.404 7.404 0 017.33.566 7.404 7.404 0 013.212 6.611 7.404 7.404 0 01-2.856.706zm156.111-2.093a3.763 3.763 0 01-1.806-3.271 3.763 3.763 0 011.912-3.21 3.763 3.763 0 011.806 3.272 3.763 3.763 0 01-1.912 3.209zm7.34-2.924a6.259 6.259 0 01-.867-.065 6.259 6.259 0 01-4.88-3.845 6.259 6.259 0 015.782-2.272 6.259 6.259 0 014.88 3.843 6.259 6.259 0 01-4.915 2.34zm21.887-1.846a5.677 5.677 0 01-4.236-3.718 5.677 5.677 0 011.07-5.533 5.677 5.677 0 014.237 3.717 5.677 5.677 0 01-1.07 5.534zm-26.121-4.196a4.908 4.908 0 01-2.102-.38 4.908 4.908 0 011.932-4.473 4.908 4.908 0 014.836-.591 4.908 4.908 0 01-1.931 4.474 4.908 4.908 0 01-2.735.97zm31.902-3.173a9.442 9.442 0 01-7.018-3.145 9.442 9.442 0 017.045-6.184 9.442 9.442 0 018.895 2.959 9.442 9.442 0 01-7.046 6.184 9.442 9.442 0 01-1.876.186zm-182.866-2.176a6.297 6.297 0 01-3.219-.94 6.297 6.297 0 013.338-5.286 6.297 6.297 0 016.248.212 6.297 6.297 0 01-3.338 5.287 6.297 6.297 0 01-3.03.727zm174.015-4.224a7.404 7.404 0 01-.287-.01 7.404 7.404 0 01.454-7.336 7.404 7.404 0 016.562-3.313 7.404 7.404 0 01-.454 7.338 7.404 7.404 0 01-6.275 3.321zm-13.625-2.011a6.436 6.436 0 01-3.865-1.186 6.436 6.436 0 01-2.674-5.804 6.436 6.436 0 016.36.624 6.436 6.436 0 012.674 5.804 6.436 6.436 0 01-2.495.562zm-158.7-1.338a7.404 7.404 0 01-3.13-.782 7.404 7.404 0 01-4.053-6.132 7.404 7.404 0 017.34-.404 7.404 7.404 0 014.054 6.13 7.404 7.404 0 01-4.212 1.188zm18.324-.612a5.883 5.883 0 01-.228-.013 5.883 5.883 0 01.52-5.818 5.883 5.883 0 015.284-2.489 5.883 5.883 0 01-.52 5.818 5.883 5.883 0 01-5.056 2.502zm-11.6-1.72a7.404 7.404 0 01-3.881-6.244 7.404 7.404 0 013.429-6.502 7.404 7.404 0 013.882 6.244 7.404 7.404 0 01-3.43 6.501zm150.192-4.52a7.435 7.435 0 01-4.436-1.462 7.435 7.435 0 014.455-5.887 7.435 7.435 0 017.328.872 7.435 7.435 0 01-4.453 5.886 7.435 7.435 0 01-2.894.59zm-24.204-.324a6.436 6.436 0 01-2.705-.737 6.436 6.436 0 01-3.41-5.402 6.436 6.436 0 016.385-.217 6.436 6.436 0 013.411 5.402 6.436 6.436 0 01-3.681.954zm-92.058-1.56a4.796 4.796 0 01-1.589-.303 4.796 4.796 0 011.717-4.442 4.796 4.796 0 014.7-.763 4.796 4.796 0 01-1.716 4.443 4.796 4.796 0 01-3.112 1.066zm-19.757-.592a6.981 6.981 0 01-4.175-1.34 6.981 6.981 0 01-2.817-6.333 6.981 6.981 0 016.889.767 6.981 6.981 0 012.817 6.332 6.981 6.981 0 01-2.714.574zm129.208-.376a5.333 5.333 0 01-1.655-5.029 5.333 5.333 0 013.503-3.968 5.333 5.333 0 011.658 5.029 5.333 5.333 0 01-3.506 3.968zm-124.472-1.096a6.057 6.057 0 01-2.572-5.436 6.057 6.057 0 013.392-4.964 6.057 6.057 0 012.573 5.435 6.057 6.057 0 01-3.393 4.965zm15.075-3.735a7.404 7.404 0 01-2.474-.348 7.404 7.404 0 01-4.952-5.431 7.404 7.404 0 017.188-1.534 7.404 7.404 0 014.954 5.431 7.404 7.404 0 01-4.716 1.882zm89.701-.533a7.435 7.435 0 01-3.847-.929 7.435 7.435 0 013.641-6.42 7.435 7.435 0 017.381-.098 7.435 7.435 0 01-3.642 6.422 7.435 7.435 0 01-3.533 1.025zm-83.702-1.12a6.274 6.274 0 01-1.792-5.967 6.274 6.274 0 014.246-4.558 6.274 6.274 0 011.792 5.968 6.274 6.274 0 01-4.246 4.557zm77.319-.873a5.333 5.333 0 01-2.304-4.768 5.333 5.333 0 012.954-4.396 5.333 5.333 0 012.302 4.77 5.333 5.333 0 01-2.952 4.394z"
              />
            </g>
          </g>
        </g>
      </svg>
    </FTLogoRoot>
  )
}

export default FTLogo
