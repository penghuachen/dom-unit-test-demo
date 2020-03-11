const { fireEvent, getByTestId } = require('@testing-library/dom');
require('@testing-library/jest-dom')

describe('press Enter key to change background color.', () => {
  test('test fn: changeBgColor', () => {
    // Arrange
    document.body.innerHTML = `<div data-testid="box" class="box"></div>`;

    const container = document.body;
    const boxDom = getByTestId(container, 'box');
    require('../../js/demo-keydown');

    // Act
    fireEvent.keyDown(window, { key: 'Enter', keyCode: 13,}); 
    console.log(container.innerHTML);

    // Assert
    expect(boxDom).toHaveClass('active');
  })
})