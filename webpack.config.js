const path = require('path');

const file_name = 'drawing_lines.js'
module.exports = {
  entry: './src/' + file_name,
  output: {
    filename: 'main_' + file_name,
    path: path.resolve(__dirname, 'dist'),
  },
};