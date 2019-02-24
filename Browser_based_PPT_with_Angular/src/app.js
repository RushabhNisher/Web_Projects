const css = require('./app.css');
/*Text Area Drag and resize*/
 $('.draggableDiv').mousedown(function(e){
    drag = $(this).closest('.draggable')
    drag.addClass('dragging')
    drag.css('left', e.clientX-$(this).width()/2)
    drag.css('top', e.clientY-$(this).height()/2 - 10)
    $(this).on('mousemove', function(e){    
      drag.css('left', e.clientX-$(this).width()/2)
      drag.css('top', e.clientY-$(this).height()/2 - 10)
      window.getSelection().removeAllRanges()
      $(getElementById=draggableDiv).resizable({
        handles: 'n, e, s, w, ne, se, sw, nw'
       })  
    })
  })
  
  $('.draggableDiv').mouseleave(stopDragging)
  $('.draggableDiv').mouseup(stopDragging)
  
  function stopDragging(){
    drag = $(this).closest('.draggable')
    drag.removeClass('dragging')
    $(this).off('mousemove')
  }
  $(document).ready(function() {   
    $("button[name='addDom']").click(function() {
        var divElement = $('<div id="draggableDiv"><div id="resizableDiv"><div id="content"><div id="contentTitle">Drag bar</div> <div id="writeHere" contenteditable="true">Write Text Here</div></div></div></div>');
        $(this).after(divElement)
        $(getElementById=draggableDiv).draggable({
            handle: '#contentTitle'
        })
        $(getElementById=draggableDiv).resizable({
            handles: 'n, e, s, w, ne, se, sw, nw'
           })  
           
    });   
});
  


//Image
 $(document).ready(function() {
     $("button[name='addImg']").click(function() {
         var imageElement = $('<div id="draggableDiv1"><div id="resizableDiv1"><div id="content1"><div id="contentTitle1">Drag Bar</div><div id="imageSpace"></div></div></div></div>');
         $(this).after(imageElement);
         $(getElementById=draggableDiv1).draggable({
            handle: '#contentTitle1'
        })
         $(getElementById=draggableDiv1).resizable({
            handles: 'n, e, s, w, ne, se, sw, nw'
        })
     });
     
 });
/*Upload Image*/
  document.getElementById('getVal').addEventListener('change', readURL, true);
function readURL(){
  var file = document.getElementById("getVal").files[0];
  var reader = new FileReader();
  reader.onloadend = function(){
    document.getElementById('imageSpace').style.backgroundImage = "url(" + reader.result + ")";        
  }
  if(file){
      reader.readAsDataURL(file);
  }else{
  }
}

//Bold Italics and underlines
$(document).ready(function() {
    $('#jBold').click(function() {
      document.execCommand('bold');
    });
  });

$(document).ready(function() {
    $('#jItalics').click(function() {
      document.execCommand('italic');
    });
  });

$(document).ready(function() {
    $('#jUnderline').click(function() {
      document.execCommand('underline');
    });
  });

