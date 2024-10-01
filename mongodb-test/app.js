const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const students = database.collection("students");

  // 문제 1.
  // const writeInventory = await inventory.insertOne({
  //   item: 'canvas',
  //   qty: 100,
  //   tags: ['cotton'],
  //   size: { h: 28, w: 35.5, uom: 'cm' }
  // });
  // console.log('result:', writeInventory);

  // 문제 2.
  // const items = [
  //   {
  //     item: "journal",
  //     qty: 25,
  //     tags: ["blank", "red"],
  //     size: { h: 14, w: 21, uom: "cm" },
  //   },
  //   {
  //     item: "mat",
  //     qty: 85,
  //     tags: ["gray"],
  //     size: { h: 27.9, w: 35.5, uom: "cm" },
  //   },
  //   {
  //     item: "mousepad",
  //     qty: 25,
  //     tags: ["gel", "blue"],
  //     size: { h: 19, w: 22.85, uom: "cm" },
  //   },
  // ];
  // const insertInventories = await inventory.insertMany(items);
  // console.log("result:", insertInventories);

  // const findInventories = await inventory.find({}).toArray();
  // console.log("result:", findInventories);

  // 문제 3.
  // const items = [
  //   {
  //     items: 'journal',
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: 'cm' },
  //     status: 'A'
  //   }, {
  //     items: 'notebook',
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: 'in' },
  //     status: 'A'
  //   }, {
  //     items: 'paper',
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: 'in' },
  //     status: 'D'
  //   }, {
  //     items: 'planner',
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: 'cm' },
  //     status: 'D'
  //   }, {
  //     items: 'postcard',
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: 'cm' },
  //     status: 'A'
  //   }
  // ];
  // const insertInventories = await inventory.insertMany(items);
  // console.log('result:', insertInventories);
  // const findInventories = await inventory.find({status: 'D'}).toArray();
  // console.log('result:', findInventories);

  // 문제 5.
  // const findItems = await inventory
  //   .find({ $and: [{ status: "A" }, { qty: 50 }] })
  //   .toArray();
  // console.log("result:", findItems);

  // 문제 6.
  // const findItems = await inventory
  //   .find({
  //     $or: [{ status: "A" }, { status: "B" }],
  //   })
  //   .toArray();
  // console.log("result:", findItems);

  // 문제 7.
  // const findItems = await inventory.find({$and : [{status: 'A'}, {qty: {$lt: 30}}]}).toArray();
  // console.log('result:', findItems);

  // 문제 8.
  // const findItems = await inventory
  //   .find({ $set: { $or: [{ status: "A" }, { qty: { $lt: 30 } }] } })
  //   .toArray();
  // console.log("result:", findItems);

  // 문제 9.
  // const findItems = await inventory.find({ "size.uom": "in" }).toArray();
  // console.log('result:', findItems);

  // 문제 10.
  // const findItems = await inventory.find({"size.h": {$gt: 10}}).toArray();
  // console.log('result:', findItems);

  // 문제 11.
  // const writeStudents = await students.insertMany([
  //   {
  //     _id: 1,
  //     test1: 95,
  //     test2: 92,
  //     test3: 90,
  //     modified: new Date('01/05/2020')
  //   }, {
  //     _id: 2,
  //     test1: 98,
  //     test2: 100,
  //     test3: 102,
  //     modified: new Date('01/05/2020')
  //   }, {
  //     _id: 3,
  //     test1: 95,
  //     test2: 110,
  //     modified: new Date('01/05/2020')
  //   }
  // ]);
  // console.log('result:', writeStudents);
  // const updateStudent = await students.updateOne({ _id: 3 }, { $set: { test3: 98 } });
  // console.log('result:', updateStudent);

  // 문제 12.
  // const updateStudents = await students.updateMany(
  //   {},
  //   { $set: { test1: 0, status: "modified" } }
  // );
  // console.log("result:", updateStudents);

  // 문제 13.
  // const deleteStudent = await students.deleteOne({
  //   test2: 92
  // });
  // console.log('result:', deleteStudent);

  // 문제 14.
  // const deleteStudents = await students.deleteMany({
  //   test1: 0
  // });
  // console.log('result:', deleteStudents);
}

run();
