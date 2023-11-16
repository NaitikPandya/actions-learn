import { render,screen, fireEvent } from '@testing-library/react';
import App from './App';

test('check the todo App', async () => {
   render(<App />);
   const ItemText = screen.getByTestId('itemTextInput');
   const addButton = screen.getByTestId('addButton');

    fireEvent.change(ItemText,{target:{value: 'tata'}});
    expect(ItemText).toHaveValue('tata');
    fireEvent.click(addButton);
    expect(ItemText).toHaveValue('');
    expect(screen.getByText('tata')).toBeVisible();
  
  });
