const { url:URI, User:USER } = require('../../models'); 
const utils = require('../../modules/utils');

const get = async function(req, res) {
  let result = await URI.findAll({
    include: User
  })
    res.status(200).json(result);
}
const post = async function(req, res) {
  const url = req.body.url;
  const username = req.body.username;
  utils.getUrlTitle(url, async function (err, title) {
    if(err) {
      res.status(404).send(err);
    } else {
      /* association 부분
      let [result, created1] = await USER.findOrCreate({
        where: { username: username },
        defaults: {
          username: username
        }
      })
      */
      let [result2, created2] = await URI.findOrCreate({
        where: { url: url },
        defaults: {
          url: url,
          title: title,
          //userId: result.id
        }
      })
      res.status(201).json(result2)
    }
  })
}

const idGet = async function(req, res) {
  let id = req.params.id;
  let result = await URI.findOne({
    where: {
      id: id
    }
  });
  await result.update({visits: result.visits + 1});
  res.status(302).redirect(result.url);
}

module.exports = {
  get,
  post,
  idGet
};
