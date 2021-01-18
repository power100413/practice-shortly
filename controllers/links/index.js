const { urls:URI } = require('../../models'); 
const utils = require('../../modules/utils');

const get = async function(req, res){
  return await URI.findAll()
  .then(row=>{
    // console.log(row);
    return row;
  })
}

const post = async function(req, res){
  const url = req.body.url;

  const title = await utils.getUrlTitle(url, (err, title)=>{
    console.log('title1', title);
    if(err) throw err;
    return title;
  })

    console.log("title2", title);
    return URI.create({
      url,
      title: title,
      //visits 생략
    })
  // })
  

  // .then(data=>{
  //   console.log('index', data);
  //   return data;
  // })

}

module.exports = {
  get,
  post
};