let helpers = {

  trimBody : function(bodyText, maxLength) {
    if (bodyText.length > maxLength) {
      let trimmedString = bodyText.substr(0, maxLength);
      trimmedString = trimmedString.substr(0, Math.min(maxLength, trimmedString.lastIndexOf(" ")));
      return trimmedString + "...";
    } else {
      return bodyText;
    }
  },

}

export default helpers;
