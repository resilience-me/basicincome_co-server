SRC = index.js spec/find-spec.js

test:
	@node node_modules/.bin/jshint $(SRC)
	@NODE_ENV=test node node_modules/.bin/mocha \
	--require should \
	--reporter spec \
	spec
