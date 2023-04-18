module.exports = {
    entry: './src/index.js',
    output: {
       filename: 'bundle.js',
       path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
 }; 