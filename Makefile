all: \
	lib/mode/meta.js

lib/%.js: src/%.js
	mkdir -p $(@D)
	node_modules/.bin/rollup --config rollup.config.js $< > $@
