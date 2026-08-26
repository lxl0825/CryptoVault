// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoVault/i);
    expect(titleElement).toBeInTheDocument();
});
