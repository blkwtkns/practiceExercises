function undoRedo(object) {
  return {
    pointer: null,
    history: [],
    set: function(key, value) {
      let bar = object[key] ? object[key] : undefined;
      this.history.push([key, bar]);
      object[key] = value;
      this.pointer = this.history.length - 1;
    },
    get: function(key) {
      return object[key] ? object[key] : 'no key found';
    },
    del: function(key) {
      if (object[key]) {
        let foo = object[key];
        this.history.push([key, foo]);
        delete object[key];
        this.pointer = this.history.length - 1;
      }
    },
    undo: function() {
        object[this.history[this.pointer][0]] = this.history[this.pointer][1];
        if(this.pointer > 0) this.pointer--;
    },
    redo: function() {
      this.pointer++;
      object[this.history[this.pointer][0]] = this.history[this.pointer][1];
    }
  };
}

module.exports = undoRedo;
