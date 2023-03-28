(function($){
    "use strict";
    let sb = {};
    sb.o = () => {
        this.o = null;
        this.$ = null;

        this.run = () => {
            this.o = $.extend({
                width : this.$.data('width')|| 80,
                height : this.$.data('height') ||15,
                textColor : this.$.data('text-color')||'#ffffff',
                background : this.$.data('background') ||'#000000'
            }, this.o);
            this.class(this.$);
            this.intv(this.$);
            return this;
        }
    }

    sb.cd = () => {
        sb.o.call(this);

        this.class=(i)=>{
            i.addClass('sb_progress');
            i.html("<div class = 'sb_bar'><div class = 'sb_label'>"+i.text()+"</div></div>");
            i.css({
                position : 'relative',
                width : '100%',
                backgroundColor : '#dddddd',
                hight : this.o.height+'px'
            });
            i.find('.sb_label').css({
                paddingLeft : '5px',
                lineHeight : this.o.height+'px',
                color : this.o.textColor
            }); 
         };
         this.intv = (i) =>{
            let s = this;
            let e = i.find('.sb_bar');
            let w = 1;
            let t = setInterval(()=>{
                this.intv();
            },10);
            let itv =()=>{
                if(w>=s.o.width){
                    clearInterval(t);
                }else{
                    w++;
                    e.css('width',w+'%')
                }
            }
         }
    };
         $fn.myskillbar = (o) =>{
            return this.each(()=>{
                let d = new sb.cb();
                d.o = o;
                d.$ = $(this);
                d.run();
            });
         };

})(jQuery);