import { writable } from 'svelte/store';

const theme = writable('light');
export function toggleTheme(theme, $theme) {
	return $theme === 'light' ? theme.set('dark') : theme.set('light');
}

export { theme };
