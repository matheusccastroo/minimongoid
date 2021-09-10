class @Relation extends Array
  constructor: (klass, args...) ->
    super klass, args...
    @klass = klass
    @elems = args
    @selector = {}
    @push.apply(@, args)

  @new: (klass, args...) ->
    new @(klass, args...)

  toArray: () ->
    @elems

  relationClass: ->
    @klass

  setQuery: (selector = {}) ->
    @selector = selector

  create: (attr) ->
    @selector ||= {}
    @klass.create(_.extend(@selector, attr))
