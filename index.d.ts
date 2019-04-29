import express = require("express");

declare namespace queryParser {}
/**
 * Parser a Json as query parameters.
 */
declare function queryParser(): express.RequestHandler;
export = queryParser;
