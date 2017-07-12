var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../index.js');

chai.use(chaiHttp);
describe('/GET book', function(){
    it('it should GET all the books', function(done){
        chai.request(server)
        .get('/books')
        .end(function(err, res){
            res.should.have.status(200);
            res.body.should.be.a('array');
            // res.body.length.should.be.eql(0);
        done();
        });
    });
});


// describe('/POST book', () => {
//       it('it should not POST a book without pages field', (done) => {
//         let book = {
//             title: "The Lord of the Rings",
//             author: "J.R.R. Tolkien",
//             year: 1954
//         }
//         chai.request(server)
//         .post('/books')
//         .send(book)
//         .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             res.body.should.have.property('errors');
//         done();
//         });
//     });
// });


