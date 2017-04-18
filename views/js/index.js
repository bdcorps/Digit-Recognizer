$('input[type=textarea]').bind('input propertychange', function() {
  console.log(this.value);
});
