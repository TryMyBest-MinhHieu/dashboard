/** @type {import('prettier').Config} */
module.exports = {
	// Cấu hình cơ bản
	semi: true, // Thêm dấu chấm phẩy ở cuối câu lệnh
	trailingComma: 'es5', // Thêm dấu phẩy cuối cùng trong các đối tượng và mảng (tương thích ES5)
	singleQuote: true, // Sử dụng dấu nháy đơn thay vì nháy kép
	printWidth: 80, // Độ dài tối đa của dòng là 80 ký tự
	tabWidth: 2, // Độ rộng của tab là 2 khoảng trắng
	useTabs: false, // Sử dụng khoảng trắng thay vì tab
	bracketSpacing: false, // Thêm khoảng trắng giữa dấu ngoặc và nội dung: { foo: bar }
	arrowParens: 'always', // Luôn thêm dấu ngoặc cho tham số trong arrow function: (x) => x
	endOfLine: 'lf', // Sử dụng line ending kiểu Unix (LF)
	
	// Tích hợp với TypeScript và React
	jsxSingleQuote: false, // Sử dụng nháy kép trong JSX (phù hợp với React)
	bracketSameLine: false, // Đưa dấu > của JSX xuống dòng mới
	
	// Các tùy chọn khác (tuỳ ý)
	overrides: [
		{
			files: '*.{ts,tsx}', // Áp dụng cho file TypeScript và TSX
			options: {
				parser: 'typescript', // Sử dụng parser TypeScript
			},
		},
	],
};
