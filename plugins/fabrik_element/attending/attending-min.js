/*! Fabrik */
var FbAttending=new Class({Extends:FbElement,initialize:function(a,b){this.parent(a,b),this.watchJoin(),this.spinner=new Asset.image(Fabrik.liveSite+"media/com_fabrik/images/ajax-loader.gif",{alt:"loading","class":"ajax-loader"}),this.message=this.element.getElement(".msg")},watchJoin:function(){if(c=this.getContainer()){var a=c.getElement('*[data-action="add"]');a.removeEvent("click",function(a){this.join(a)}.bind(this)),a.addEvent("click",function(a){this.join(a)}.bind(this))}},join:function(){this.save("join")},leave:function(){this.save("leave")},save:function(a){this.spinner.inject(this.message);var b={option:"com_fabrik",format:"raw",task:"plugin.pluginAjax",plugin:"attending",method:a,g:"element",element_id:this.options.elid,formid:this.options.formid,row_id:this.options.row_id,elementname:this.options.elid,userid:this.options.userid,rating:this.rating,listid:this.options.listid};console.log(b);new Request({url:"",data:b,onComplete:function(){this.spinner.dispose()}.bind(this)}).send()}});