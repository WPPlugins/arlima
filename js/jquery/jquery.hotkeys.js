/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */!function(e){function t(t){var s=t.handler,r=(t.namespace||"").toLowerCase().split(" ");r=e.map(r,function(e){return e.split(".")}),(1!==r.length||""!==r[0]&&"autocomplete"!==r[0])&&(t.handler=function(t){if(this===t.target||!/textarea|select/i.test(t.target.nodeName)&&"text"!==t.target.type&&"true"!=a(t.target).prop("contenteditable")){var n="keypress"!==t.type&&e.hotkeys.specialKeys[t.which],i=String.fromCharCode(t.which).toLowerCase(),f="",o={};t.altKey&&"alt"!==n&&(f+="alt_"),t.ctrlKey&&"ctrl"!==n&&(f+="ctrl_"),t.metaKey&&!t.ctrlKey&&"meta"!==n&&(f+="meta_"),t.shiftKey&&"shift"!==n&&(f+="shift_"),n?o[f+n]=!0:(o[f+i]=!0,o[f+e.hotkeys.shiftNums[i]]=!0,"shift_"===f&&(o[e.hotkeys.shiftNums[i]]=!0));for(var c=0,l=r.length;l>c;c++)if(o[r[c]])return s.apply(this,arguments)}})}var a=e.noConflict();e.hotkeys={version:"0.8+",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",188:",",190:".",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}},e.each(["keydown","keyup","keypress"],function(){e.event.special[this]={add:t}})}(jQuery);