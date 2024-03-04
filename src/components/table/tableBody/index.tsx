import { IPerson } from "../../../types";
import { FC } from "react";

const TableBody: FC<IPerson> = ({
  name,
  email,
  phone,
  registered,
  location,
  picture,
}) => {
  return (
    <tr>
      <td>
        {name.last} {name.first}
      </td>
      <td>
        <div className={"pictureContainer"}>
          <img
            className={"smallPicture"}
            src={picture.thumbnail}
            alt={"фото"}
          />
          <div className={"tooltip"}>
            <img
              className={"bigPicture"}
              src={picture.large}
              alt={"большое фото"}
            />
          </div>
        </div>
      </td>
      <td>
        State: {location.state}, City: {location.city}
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{new Date(registered.date).toLocaleDateString("ru")}</td>
    </tr>
  );
};
export default TableBody;
