import { useState } from "react";
import AccordionItem from "./AccordionItem";
const AccordionRow = ({accordionData, openId, handleClick}) => {    
    return (
        <div className="w-full max-w-full mx-auto px-4 md:px-6 py-24 divide-y divide-slate-200">
        {accordionData.map((accordionItemData) => {
          const { id, title, description } = accordionItemData;
          return (
            <AccordionItem key={id} id={id} title={title} description={description} openId={openId} handleClick={handleClick} />
          );
        })}
      </div>
    )
}
export default AccordionRow;