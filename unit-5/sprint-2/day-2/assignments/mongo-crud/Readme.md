# MONGO - CRUD

### Problem Statement :
- Store the given data.json file data in your mongo collection. give it any name. after storing write the following queries to fetch the data: paste these queries in document, and upload the document (text file is fine).

### 1. All users whose gender is male

#### Command

    db.users.find({gender:"Male"}).pretty();

### Result

    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e7"),
        "id" : 3,
        "full_name" : "Austin Abramson",
        "age" : 41,
        "gender" : "Male",
        "balance" : 22851.32,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e8"),
        "id" : 4,
        "full_name" : "Jacqueline Dargan",
        "age" : 30,
        "gender" : "Male",
        "balance" : 96103.99,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ea"),
        "id" : 6,
        "full_name" : "Dennie Mander",
        "age" : 54,
        "gender" : "Male",
        "balance" : 82066.1,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7eb"),
        "id" : 7,
        "full_name" : "Obie Finders",
        "age" : 44,
        "gender" : "Male",
        "balance" : 45655.22,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ed"),
        "id" : 9,
        "full_name" : "Lissie Jorin",
        "age" : 28,
        "gender" : "Male",
        "balance" : 75572.3,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ef"),
        "id" : 11,
        "full_name" : "Alden Hovenden",
        "age" : 27,
        "gender" : "Male",
        "balance" : 79110.83,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f1"),
        "id" : 13,
        "full_name" : "Deeanne Cheshire",
        "age" : 21,
        "gender" : "Male",
        "balance" : 86093.17,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f9"),
        "id" : 21,
        "full_name" : "Pall Entwhistle",
        "age" : 40,
        "gender" : "Male",
        "balance" : 89740.26,
        "native" : "United Kingdom",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fa"),
        "id" : 22,
        "full_name" : "Charissa Beushaw",
        "age" : 48,
        "gender" : "Male",
        "balance" : 24081.51,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ff"),
        "id" : 27,
        "full_name" : "Millard Corwood",
        "age" : 39,
        "gender" : "Male",
        "balance" : 46678.2,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f801"),
        "id" : 29,
        "full_name" : "Bentley Manshaw",
        "age" : 47,
        "gender" : "Male",
        "balance" : 50995.69,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }

## 2. all users whose ID is even
#### Command

    db.users.find({id :{$mod : [2,0]}}).pretty();

### Result


    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e6"),
        "id" : 2,
        "full_name" : "Niccolo Phethean",
        "age" : 22,
        "gender" : "Female",
        "balance" : 57087.13,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e8"),
        "id" : 4,
        "full_name" : "Jacqueline Dargan",
        "age" : 30,
        "gender" : "Male",
        "balance" : 96103.99,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ea"),
        "id" : 6,
        "full_name" : "Dennie Mander",
        "age" : 54,
        "gender" : "Male",
        "balance" : 82066.1,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ec"),
        "id" : 8,
        "full_name" : "Florrie Hulse",
        "age" : 30,
        "gender" : "Female",
        "balance" : 47600.35,
        "native" : "Norway",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ee"),
        "id" : 10,
        "full_name" : "Babbette Croci",
        "age" : 23,
        "gender" : "Female",
        "balance" : 25206,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f0"),
        "id" : 12,
        "full_name" : "Cirillo Okenden",
        "age" : 39,
        "gender" : "Female",
        "balance" : 34743.63,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f2"),
        "id" : 14,
        "full_name" : "Aguste Lorent",
        "age" : 30,
        "gender" : "Female",
        "balance" : 98010.85,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f4"),
        "id" : 16,
        "full_name" : "Thain Bimson",
        "age" : 20,
        "gender" : "Female",
        "balance" : 22834.8,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f6"),
        "id" : 18,
        "full_name" : "Dominique Hearon",
        "age" : 54,
        "gender" : "Female",
        "balance" : 72510.59,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f8"),
        "id" : 20,
        "full_name" : "Suki Stonall",
        "age" : 40,
        "gender" : "Female",
        "balance" : 38327.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fa"),
        "id" : 22,
        "full_name" : "Charissa Beushaw",
        "age" : 48,
        "gender" : "Male",
        "balance" : 24081.51,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fc"),
        "id" : 24,
        "full_name" : "Ethelyn Shenton",
        "age" : 52,
        "gender" : "Female",
        "balance" : 49906.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fe"),
        "id" : 26,
        "full_name" : "Rustin Stilly",
        "age" : 37,
        "gender" : "Female",
        "balance" : 47012.53,
        "native" : "United States",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f800"),
        "id" : 28,
        "full_name" : "Flori McGeouch",
        "age" : 49,
        "gender" : "Female",
        "balance" : 35360.33,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f802"),
        "id" : 30,
        "full_name" : "Marshall Cormack",
        "age" : 31,
        "gender" : "Female",
        "balance" : 48533.2,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 3
    }


## 3. Users who currently live in Japan

#### Command

    db.users.find({native:"Japan"}).pretty();

### Result

    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e6"),
        "id" : 2,
        "full_name" : "Niccolo Phethean",
        "age" : 22,
        "gender" : "Female",
        "balance" : 57087.13,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e7"),
        "id" : 3,
        "full_name" : "Austin Abramson",
        "age" : 41,
        "gender" : "Male",
        "balance" : 22851.32,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ed"),
        "id" : 9,
        "full_name" : "Lissie Jorin",
        "age" : 28,
        "gender" : "Male",
        "balance" : 75572.3,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f6"),
        "id" : 18,
        "full_name" : "Dominique Hearon",
        "age" : 54,
        "gender" : "Female",
        "balance" : 72510.59,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fa"),
        "id" : 22,
        "full_name" : "Charissa Beushaw",
        "age" : 48,
        "gender" : "Male",
        "balance" : 24081.51,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fb"),
        "id" : 23,
        "full_name" : "Tabor Boswell",
        "age" : 40,
        "gender" : "Female",
        "balance" : 48080.74,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ff"),
        "id" : 27,
        "full_name" : "Millard Corwood",
        "age" : 39,
        "gender" : "Male",
        "balance" : 46678.2,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f802"),
        "id" : 30,
        "full_name" : "Marshall Cormack",
        "age" : 31,
        "gender" : "Female",
        "balance" : 48533.2,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 3
    }


</br>

## 4. Users who are female and live in India

#### Command

    db.users.find({$and: [{gender:"Female",native:"India"}]}).pretty();

### Result

    No data 


</br>

## 5. Users who are more than 25 years old

#### Command

    db.users.find({age: {$gt: 25}}).pretty();

### Result

    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e7"),
        "id" : 3,
        "full_name" : "Austin Abramson",
        "age" : 41,
        "gender" : "Male",
        "balance" : 22851.32,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e8"),
        "id" : 4,
        "full_name" : "Jacqueline Dargan",
        "age" : 30,
        "gender" : "Male",
        "balance" : 96103.99,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e9"),
        "id" : 5,
        "full_name" : "Fredericka Twitchett",
        "age" : 28,
        "gender" : "Female",
        "balance" : 18461.35,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ea"),
        "id" : 6,
        "full_name" : "Dennie Mander",
        "age" : 54,
        "gender" : "Male",
        "balance" : 82066.1,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7eb"),
        "id" : 7,
        "full_name" : "Obie Finders",
        "age" : 44,
        "gender" : "Male",
        "balance" : 45655.22,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ec"),
        "id" : 8,
        "full_name" : "Florrie Hulse",
        "age" : 30,
        "gender" : "Female",
        "balance" : 47600.35,
        "native" : "Norway",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ed"),
        "id" : 9,
        "full_name" : "Lissie Jorin",
        "age" : 28,
        "gender" : "Male",
        "balance" : 75572.3,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ef"),
        "id" : 11,
        "full_name" : "Alden Hovenden",
        "age" : 27,
        "gender" : "Male",
        "balance" : 79110.83,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f0"),
        "id" : 12,
        "full_name" : "Cirillo Okenden",
        "age" : 39,
        "gender" : "Female",
        "balance" : 34743.63,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f2"),
        "id" : 14,
        "full_name" : "Aguste Lorent",
        "age" : 30,
        "gender" : "Female",
        "balance" : 98010.85,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f3"),
        "id" : 15,
        "full_name" : "Hoyt Keedwell",
        "age" : 45,
        "gender" : "Female",
        "balance" : 43347.73,
        "native" : "Norway",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f5"),
        "id" : 17,
        "full_name" : "Vikki Tonna",
        "age" : 52,
        "gender" : "Female",
        "balance" : 72014.18,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f6"),
        "id" : 18,
        "full_name" : "Dominique Hearon",
        "age" : 54,
        "gender" : "Female",
        "balance" : 72510.59,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f7"),
        "id" : 19,
        "full_name" : "Padraig Conre",
        "age" : 27,
        "gender" : "Female",
        "balance" : 84325.66,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f8"),
        "id" : 20,
        "full_name" : "Suki Stonall",
        "age" : 40,
        "gender" : "Female",
        "balance" : 38327.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f9"),
        "id" : 21,
        "full_name" : "Pall Entwhistle",
        "age" : 40,
        "gender" : "Male",
        "balance" : 89740.26,
        "native" : "United Kingdom",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fa"),
        "id" : 22,
        "full_name" : "Charissa Beushaw",
        "age" : 48,
        "gender" : "Male",
        "balance" : 24081.51,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fb"),
        "id" : 23,
        "full_name" : "Tabor Boswell",
        "age" : 40,
        "gender" : "Female",
        "balance" : 48080.74,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fc"),
        "id" : 24,
        "full_name" : "Ethelyn Shenton",
        "age" : 52,
        "gender" : "Female",
        "balance" : 49906.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fe"),
        "id" : 26,
        "full_name" : "Rustin Stilly",
        "age" : 37,
        "gender" : "Female",
        "balance" : 47012.53,
        "native" : "United States",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }


## 6. Users who are less than 50 years old and live in United State

#### Command

    db.users.find({age: {$lt: 50},native:"United States"}).pretty();

### Result

    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e8"),
        "id" : 4,
        "full_name" : "Jacqueline Dargan",
        "age" : 30,
        "gender" : "Male",
        "balance" : 96103.99,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e9"),
        "id" : 5,
        "full_name" : "Fredericka Twitchett",
        "age" : 28,
        "gender" : "Female",
        "balance" : 18461.35,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7eb"),
        "id" : 7,
        "full_name" : "Obie Finders",
        "age" : 44,
        "gender" : "Male",
        "balance" : 45655.22,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ee"),
        "id" : 10,
        "full_name" : "Babbette Croci",
        "age" : 23,
        "gender" : "Female",
        "balance" : 25206,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ef"),
        "id" : 11,
        "full_name" : "Alden Hovenden",
        "age" : 27,
        "gender" : "Male",
        "balance" : 79110.83,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f0"),
        "id" : 12,
        "full_name" : "Cirillo Okenden",
        "age" : 39,
        "gender" : "Female",
        "balance" : 34743.63,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f1"),
        "id" : 13,
        "full_name" : "Deeanne Cheshire",
        "age" : 21,
        "gender" : "Male",
        "balance" : 86093.17,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f2"),
        "id" : 14,
        "full_name" : "Aguste Lorent",
        "age" : 30,
        "gender" : "Female",
        "balance" : 98010.85,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f4"),
        "id" : 16,
        "full_name" : "Thain Bimson",
        "age" : 20,
        "gender" : "Female",
        "balance" : 22834.8,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f7"),
        "id" : 19,
        "full_name" : "Padraig Conre",
        "age" : 27,
        "gender" : "Female",
        "balance" : 84325.66,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f8"),
        "id" : 20,
        "full_name" : "Suki Stonall",
        "age" : 40,
        "gender" : "Female",
        "balance" : 38327.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fd"),
        "id" : 25,
        "full_name" : "Sadye Brigg",
        "age" : 21,
        "gender" : "Female",
        "balance" : 14752.3,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fe"),
        "id" : 26,
        "full_name" : "Rustin Stilly",
        "age" : 37,
        "gender" : "Female",
        "balance" : 47012.53,
        "native" : "United States",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f800"),
        "id" : 28,
        "full_name" : "Flori McGeouch",
        "age" : 49,
        "gender" : "Female",
        "balance" : 35360.33,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f801"),
        "id" : 29,
        "full_name" : "Bentley Manshaw",
        "age" : 47,
        "gender" : "Male",
        "balance" : 50995.69,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }


## 7. Total number of users who want to relocate to France (count only)

#### Command

    db.users.find({relocate_to: "France"}).count();
or

    db.users.count({relocate_to:"France"})

### Result

    9


## 8. Total number of users who are from USA and want to relocate to russia, sort them by age in ascending order.

#### Command

    db.users.find({$and: [{native: "United States", relocate_to: "Russia"}]}).sort({age: 1}).pretty();

### Result

    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f4"),
        "id" : 16,
        "full_name" : "Thain Bimson",
        "age" : 20,
        "gender" : "Female",
        "balance" : 22834.8,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f1"),
        "id" : 13,
        "full_name" : "Deeanne Cheshire",
        "age" : 21,
        "gender" : "Male",
        "balance" : 86093.17,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fd"),
        "id" : 25,
        "full_name" : "Sadye Brigg",
        "age" : 21,
        "gender" : "Female",
        "balance" : 14752.3,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f7"),
        "id" : 19,
        "full_name" : "Padraig Conre",
        "age" : 27,
        "gender" : "Female",
        "balance" : 84325.66,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e9"),
        "id" : 5,
        "full_name" : "Fredericka Twitchett",
        "age" : 28,
        "gender" : "Female",
        "balance" : 18461.35,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e8"),
        "id" : 4,
        "full_name" : "Jacqueline Dargan",
        "age" : 30,
        "gender" : "Male",
        "balance" : 96103.99,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f2"),
        "id" : 14,
        "full_name" : "Aguste Lorent",
        "age" : 30,
        "gender" : "Female",
        "balance" : 98010.85,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f0"),
        "id" : 12,
        "full_name" : "Cirillo Okenden",
        "age" : 39,
        "gender" : "Female",
        "balance" : 34743.63,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7eb"),
        "id" : 7,
        "full_name" : "Obie Finders",
        "age" : 44,
        "gender" : "Male",
        "balance" : 45655.22,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f5"),
        "id" : 17,
        "full_name" : "Vikki Tonna",
        "age" : 52,
        "gender" : "Female",
        "balance" : 72014.18,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ea"),
        "id" : 6,
        "full_name" : "Dennie Mander",
        "age" : 54,
        "gender" : "Male",
        "balance" : 82066.1,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }


## 9. t all users, sort them by total number of family member ASC and age DESC order

#### Command

    db.users.find().sort({family_members: 1, age: -1}).pretty();

### Result

    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f6"),
        "id" : 18,
        "full_name" : "Dominique Hearon",
        "age" : 54,
        "gender" : "Female",
        "balance" : 72510.59,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fc"),
        "id" : 24,
        "full_name" : "Ethelyn Shenton",
        "age" : 52,
        "gender" : "Female",
        "balance" : 49906.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fa"),
        "id" : 22,
        "full_name" : "Charissa Beushaw",
        "age" : 48,
        "gender" : "Male",
        "balance" : 24081.51,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f801"),
        "id" : 29,
        "full_name" : "Bentley Manshaw",
        "age" : 47,
        "gender" : "Male",
        "balance" : 50995.69,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e7"),
        "id" : 3,
        "full_name" : "Austin Abramson",
        "age" : 41,
        "gender" : "Male",
        "balance" : 22851.32,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f8"),
        "id" : 20,
        "full_name" : "Suki Stonall",
        "age" : 40,
        "gender" : "Female",
        "balance" : 38327.58,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f9"),
        "id" : 21,
        "full_name" : "Pall Entwhistle",
        "age" : 40,
        "gender" : "Male",
        "balance" : 89740.26,
        "native" : "United Kingdom",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fe"),
        "id" : 26,
        "full_name" : "Rustin Stilly",
        "age" : 37,
        "gender" : "Female",
        "balance" : 47012.53,
        "native" : "United States",
        "relocate_to" : "Sweden",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e8"),
        "id" : 4,
        "full_name" : "Jacqueline Dargan",
        "age" : 30,
        "gender" : "Male",
        "balance" : 96103.99,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ec"),
        "id" : 8,
        "full_name" : "Florrie Hulse",
        "age" : 30,
        "gender" : "Female",
        "balance" : 47600.35,
        "native" : "Norway",
        "relocate_to" : "Russia",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ef"),
        "id" : 11,
        "full_name" : "Alden Hovenden",
        "age" : 27,
        "gender" : "Male",
        "balance" : 79110.83,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 1
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f800"),
        "id" : 28,
        "full_name" : "Flori McGeouch",
        "age" : 49,
        "gender" : "Female",
        "balance" : 35360.33,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f3"),
        "id" : 15,
        "full_name" : "Hoyt Keedwell",
        "age" : 45,
        "gender" : "Female",
        "balance" : 43347.73,
        "native" : "Norway",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7eb"),
        "id" : 7,
        "full_name" : "Obie Finders",
        "age" : 44,
        "gender" : "Male",
        "balance" : 45655.22,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7fb"),
        "id" : 23,
        "full_name" : "Tabor Boswell",
        "age" : 40,
        "gender" : "Female",
        "balance" : 48080.74,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f2"),
        "id" : 14,
        "full_name" : "Aguste Lorent",
        "age" : 30,
        "gender" : "Female",
        "balance" : 98010.85,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ed"),
        "id" : 9,
        "full_name" : "Lissie Jorin",
        "age" : 28,
        "gender" : "Male",
        "balance" : 75572.3,
        "native" : "Japan",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f7"),
        "id" : 19,
        "full_name" : "Padraig Conre",
        "age" : 27,
        "gender" : "Female",
        "balance" : 84325.66,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ee"),
        "id" : 10,
        "full_name" : "Babbette Croci",
        "age" : 23,
        "gender" : "Female",
        "balance" : 25206,
        "native" : "United States",
        "relocate_to" : "France",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e6"),
        "id" : 2,
        "full_name" : "Niccolo Phethean",
        "age" : 22,
        "gender" : "Female",
        "balance" : 57087.13,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f1"),
        "id" : 13,
        "full_name" : "Deeanne Cheshire",
        "age" : 21,
        "gender" : "Male",
        "balance" : 86093.17,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f4"),
        "id" : 16,
        "full_name" : "Thain Bimson",
        "age" : 20,
        "gender" : "Female",
        "balance" : 22834.8,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 2
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ea"),
        "id" : 6,
        "full_name" : "Dennie Mander",
        "age" : 54,
        "gender" : "Male",
        "balance" : 82066.1,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f5"),
        "id" : 17,
        "full_name" : "Vikki Tonna",
        "age" : 52,
        "gender" : "Female",
        "balance" : 72014.18,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7f0"),
        "id" : 12,
        "full_name" : "Cirillo Okenden",
        "age" : 39,
        "gender" : "Female",
        "balance" : 34743.63,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7ff"),
        "id" : 27,
        "full_name" : "Millard Corwood",
        "age" : 39,
        "gender" : "Male",
        "balance" : 46678.2,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f802"),
        "id" : 30,
        "full_name" : "Marshall Cormack",
        "age" : 31,
        "gender" : "Female",
        "balance" : 48533.2,
        "native" : "Japan",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e9"),
        "id" : 5,
        "full_name" : "Fredericka Twitchett",
        "age" : 28,
        "gender" : "Female",
        "balance" : 18461.35,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }
    {
        "_id" : ObjectId("62bc5968605460fec2d1f7e5"),
        "id" : 1,
        "full_name" : "Ilyssa Pawelek",
        "age" : 23,
        "gender" : "Female",
        "balance" : 12083.74,
        "native" : "United Kingdom",
        "relocate_to" : "France",
        "family_members" : 3
    }
    {   
        "_id" : ObjectId("62bc5968605460fec2d1f7fd"),
        "id" : 25,
        "full_name" : "Sadye Brigg",
        "age" : 21,
        "gender" : "Female",
        "balance" : 14752.3,
        "native" : "United States",
        "relocate_to" : "Russia",
        "family_members" : 3
    }