const User = require("../Model/user")
const jwt = require("jsonwebtoken")
const axios = require('axios');

const user_all = async (req, res) => {
  try {
    const users = await User.find()
    res.clearCookie(`jwToken`);
    res.json(users)
  } catch (error) {
    res.json({ message: error });
  }
}

const user_details = async (req, res) => {
  try {
    const users = await User.findById(req.params.productId)
    res.json(users)
  } catch (error) {
    res.json({ message: error });
  }
}
const user_create = async (req, res) => {
  let user_duplicate_mobile_number = await User.find({mobile_number:req.body.mobile_number})
  let user_duplicate_email = await User.find({email:req.body.email})
  console.log("user_duplicate_email",user_duplicate_email);
  console.log("user_duplicate_mobile_number",user_duplicate_mobile_number);
  if(user_duplicate_mobile_number.length == 0 && user_duplicate_email.length == 0){
   let by_default_image = "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
     const user = new User({
       user_name: req.body.user_name,
       email: req.body.email,
       photo: req.body.photo != undefined ? req.body.photo : by_default_image,
       mobile_number: req.body.mobile_number,
       token: ""
     })
     console.log("++++++++++user", user);
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) && /^\d{10}$/.test(req.body.mobile_number)) {
    //  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) && req.body.mobile_number.match(/^\d{10}$/)) {
       try {
         console.log("++++++++++user");
         const saveUser = await user.save();
         console.log("++++++++++saveUser", saveUser);
         if (saveUser) {
           res.status(201).send(saveUser);
         }
   
       } catch (error) {
         res.status(400).send(error);
       }
     } else {
       console.log("Errrorrrrrrrrrrr");
     }
 }

}

const user_update = async (req, res) => {
  console.log("req",req);
  const users = {
    user_name: req.body.user_name,
    email: req.body.email,
    photo: req.body.photo,
    mobile_number: req.body.mobile_number,
    token: req.body.token
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(users.email)) {
    try {

      const updateUsers = await User.findByIdAndUpdate(
        { _id: req.params.productId },
        users
      );
      res.json(updateUsers);
    } catch (error) {
      res.json({ message: error });
    }
  } else {
    console.log("Errrorrrrrrrrrrr");
  }

}
const user_delete = async (req, res) => {
  try {
    const deleteUsers = await User.findByIdAndDelete(req.params.productId);
    res.json(deleteUsers);
  } catch (error) {
    res.json({ message: error });
  }
}

const login_user_fun = async (req, res) => {
  const users = await User.find({ mobile_number: req.body.mobile_number})
  console.log("users",users);
  
  const login_user = {
    mobile_number: req.body.mobile_number
  }
  console.log("login_user",login_user);

  try {
    const token = jwt.sign(
      { user_id: users._id, mobile_number: login_user.mobile_number },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    console.log("++++++++++users", token);
    // save user token
    users[0].token = token;
    let update_user =  {
      user_name: users[0].user_name,
      email: users[0].email,
      photo: users[0].photo,
      mobile_number: users[0].mobile_number,
      token: users[0].token,
  }
    // await user_update(update_user)
    await axios.put(`http://localhost:${process.env.PORT}/register/${users[0]._id}`, update_user);
    console.log("++++++++++users", users);
    res.cookie(`jwToken`, token);

    // user
    res.status(200).json(users);

  } catch (error) {
    console.log("error", error);

  }

}

const showData = (req, res) => {
  try {
    const data = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
          }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        }
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
          }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
          }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
          }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
          "name": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        }
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
          }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        }
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
          "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
          }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
          "name": "Yost and Sons",
          "catchPhrase": "Switchable contextually-based project",
          "bs": "aggregate real-time technologies"
        }
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
          "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
          }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }
      }
    ]
    console.log(req.cookies)
    // res.json(data)
    res.send(data)
  } catch (error) {
    res.json({ message: error });
  }
}

module.exports = {
  user_all,
  user_details,
  user_create,
  user_update,
  user_delete,
  login_user_fun,
  showData
}