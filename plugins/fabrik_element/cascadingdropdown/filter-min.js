/*! Fabrik */
var CascadeFilter=new Class({initialize:function(observerid,opts){if(this.options=opts,this.observer=document.id(observerid),this.observer){new Element("img",{id:this.options.filterid+"_loading",src:Fabrik.liveSite+"media/com_fabrik/images/ajax-loader.gif",alt:"loading...",styles:{opacity:"0"}}).inject(this.observer,"before");var v=this.observer.get("value");this.myAjax=new Request({url:"",method:"post",data:{option:"com_fabrik",format:"raw",task:"plugin.pluginAjax",plugin:"cascadingdropdown",method:"ajax_getOptions",element_id:this.options.elid,v:v,formid:this.options.formid,fabrik_cascade_ajax_update:1,filterview:"table"},onComplete:function(a){this.ajaxComplete(a)}.bind(this)}),this.observer.addEvent("change",function(){this.periodcount=0,document.id(this.options.filterid+"_loading").setStyle("opacity","1");var v=this.observer.get("value");this.myAjax.options.data.v=v,$filterData=eval(this.options.filterobj).getFilterData(),Object.append(this.myAjax.options.data,$filterData),this.myAjax.send()}.bind(this)),v=this.observer.get("value"),this.periodical=this.update.periodical(500,this),this.periodcount=0}else fconsole("observer not found ",observerid)},update:function(){this.observer&&(this.myAjax.options.data.v=this.observer.get("value"),$filterData=eval(this.options.filterobj).getFilterData(),Object.append(this.myAjax.options.data,$filterData),this.myAjax.send())},ajaxComplete:function(a){return a=JSON.decode(a),this.periodcount++,this.periodcount>5?void this.endAjax():"null"===typeOf(document.id(this.options.filterid))?(fconsole("filterid not found: ",this.options.filterid),void this.endAjax()):(document.id(this.options.filterid).empty(),a.each(function(a){new Element("option",{value:a.value}).appendText(a.text).inject(document.id(this.options.filterid)),document.id(this.options.filterid).value=this.options.def}.bind(this)),void(a.length>0?(1===a.length&&""===a[0].value)==!1&&this.endAjax():this.endAjax()))},endAjax:function(){document.id(this.options.filterid+"_loading").setStyle("opacity","0"),clearInterval(this.periodical)}});