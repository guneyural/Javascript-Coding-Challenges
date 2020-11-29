import React, { useRef, useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = (props) => {
  const { info, title } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      textRef.current.classList.add("expand");
    } else {
      textRef.current.classList.remove("expand");
    }
  }, [isExpanded]);

  const expand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <section className="accordion-header">
        <p className="accordion-header-text">{title}</p>
        <span className="expand-icon" onClick={() => expand()}>
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </section>
      <section className="accordion-body" ref={textRef}>
        <p>{info}</p>
      </section>
    </>
  );
};

export default AccordionItem;
