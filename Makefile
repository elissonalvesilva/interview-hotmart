.PHONY: build start stop remove logs lint mocha test run release

SHELL := /bin/bash
branch := $(shell git branch | grep \* | cut -d ' ' -f2)

build:
	rm -rf ./node_modules
	yarn

start:
	yarn start

test-watch:
	yarn test:watch

test:
	yarn test

## Version management
release:
ifeq ($(branch),master)
	yarn release
	git push origin master
	git push --tags
else
	@echo "You need to be in branch master"
endif

## Prerelease
prerelease:
	yarn release -- --prerelease
	git push origin $(git symbolic-ref --short HEAD)
	git push --tags
