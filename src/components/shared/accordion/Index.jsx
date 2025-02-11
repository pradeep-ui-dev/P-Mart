import { useState } from "react";
import { v4 as uuid } from "uuid";
import AccordionRow from "./AccordionRow";

const AccordionWrapper = () => {
  const [records, setRecords] = useState(() => [
    {
      id: uuid(),
      title: "Heading 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde excepturi temporibus magni doloremque rem cupiditate qui perferendis perspiciatis, laborum ullam!"
    },
    {
      id: uuid(),
      title: "Heading 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde excepturi temporibus magni doloremque rem cupiditate qui perferendis perspiciatis, laborum ullam!"
    },
  ]);
  const [openId, setOpenId] = useState(records[0].id)
  const handleClick = (id) => {
    //console.log(id)
    setOpenId((prevId) => (
      prevId === id ? "" : id)
    )
  };
  return (
    <div className="flex justify-center bg-emerald-100">
      <AccordionRow accordionData={records} openId={openId} handleClick={handleClick} />      
    </div>
  );
};

export default AccordionWrapper;
