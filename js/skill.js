(function($){
    "use strict";
    let sb = {};
  
    sb.o = function(){
      this.o = null;
      this.$ = null;
  
      this.run = function(){
          this.o = $.extend({
              width: this.$.data('width') || 80 ,
              height: this.$.data('height') || 15,
              textColor: this.$.data('text-color') || '#ffffff',
              background: this.$.data('background') || '#000000'
          }, this.o);
  
          this.class(this.$);
          this.intv(this.$);
          return this;
      };
    };
  
    sb.cb = function(){
       sb.o.call(this);
  
       this.class= function(i){
         i.addClass('sb_progress');
         i.html("<div class='sb_bar'><div class='sb_label'>"+i.text()+"</div></div>");
         i.css({
            position:'relative',
            width: '100%',
            backgroundColor: '#dddddd',
            height: this.o.height+'px'
         });
         i.find('.sb_bar').css({
           position:'basolute',
           width:'1%',
           height:'100%',
           backgroundColor: this.o.background
         });
         i.find('.sb_label').css({
            paddingLeft:'5px',
            lineHeight: this.o.height+'px',
            color: this.o.textColor
          });
        };
  
        this.intv = function(i){
          let s =this;
          let e = i.find('.sb_bar');
          let w = 1;
          let t = setInterval(()=>{
               itv();
          }, 10);
  
          let itv = function(){
              if(w >= s.o.width) {
                  clearInterval(t);
              }else{
                  w++;
                  e.css('width', w+'%');
              }
          }
        }
     };
  
        $.fn.myskillbar = function(o){
           return this.each(function(){
              let d = new sb.cb();
              d.o = o;
              d.$ = $(this);
              d.run();
           });
        };
  
  })(jQuery);