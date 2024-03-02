import { IPerson } from "../../../types";
import { FC, useRef, useState } from "react";

const TableBody: FC<IPerson> = ({
  name,
  email,
  phone,
  registered,
  location,
  picture,
}) => {
  const refSetTimeout = useRef<ReturnType<typeof setTimeout>>();
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnterPicture = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowTooltip(true);
    }, 500);
  };
  const onMouseLeavePicture = () => {
    clearTimeout(refSetTimeout.current);
    setShowTooltip(false);
  };

  return (
    <tr>
      <td>
        {name.last} {name.first}
      </td>
      <td>
        <div
          className={"pictureContainer"}
          onMouseEnter={onMouseEnterPicture}
          onMouseLeave={onMouseLeavePicture}
        >
          <img
            className={"smallPicture"}
            src={picture.thumbnail}
            alt={"фото"}
          />
          {showTooltip ? (
            <div className={"tooltip"}>
              <img
                className={"bigPicture"}
                src={picture.large}
                alt={"большое фото"}
              />
            </div>
          ) : null}
        </div>
      </td>
      <td>
        State: {location.state}, City:{location.city}
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{new Date(Date.parse(registered.date)).toLocaleDateString()}</td>
    </tr>
  );
};
export default TableBody;
