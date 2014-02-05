module.exports = function (grunt) {
    grunt.initConfig({
        protoc: {
            php: {
                proto: ["*.proto"],
                includes: ["."],
                plugin: process.env['HOME'] + "/.composer/vendor/bin/protoc-gen-php",
                output: "php"
            },
            cpp: {
                proto: ["*.proto"],
                includes: ["."],
                output: "cpp"
            }
        }
    });
    grunt.loadTasks('tasks');

    //grunt.loadNpmTasks('grunt-protoc');
};