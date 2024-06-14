# Icon Picker Component

This project is a React component for picking icons from the Feather Icons library. It features a paginated icon picker that allows users to select an icon, which then displays in a designated area.

## Features

- Displays Feather Icons in a grid format.
- Pagination for icons.
- Customizable icon picker dimensions and grid layout.
- Clickable area to open the icon picker.
- Selected icon displayed in the clickable area.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/icon-picker.git
    cd icon-picker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

### Props

The `IconPicker` component accepts the following props:

- `rowsInOnePage`: Number of rows in one page of the icon picker.
- `columnsInOnePage`: Number of columns in one page of the icon picker.
- `iconHeight`: Height of each icon in the picker.
- `iconWidth`: Width of each icon in the picker.
- `pickerHeight`: Height of the icon picker (default: 500px).
- `pickerWidth`: Width of the icon picker (default: 500px).
- `onSelectIcon`: Function called when an icon is selected.

### Example

To use the `IconPicker` component, import it into your main component and configure the props as needed. The selected icon will be displayed in the designated clickable area.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


