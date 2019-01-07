var Language=function(t,e,s,n){this.language=t,this.months=e,this.monthsAbbr=s,this.days=n,this.rtl=!1,this.ymd=!1,this.yearSuffix=""},prototypeAccessors={language:{configurable:!0},months:{configurable:!0},monthsAbbr:{configurable:!0},days:{configurable:!0}};prototypeAccessors.language.get=function(){return this._language},prototypeAccessors.language.set=function(t){if("string"!=typeof t)throw new TypeError("Language must be a string");this._language=t},prototypeAccessors.months.get=function(){return this._months},prototypeAccessors.months.set=function(t){if(12!==t.length)throw new RangeError("There must be 12 months for "+this.language+" language");this._months=t},prototypeAccessors.monthsAbbr.get=function(){return this._monthsAbbr},prototypeAccessors.monthsAbbr.set=function(t){if(12!==t.length)throw new RangeError("There must be 12 abbreviated months for "+this.language+" language");this._monthsAbbr=t},prototypeAccessors.days.get=function(){return this._days},prototypeAccessors.days.set=function(t){if(7!==t.length)throw new RangeError("There must be 7 days for "+this.language+" language");this._days=t},Object.defineProperties(Language.prototype,prototypeAccessors);var language=new Language("Arabic",["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"]);language.rtl=!0;export default language;
