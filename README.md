CAR PARKING SLOT 
-------------------------

Server is running of PORT defined in .env file , currently it is 3000.

Number of slots by default is 10. You can change it in .env file.

I have used express-rate-limit to limit the rate at not more than 10 requests in 10 seconds.


TESTING OF APPLICATION
----------------------------------

test/test.js

To run the test you need to 'mocha' to be installed globally in your system.
npm i -g mocha

To test - Just run mocha  --- > mocha

START THE SERVER
-----------------------------------

command --- nodemon node server.js

Server will start running on port 3000 , http://localhost:3000
It will create number of defined slots , if the slots are not created.

I have used mongodb as database to manage the data of slot and car number.

There are total of 4 endpoints.
-----------------------------------

1 . You can add the slot manually also.

http://localhost:3000/api/slot/addSlot , POST method

BODY - {
        "slotNo":"1A"
       }

RESPONSE(200) - {
                  "message": "Slot Created"
                }
Error if slot is already present.

2. You can park the car and you will get the slot number.

http://localhost:3000/api/slot/getSlot , POST method

BODY - {
        "carNo":"KA10JR1010"
       }

RESPONSE(200) - {
                "message": "Your slot number for car KA10JR1010 is 1A"
                }
Error if the carNo is invalid or if the slot is not available.

3. You can unpark the car.

http://localhost:3000/api/slot/unparkSlot , PUT method

BODY - {
        "slotNo":"1A"
       }
RESPONSE(200) - {
                "message": "Slot is free to use for other users"
                }

Error if slot number is invalid.

4. You can receive the details of slot number or car number, first priority is slot number.

http://localhost:3000/api/slot/slotInfo , GET method

BODY - {
        "slotNo":"1A",
        "carNo":"KA10JR1010"
       }
RESPONSE(200) - {
               "Slot_Number": "1A",
               "Car_Number": "KA10JR1010"
               }

Error if the slot number or car number is invalid.


ABOUT DEVELOPER
---------------------

NAME - PRIYAM PODDAR

I am MERN stack developer working on Full stack projects , and i have also built some of the projects which are running live.
Talking about my experience i have worked and gain experience of 6 months.