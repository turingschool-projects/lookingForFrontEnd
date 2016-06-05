let helpers = {

  trimBody(bodyText, maxLength) {
    let bodyLength = bodyText.lastIndexOf(' ', maxLength);
    let truncatedBody = bodyText.length > maxLength ? bodyText.substring(0, bodyLength) + '...' : bodyText
    return truncatedBody
  },


  notFound({}) {
    return <h1>Not Found!</h1>
  },

}

export default helpers;
