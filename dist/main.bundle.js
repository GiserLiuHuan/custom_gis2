!function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=51)}({51:function(t,s,o){"use strict";o.r(s);class i{constructor(){this.map=void 0,this.scale=[591657527.591555,295828763.795777,147914381.897889,73957190.948944,36978595.474472,18489297.737236,9244648.868618,4622324.434309,2311162.217155,1155581.108577,577790.554289,288895.277144,144447.638572,72223.819286,36111.9096437,18055.9548224,9027.977411,4513.988705,2256.994353,1128.497176],this.resolution=[156543.033928,78271.5169639999,39135.7584820001,19567.8792409999,9783.93962049996,4891.96981024998,2445.98490512499,1222.99245256249,611.49622628138,305.748113140558,152.874056570411,76.4370282850732,38.2185141425366,19.1092570712683,9.55462853563415,4.77731426794937,2.38865713397468,1.19432856685505,.597164283559817,.298582141647617],this.lods=[{level:0,resolution:this.resolution[0],scale:this.scale[0]},{level:1,resolution:this.resolution[1],scale:this.scale[1]},{level:2,resolution:this.resolution[2],scale:this.scale[2]},{level:3,resolution:this.resolution[3],scale:this.scale[3]},{level:4,resolution:this.resolution[4],scale:this.scale[4]},{level:5,resolution:this.resolution[5],scale:this.scale[5]},{level:6,resolution:this.resolution[6],scale:this.scale[6]},{level:7,resolution:this.resolution[7],scale:this.scale[7]},{level:8,resolution:this.resolution[8],scale:this.scale[8]},{level:9,resolution:this.resolution[9],scale:this.scale[9]},{level:10,resolution:this.resolution[10],scale:this.scale[10]},{level:11,resolution:this.resolution[11],scale:this.scale[11]},{level:12,resolution:this.resolution[12],scale:this.scale[12]},{level:13,resolution:this.resolution[13],scale:this.scale[13]},{level:14,resolution:this.resolution[14],scale:this.scale[14]},{level:15,resolution:this.resolution[15],scale:this.scale[15]},{level:16,resolution:this.resolution[16],scale:this.scale[16]},{level:17,resolution:this.resolution[17],scale:this.scale[17]},{level:18,resolution:this.resolution[18],scale:this.scale[18]},{level:19,resolution:this.resolution[19],scale:this.scale[19]}]}col_rowToGeo(t,e){let s=e*this.lods[this.map.level].resolution*256-20037508.3427892,o=20037508.3427892-t*this.lods[this.map.level].resolution*256;return new l(s,o)}GeoTocol_row(t){let e=Math.floor((t.x- -20037508.3427892)/256/this.lods[this.map.level].resolution);return[Math.floor((20037508.3427892-t.y)/256/this.lods[this.map.level].resolution),e]}col_rowTopath(t,e){let s=this.map.level-1,o=parseInt(Math.pow(2,s));return"http://online"+((e+t)%8+1)+".map.bdimg.com/tile/?qt=tile&x="+(e-o)+"&y="+(-t+(o-1))+"&z="+this.map.level+"&styles=pl&scaler=1&udt=20141103"}imgload(){let t=this.map.getExtend(),e=this.GeoTocol_row(t[0]),s=this.GeoTocol_row(t[1]);for(let t=s[0];t<=e[0];t++)for(let o=e[1];o<=s[1];o++){let e=this.col_rowTopath(t,o),s=this.col_rowToGeo(t,o),i=this.map.GeoToScreen_Coor(s);this.drawImage1(e,i)}}drawImage1(t,e){let s=new Image;s.src=t,s.complete?this.drawImage2(s,e):s.onload=(()=>{this.drawImage2(s,e)})}drawImage2(t,e){let s=t.width*this.lods[this.map.level].resolution/this.map.resolution,o=t.height*this.lods[this.map.level].resolution/this.map.resolution;this.map.context.clearRect(e.x,e.y,s,o),this.map.context.drawImage(t,e.x,e.y,s,o)}}class l{constructor(t,e){this.x=t,this.y=e}}new class{constructor(t){this.canvas=e("#"+t),this.context=this.canvas.getContext("2d"),this.clickstatu=!1,this.zoomscale=1.1,this.tilelayer=new i,this.tilelayer.map=this,this.level=5,this.ZoomPoint=new l(12958175,4825923.77),this.resolution=this.tilelayer.lods[this.level].resolution,this.inch2centimeter=.02540005080010158,this.dpi=96,this.Scale_BD_old=this.tilelayer.lods[this.level].scale,this.init()}init(){this.canvas.width=800,this.canvas.height=600,(void 0).Observable.fromEvent(this.canvas,"mousedown").subscribe(t=>{console.log(t)}),this.canvas.addEventListener("mousedown",t=>{this.canvas.style.cursor="move",this.clickstatu=!0}),this.canvas.addEventListener("mousemove",t=>{this.clickstatu&&(this.ZoomPoint.x-=t.movementX*this.resolution,this.ZoomPoint.y+=t.movementY*this.resolution,this.tilelayer.imgload())}),this.canvas.addEventListener("mouseup",t=>{this.canvas.style.cursor="default",this.clickstatu=!1}),this.canvas.addEventListener("mousewheel",t=>{let e=this.zoomscale;t.deltaY>0&&(e=1/e);let s=this.ScreenToGeo_Coor(new l(t.x,t.y));this.resolution/=e,this.Scale_BD_old=this.ResolutionToScale(),t.deltaY<0?this.level+1<=this.tilelayer.lods.length-1&&this.resolution<=this.tilelayer.lods[this.level+1].resolution&&this.zoomChange(this.level+1):this.level-1>=0&&this.resolution>=this.tilelayer.lods[this.level-1].resolution&&this.zoomChange(this.level-1),this.ZoomPoint.x=s.x-(t.x-this.canvas.width/2)*this.resolution,this.ZoomPoint.y=s.y+(t.y-this.canvas.height/2)*this.resolution,this.tilelayer.imgload()}),document.addEventListener("mouseup",t=>{this.canvas.style.cursor="default",this.clickstatu=!1}),this.tilelayer.imgload()}getExtend(){return[new l(this.ZoomPoint.x-this.resolution*this.canvas.width/2,this.ZoomPoint.y-this.resolution*this.canvas.height/2),new l(this.ZoomPoint.x+this.resolution*this.canvas.width/2,this.ZoomPoint.y+this.resolution*this.canvas.height/2)]}GeoToScreen_Coor(t){let e=this.canvas.width/2-(this.ZoomPoint.x-t.x)/this.resolution,s=this.canvas.height/2+(this.ZoomPoint.y-t.y)/this.resolution;return new l(e,s)}ScreenToGeo_Coor(t){let e=this.ZoomPoint.x-(this.canvas.width/2-t.x)*this.resolution,s=this.ZoomPoint.y+(this.canvas.height/2-t.y)*this.resolution;return new l(e,s)}ScaleToResolution(){return this.scale*this.inch2centimeter/this.dpi}ResolutionToScale(){return this.resolution*this.dpi/this.inch2centimeter}zoomChange(t){this.level=t}}("mycanvas")}});