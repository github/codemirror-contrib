all: \
	lib/mode/meta.js \
	lib/mode/abap/abap.js

lib/%.js: src/%.js
	mkdir -p $(@D)
	node_modules/.bin/rollup --config rollup.config.js $< > $@

lint:
	./node_modules/.bin/eslint src/

test: all lint

clean:
	git clean -fdx lib/
