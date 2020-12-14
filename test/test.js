var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3000");

describe("Test for parking slot",function(){
    it("should add a slot",function(done){
  
      server
    .post("/api/slot/addSlot")
    .send({"slotNo":`${Math.floor(Math.random() * 90 + 10)}A`})
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
          res.status.should.equal(200);
        done();
      });
    });
    it("should return a slot for car",function(done){
        server
          .post("/api/slot/getSlot")
          .send({"carNo":"KA10JR7575"})
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err,res){
            res.status.should.equal(200);
            done();
          });
    });
    it("should unpark a slot",function(done){
        server
          .put("/api/slot/unparkSlot")
          .send({"slotNo":"5A"})
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err,res){
            res.status.should.equal(200);
            done();
          });
    });
    it("should return details of a slot",function(done){
        server
          .get("/api/slot/slotinfo")
          .send({"slotNo":"5A"})
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err,res){
            res.status.should.equal(200);
            done();
          });
        });
});
  



