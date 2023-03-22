/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { App, WrrapedApp } from './App';

describe('App', () => {
    it('Renders hello world', () => {
        // ARRANGE
        render(<WrrapedApp />);

        // ACT
        // EXPECT
        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent('Home Page');
    });

    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/this-route-does-not-exsit']}>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                level: 1
            })
        ).toHaveTextContent('Not Found Page');
    });
});