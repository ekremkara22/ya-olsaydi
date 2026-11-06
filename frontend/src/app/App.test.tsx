import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the scenario question as the main heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /kasabaya taşınsaydın/i }),
    ).toBeInTheDocument();
  });

  it('renders inside a main landmark', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
