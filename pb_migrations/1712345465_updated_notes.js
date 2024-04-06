/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uwqfmf74cmjji2f")

  // remove
  collection.schema.removeField("ptxt4omc")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uwqfmf74cmjji2f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ptxt4omc",
    "name": "createdat",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
