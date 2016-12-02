function undoRedo(object) {

  return {
    history: [],
    unHistory: [],
    set: function(key, value) {
      let maybe = object[key] ? object[key] : undefined;
      this.history.push([key, maybe]);
      object[key] = value;
    },

    get: function(key) {
      return object[key];
    },

    del: function(key) {
      if (object[key]) {
        let valu = object[key];
        this.history.push([key, valu]);
        delete object[key];
      }
    },

    undo: function() {
      try {
        let undone = this.history.pop();
        let key = undone[0];
        let val = object[key];
        this.unHistory.push([key, val]);
        
        if(undone[1] === undefined) {
          delete object[key];
        }else{
          object[key] = undone[1];
        }
        
      } catch (e) {
        throw false;
      }
    },

    redo: function() {
      try {
        let redone = this.unHistory.pop();
        let k = redone[0];
        let v = object[k];
        this.history.push([k, v])
        
        if(redone[1] === undefined) {
          delete object[k];
        }else{
          object[k] = redone[1];
        }
        
      } catch (e) {
        throw false;
      }
    }
  };
}

module.exports = undoRedo;
