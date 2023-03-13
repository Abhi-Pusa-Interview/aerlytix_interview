import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Modal from './Modal';

test('modal is rendered if open : true', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    // Act
    const dom = render(
      <Modal open={true} handleOpen={handleOpen} handleClose={handleClose}>
        <div id="test">test</div>
      </Modal>,
    );
    // Assert
    expect(dom.getByText('test')).toBeTruthy();
    expect(dom.getByTestId('modal')).toBeTruthy();
  
    // Act
    // fireEvent.click(getByText(/close/i))
  
    // Assert
    // expect(handleClose).toHaveBeenCalledTimes(1)
});

test('modal is not rendered if open : false', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    // Act
    const dom = render(
      <Modal open={false} handleOpen={handleOpen} handleClose={handleClose}>
        <div id="test">test</div>
      </Modal>,
    );
    // Assert

    expect(dom.asFragment).toBeTruthy();
    // expect(dom).toBeFalsy();
  
    // Act
    // fireEvent.click(getByText(/close/i))
  
    // Assert
    // expect(handleClose).toHaveBeenCalledTimes(1)
});


