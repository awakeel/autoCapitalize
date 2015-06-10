(function ( $ ) {
   $.fn.autoCapitalize = function() {
     return this.each(function(){
       $(this).keyup(function (event) { 
             var textBox = event.target;
             var start = textBox.selectionStart;
             var end = textBox.selectionEnd;
             textBox.value = autoCapitalize(textBox.value);
             textBox.setSelectionRange(start, end);
            
        });
        function autoCapitalize(s) {
            var res = s.split(/\.\s+/g); 
            if (res) {
                var r = $.map(res, function (elem) {
                    return elem.charAt(0).toUpperCase() + elem.slice(1);
                });

                return (r.join(". "));
            } else {
                return s.charAt(0).toUpperCase() + s.slice(1);
            }

        }
       
     });
    };
 }( jQuery ));
