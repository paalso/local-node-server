.PHONY: help install start

help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make start    - Start the Node.js server"

install:
	npm install

start:
	node server.js
