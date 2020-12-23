.PHONY: install start test test-watch build release

SHELL := /bin/bash
branch := $(shell git branch | grep \* | cut -d ' ' -f2)

install:
	rm -rf ./node_modules
	yarn

start:
	yarn start

test-watch:
	yarn test:watch

test:
	yarn test

build:
	yarn build

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
