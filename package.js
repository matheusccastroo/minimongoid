Package.describe({
  name: "kaptron:minimongoid",
  summary: "Mongoid inspired model architecture",
  version: "0.9.9",
  git: "https://github.com/Exygy/minimongoid.git"
});

Package.onUse(function (api) {
  api.versionsFrom(["2.3.5"]);
  var both = ['client', 'server'];
  api.use(['underscore', "mrt:underscore-string-latest@2.3.3", 'coffeescript'], both);
  files = [
    'lib/relation.coffee',
    'lib/has_many_relation.coffee',
    'lib/has_and_belongs_to_many_relation.coffee',
    'lib/minimongoid.coffee'
  ];
  api.addFiles(files, both);
});

Package.onTest(function (api) {
  var both = ['client', 'server'];
  api.use(["kaptron:minimongoid", 'tinytest', 'coffeescript'], both);
  api.addFiles('tests/models.coffee', both);
  api.addFiles('tests/server_tests.coffee', ['server']);
  api.addFiles('tests/model_tests.coffee', both);
});
