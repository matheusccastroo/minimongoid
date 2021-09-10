class @HasManyRelation extends @Relation
  constructor: (klass, foreign_key, id, args...) ->
    super klass, args...
    @link = {}
    @link[foreign_key] = id
    @foreign_key = foreign_key

  @new: (klass, foreign_key, id, args...) ->
    new @(klass, foreign_key, id, args...)

  @fromRelation: (relation, foreign_key, id) ->
    new @(relation.relationClass(), foreign_key, id, relation.toArray()...)

  create: (attr) ->
    super _.extend(attr, @link)
