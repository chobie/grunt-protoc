// grunt-protoc
// ==========
// * GitHub: https://github.com/chobie/grunt-protoc
// * Copyright (c) 2014 Shuhei Tanuma
// * Licensed under the MIT license.

module.exports = function (grunt) {
    var proc = require('child_process')
        , _ = grunt.util._
        , f = require('util').format
        , log = grunt.log
        , verbose = grunt.verbose;

    grunt.registerMultiTask('protoc', 'generate protoc mesages.', function () {
        var data = this.data
            , execOptions = {}
            , callback = function() {}
            , childProcess
            , exitCodes = 0
            , done = this.async()
            , proto = data.proto
            , command = "protoc"
            , target = this.target
            , plugin = data.plugin
            , output = data.output
            , includes = data.includes
            , include_path = data.include_path
            ;

        proto = _.isArray(proto) ? proto : [proto];
        proto = proto.join(" ");

        command  = command + " --" + target + "_out=" + output;

        if (!_.isUndefined(plugin)) {
            command  = command + " --plugin=" + plugin;
        }

        if (!_.isEmpty(include_path)) {
          command  = command + " --include_imports=" + include_path;
        }

        command  = command + " " + proto


        verbose.ok(command);

        exitCodes = _.isArray(exitCodes) ? exitCodes : [exitCodes];
        childProcess = proc.exec(command, execOptions, callback);

        childProcess.stdout.on('data', function (d) { log.write(d); });
        childProcess.stderr.on('data', function (d) { log.error(d); });

        childProcess.on('exit', function(code) {
            if (exitCodes.indexOf(code) < 0) {
                log.error(f('Exited with code: %d.', code));
                return done(false);
            }

            verbose.ok(f('Exited with code: %d.', code));
            done();
        });
    });
};