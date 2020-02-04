import React, { ReactElement, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span>
    {isOpen ? (
      <IconContext.Provider value={{ className: 'text-red-400' }}>
        <FaMinus />
      </IconContext.Provider>
    ) : (
      <IconContext.Provider value={{ className: 'text-red-400' }}>
        <FaPlus />
      </IconContext.Provider>
    )}
  </span>
);

export default function CollapseComponent(
  props: CollapseComponentProps,
): ReactElement {
  const { title, description } = props;
  const [openCollapse, setOpenedCollapse] = useState(false);

  return (
    <div className="mb-4 pb-4 border-b border-gray-300">
      <div className="w-full">
        <button
          onClick={() => setOpenedCollapse(!openCollapse)}
          className="flex items-center w-full justify-between "
        >
          <span className="text-purple-600 text-xl font-medium">{title}</span>
          <ToggleIcon isOpen={openCollapse} />
        </button>
      </div>
      {openCollapse && <p className="mt-5 text-purple-800">{description}</p>}
    </div>
  );
}

export interface CollapseComponentProps {
  title: string;
  description: string;
}
