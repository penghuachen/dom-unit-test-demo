const { fireEvent, getByTestId } = require('@testing-library/dom');

describe('click button to add number', () => {
  test('test fn: addNumber', () => {
    // Arrange
    document.body.innerHTML = `
      <button data-testid="button">點擊+1</button>
      <p class="text">
        目前數字: 
        <span
          class="number"
          data-testid="number"
          >0
        </span>
      </p>
    `;

    const container = document.body;
    const btn = getByTestId(container, 'button');
    const number = getByTestId(container, 'number');
    require('../../js/demo-click');

    // Act
    fireEvent.click(btn);
    console.log(container.innerHTML);

    // Assert
    const newValue = Number(number.textContent);
    expect(newValue).toBe(1);
  })
})
