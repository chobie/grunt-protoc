# grunt-protoc

protoc generator task

## config

````
        protoc: {
            /*
            <plugin>: {
              proto: [targets], // required
              includes: [],     // optional
              plugin: "",       // optional
              output: "tmp"     // required
            },*/
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
````

## LICENSE

MIT LICENSE