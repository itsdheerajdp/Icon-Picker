// IconPicker.js
import React, { useState } from 'react';
import * as Icons from 'feather-icons-react';
import './IconPicker.css';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '500px',
  onSelectIcon,
}) => {
  const allIcons = Object.keys(Icons);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(allIcons.length / iconsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleIconClick = (icon) => {
    onSelectIcon(icon);
  };

  const renderIcons = () => {
    const startIndex = currentPage * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    const iconsToRender = allIcons.slice(startIndex, endIndex);

    return iconsToRender.map((icon, index) => {
      const IconComponent = Icons[icon];
      return (
        <div
          key={index}
          className="icon-item"
          style={{ height: iconHeight, width: iconWidth }}
          onClick={() => handleIconClick(icon)}
        >
          <IconComponent />
        </div>
      );
    });
  };

  return (
    <div className="icon-picker" style={{ height: pickerHeight, width: pickerWidth }}>
      <div className="icon-grid" style={{ gridTemplateRows: `repeat(${rowsInOnePage}, 1fr)`, gridTemplateColumns: `repeat(${columnsInOnePage}, 1fr)` }}>
        {renderIcons()}
      </div>
      <div className="pagination-controls">
        <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <button disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IconPicker;
