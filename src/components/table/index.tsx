import { FC, useEffect, useState } from "react";
import "./style.css";
import TableBody from "./tableBody";
import { IResults } from "../../types";
import { getData } from "../../requests/getData";
import Filter from "../filter";
import * as React from "react";
import { debounce } from "../../debounce";
import Loader from "../loader";

const Table: FC = () => {
  const [data, setData] = useState<IResults | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData().then(setData);
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredData = data?.results.filter((person) =>
    person.name.first
      .concat(person.name.last)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const onClick = () => {
    setSearch("");
  };

  const debouncedFilterData = debounce(onChange);

  return (
    <>
      <h2 className={"usersTable"}>Users Table</h2>
      <Filter onChange={debouncedFilterData} onClick={onClick} />
      {filteredData ? (
        filteredData.length ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
                <th>Location</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Registered date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(
                (
                  { name, picture, location, email, phone, registered },
                  index,
                ) => (
                  <TableBody
                    key={index}
                    name={name}
                    location={location}
                    registered={registered}
                    picture={picture}
                    email={email}
                    phone={phone}
                  />
                ),
              )}
            </tbody>
          </table>
        ) : (
          <div className={"noResultsText"}>Ничего не найдено</div>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Table;
