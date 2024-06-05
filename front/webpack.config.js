module.exports = {
    entry: {
        index: "./scripts/index.js",
        form: "./scripts/formulario.js"},
    output:{
        filename: "[name].js",
        path: __dirname + "/public"
        
    },
};