"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "kdsubject",
    embedded: false
  },
  {
    name: "kdchapter",
    embedded: false
  },
  {
    name: "kdtopic",
    embedded: false
  },
  {
    name: "kdpage",
    embedded: false
  },
  {
    name: "kdsection",
    embedded: false
  },
  {
    name: "kdsectiontype",
    embedded: false
  },
  {
    name: "kdsectionvideo",
    embedded: false
  },
  {
    name: "kdsectiontheoryimage",
    embedded: false
  },
  {
    name: "kdsectiontheoryrichtext",
    embedded: false
  },
  {
    name: "kdsectionquiz",
    embedded: false
  },
  {
    name: "kdsectionvideosolurl",
    embedded: false
  },
  {
    name: "kdsectionassignment",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://192.168.99.100:4466`
});
exports.prisma = new exports.Prisma();
