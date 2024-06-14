// App.js
import React, { useState } from 'react';
import IconPicker from './IconPicker';
import * as Icons from 'feather-icons-react';
import './App.css';

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setShowPicker(false);
  };

  const SelectedIconComponent = selectedIcon ? Icons[selectedIcon] : null;

  return (
    <div className="app">
      <div className="icon-display" onClick={() => setShowPicker(true)}>
        {SelectedIconComponent && <SelectedIconComponent />}
      </div>
      {showPicker && (
        <IconPicker
          rowsInOnePage={4}
          columnsInOnePage={4}
          iconHeight="100px"
          iconWidth="100px"
          pickerHeight="500px"
          pickerWidth="500px"
          onSelectIcon={handleIconSelect}
        />
      )}
    </div>
  );
};

export default App;
