
// const jwt=require('jsonwebtoken')
// const {promisify}=require('util')
// async function auth(req,res,next){
// const {authorization}=req.headers

//     if(!authorization){
//         res.status(401).json({message:"You must log in first"})
//     }

//     try{
//         var decoded=await promisify(jwt.verify)(authorization,process.env.SECRET)
//         req.id=decoded.id
//         next()
//     }
//     catch(err){
//         res.status(401).json({message:"please login first"})
//     }
// }


// module.exports={auth}




// const jwt = require('jsonwebtoken');
// const { promisify } = require('util');

// async function auth(req, res, next) {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({ message: 'You must log in first' });
//   }

//   try {
//     const decoded = await promisify(jwt.verify)(authorization, process.env.SECRET);
//     req.id = decoded.id;
//     next();
//   } catch (error) {
//     console.error('Error in auth middleware:', error);
//     res.status(401).json({ message: 'Please log in first' });
//   }
// }

// module.exports = { auth };

const jwt = require('jsonwebtoken');
const { promisify } = require('util');

async function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
      return res.status(401).json({ message: "You must log in first" });
  }

  try {
      console.log('Authorization Header:', authorization);

      const decoded = await promisify(jwt.verify)(authorization.replace('Bearer ', ''), process.env.SECRET);
      console.log('Decoded Token:', decoded);

      req.user = { id: decoded.id }; // Set the user information in req.user
      next();
  } catch (err) {
      console.error('Token Verification Error:', err);
      return res.status(401).json({ message: "Invalid token or Please login first" });
  }
}

module.exports = { auth };