const hook = require('./hook');
hook({
  initial: function(arg) {
    console.log('hook initial')
  },
  called: function(arg) {
    console.log('hook called')
  },
  val: 'hook val',
})