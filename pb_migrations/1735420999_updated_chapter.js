/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1758644932")

  // update collection data
  unmarshal({
    "name": "chapters"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1758644932")

  // update collection data
  unmarshal({
    "name": "chapter"
  }, collection)

  return app.save(collection)
})
