export const theme = Object.freeze({
	fontSizes: {
		xsmall: '10px',
		small: '12px',
		medium: '14px',
		large: '16px',
		xl: '18px',
		xxl: '28px',
		xxxl: '40px',
	},

	breakpoints: {
		xs: '320px',
		s: '375px',
		m: '768px',
		l: '1280px',
	},

	spacing: value => `${4 * value}px`,
});
