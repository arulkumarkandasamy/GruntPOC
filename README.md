# Description
This project is generated using yeoman with AngularJs, Bootstrap, Yeoman, Grunt and Bower. This is part of POC project to evaluate Gulp and Grunt and find out which is better suited for AngularJS projects in EMA.
To complete the project set up run the commands given below in 'Generating bower and npm dependencies'.

# Creating Grunt build infrastructure using AngularJs, Bootstrap, Yeoman, Grunt and Bower

1. Create project folder and open command prompt
2. set path=%path%;C:\devtools\nodejs\home;
3. set PATH=%PATH%;C:\devtools\git\home\bin
4. set path=%path%;C:\Users\kandasamya\AppData\Roaming\npm
5. npm config set registry http://repository.emea.eu.int/content/groups/npm-group/
6. npm install -g npm
7. npm install -g yo grunt-cli grunt bower  
8. create .bowerrc in root folder and copy below code
	{
	"proxy":"http://proxy.eudra.org:8080",
	"https-proxy":"http://proxy.eudra.org:8080"
	}
9. npm install -g generator-angular karma jasmine protractor bootstrap
10. yo angular
11. Answer as below to the interatcive commandline queries 
	? Would you like to use Gulp (experimental) instead of Grunt? No
	? Would you like to use Sass (with Compass)? No
	? Would you like to include Bootstrap? Yes
	? Would you like to use the Sass version of Bootstrap? Yes
	? Which modules would you like to include?
	  ( ) angular-animate.js
	 ( ) angular-aria.js
	 ( ) angular-cookies.js
	 (*) angular-resource.js
	 ( ) angular-messages.js
	 (*) angular-route.js
	 ( ) angular-sanitize.js
	>( ) angular-touch.js
	? Would you like to overwrite .bowerrc? No
	
12. Automatic tasks available in the project created with yeoman
	init/configure
	source code optimization (uglify, minify)
	unit test using Karma with PhantomJS
	
13. Grunt unit test with karma is not working. Looking to open PhantomJS browser

14. For further developing project add source files in below path
		js  - app\scripts
		css - app\styles
		img - app\images
		html (index.html) - app
		html (views) - app\views
	Unit test source files
		test\spec
		
15. Implementing CacheBust
	Add below entry in package.json and run npm install
		"grunt-cache-bust": "^0.6.0"
	Add below entry in jit-grunt
		cacheBust: 'grunt-cache-bust'
	Add below entry in grunt.initConfig
		cacheBust : {
                     options : {
                           encoding : 'utf8',
                           algorithm : 'md5',
                           length : 16,
                           deleteOriginals : true
                     },
                     assets : {
                           files : [ {
                                  baseDir : 'dist',
                                  src : 'dist/index.html'
                                  } ]
                           }
                     }
	Add below entries
		grunt.loadNpmTasks('grunt-cache-bust');
		grunt.registerTask('run:cachebustAndTest', [ 'cacheBust' ]);
	In command prompt execute the command 'grunt run:cachebustAndTest'
	
16. Generating war
	Add below entry in package.json and run npm install
		"grunt-war": "^0.4.8"
	Add below entry in jit-grunt
		gruntWar: 'grunt-war'
	Add below entry in grunt.initConfig
	
	    war: {
			target: {
			  options: {
				war_dist_folder: 'dist/target',    /* Folder where to generate the WAR. */
				war_name: 'phonecat'                    /* The name fo the WAR file (.war will be the extension) */
			  },
			  files: [
				{
				  expand: true,
				  cwd: 'dist/target',
				  src: ['**'],
				  dest: ''
				}
			  ]
			}
		}
	  
	Add below entries
	  grunt.loadNpmTasks('grunt-war');
	  grunt.registerTask('run:createWar', [ 'war' ]);


		
# Building the project from the code base

## Setting up dependencies

	Download and install node from below url
	https://nodejs.org/en/download/
	set nodejs and npm path like below
	C:\Users\ARUL KUMAR\AppData\Roaming\npm
	install git and set path

Run `npm install -g grunt grunt-cli bower`

Run `npm install`
Run `bower install`


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

