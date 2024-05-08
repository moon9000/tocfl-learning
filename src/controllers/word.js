//import { prisma } from "../prisma";

const prisma = require('../../src/prisma.js');

const findAllWords = async (req, res) => {
  const { page, size } = req?.query;
  const { limit, offset } = getPagination(page, size);
  console.log('in findAllWords before try');
  try {
    const response = await prisma.postgres.findMany({skip: offset - 100});
    console.log('in findAllWords try, response is :', response);
    return response;
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPagination = (page, size) => {
  const limit = size ? +size : 100;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

module.exports = findAllWords;