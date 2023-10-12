import React, { useState } from "react";

const CheckList = () => {
  const [show, setShow] = useState(true);
  const [dataList, setDataList] = useState([
    "newlist",
    "updatedList",
    "show List",
  ]);

  const remove = (list) => {
    const delete1 = dataList.filter((item) => list !== item);
    setDataList(delete1);
  };

  const checkHandle = (item) => {
    setShow((prevItem) => ({ ...prevItem, [item]: !prevItem[item] }));
  };

  return (
    <div>
      <ul>
        {dataList.map((data) => (
          <li>
            <input type="checkbox" onChange={() => checkHandle(data)} />
            {data}
            {show[data] && <button onClick={() => remove(data)}>x</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CheckList;
