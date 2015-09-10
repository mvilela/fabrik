/*! Fabrik */
var FbRepeatGroup=new Class({Implements:[Options,Events],options:{repeatmin:1},initialize:function(a,b){this.element=document.id(a),this.setOptions(b),this.counter=this.getCounter(),this.watchAdd(),this.watchDelete()},repeatContainers:function(){return this.element.getElements(".repeatGroup")},watchAdd:function(){this.element.getElement("a[data-button=addButton]").addEvent("click",function(a){a.stop();var b=this.repeatContainers().getLast();newc=this.counter+1;var c=b.id.replace("-"+this.counter,"-"+newc),d=new Element("div",{"class":"repeatGroup",id:c}).set("html",b.innerHTML);d.inject(b,"after"),this.counter=newc,0!==this.counter&&(d.getElements("input, select").each(function(a){var b="",c=a.id;if(""!==a.id){var d=a.id.split("-");d.pop(),b=d.join("-")+"-"+this.counter,a.id=b}this.increaseName(a),$H(FabrikAdmin.model.fields).each(function(d,e){var f=!1;if("null"!==typeOf(FabrikAdmin.model.fields[e][c])){var g=FabrikAdmin.model.fields[e][c];f=Object.clone(g);try{f.cloned(b,this.counter)}catch(h){fconsole("no clone method available for "+a.id)}}f!==!1&&(FabrikAdmin.model.fields[e][a.id]=f)}.bind(this))}.bind(this)),d.getElements("img[src=components/com_fabrik/images/ajax-loader.gif]").each(function(a){var b=a.id.split("-");b.pop();var c=b.join("-")+"-"+this.counter+"_loader";a.id=c}.bind(this)))}.bind(this))},getCounter:function(){return this.repeatContainers().length},watchDelete:function(){this.element.getElements("a[data-button=deleteButton]").removeEvents(),this.element.getElements("a[data-button=deleteButton]").each(function(a,b){a.addEvent("click",function(a){a.stop();var c=this.getCounter();if(c>this.options.repeatmin){var d=this.repeatContainers().getLast();d.destroy()}this.rename(b)}.bind(this))}.bind(this))},increaseName:function(a){var b=a.name.split("]["),c=b[2].replace("]","").toInt()+1;b.splice(2,1,c),a.name=b.join("][")+"]"},rename:function(a){this.element.getElements("input, select").each(function(b){b.name=this._decreaseName(b.name,a)}.bind(this))},_decreaseName:function(a,b){var c=a.split("]["),d=c[2].replace("]","").toInt();d>=1&&d>b&&d--,3===c.length&&(d+="]"),c.splice(2,1,d);var e=c.join("][");return e}});