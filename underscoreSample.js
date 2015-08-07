//had to pull in getLength and property variables

module.exports = {

  object: function(list, values) {
     var property = function(key) {
       return function(obj) {
         return obj == null ? void 0 : obj[key];
       };
     };
   
   var getLength = property('length');

    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
     if (values) {
       result[list[i]] = values[i];
     } else {
       result[list[i][0]] = list[i][1];
     }
    }
    return result;
  },
};