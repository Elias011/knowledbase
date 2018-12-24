## Install Sass on ubuntu

1. install ruby ($ sudo apt-get install ruby-full)

2. install sass sudo gem install sass

## Watch and Compile Sass to Css
1. You can watch individual files or directories with the --watch flag.
The watch flag tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass.
If you wanted to watch (instead of manually build) your input.scss file, you'd just add the watch flag to your command, like so:
```
sass --watch input.scss output.css**
```
2. You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. In this example:

```
sass --watch app/sass:public/stylesheets
```
