import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the main title and key CTA', () => {
    render(<App />);

    expect(screen.getByText(/PolicyForge AI/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Start with PolicyForge AI/i })).toBeTruthy();
  });
});
