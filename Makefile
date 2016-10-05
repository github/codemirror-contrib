all: \
	lib/mode/meta.js

lib/%.js: src/%.js
	mkdir -p $(@D)
	node_modules/.bin/rollup --config rollup.config.js $< > $@

lint:
	./node_modules/.bin/eslint src/

test: lint
