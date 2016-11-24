function undoRedo(object) {

  return {
    pointer: null,
    history: [],
    unHistory: [],
    set: function(key, value) {
      let bar = object[key] ? object[key] : undefined;
      this.history.push([key, bar]);
      object[key] = value;
      this.pointer = this.history.length - 1;
    },

    get: function(key) {
      return object[key];
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
      if (this.pointer < 0) throw new Error();
      else {
        let key = this.history[this.pointer][0];
        let baz = object[key];
        this.unHistory.push([key, baz]);
        object[key] = this.history[this.pointer][1];
        if (this.pointer > 0) this.pointer--;
      }
    },

    redo: function() {
      let redone = this.unHistory.pop();
      this.pointer++;
      object[redone[0]] = redone[1];
    }
  };
}

module.exports = undoRedo;
