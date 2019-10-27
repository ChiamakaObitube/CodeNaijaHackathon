
export default function(router) {
  router.get('/', function (req, res, next) {
    res.status(200).json({title: 'Express'});
  });

  return router;
}
