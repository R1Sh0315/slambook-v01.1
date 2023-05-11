import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { CgUserlane, CgCloseO } from "react-icons/cg";
import {
  borderFrameType,
  clientNameFontStyle,
  slambookQuestion
} from "../../mock-data";

function DashboardComponent() {
  const [isVertDotClick, setVertDotClick] = useState(true);
  const [selectedFontName, setSelectedFontName] = useState("Kalam");

  const [userImg, setUserImg] = useState(null);
  const [isImagePrompt, setImagePrompt] = useState(false);
  const [isNotImage, SetNotImageTxt] = useState("");

  const [frameStyleDD, setFrameStyleDD] = useState(false);
  const [frameStyle, setFrameStyle] = useState("Lined");

  const selectFontStyleDD = (
    <div className="sb-client-fonts-name-list-contianer">
      {Object.keys(clientNameFontStyle).map((font, key) => (
        <div
          key={key}
          onClick={() => {
            setSelectedFontName(font);
            setVertDotClick(!isVertDotClick);
          }}
          className="sb-client-fonts-name-list"
        >
          {font}
        </div>
      ))}
    </div>
  );

  const onClickImagePrompt = () => {};

  const onImageUpload = (e) => {
    if (e?.target?.files[0].type.includes("image")) {
      setUserImg(URL.createObjectURL(e?.target?.files[0]));
      SetNotImageTxt("");
    } else {
      SetNotImageTxt("Is not image");
    }
  };

  const onSelectFrameStyle = Object.keys(borderFrameType).map(
    (lineStyle, key) => (
      <div
        className={`ss-frame-style-DD`}
        onClick={() => {
          setFrameStyle(lineStyle);
        }}
        key={key}
      >
        {lineStyle}
      </div>
    )
  );

  const userImagePropmpt = (
    <div className="sb-user-image-prompt">
      <div className="sb-prompt-close-btn">
        <CgCloseO onClick={() => setImagePrompt(false)} />
      </div>
      <div className="sb-prompt-image-container">
        <div className="sb-image-preview">
          {userImg === null ? (
            <CgUserlane className="sb-user-img-alt" />
          ) : (
            <img
              className={`sb-prompt-profile-img ${borderFrameType[frameStyle]}`}
              src={userImg}
              alt={userImg}
            />
          )}
        </div>
        <div className="sb-image-options">
          <input
            onChange={(e) => {
              onImageUpload(e);
            }}
            className={`sb-input-file-upload-btn`}
            type="file"
          />
          <button
            onClick={() => setUserImg(null)}
            className="sb-image-remove-btn"
          >
            Remove
          </button>
          <div className={`sb-set-frame-style-container`}>
            <span className="ss-frame-select-txt">Select frame Type : </span>
            <span
              className="ss-frame-style-DD-container"
              onClick={() => setFrameStyleDD(!frameStyleDD)}
            >
              {frameStyleDD ? onSelectFrameStyle : frameStyle}
            </span>
          </div>
          {isNotImage ? (
            <div className="sb-not-image-text">{isNotImage}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`sb-dashboard`}>
      {isImagePrompt ? userImagePropmpt : ""}
      <div className={`sb-client-name`}>
        <span
          style={{ fontFamily: clientNameFontStyle[`${selectedFontName}`] }}
        >
          Sam fisher
        </span>
        {isVertDotClick ? (
          <TbDotsVertical
            onClick={() => setVertDotClick(!isVertDotClick)}
            className="sb-vertical-dots"
          />
        ) : (
          selectFontStyleDD
        )}
      </div>
      <div className={`sb-client-body-content`}>
        <div className={`sb-client-self-discription`}>
          <table className="sb-self-disc-table">
            <tbody>
              <tr>
                <td className="sb-username-txt">
                  {slambookQuestion[0].aboutMySelf.name}
                </td>
                <td className="sb-username">Sam Fisher</td>
              </tr>
              <tr>
                <td className="sb-nickname-txt">
                  {slambookQuestion[0].aboutMySelf.nickName}
                </td>
                <td className="sb-nickname">Sam.14189</td>
              </tr>
              <tr>
                <td className="sb-birth-date-txt">
                  {slambookQuestion[0].aboutMySelf.birthDate}
                </td>
                <td className="sb-birth-date">19/02/1997</td>
              </tr>
              <tr>
                <td className="sb-birth-place-txt">
                  {slambookQuestion[0].aboutMySelf.bitthPlace}
                </td>
                <td className="sb-birth-place">USA, DC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`sb-client-profile-img-contianer`}>
          {userImg === null ? (
            <CgUserlane
              onClick={() => {
                onClickImagePrompt();
                setImagePrompt(!isImagePrompt);
              }}
              className="sb-user-img-alt"
            />
          ) : (
            <img
              onClick={() => {
                onClickImagePrompt();
                setImagePrompt(!isImagePrompt);
              }}
              className={`sb-client-profile-img ${borderFrameType[frameStyle]}`}
              src={userImg}
              alt={userImg}
            />
          )}
        </div>
      </div>
      <div className={`sb-client-data-container`}></div>
    </div>
  );
}

export default DashboardComponent;
