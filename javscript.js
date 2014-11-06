function upload(file) {
  // file is from a <input> tag or from Drag'n Drop
  // Is the file an image?
  if (!file || !file.type.match(/image.*/)) { return; };
  // It is!
  // Let's build a FormData object
  var fd = new FormData();
  fd.append("image", file); // Append the file
  fd.append("key", "6528448c258cff474ca9701c5bab6927");
  // Get your own key: http://api.imgur.com/
 
  // Create the XHR (Cross-Domain XHR FTW!!!)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
  xhr.onload = function() {
    // Big win!
    // The URL of the image is:
      console.log("uploaded", JSON.parse(xhr.responseText).upload.links.imgur_page);
    JSON.parse(xhr.responseText).upload.links.imgur_page;
   }
   // Ok, I don't handle the errors. An exercice for the reader.
   // And now, we send the formdata
   xhr.send(fd);
}
$(function(){
    
});