import { marked } from "marked";
import React, { ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Accordion.css";

interface AccordionItem {
  title: string;
  body: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean; // Whether multiple items can be open simultaneously
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  // Using useRef to avoid unnecessary re-renders 
  const nodeRef = useRef(null);
  const toggleItem = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg shadow-sm">
          {/* Accordion Header */}
          <button
            className="flex justify-between items-center w-full px-4 py-2 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                openIndexes.includes(index) ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Accordion Content */}
          <CSSTransition
            nodeRef={nodeRef}
            in={openIndexes.includes(index)}
            timeout={300}
            classNames="accordion"
            unmountOnExit
          >
            <div className="overflow-hidden transition-all duration-300" ref={nodeRef}>
              <div ref={nodeRef}
                className="px-4 py-3 border-t"
                dangerouslySetInnerHTML={{ __html: marked(item?.body || "") }}
              />
            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
