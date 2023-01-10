window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) == document.body.offsetHeight) window.location = "recipe2.html";
};

function goBack() {
    window.history.back();
 }

// window.onscrollToTop = function(){

//     var B = document.body; //IE 'quirks'
//     var D = document.documentElement; //IE with doctype
//     D = (D.clientHeight)? D: B;
    
//     if (D.scrollTop == 0){
//         alert("top");
//     }        
// };