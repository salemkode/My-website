var tc="181";var ec=0,qr=1,nc=2;var Yr=1,Ls=2,en=3,mi=0,ze=1,qe=2,xn=0,Gi=1,Zr=2,Jr=3,$r=4,ic=5,xi=100,sc=101,rc=102,ac=103,oc=104,cc=200,lc=201,hc=202,uc=203,dc=204,fc=205,pc=206,mc=207,xc=208,gc=209,_c=210,vc=211,yc=212,bc=213,Mc=214,Ds=0,Us=1,Ns=2,Hi=3,Fs=4,Os=5,Bs=6,zs=7,Sc=0,Tc=1,Ec=2,gn=0,wc=1,Ac=2,Cc=3,ks=4,Rc=5,Ic=6,Pc=7;var gi=301,Gn=302,Gs=303,Hs=304,Vi=306,Lc=1000,Vs=1001,Dc=1002,_i=1003,Uc=1004;var Wi=1005;var _n=1006,Ws=1007;var vi=1008;var Rn=1009,Nc=1010,Fc=1011,Xi=1012,Kr=1013,yi=1014,In=1015,bi=1016,Qr=1017,jr=1018,Mi=1020,Oc=35902,Bc=35899,zc=1021,kc=1022,nn=1023,Xs=1026,qi=1027,Gc=1028,ta=1029,ea=1030,na=1031;var ia=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,sa=35840,ra=35841,aa=35842,oa=35843,ca=36196,la=37492,ha=37496,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,xa=37813,ga=37814,_a=37815,va=37816,ya=37817,ba=37818,Ma=37819,Sa=37820,Ta=37821,Ea=36492,wa=36494,Aa=36495,Ca=36283,Ra=36284,Ia=36285,Pa=36286;var Hc=3201;var Vc=0,Wc=1,Hn="",Xc="srgb",Yi="srgb-linear",La="linear",re="srgb";var qc=512,Yc=513,Zc=514,Da=515,Jc=516,$c=517,Kc=518,Qc=519;var Ua="300 es",Na=2000;function Fa(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ki(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jc(){let t=ki("canvas");return t.style.display="block",t}var Io={},di=null;function Oa(...t){let e="THREE."+t.shift();if(di)di("log",e,...t);else console.log(e,...t)}function Ft(...t){let e="THREE."+t.shift();if(di)di("warn",e,...t);else console.warn(e,...t)}function Wt(...t){let e="THREE."+t.shift();if(di)di("error",e,...t);else console.error(e,...t)}function fi(...t){let e=t.join(" ");if(e in Io)return;Io[e]=!0,Ft(...t)}function tl(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Pn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=1234567,Bi=Math.PI/180,pi=180/Math.PI;function Si(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[t&255]+Se[t>>8&255]+Se[t>>16&255]+Se[t>>24&255]+"-"+Se[e&255]+Se[e>>8&255]+"-"+Se[e>>16&15|64]+Se[e>>24&255]+"-"+Se[n&63|128]+Se[n>>8&255]+"-"+Se[n>>16&255]+Se[n>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function Ba(t,e){return(t%e+e)%e}function wh(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Ah(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function zi(t,e,n){return(1-n)*t+n*e}function Ch(t,e,n,i){return zi(t,e,1-Math.exp(-n*i))}function Rh(t,e=1){return e-Math.abs(Ba(t,e*2)-e)}function Ih(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function Ph(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Lh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Dh(t,e){return t+Math.random()*(e-t)}function Uh(t){return t*(0.5-Math.random())}function Nh(t){if(t!==void 0)Po=t;let e=Po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fh(t){return t*Bi}function Oh(t){return t*pi}function Bh(t){return(t&t-1)===0&&t!==0}function zh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function kh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Gh(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),c=a(n/2),l=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*u,c*h,c*d,o*l);break;case"YZY":t.set(c*d,o*u,c*h,o*l);break;case"ZXZ":t.set(c*h,c*d,o*u,o*l);break;case"XZX":t.set(o*u,c*_,c*m,o*l);break;case"YXY":t.set(c*m,o*u,c*_,o*l);break;case"ZYZ":t.set(c*_,c*m,o*u,o*l);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function Ce(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("Invalid component type.")}}var Zi={DEG2RAD:Bi,RAD2DEG:pi,generateUUID:Si,clamp:Jt,euclideanModulo:Ba,mapLinear:wh,inverseLerp:Ah,lerp:zi,damp:Ch,pingpong:Rh,smoothstep:Ih,smootherstep:Ph,randInt:Lh,randFloat:Dh,randFloatSpread:Uh,seededRandom:Nh,degToRad:Fh,radToDeg:Oh,isPowerOfTwo:Bh,ceilPowerOfTwo:zh,floorPowerOfTwo:kh,setQuaternionFromProperEuler:Gh,normalize:Ce,denormalize:hi};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3],h=s[r+0],d=s[r+1],m=s[r+2],_=s[r+3];if(a<=0){t[e+0]=o,t[e+1]=c,t[e+2]=l,t[e+3]=u;return}if(a>=1){t[e+0]=h,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||o!==h||c!==d||l!==m){let x=o*h+c*d+l*m+u*_;if(x<0)h=-h,d=-d,m=-m,_=-_,x=-x;let p=1-a;if(x<0.9995){let f=Math.acos(x),S=Math.sin(f);p=Math.sin(p*f)/S,a=Math.sin(a*f)/S,o=o*p+h*a,c=c*p+d*a,l=l*p+m*a,u=u*p+_*a}else{o=o*p+h*a,c=c*p+d*a,l=l*p+m*a,u=u*p+_*a;let f=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=f,c*=f,l*=f,u*=f}}t[e]=o,t[e+1]=c,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],c=n[i+2],l=n[i+3],u=s[r],h=s[r+1],d=s[r+2],m=s[r+3];return t[e]=a*m+l*u+o*d-c*h,t[e+1]=o*m+l*h+c*u-a*d,t[e+2]=c*m+l*d+a*h-o*u,t[e+3]=l*m-a*u-o*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,c=a(n/2),l=a(i/2),u=a(s/2),h=o(n/2),d=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=h*l*u+c*d*m,this._y=c*d*u-h*l*m,this._z=c*l*m+h*d*u,this._w=c*l*u-h*d*m;break;case"YXZ":this._x=h*l*u+c*d*m,this._y=c*d*u-h*l*m,this._z=c*l*m-h*d*u,this._w=c*l*u+h*d*m;break;case"ZXY":this._x=h*l*u-c*d*m,this._y=c*d*u+h*l*m,this._z=c*l*m+h*d*u,this._w=c*l*u-h*d*m;break;case"ZYX":this._x=h*l*u-c*d*m,this._y=c*d*u+h*l*m,this._z=c*l*m-h*d*u,this._w=c*l*u+h*d*m;break;case"YZX":this._x=h*l*u+c*d*m,this._y=c*d*u+h*l*m,this._z=c*l*m-h*d*u,this._w=c*l*u-h*d*m;break;case"XZY":this._x=h*l*u-c*d*m,this._y=c*d*u-h*l*m,this._z=c*l*m+h*d*u,this._w=c*l*u+h*d*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10],h=n+a+u;if(h>0){let d=0.5/Math.sqrt(h+1);this._w=0.25/d,this._x=(l-o)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(l-o)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(o+l)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(o+l)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:c,_w:l}=e;return this._x=n*l+r*a+i*c-s*o,this._y=i*l+r*o+s*a-n*c,this._z=s*l+r*c+n*o-i*a,this._w=r*l-n*a-i*o-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,e=Math.sin(e*c)/l,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,c=2*(r*i-a*n),l=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*c+r*u-a*l,this.y=n+o*l+a*c-s*u,this.z=i+o*u+s*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Mr=new B,Lo=new Ln;class kt{constructor(t,e,n,i,s,r,a,o,c){if(kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,c)}set(t,e,n,i,s,r,a,o,c){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=s,l[5]=o,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],c=n[1],l=n[4],u=n[7],h=n[2],d=n[5],m=n[8],_=i[0],x=i[3],p=i[6],f=i[1],S=i[4],M=i[7],A=i[2],E=i[5],w=i[8];return s[0]=r*_+a*f+o*A,s[3]=r*x+a*S+o*E,s[6]=r*p+a*M+o*w,s[1]=c*_+l*f+u*A,s[4]=c*x+l*S+u*E,s[7]=c*p+l*M+u*w,s[2]=h*_+d*f+m*A,s[5]=h*x+d*S+m*E,s[8]=h*p+d*M+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],c=t[7],l=t[8];return e*r*l-e*a*c-n*s*l+n*a*o+i*s*c-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],c=t[7],l=t[8],u=l*r-a*c,h=a*o-l*s,d=c*s-r*o,m=e*u+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(i*c-l*n)*_,t[2]=(a*n-i*r)*_,t[3]=h*_,t[4]=(l*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*o-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),c=Math.sin(s);return this.set(n*o,n*c,-n*(o*r+c*a)+r+t,-i*c,i*o,-i*(-c*r+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Sr=new kt,Do=new kt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Uo=new kt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Hh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Do,fromXYZ:Uo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Do,fromXYZ:Uo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var $t=Hh();function mn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function ui(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Qn;class za{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Qn===void 0)Qn=ki("canvas");Qn.width=t.width,Qn.height=t.height;let i=Qn.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Qn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ki("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=mn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(mn(e[n]/255)*255);else e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Vh=0;class Ji{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(e instanceof VideoFrame)t.set(e.displayHeight,e.displayWidth,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Tr(i[r].image));else s.push(Tr(i[r]))}else s=Tr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Tr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return za.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ft("Texture: Unable to serialize Texture."),{}}var Wh=0,Er=new B;class Ee extends Pn{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,c=Ee.DEFAULT_ANISOTROPY,l=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Si(),this.name="",this.source=new Ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(Er).x}get height(){return this.source.getSize(Er).y}get depth(){return this.source.getSize(Er).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=300;Ee.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,c=o[0],l=o[4],u=o[8],h=o[1],d=o[5],m=o[9],_=o[2],x=o[6],p=o[10];if(Math.abs(l-h)<0.01&&Math.abs(u-_)<0.01&&Math.abs(m-x)<0.01){if(Math.abs(l+h)<0.1&&Math.abs(u+_)<0.1&&Math.abs(m+x)<0.1&&Math.abs(c+d+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,M=(d+1)/2,A=(p+1)/2,E=(l+h)/4,w=(u+_)/4,P=(m+x)/4;if(S>M&&S>A)if(S<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(S),i=E/n,s=w/n;else if(M>A)if(M<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(M),n=E/i,s=P/i;else if(A<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(A),n=w/s,i=P/s;return this.set(n,i,s,e),this}let f=Math.sqrt((x-m)*(x-m)+(u-_)*(u-_)+(h-l)*(h-l));if(Math.abs(f)<0.001)f=1;return this.x=(x-m)/f,this.y=(u-_)/f,this.z=(h-l)/f,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ka extends Pn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new Ee(i);this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(t!==null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ji(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends ka{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class $s extends Ee{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ga extends Ee{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,Je);else Je.fromBufferAttribute(s,r);Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();ds.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();ds.copy(n.boundingBox)}ds.applyMatrix4(t.matrixWorld),this.union(ds)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),fs.subVectors(this.max,Ui),jn.subVectors(t.a,Ui),ti.subVectors(t.b,Ui),ei.subVectors(t.c,Ui),Sn.subVectors(ti,jn),Tn.subVectors(ei,ti),On.subVectors(jn,ei);let e=[0,-Sn.z,Sn.y,0,-Tn.z,Tn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,Tn.z,0,-Tn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-Tn.y,Tn.x,0,-On.y,On.x,0];if(!wr(e,jn,ti,ei,fs))return!1;if(e=[1,0,0,0,1,0,0,0,1],!wr(e,jn,ti,ei,fs))return!1;return ps.crossVectors(Sn,Tn),e=[ps.x,ps.y,ps.z],wr(e,jn,ti,ei,fs)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(Je).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var ln=[new B,new B,new B,new B,new B,new B,new B,new B],Je=new B,ds=new Vn,jn=new B,ti=new B,ei=new B,Sn=new B,Tn=new B,On=new B,Ui=new B,fs=new B,ps=new B,Bn=new B;function wr(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Bn.fromArray(t,r);let o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),c=e.dot(Bn),l=n.dot(Bn),u=i.dot(Bn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Xh=new Vn,Ni=new B,Ar=new B;class Ti{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Xh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);let e=Ni.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(Ar)),this.expandByPoint(Ni.copy(t.center).sub(Ar));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var hn=new B,Cr=new B,ms=new B,En=new B,Rr=new B,xs=new B,Ir=new B;class $i{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Cr.copy(t).add(e).multiplyScalar(0.5),ms.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Cr);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(ms),a=En.dot(this.direction),o=-En.dot(ms),c=En.lengthSq(),l=Math.abs(1-r*r),u,h,d,m;if(l>0)if(u=r*o-a,h=r*a-o,m=s*l,u>=0)if(h>=-m)if(h<=m){let _=1/l;u*=_,h*=_,d=u*(u+r*h+2*a)+h*(r*u+h+2*o)+c}else h=s,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*o)+c;else h=-s,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*o)+c;else if(h<=-m)u=Math.max(0,-(-r*s+a)),h=u>0?-s:Math.min(Math.max(-s,-o),s),d=-u*u+h*(h+2*o)+c;else if(h<=m)u=0,h=Math.min(Math.max(-s,-o),s),d=h*(h+2*o)+c;else u=Math.max(0,-(r*s+a)),h=u>0?s:Math.min(Math.max(-s,-o),s),d=-u*u+h*(h+2*o)+c;else h=r>0?-s:s,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*o)+c;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(Cr).addScaledVector(ms,h);return d}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),i=hn.dot(hn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;if(c>=0)n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c;else n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c;if(l>=0)s=(t.min.y-h.y)*l,r=(t.max.y-h.y)*l;else s=(t.max.y-h.y)*l,r=(t.min.y-h.y)*l;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-h.z)*u,o=(t.max.z-h.z)*u;else a=(t.max.z-h.z)*u,o=(t.min.z-h.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,i,s){Rr.subVectors(e,t),xs.subVectors(n,t),Ir.crossVectors(Rr,xs);let r=this.direction.dot(Ir),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;En.subVectors(this.origin,t);let o=a*this.direction.dot(xs.crossVectors(En,xs));if(o<0)return null;let c=a*this.direction.dot(Rr.cross(En));if(c<0)return null;if(o+c>r)return null;let l=-a*En.dot(Ir);if(l<0)return null;return this.at(l/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,r,a,o,c,l,u,h,d,m,_,x){if(oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,c,l,u,h,d,m,_,x)}set(t,e,n,i,s,r,a,o,c,l,u,h,d,m,_,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=c,p[6]=l,p[10]=u,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ni.setFromMatrixColumn(t,0).length(),s=1/ni.setFromMatrixColumn(t,1).length(),r=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),c=Math.sin(i),l=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let h=r*l,d=r*u,m=a*l,_=a*u;e[0]=o*l,e[4]=-o*u,e[8]=c,e[1]=d+m*c,e[5]=h-_*c,e[9]=-a*o,e[2]=_-h*c,e[6]=m+d*c,e[10]=r*o}else if(t.order==="YXZ"){let h=o*l,d=o*u,m=c*l,_=c*u;e[0]=h+_*a,e[4]=m*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*l,e[9]=-a,e[2]=d*a-m,e[6]=_+h*a,e[10]=r*o}else if(t.order==="ZXY"){let h=o*l,d=o*u,m=c*l,_=c*u;e[0]=h-_*a,e[4]=-r*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*l,e[9]=_-h*a,e[2]=-r*c,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let h=r*l,d=r*u,m=a*l,_=a*u;e[0]=o*l,e[4]=m*c-d,e[8]=h*c+_,e[1]=o*u,e[5]=_*c+h,e[9]=d*c-m,e[2]=-c,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let h=r*o,d=r*c,m=a*o,_=a*c;e[0]=o*l,e[4]=_-h*u,e[8]=m*u+d,e[1]=u,e[5]=r*l,e[9]=-a*l,e[2]=-c*l,e[6]=d*u+m,e[10]=h-_*u}else if(t.order==="XZY"){let h=r*o,d=r*c,m=a*o,_=a*c;e[0]=o*l,e[4]=-u,e[8]=c*l,e[1]=h*u+_,e[5]=r*l,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*l,e[10]=_*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Yh)}lookAt(t,e,n){let i=this.elements;if(Oe.subVectors(t,e),Oe.lengthSq()===0)Oe.z=1;if(Oe.normalize(),wn.crossVectors(n,Oe),wn.lengthSq()===0){if(Math.abs(n.z)===1)Oe.x+=0.0001;else Oe.z+=0.0001;Oe.normalize(),wn.crossVectors(n,Oe)}return wn.normalize(),gs.crossVectors(Oe,wn),i[0]=wn.x,i[4]=gs.x,i[8]=Oe.x,i[1]=wn.y,i[5]=gs.y,i[9]=Oe.y,i[2]=wn.z,i[6]=gs.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],c=n[12],l=n[1],u=n[5],h=n[9],d=n[13],m=n[2],_=n[6],x=n[10],p=n[14],f=n[3],S=n[7],M=n[11],A=n[15],E=i[0],w=i[4],P=i[8],O=i[12],y=i[1],b=i[5],C=i[9],G=i[13],V=i[2],W=i[6],j=i[10],J=i[14],it=i[3],H=i[7],st=i[11],pt=i[15];return s[0]=r*E+a*y+o*V+c*it,s[4]=r*w+a*b+o*W+c*H,s[8]=r*P+a*C+o*j+c*st,s[12]=r*O+a*G+o*J+c*pt,s[1]=l*E+u*y+h*V+d*it,s[5]=l*w+u*b+h*W+d*H,s[9]=l*P+u*C+h*j+d*st,s[13]=l*O+u*G+h*J+d*pt,s[2]=m*E+_*y+x*V+p*it,s[6]=m*w+_*b+x*W+p*H,s[10]=m*P+_*C+x*j+p*st,s[14]=m*O+_*G+x*J+p*pt,s[3]=f*E+S*y+M*V+A*it,s[7]=f*w+S*b+M*W+A*H,s[11]=f*P+S*C+M*j+A*st,s[15]=f*O+S*G+M*J+A*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],c=t[13],l=t[2],u=t[6],h=t[10],d=t[14],m=t[3],_=t[7],x=t[11],p=t[15];return m*(+s*o*u-i*c*u-s*a*h+n*c*h+i*a*d-n*o*d)+_*(+e*o*d-e*c*h+s*r*h-i*r*d+i*c*l-s*o*l)+x*(+e*c*u-e*a*d-s*r*u+n*r*d+s*a*l-n*c*l)+p*(-i*a*l-e*o*u+e*a*h+i*r*u-n*r*h+n*o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],c=t[7],l=t[8],u=t[9],h=t[10],d=t[11],m=t[12],_=t[13],x=t[14],p=t[15],f=u*x*c-_*h*c+_*o*d-a*x*d-u*o*p+a*h*p,S=m*h*c-l*x*c-m*o*d+r*x*d+l*o*p-r*h*p,M=l*_*c-m*u*c+m*a*d-r*_*d-l*a*p+r*u*p,A=m*u*o-l*_*o-m*a*h+r*_*h+l*a*x-r*u*x,E=e*f+n*S+i*M+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=f*w,t[1]=(_*h*s-u*x*s-_*i*d+n*x*d+u*i*p-n*h*p)*w,t[2]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*p+n*o*p)*w,t[3]=(u*o*s-a*h*s-u*i*c+n*h*c+a*i*d-n*o*d)*w,t[4]=S*w,t[5]=(l*x*s-m*h*s+m*i*d-e*x*d-l*i*p+e*h*p)*w,t[6]=(m*o*s-r*x*s-m*i*c+e*x*c+r*i*p-e*o*p)*w,t[7]=(r*h*s-l*o*s+l*i*c-e*h*c-r*i*d+e*o*d)*w,t[8]=M*w,t[9]=(m*u*s-l*_*s-m*n*d+e*_*d+l*n*p-e*u*p)*w,t[10]=(r*_*s-m*a*s+m*n*c-e*_*c-r*n*p+e*a*p)*w,t[11]=(l*a*s-r*u*s-l*n*c+e*u*c+r*n*d-e*a*d)*w,t[12]=A*w,t[13]=(l*_*i-m*u*i+m*n*h-e*_*h-l*n*x+e*u*x)*w,t[14]=(m*a*i-r*_*i-m*n*o+e*_*o+r*n*x-e*a*x)*w,t[15]=(r*u*i-l*a*i+l*n*o-e*u*o-r*n*h+e*a*h)*w,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,c=s*r,l=s*a;return this.set(c*r+n,c*a-i*o,c*o+i*a,0,c*a+i*o,l*a+n,l*o-i*r,0,c*o-i*a,l*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,c=s+s,l=r+r,u=a+a,h=s*c,d=s*l,m=s*u,_=r*l,x=r*u,p=a*u,f=o*c,S=o*l,M=o*u,{x:A,y:E,z:w}=n;return i[0]=(1-(_+p))*A,i[1]=(d+M)*A,i[2]=(m-S)*A,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(h+p))*E,i[6]=(x+f)*E,i[7]=0,i[8]=(m+S)*w,i[9]=(x-f)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ni.set(i[0],i[1],i[2]).length(),r=ni.set(i[4],i[5],i[6]).length(),a=ni.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);let c=1/s,l=1/r,u=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=l,$e.elements[5]*=l,$e.elements[6]*=l,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let c=this.elements,l=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),m,_;if(o)m=s/(r-s),_=r*s/(r-s);else if(a===2000)m=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)m=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let c=this.elements,l=2/(e-t),u=2/(n-i),h=-(e+t)/(e-t),d=-(n+i)/(n-i),m,_;if(o)m=1/(r-s),_=r/(r-s);else if(a===2000)m=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)m=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ni=new B,$e=new oe,qh=new B(0,0,0),Yh=new B(1,1,1),wn=new B,gs=new B,Oe=new B,No=new oe,Fo=new Ln;class Xe{constructor(t=0,e=0,n=0,i=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],c=i[5],l=i[9],u=i[2],h=i[6],d=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-l,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(h,c),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Jt(l,-1,1)),Math.abs(l)<0.9999999)this._y=Math.atan2(a,d),this._z=Math.atan2(o,c);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<0.9999999)this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(h,d),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,c);break;case"YZX":if(this._z=Math.asin(Jt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,d);break;case"XZY":if(this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(h,c),this._y=Math.atan2(a,s);else this._x=Math.atan2(-l,d),this._y=0;break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class Ki{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Zh=0,Oo=new B,ii=new Ln,un=new oe,_s=new B,Fi=new B,Jh=new B,$h=new Ln,Bo=new B(1,0,0),zo=new B(0,1,0),ko=new B(0,0,1),Go={type:"added"},Kh={type:"removed"},si={type:"childadded",child:null},Pr={type:"childremoved",child:null};class ge extends Pn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();let t=new B,e=new Xe,n=new Ln,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(Bo,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(ko,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bo,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)_s.copy(t);else _s.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)un.lookAt(Fi,_s,this.up);else un.lookAt(_s,Fi,this.up);if(this.quaternion.setFromRotationMatrix(un),i)un.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(un),this.quaternion.premultiply(ii.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Wt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Go),si.child=t,this.dispatchEvent(si),si.child=null;else Wt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kh),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld);return t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Go),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,$h,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){let u=o[c];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),c=r(t.textures),l=r(t.images),u=r(t.shapes),h=r(t.skeletons),d=r(t.animations),m=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(c.length>0)n.textures=c;if(l.length>0)n.images=l;if(u.length>0)n.shapes=u;if(h.length>0)n.skeletons=h;if(d.length>0)n.animations=d;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let c in a){let l=a[c];delete l.metadata,o.push(l)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new B(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new B,dn=new B,Lr=new B,fn=new B,ri=new B,ai=new B,Ho=new B,Dr=new B,Ur=new B,Nr=new B,Fr=new ue,Or=new ue,Br=new ue;class We{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ke.subVectors(i,e),dn.subVectors(n,e),Lr.subVectors(t,e);let r=Ke.dot(Ke),a=Ke.dot(dn),o=Ke.dot(Lr),c=dn.dot(dn),l=dn.dot(Lr),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,d=(c*o-a*l)*h,m=(r*l-a*o)*h;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,fn)===null)return!1;return fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,fn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,fn.x),o.addScaledVector(r,fn.y),o.addScaledVector(a,fn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Fr,s.x),r.addScaledVector(Or,s.y),r.addScaledVector(Br,s.z),r}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(i)<0?!0:!1}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;ri.subVectors(i,n),ai.subVectors(s,n),Dr.subVectors(t,n);let o=ri.dot(Dr),c=ai.dot(Dr);if(o<=0&&c<=0)return e.copy(n);Ur.subVectors(t,i);let l=ri.dot(Ur),u=ai.dot(Ur);if(l>=0&&u<=l)return e.copy(i);let h=o*u-l*c;if(h<=0&&o>=0&&l<=0)return r=o/(o-l),e.copy(n).addScaledVector(ri,r);Nr.subVectors(t,s);let d=ri.dot(Nr),m=ai.dot(Nr);if(m>=0&&d<=m)return e.copy(s);let _=d*c-o*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ai,a);let x=l*m-d*u;if(x<=0&&u-l>=0&&d-m>=0)return Ho.subVectors(s,i),a=(u-l)/(u-l+(d-m)),e.copy(i).addScaledVector(Ho,a);let p=1/(x+_+h);return r=_*p,a=h*p,e.copy(n).addScaledVector(ri,r).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},vs={h:0,s:0,l:0};function zr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Ba(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=zr(r,s,t+0.3333333333333333),this.g=zr(r,s,t),this.b=zr(r,s,t-0.3333333333333333)}return $t.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=el[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ft("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return $t.workingToColorSpace(Te.copy(this),t),Math.round(Jt(Te.r*255,0,255))*65536+Math.round(Jt(Te.g*255,0,255))*256+Math.round(Jt(Te.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Te.copy(this),e);let{r:n,g:i,b:s}=Te,r=Math.max(n,i,s),a=Math.min(n,i,s),o,c,l=(a+r)/2;if(a===r)o=0,c=0;else{let u=r-a;switch(c=l<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=c,t.l=l,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t="srgb"){$t.workingToColorSpace(Te.copy(this),t);let{r:e,g:n,b:i}=Te;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(vs);let n=zi(An.h,vs.h,e),i=zi(An.s,vs.s,e),s=zi(An.l,vs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Te=new Ut;Ut.NAMES=el;var Qh=0;class yn extends Pn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class Ei extends yn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var me=new B,ys=new Xt,jh=0;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=hi(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Ce(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=hi(e,this.array);return e}setX(t,e){if(this.normalized)e=Ce(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=hi(e,this.array);return e}setY(t,e){if(this.normalized)e=Ce(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=hi(e,this.array);return e}setZ(t,e){if(this.normalized)e=Ce(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=hi(e,this.array);return e}setW(t,e){if(this.normalized)e=Ce(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Ce(e,this.array),n=Ce(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}}class Ks extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qs extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}var tu=0,Ve=new oe,kr=new ge,oi=new B,Be=new Vn,Oi=new Vn,ye=new B;class be extends Pn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Fa(t))?Qs:Ks)(t,1);else this.index=t;return this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Vn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Be.setFromBufferAttribute(s),this.morphTargetsRelative)ye.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ye);else this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Ti;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Oi.setFromBufferAttribute(a),this.morphTargetsRelative)ye.addVectors(Be.min,Oi.min),Be.expandByPoint(ye),ye.addVectors(Be.max,Oi.max),Be.expandByPoint(ye);else Be.expandByPoint(Oi.min),Be.expandByPoint(Oi.max)}Be.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++){if(ye.fromBufferAttribute(a,c),o)oi.fromBufferAttribute(t,c),ye.add(oi);i=Math.max(i,n.distanceToSquared(ye))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],o=[];for(let P=0;P<n.count;P++)a[P]=new B,o[P]=new B;let c=new B,l=new B,u=new B,h=new Xt,d=new Xt,m=new Xt,_=new B,x=new B;function p(P,O,y){c.fromBufferAttribute(n,P),l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,O),m.fromBufferAttribute(s,y),l.sub(c),u.sub(c),d.sub(h),m.sub(h);let b=1/(d.x*m.y-m.x*d.y);if(!isFinite(b))return;_.copy(l).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(b),x.copy(u).multiplyScalar(d.x).addScaledVector(l,-m.x).multiplyScalar(b),a[P].add(_),a[O].add(_),a[y].add(_),o[P].add(x),o[O].add(x),o[y].add(x)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let P=0,O=f.length;P<O;++P){let y=f[P],{start:b,count:C}=y;for(let G=b,V=b+C;G<V;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let S=new B,M=new B,A=new B,E=new B;function w(P){A.fromBufferAttribute(i,P),E.copy(A);let O=a[P];S.copy(O),S.sub(A.multiplyScalar(A.dot(O))).normalize(),M.crossVectors(E,O);let b=M.dot(o[P])<0?-1:1;r.setXYZW(P,S.x,S.y,S.z,b)}for(let P=0,O=f.length;P<O;++P){let y=f[P],{start:b,count:C}=y;for(let G=b,V=b+C;G<V;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new B,s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),_=t.getX(h+1),x=t.getX(h+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),l.subVectors(r,s),u.subVectors(i,s),l.cross(u),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(l),o.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),l.subVectors(r,s),u.subVectors(i,s),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,o){let{array:c,itemSize:l,normalized:u}=a,h=new c.constructor(o.length*l),d=0,m=0;for(let _=0,x=o.length;_<x;_++){if(a.isInterleavedBufferAttribute)d=o[_]*a.data.stride+a.offset;else d=o[_]*l;for(let p=0;p<l;p++)h[m++]=c[d++]}return new Ie(h,l,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new be,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],c=t(o,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let o=[],c=s[a];for(let l=0,u=c.length;l<u;l++){let h=c[l],d=t(h,n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let c in o)if(o[c]!==void 0)t[c]=o[c];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let c=n[o];t.data.attributes[o]=c.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],l=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];l.push(d.toJSON(t.data))}if(l.length>0)i[o]=l,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let s=t.morphAttributes;for(let c in s){let l=[],u=s[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,l=r.length;c<l;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Vo=new oe,zn=new $i,bs=new Ti,Wo=new B,Ms=new B,Ss=new B,Ts=new B,Gr=new B,Es=new B,Xo=new B,ws=new B;class Me extends ge{constructor(t=new be,e=new Ei){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Es.set(0,0,0);for(let o=0,c=s.length;o<c;o++){let l=a[o],u=s[o];if(l===0)continue;if(Gr.fromBufferAttribute(u,t),r)Es.addScaledVector(Gr,l);else Es.addScaledVector(Gr.sub(e),l)}e.add(Es)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(bs.copy(n.boundingSphere),bs.applyMatrix4(s),zn.copy(t.ray).recast(t.near),bs.containsPoint(zn.origin)===!1){if(zn.intersectSphere(bs,Wo)===null)return;if(zn.origin.distanceToSquared(Wo)>(t.far-t.near)**2)return}if(Vo.copy(s).invert(),zn.copy(t.ray).applyMatrix4(Vo),n.boundingBox!==null){if(zn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,zn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,{groups:h,drawRange:d}=s;if(a!==null)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){let x=h[m],p=r[x.materialIndex],f=Math.max(x.start,d.start),S=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let M=f,A=S;M<A;M+=3){let E=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);if(i=As(this,p,t,n,c,l,u,E,w,P),i)i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){let f=a.getX(x),S=a.getX(x+1),M=a.getX(x+2);if(i=As(this,r,t,n,c,l,u,f,S,M),i)i.faceIndex=Math.floor(x/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){let x=h[m],p=r[x.materialIndex],f=Math.max(x.start,d.start),S=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let M=f,A=S;M<A;M+=3){let E=M,w=M+1,P=M+2;if(i=As(this,p,t,n,c,l,u,E,w,P),i)i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){let f=x,S=x+1,M=x+2;if(i=As(this,r,t,n,c,l,u,f,S,M),i)i.faceIndex=Math.floor(x/3),e.push(i)}}}}function eu(t,e,n,i,s,r,a,o){let c;if(e.side===1)c=i.intersectTriangle(a,r,s,!0,o);else c=i.intersectTriangle(s,r,a,e.side===0,o);if(c===null)return null;ws.copy(o),ws.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(ws);if(l<n.near||l>n.far)return null;return{distance:l,point:ws.clone(),object:t}}function As(t,e,n,i,s,r,a,o,c,l){t.getVertexPosition(o,Ms),t.getVertexPosition(c,Ss),t.getVertexPosition(l,Ts);let u=eu(t,e,n,i,Ms,Ss,Ts,Xo);if(u){let h=new B;if(We.getBarycoord(Xo,Ms,Ss,Ts,h),s)u.uv=We.getInterpolatedAttribute(s,o,c,l,h,new Xt);if(r)u.uv1=We.getInterpolatedAttribute(r,o,c,l,h,new Xt);if(a){if(u.normal=We.getInterpolatedAttribute(a,o,c,l,h,new B),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let d={a:o,b:c,c:l,normal:new B,materialIndex:0};We.getNormal(Ms,Ss,Ts,d.normal),u.face=d,u.barycoord=h}return u}class wi extends be{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],c=[],l=[],u=[],h=0,d=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(u,2));function m(_,x,p,f,S,M,A,E,w,P,O){let y=M/w,b=A/P,C=M/2,G=A/2,V=E/2,W=w+1,j=P+1,J=0,it=0,H=new B;for(let st=0;st<j;st++){let pt=st*b-G;for(let Lt=0;Lt<W;Lt++){let Bt=Lt*y-C;H[_]=Bt*f,H[x]=pt*S,H[p]=V,c.push(H.x,H.y,H.z),H[_]=0,H[x]=0,H[p]=E>0?1:-1,l.push(H.x,H.y,H.z),u.push(Lt/w),u.push(1-st/P),J+=1}}for(let st=0;st<P;st++)for(let pt=0;pt<w;pt++){let Lt=h+pt+W*st,Bt=h+pt+W*(st+1),Vt=h+(pt+1)+W*(st+1),xt=h+(pt+1)+W*st;o.push(Lt,Bt,xt),o.push(Bt,Vt,xt),it+=6}a.addGroup(d,it,O),d+=it,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))e[n][i]=s.slice();else e[n][i]=s}}return e}function we(t){let e={};for(let n=0;n<t.length;n++){let i=Wn(t[n]);for(let s in i)e[s]=i[s]}return e}function nu(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ha(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return $t.workingColorSpace}var nl={clone:Wn,merge:we},iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends yn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wn(t.uniforms),this.uniformsGroups=nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}}class js extends ge{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var Cn=new B,qo=new Xt,Yo=new Xt;class Re extends js{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=pi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bi*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return pi*2*Math.atan(Math.tan(Bi*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,qo,Yo),e.subVectors(Yo,qo)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bi*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:c}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/c,i*=r.width/o,n*=r.height/c}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var ci=-90,li=1;class Va extends ge{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Re(ci,li,t,e);i.layers=this.layers,this.add(i);let s=new Re(ci,li,t,e);s.layers=this.layers,this.add(s);let r=new Re(ci,li,t,e);r.layers=this.layers,this.add(r);let a=new Re(ci,li,t,e);a.layers=this.layers,this.add(a);let o=new Re(ci,li,t,e);o.layers=this.layers,this.add(o);let c=new Re(ci,li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let c of e)this.remove(c);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,c,l]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(u,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tr extends Ee{constructor(t=[],e=301,n,i,s,r,a,o,c,l){super(t,e,n,i,s,r,a,o,c,l);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wa extends vn{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new tr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wi(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:Wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;let r=new Me(i,s),a=e.minFilter;if(e.minFilter===1008)e.minFilter=1006;return new Va(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}class tn extends ge{constructor(){super();this.isGroup=!0,this.type="Group"}}var ru={type:"move"};class Qi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let x=e.getJointPose(_,n),p=this._getHandJoint(c,_);if(x!==null)p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius;p.visible=x!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=0.02,m=0.005;if(c.inputState.pinching&&h>d+m)c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!c.inputState.pinching&&h<=d-m)c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(ru)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(c!==null)c.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ji{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new ji(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class er extends ge{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xa extends Ee{constructor(t=null,e=1,n=1,i,s,r,a,o,c=1003,l=1003,u,h){super(null,r,a,o,c,l,i,s,u,h);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Hr=new B,au=new B,ou=new kt;class pn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Hr.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Hr),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let s=-(t.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ou.getNormalMatrix(t),i=this.coplanarPoint(Hr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var kn=new Ti,cu=new Xt(0.5,0.5),Cs=new B;class ts{constructor(t=new pn,e=new pn,n=new pn,i=new pn,s=new pn,r=new pn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],x=s[10],p=s[11],f=s[12],S=s[13],M=s[14],A=s[15];if(i[0].setComponents(c-r,d-l,p-m,A-f).normalize(),i[1].setComponents(c+r,d+l,p+m,A+f).normalize(),i[2].setComponents(c+a,d+u,p+_,A+S).normalize(),i[3].setComponents(c-a,d-u,p-_,A-S).normalize(),n)i[4].setComponents(o,h,x,M).normalize(),i[5].setComponents(c-o,d-h,p-x,A-M).normalize();else if(i[4].setComponents(c-o,d-h,p-x,A-M).normalize(),e===2000)i[5].setComponents(c+o,d+h,p+x,A+M).normalize();else if(e===2001)i[5].setComponents(o,h,x,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){kn.center.set(0,0,0);let e=cu.distanceTo(t.center);return kn.radius=0.7071067811865476+e,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cs.x=i.normal.x>0?t.max.x:t.min.x,Cs.y=i.normal.y>0?t.max.y:t.min.y,Cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class es extends yn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Zo=new oe,Wr=new $i,Rs=new Ti,Is=new B;class nr extends ge{constructor(t=new be,e=new es){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,t.ray.intersectsSphere(Rs)===!1)return;Zo.copy(i).invert(),Wr.copy(t.ray).applyMatrix4(Zo);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let m=h,_=d;m<_;m++){let x=c.getX(m);Is.fromBufferAttribute(u,x),Jo(Is,x,o,i,t,e,this)}}else{let h=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let m=h,_=d;m<_;m++)Is.fromBufferAttribute(u,m),Jo(Is,m,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jo(t,e,n,i,s,r,a){let o=Wr.distanceSqToPoint(t);if(o<n){let c=new B;Wr.closestPointToPoint(t,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ir extends Ee{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,c,l=1026,u=1){if(l!==1026&&l!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,i,s,r,a,o,l,n,c);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}class sr extends Ee{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ns extends be{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let c=this;i=Math.floor(i),s=Math.floor(s);let l=[],u=[],h=[],d=[],m=0,_=[],x=n/2,p=0;if(f(),r===!1){if(t>0)S(!0);if(e>0)S(!1)}this.setIndex(l),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function f(){let M=new B,A=new B,E=0,w=(e-t)/n;for(let P=0;P<=s;P++){let O=[],y=P/s,b=y*(e-t)+t;for(let C=0;C<=i;C++){let G=C/i,V=G*o+a,W=Math.sin(V),j=Math.cos(V);A.x=b*W,A.y=-y*n+x,A.z=b*j,u.push(A.x,A.y,A.z),M.set(W,w,j).normalize(),h.push(M.x,M.y,M.z),d.push(G,1-y),O.push(m++)}_.push(O)}for(let P=0;P<i;P++)for(let O=0;O<s;O++){let y=_[O][P],b=_[O+1][P],C=_[O+1][P+1],G=_[O][P+1];if(t>0||O!==0)l.push(y,b,G),E+=3;if(e>0||O!==s-1)l.push(b,C,G),E+=3}c.addGroup(p,E,0),p+=E}function S(M){let A=m,E=new Xt,w=new B,P=0,O=M===!0?t:e,y=M===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,x*y,0),h.push(0,y,0),d.push(0.5,0.5),m++;let b=m;for(let C=0;C<=i;C++){let V=C/i*o+a,W=Math.cos(V),j=Math.sin(V);w.x=O*j,w.y=x*y,w.z=O*W,u.push(w.x,w.y,w.z),h.push(0,y,0),E.x=W*0.5+0.5,E.y=j*0.5*y+0.5,d.push(E.x,E.y),m++}for(let C=0;C<i;C++){let G=A+C,V=b+C;if(M===!0)l.push(V,V+1,G);else l.push(V+1,V,G);P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class is extends be{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),c=a+1,l=o+1,u=t/a,h=e/o,d=[],m=[],_=[],x=[];for(let p=0;p<l;p++){let f=p*h-r;for(let S=0;S<c;S++){let M=S*u-s;m.push(M,-f,0),_.push(0,0,1),x.push(S/a),x.push(1-p/o)}}for(let p=0;p<o;p++)for(let f=0;f<a;f++){let S=f+c*p,M=f+c*(p+1),A=f+1+c*(p+1),E=f+1+c*p;d.push(S,M,E),d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.widthSegments,t.heightSegments)}}class rr extends yn{constructor(t){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ss extends yn{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qa extends yn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ya extends yn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ps(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function lu(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}class Ai{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Za extends Ai{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let c=(n-e)*0.5,l=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(o-n),this._offsetPrev=s*l,this._offsetNext=r*l}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,x=_*m,p=-h*x+2*h*_-h*m,f=(1+h)*x+(-1.5-2*h)*_+(-0.5+h)*m+1,S=(-1-d)*x+(1.5+d)*_+0.5*m,M=d*x-d*_;for(let A=0;A!==a;++A)s[A]=p*r[l+A]+f*r[c+A]+S*r[o+A]+M*r[u+A];return s}}class Ja extends Ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,c=o-a,l=(n-e)/(i-e),u=1-l;for(let h=0;h!==a;++h)s[h]=r[c+h]*u+r[o+h]*l;return s}}class $a extends Ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ye{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Wt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Wt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Wt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Wt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(lu(i))for(let a=0,o=i.length;a!==o;++a){let c=i[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,c=t[a],l=t[a+1];if(c!==l&&(a!==1||c!==t[0]))if(!i){let u=a*n,h=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[h+m]||_!==e[d+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,h=r*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,c=0;c!==n;++c)e[o+c]=e[a+c];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ye.prototype.ValueTypeName="";Ye.prototype.TimeBufferType=Float32Array;Ye.prototype.ValueBufferType=Float32Array;Ye.prototype.DefaultInterpolation=2301;class Xn extends Ye{constructor(t,e,n){super(t,e,n)}}Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=2300;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ka extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}Ka.prototype.ValueTypeName="color";class Qa extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}Qa.prototype.ValueTypeName="number";class ja extends Ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),c=t*a;for(let l=c+a;c!==l;c+=4)Ln.slerpFlat(s,0,r,c-a,r,c,o);return s}}class ar extends Ye{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}}ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;class qn extends Ye{constructor(t,e,n){super(t,e,n)}}qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=2300;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}to.prototype.ValueTypeName="vector";class eo{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(l){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(l,r,a)}s=!0},this.itemEnd=function(l){if(r++,i.onProgress!==void 0)i.onProgress(l,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(l){if(i.onError!==void 0)i.onError(l)},this.resolveURL=function(l){if(o)return o(l);return l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);if(u!==-1)c.splice(u,2);return this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],m=c[u+1];if(d.global)d.lastIndex=0;if(d.test(l))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var il=new eo;class no{constructor(t){this.manager=t!==void 0?t:il,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";class or extends ge{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);if(e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0)e.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)e.object.distance=this.distance;if(this.angle!==void 0)e.object.angle=this.angle;if(this.decay!==void 0)e.object.decay=this.decay;if(this.penumbra!==void 0)e.object.penumbra=this.penumbra;if(this.shadow!==void 0)e.object.shadow=this.shadow.toJSON();if(this.target!==void 0)e.object.target=this.target.uuid;return e}}class cr extends or{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var Vr=new oe,$o=new B,Ko=new B;class sl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;if($o.setFromMatrixPosition(t.matrixWorld),e.position.copy($o),Ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ko),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr,e.coordinateSystem,e.reversedDepth),e.reversedDepth)n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};if(this.intensity!==1)t.intensity=this.intensity;if(this.bias!==0)t.bias=this.bias;if(this.normalBias!==0)t.normalBias=this.normalBias;if(this.radius!==1)t.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)t.mapSize=this.mapSize.toArray();return t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lr extends js{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class rl extends sl{constructor(){super(new lr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class hr extends or{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new rl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class io extends Re{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var so="\\[\\]\\.:\\/",hu=new RegExp("["+so+"]","g"),ro="[^"+so+"]",uu="[^"+so.replace("\\.","")+"]",du=/((?:WC+[\/:])*)/.source.replace("WC",ro),fu=/(WCOD+)?/.source.replace("WCOD",uu),pu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ro),mu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ro),xu=new RegExp("^"+du+fu+pu+mu+"$"),gu=["material","materials","bones","map"];class al{constructor(t,e,n){let i=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ne(t,e,n);else return new ne.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hu,"")}static parseTrackName(t){let e=xu.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(gu.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=ne.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[i];if(r===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=al;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C0=new Float32Array(1);var Qo=new oe;class ur{constructor(t,e,n=0,i=1/0){this.ray=new $i(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qo),this}intersectObject(t,e=!0,n=[]){return Xr(t,this,n,e),n.sort(jo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Xr(t[i],this,n,e);return n.sort(jo),n}}function jo(t,e){return t.distance-e.distance}function Xr(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)Xr(r[a],e,n,!0)}}function ao(t,e,n,i){let s=_u(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _u(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));if(typeof window<"u")if(window.__THREE__)Ft("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="181";function Rl(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function vu(t){let e=new WeakMap;function n(o,c){let{array:l,usage:u}=o,h=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=t.HALF_FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=t.HALF_FLOAT;else m=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=t.SHORT;else if(l instanceof Uint32Array)m=t.UNSIGNED_INT;else if(l instanceof Int32Array)m=t.INT;else if(l instanceof Int8Array)m=t.BYTE;else if(l instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let{array:u,updateRanges:h}=c;if(t.bindBuffer(l,o),h.length===0)t.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){let _=h[d],x=h[m];if(x.start<=_.start+_.count+1)_.count=Math.max(_.count,x.start+x.count-_.start);else++d,h[d]=x}h.length=d+1;for(let m=0,_=h.length;m<_;m++){let x=h[m];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let c=e.get(o);if(c)t.deleteBuffer(c.buffer),e.delete(o)}function a(o,c){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_d=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;var Ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:yu,alphahash_pars_fragment:bu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:Tu,alphatest_pars_fragment:Eu,aomap_fragment:wu,aomap_pars_fragment:Au,batching_pars_vertex:Cu,batching_vertex:Ru,begin_vertex:Iu,beginnormal_vertex:Pu,bsdfs:Lu,iridescence_fragment:Du,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Fu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Bu,color_fragment:zu,color_pars_fragment:ku,color_pars_vertex:Gu,color_vertex:Hu,common:Vu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ju,colorspace_fragment:$u,colorspace_pars_fragment:Ku,envmap_fragment:Qu,envmap_common_pars_fragment:ju,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_pars_fragment:cd,lights_lambert_fragment:ld,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:xd,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:vd,lights_fragment_maps:yd,lights_fragment_end:bd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ed,map_fragment:wd,map_pars_fragment:Ad,map_particle_fragment:Cd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:kd,normal_vertex:Gd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:Zd,premultiplied_alpha_fragment:Jd,project_vertex:$d,dithering_fragment:Kd,dithering_pars_fragment:Qd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:cf,skinnormal_vertex:lf,specularmap_fragment:hf,specularmap_pars_fragment:uf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:xf,uv_pars_vertex:gf,uv_vertex:_f,worldpos_vertex:vf,background_vert:yf,background_frag:bf,backgroundCube_vert:Mf,backgroundCube_frag:Sf,cube_vert:Tf,cube_frag:Ef,depth_vert:wf,depth_frag:Af,distanceRGBA_vert:Cf,distanceRGBA_frag:Rf,equirect_vert:If,equirect_frag:Pf,linedashed_vert:Lf,linedashed_frag:Df,meshbasic_vert:Uf,meshbasic_frag:Nf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:kf,meshnormal_frag:Gf,meshphong_vert:Hf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:Zf,points_frag:Jf,shadow_vert:$f,shadow_frag:Kf,sprite_vert:Qf,sprite_frag:jf},ut={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Xt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},sn={basic:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:we([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:we([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:we([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:we([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:we([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:we([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:we([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:we([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:we([ut.common,ut.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:we([ut.lights,ut.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};sn.physical={uniforms:we([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var dr={r:0,b:0,g:0},Yn=new Xe,tp=new oe;function ep(t,e,n,i,s,r,a){let o=new Ut(0),c=r===!0?0:1,l,u,h=null,d=0,m=null;function _(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture)A=(M.backgroundBlurriness>0?n:e).get(A);return A}function x(M){let A=!1,E=_(M);if(E===null)f(o,c);else if(E&&E.isColor)f(E,1),A=!0;let w=t.xr.getEnvironmentBlendMode();if(w==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(w==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(t.autoClear||A)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function p(M,A){let E=_(A);if(E&&(E.isCubeTexture||E.mapping===Vi)){if(u===void 0)u=new Me(new wi(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Wn(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u);if(Yn.copy(A.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1)Yn.y*=-1,Yn.z*=-1;if(u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(Yn)),u.material.toneMapped=$t.getTransfer(E.colorSpace)!==re,h!==E||d!==E.version||m!==t.toneMapping)u.material.needsUpdate=!0,h=E,d=E.version,m=t.toneMapping;u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)}else if(E&&E.isTexture){if(l===void 0)l=new Me(new is(2,2),new Qe({name:"BackgroundMaterial",uniforms:Wn(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l);if(l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=$t.getTransfer(E.colorSpace)!==re,E.matrixAutoUpdate===!0)E.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(E.matrix),h!==E||d!==E.version||m!==t.toneMapping)l.material.needsUpdate=!0,h=E,d=E.version,m=t.toneMapping;l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)}}function f(M,A){M.getRGB(dr,Ha(t)),i.buffers.color.setClear(dr.r,dr.g,dr.b,A,a)}function S(){if(u!==void 0)u.geometry.dispose(),u.material.dispose(),u=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),c=A,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:x,addToRenderList:p,dispose:S}}function np(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(b,C,G,V,W){let j=!1,J=h(V,G,C);if(r!==J)r=J,l(r.object);if(j=m(b,V,G,W),j)_(b,V,G,W);if(W!==null)e.update(W,t.ELEMENT_ARRAY_BUFFER);if(j||a){if(a=!1,A(b,C,G,V),W!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer)}}function c(){return t.createVertexArray()}function l(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function h(b,C,G){let V=G.wireframe===!0,W=i[b.id];if(W===void 0)W={},i[b.id]=W;let j=W[C.id];if(j===void 0)j={},W[C.id]=j;let J=j[V];if(J===void 0)J=d(c()),j[V]=J;return J}function d(b){let C=[],G=[],V=[];for(let W=0;W<n;W++)C[W]=0,G[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:V,object:b,attributes:{},index:null}}function m(b,C,G,V){let W=r.attributes,j=C.attributes,J=0,it=G.getAttributes();for(let H in it)if(it[H].location>=0){let pt=W[H],Lt=j[H];if(Lt===void 0){if(H==="instanceMatrix"&&b.instanceMatrix)Lt=b.instanceMatrix;if(H==="instanceColor"&&b.instanceColor)Lt=b.instanceColor}if(pt===void 0)return!0;if(pt.attribute!==Lt)return!0;if(Lt&&pt.data!==Lt.data)return!0;J++}if(r.attributesNum!==J)return!0;if(r.index!==V)return!0;return!1}function _(b,C,G,V){let W={},j=C.attributes,J=0,it=G.getAttributes();for(let H in it)if(it[H].location>=0){let pt=j[H];if(pt===void 0){if(H==="instanceMatrix"&&b.instanceMatrix)pt=b.instanceMatrix;if(H==="instanceColor"&&b.instanceColor)pt=b.instanceColor}let Lt={};if(Lt.attribute=pt,pt&&pt.data)Lt.data=pt.data;W[H]=Lt,J++}r.attributes=W,r.attributesNum=J,r.index=V}function x(){let b=r.newAttributes;for(let C=0,G=b.length;C<G;C++)b[C]=0}function p(b){f(b,0)}function f(b,C){let G=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;if(G[b]=1,V[b]===0)t.enableVertexAttribArray(b),V[b]=1;if(W[b]!==C)t.vertexAttribDivisor(b,C),W[b]=C}function S(){let b=r.newAttributes,C=r.enabledAttributes;for(let G=0,V=C.length;G<V;G++)if(C[G]!==b[G])t.disableVertexAttribArray(G),C[G]=0}function M(b,C,G,V,W,j,J){if(J===!0)t.vertexAttribIPointer(b,C,G,W,j);else t.vertexAttribPointer(b,C,G,V,W,j)}function A(b,C,G,V){x();let W=V.attributes,j=G.getAttributes(),J=C.defaultAttributeValues;for(let it in j){let H=j[it];if(H.location>=0){let st=W[it];if(st===void 0){if(it==="instanceMatrix"&&b.instanceMatrix)st=b.instanceMatrix;if(it==="instanceColor"&&b.instanceColor)st=b.instanceColor}if(st!==void 0){let pt=st.normalized,Lt=st.itemSize,Bt=e.get(st);if(Bt===void 0)continue;let{buffer:Vt,type:xt,bytesPerElement:X}=Bt,rt=xt===t.INT||xt===t.UNSIGNED_INT||st.gpuType===Kr;if(st.isInterleavedBufferAttribute){let nt=st.data,Mt=nt.stride,Nt=st.offset;if(nt.isInstancedInterleavedBuffer){for(let At=0;At<H.locationSize;At++)f(H.location+At,nt.meshPerAttribute);if(b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0)V._maxInstanceCount=nt.meshPerAttribute*nt.count}else for(let At=0;At<H.locationSize;At++)p(H.location+At);t.bindBuffer(t.ARRAY_BUFFER,Vt);for(let At=0;At<H.locationSize;At++)M(H.location+At,Lt/H.locationSize,xt,pt,Mt*X,(Nt+Lt/H.locationSize*At)*X,rt)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)f(H.location+nt,st.meshPerAttribute);if(b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0)V._maxInstanceCount=st.meshPerAttribute*st.count}else for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt);t.bindBuffer(t.ARRAY_BUFFER,Vt);for(let nt=0;nt<H.locationSize;nt++)M(H.location+nt,Lt/H.locationSize,xt,pt,Lt*X,Lt/H.locationSize*nt*X,rt)}}else if(J!==void 0){let pt=J[it];if(pt!==void 0)switch(pt.length){case 2:t.vertexAttrib2fv(H.location,pt);break;case 3:t.vertexAttrib3fv(H.location,pt);break;case 4:t.vertexAttrib4fv(H.location,pt);break;default:t.vertexAttrib1fv(H.location,pt)}}}}S()}function E(){O();for(let b in i){let C=i[b];for(let G in C){let V=C[G];for(let W in V)u(V[W].object),delete V[W];delete C[G]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let C=i[b.id];for(let G in C){let V=C[G];for(let W in V)u(V[W].object),delete V[W];delete C[G]}delete i[b.id]}function P(b){for(let C in i){let G=i[C];if(G[b.id]===void 0)continue;let V=G[b.id];for(let W in V)u(V[W].object),delete V[W];delete G[b.id]}}function O(){if(y(),a=!0,r===s)return;r=s,l(r.object)}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function ip(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){if(h===0)return;t.drawArraysInstanced(i,l,u,h),n.update(u,i,h)}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];n.update(m,i,1)}function c(l,u,h,d){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sp(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){if(P!==nn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(P){let O=P===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(P!==Rn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!O)return!1;return!0}function c(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let l=n.precision!==void 0?n.precision:"highp",u=c(l);if(u!==l)Ft("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u;let h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:E,maxSamples:w}}function rp(t){let e=this,n=null,i=0,s=!1,r=!1,a=new pn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,m){let{clippingPlanes:_,clipIntersection:x,clipShadows:p}=h,f=t.get(h);if(!s||_===null||_.length===0||r&&!p)if(r)u(null);else l();else{let S=r?0:i,M=S*4,A=f.clippingState||null;c.value=A,A=u(_,d,M,m);for(let E=0;E!==M;++E)A[E]=n[E];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){if(c.value!==n)c.value=n,c.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(h,d,m,_){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=c.value,_!==!0||p===null){let f=m+x*4,S=d.matrixWorldInverse;if(o.getNormalMatrix(S),p===null||p.length<f)p=new Float32Array(f);for(let M=0,A=m;M!==x;++M,A+=4)a.copy(h[M]).applyMatrix4(S,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function ap(t){let e=new WeakMap;function n(a,o){if(o===Gs)a.mapping=gi;else if(o===Hs)a.mapping=Gn;return a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gs||o===Hs)if(e.has(a)){let c=e.get(a).texture;return n(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Wa(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",s),n(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);if(c!==void 0)e.delete(o),c.dispose()}function r(){e=new WeakMap}return{get:i,dispose:r}}var Dn=4,ol=[0.125,0.215,0.35,0.446,0.526,0.582],Jn=20,op=256,rs=new lr,cl=new Ut,oo=null,co=0,lo=0,ho=!1,cp=new B;class fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=cp}=s;oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,co,lo),this._renderer.xr.enabled=ho,t.scissorTest=!1,Ci(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===gi||t.mapping===Gn)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:bi,format:nn,colorSpace:Yi,depthBuffer:!1},i=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ll(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lp(s)),this._blurMaterial=up(s,t,e)}return i}_compileMaterial(t){let e=new Me(new be,t);this._renderer.compile(e,rs)}_sceneToCubeUV(t,e,n,i,s){let o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:h,toneMapping:d}=u;if(u.getClearColor(cl),u.toneMapping=gn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Me(new wi,new Ei({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,x=_.material,p=!1,f=t.background;if(f){if(f.isColor)x.color.copy(f),t.background=null,p=!0}else x.color.copy(cl),p=!0;for(let S=0;S<6;S++){let M=S%3;if(M===0)o.up.set(0,c[S],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+l[S],s.y,s.z);else if(M===1)o.up.set(0,0,c[S]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+l[S],s.z);else o.up.set(0,c[S],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+l[S]);let A=this._cubeSize;if(Ci(i,M*A,S>2?A:0,A,A),u.setRenderTarget(i),p)u.render(_,o);u.render(t,o)}u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===gi||t.mapping===Gn;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=ul();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=hl();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Ci(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,rs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){let f=3*Math.max(this._cubeSize,16),S=4*this._cubeSize;this._ggxMaterial=hp(this._lodMax,f,S)}let r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,c=n/(this._lodMeshes.length-1),l=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l),h=0.05+c*0.95,d=u*h,{_lodMax:m}=this,_=this._sizeLods[n],x=3*_*(n>m-Dn?n-m+Dn:0),p=4*(this._cubeSize-_);o.envMap.value=t.texture,o.roughness.value=d,o.mipInt.value=m-e,Ci(s,x,p,3*_,2*_),i.setRenderTarget(s),i.render(a,rs),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=m-n,Ci(t,x,p,3*_,2*_),i.setRenderTarget(t),i.render(a,rs)}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let o=this._renderer,c=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")Wt("blur direction must be either latitudinal or longitudinal!");let l=3,u=this._lodMeshes[i];u.material=c;let h=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Jn-1),_=s/m,x=isFinite(s)?1+Math.floor(l*_):Jn;if(x>Jn)Ft(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Jn}`);let p=[],f=0;for(let w=0;w<Jn;++w){let P=w/_,O=Math.exp(-P*P/2);if(p.push(O),w===0)f+=O;else if(w<x)f+=2*O}for(let w=0;w<p.length;w++)p[w]=p[w]/f;if(h.envMap.value=t.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a)h.poleAxis.value=a;let{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-n;let M=this._sizeLods[i],A=3*M*(i>S-Dn?i-S+Dn:0),E=4*(this._cubeSize-M);Ci(e,A,E,3*M,2*M),o.setRenderTarget(e),o.render(u,rs)}}function lp(t){let e=[],n=[],i=[],s=t,r=t-Dn+1+ol.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;if(a>t-Dn)c=ol[a-t+Dn-1];else if(a===0)c=0;n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,x=3,p=2,f=1,S=new Float32Array(x*_*m),M=new Float32Array(p*_*m),A=new Float32Array(f*_*m);for(let w=0;w<m;w++){let P=w%3*2/3-1,O=w>2?0:-1,y=[P,O,0,P+0.6666666666666666,O,0,P+0.6666666666666666,O+1,0,P,O,0,P+0.6666666666666666,O+1,0,P,O+1,0];S.set(y,x*_*w),M.set(d,p*_*w);let b=[w,w,w,w,w,w];A.set(b,f*_*w)}let E=new be;if(E.setAttribute("position",new Ie(S,x)),E.setAttribute("uv",new Ie(M,p)),E.setAttribute("faceIndex",new Ie(A,f)),i.push(new Me(E,null)),s>Dn)s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ll(t,e,n){let i=new vn(t,e,n);return i.texture.mapping=Vi,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ci(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function hp(t,e,n){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:op,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function up(t,e,n){let i=new Float32Array(Jn),s=new B(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function hl(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ul(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function pr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dp(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Gs||c===Hs,u=c===gi||c===Gn;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d){if(n===null)n=new fo(t);return h=l?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture}else if(h!==void 0)return h.texture;else{let m=o.image;if(l&&m&&m.height>0||u&&m&&s(m)){if(n===null)n=new fo(t);return h=l?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)if(o[u]!==void 0)c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);if(l!==void 0)e.delete(c),l.dispose()}function a(){if(e=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:a}}function fp(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)fi("WebGLRenderer: "+i+" extension not supported.");return s}}}function pp(t,e,n,i){let s={},r=new WeakMap;function a(h){let d=h.target;if(d.index!==null)e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);if(m)e.remove(m),r.delete(d);if(i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;n.memory.geometries--}function o(h,d){if(s[d.id]===!0)return d;return d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++,d}function c(h){let d=h.attributes;for(let m in d)e.update(d[m],t.ARRAY_BUFFER)}function l(h){let d=[],m=h.index,_=h.attributes.position,x=0;if(m!==null){let S=m.array;x=m.version;for(let M=0,A=S.length;M<A;M+=3){let E=S[M+0],w=S[M+1],P=S[M+2];d.push(E,w,w,P,P,E)}}else if(_!==void 0){let S=_.array;x=_.version;for(let M=0,A=S.length/3-1;M<A;M+=3){let E=M+0,w=M+1,P=M+2;d.push(E,w,w,P,P,E)}}else return;let p=new((Fa(d))?Qs:Ks)(d,1);p.version=x;let f=r.get(h);if(f)e.remove(f);r.set(h,p)}function u(h){let d=r.get(h);if(d){let m=h.index;if(m!==null){if(d.version<m.version)l(h)}}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function mp(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){t.drawElements(i,m,r,d*a),n.update(m,i,1)}function l(d,m,_){if(_===0)return;t.drawElementsInstanced(i,m,r,d*a,_),n.update(m,i,_)}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];n.update(p,i,1)}function h(d,m,_,x){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/a,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,x,0,_);let f=0;for(let S=0;S<_;S++)f+=m[S]*x[S];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function gp(t,e,n){let i=new WeakMap,s=new ue;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};if(d!==void 0)d.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],M=0;if(m===!0)M=1;if(_===!0)M=2;if(x===!0)M=3;let A=o.attributes.position.count*M,E=1;if(A>e.maxTextureSize)E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize;let w=new Float32Array(A*E*4*h),P=new $s(w,A,E,h);P.type=In,P.needsUpdate=!0;let O=M*4;for(let b=0;b<h;b++){let C=p[b],G=f[b],V=S[b],W=A*E*4*b;for(let j=0;j<C.count;j++){let J=j*O;if(m===!0)s.fromBufferAttribute(C,j),w[W+J+0]=s.x,w[W+J+1]=s.y,w[W+J+2]=s.z,w[W+J+3]=0;if(_===!0)s.fromBufferAttribute(G,j),w[W+J+4]=s.x,w[W+J+5]=s.y,w[W+J+6]=s.z,w[W+J+7]=0;if(x===!0)s.fromBufferAttribute(V,j),w[W+J+8]=s.x,w[W+J+9]=s.y,w[W+J+10]=s.z,w[W+J+11]=V.itemSize===4?s.w:1}}d={count:h,texture:P,size:new Xt(A,E)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function _p(t,e,n,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l)e.update(h),s.set(h,l);if(c.isInstancedMesh){if(c.hasEventListener("dispose",o)===!1)c.addEventListener("dispose",o);if(s.get(c)!==l){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);s.set(c,l)}}if(c.isSkinnedMesh){let d=c.skeleton;if(s.get(d)!==l)d.update(),s.set(d,l)}return h}function a(){s=new WeakMap}function o(c){let l=c.target;if(l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null)n.remove(l.instanceColor)}return{update:r,dispose:a}}var Il=new Ee,dl=new ir(1,1),Pl=new $s,Ll=new Ga,Dl=new tr,fl=[],pl=[],ml=new Float32Array(16),xl=new Float32Array(9),gl=new Float32Array(4);function Ri(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=fl[s];if(r===void 0)r=new Float32Array(s),fl[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function _e(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ve(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mr(t,e){let n=pl[e];if(n===void 0)n=new Int32Array(e),pl[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function yp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(_e(n,e))return;t.uniform2fv(this.addr,e),ve(n,e)}}function bp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(_e(n,e))return;t.uniform3fv(this.addr,e),ve(n,e)}}function Mp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(_e(n,e))return;t.uniform4fv(this.addr,e),ve(n,e)}}function Sp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ve(n,e)}else{if(_e(n,i))return;gl.set(i),t.uniformMatrix2fv(this.addr,!1,gl),ve(n,i)}}function Tp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ve(n,e)}else{if(_e(n,i))return;xl.set(i),t.uniformMatrix3fv(this.addr,!1,xl),ve(n,i)}}function Ep(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ve(n,e)}else{if(_e(n,i))return;ml.set(i),t.uniformMatrix4fv(this.addr,!1,ml),ve(n,i)}}function wp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Ap(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(_e(n,e))return;t.uniform2iv(this.addr,e),ve(n,e)}}function Cp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(_e(n,e))return;t.uniform3iv(this.addr,e),ve(n,e)}}function Rp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(_e(n,e))return;t.uniform4iv(this.addr,e),ve(n,e)}}function Ip(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Pp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(_e(n,e))return;t.uniform2uiv(this.addr,e),ve(n,e)}}function Lp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(_e(n,e))return;t.uniform3uiv(this.addr,e),ve(n,e)}}function Dp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(_e(n,e))return;t.uniform4uiv(this.addr,e),ve(n,e)}}function Up(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)dl.compareFunction=Da,r=dl;else r=Il;n.setTexture2D(e||r,s)}function Np(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ll,s)}function Fp(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Dl,s)}function Op(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Pl,s)}function Bp(t){switch(t){case 5126:return vp;case 35664:return yp;case 35665:return bp;case 35666:return Mp;case 35674:return Sp;case 35675:return Tp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return Ap;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Ip;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function zp(t,e){t.uniform1fv(this.addr,e)}function kp(t,e){let n=Ri(e,this.size,2);t.uniform2fv(this.addr,n)}function Gp(t,e){let n=Ri(e,this.size,3);t.uniform3fv(this.addr,n)}function Hp(t,e){let n=Ri(e,this.size,4);t.uniform4fv(this.addr,n)}function Vp(t,e){let n=Ri(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Wp(t,e){let n=Ri(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Xp(t,e){let n=Ri(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qp(t,e){t.uniform1iv(this.addr,e)}function Yp(t,e){t.uniform2iv(this.addr,e)}function Zp(t,e){t.uniform3iv(this.addr,e)}function Jp(t,e){t.uniform4iv(this.addr,e)}function $p(t,e){t.uniform1uiv(this.addr,e)}function Kp(t,e){t.uniform2uiv(this.addr,e)}function Qp(t,e){t.uniform3uiv(this.addr,e)}function jp(t,e){t.uniform4uiv(this.addr,e)}function tm(t,e,n){let i=this.cache,s=e.length,r=mr(n,s);if(!_e(i,r))t.uniform1iv(this.addr,r),ve(i,r);for(let a=0;a!==s;++a)n.setTexture2D(e[a]||Il,r[a])}function em(t,e,n){let i=this.cache,s=e.length,r=mr(n,s);if(!_e(i,r))t.uniform1iv(this.addr,r),ve(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Ll,r[a])}function nm(t,e,n){let i=this.cache,s=e.length,r=mr(n,s);if(!_e(i,r))t.uniform1iv(this.addr,r),ve(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Dl,r[a])}function im(t,e,n){let i=this.cache,s=e.length,r=mr(n,s);if(!_e(i,r))t.uniform1iv(this.addr,r),ve(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Pl,r[a])}function sm(t){switch(t){case 5126:return zp;case 35664:return kp;case 35665:return Gp;case 35666:return Hp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return $p;case 36294:return Kp;case 36295:return Qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class Ul{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bp(e.type)}}class Nl{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sm(e.type)}}class Fl{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var uo=/(\w+)(\])?(\[|\.)?/g;function _l(t,e){t.seq.push(e),t.map[e.id]=e}function rm(t,e,n){let i=t.name,s=i.length;uo.lastIndex=0;while(!0){let r=uo.exec(i),a=uo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c)o=o|0;if(l===void 0||l==="["&&a+2===s){_l(n,l===void 0?new Ul(o,t,e):new Nl(o,t,e));break}else{let h=n.map[o];if(h===void 0)h=new Fl(o),_l(n,h);n=h}}}class os{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);rm(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function vl(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var am=37297,om=0;function cm(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var yl=new kt;function lm(t){$t._getMatrix(yl,$t.workingColorSpace,t);let e=`mat3( ${yl.elements.map((n)=>n.toFixed(4))} )`;switch($t.getTransfer(t)){case La:return[e,"LinearTransferOETF"];case re:return[e,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bl(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+cm(t.getShaderSource(e),o)}else return r}function hm(t,e){let n=lm(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function um(t,e){let n;switch(e){case wc:n="Linear";break;case Ac:n="Reinhard";break;case Cc:n="Cineon";break;case ks:n="ACESFilmic";break;case Ic:n="AgX";break;case Pc:n="Neutral";break;case Rc:n="Custom";break;default:Ft("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var fr=new B;function dm(){$t.getLuminanceCoefficients(fr);let t=fr.x.toFixed(4),e=fr.y.toFixed(4),n=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function fm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function pm(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function mm(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function as(t){return t!==""}function Ml(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(t){return t.replace(xm,_m)}var gm=new Map;function _m(t,e){let n=Ht[e];if(n===void 0){let i=gm.get(e);if(i!==void 0)n=Ht[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("Can not resolve #include <"+e+">")}return po(n)}var vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(t){return t.replace(vm,ym)}function ym(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function El(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}function bm(t){let e="SHADOWMAP_TYPE_BASIC";if(t.shadowMapType===Yr)e="SHADOWMAP_TYPE_PCF";else if(t.shadowMapType===Ls)e="SHADOWMAP_TYPE_PCF_SOFT";else if(t.shadowMapType===en)e="SHADOWMAP_TYPE_VSM";return e}function Mm(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case gi:case Gn:e="ENVMAP_TYPE_CUBE";break;case Vi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gn:e="ENVMAP_MODE_REFRACTION";break}return e}function Tm(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function Em(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function wm(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,c=bm(n),l=Mm(n),u=Sm(n),h=Tm(n),d=Em(n),m=fm(n),_=pm(r),x=s.createProgram(),p,f,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(as).join(`
`),p.length>0)p+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(as).join(`
`),f.length>0)f+=`
`}else p=[El(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[El(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gn?"#define TONE_MAPPING":"",n.toneMapping!==gn?Ht.tonemapping_pars_fragment:"",n.toneMapping!==gn?um("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,hm("linearToOutputTexel",n.outputColorSpace),dm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(as).join(`
`);if(a=po(a),a=Ml(a,n),a=Sl(a,n),o=po(o),o=Ml(o,n),o=Sl(o,n),a=Tl(a),o=Tl(o),n.isRawShaderMaterial!==!0)S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let M=S+p+a,A=S+f+o,E=vl(s,s.VERTEX_SHADER,M),w=vl(s,s.FRAGMENT_SHADER,A);if(s.attachShader(x,E),s.attachShader(x,w),n.index0AttributeName!==void 0)s.bindAttribLocation(x,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(x,0,"position");s.linkProgram(x);function P(C){if(t.debug.checkShaderErrors){let G=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(E)||"",W=s.getShaderInfoLog(w)||"",j=G.trim(),J=V.trim(),it=W.trim(),H=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,x,E,w);else{let pt=bl(s,E,"vertex"),Lt=bl(s,w,"fragment");Wt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+j+`
`+pt+`
`+Lt)}else if(j!=="")Ft("WebGLProgram: Program Info Log:",j);else if(J===""||it==="")st=!1;if(st)C.diagnostics={runnable:H,programLog:j,vertexShader:{log:J,prefix:p},fragmentShader:{log:it,prefix:f}}}s.deleteShader(E),s.deleteShader(w),O=new os(s,x),y=mm(s,x)}let O;this.getUniforms=function(){if(O===void 0)P(this);return O};let y;this.getAttributes=function(){if(y===void 0)P(this);return y};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(b===!1)b=s.getProgramParameter(x,am);return b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=om++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}var Am=0;class Ol{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Bl(t),e.set(t,n);return n}}class Bl{constructor(t){this.id=Am++,this.code=t,this.usedTimes=0}}function Cm(t,e,n,i,s,r,a){let o=new Ki,c=new Ol,l=new Set,u=[],{logarithmicDepthBuffer:h,vertexTextures:d,precision:m}=s,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){if(l.add(y),y===0)return"uv";return`uv${y}`}function p(y,b,C,G,V){let W=G.fog,j=V.geometry,J=y.isMeshStandardMaterial?G.environment:null,it=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),H=!!it&&it.mapping===Vi?it.image.height:null,st=_[y.type];if(y.precision!==null){if(m=s.getMaxPrecision(y.precision),m!==y.precision)Ft("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead.")}let pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Lt=pt!==void 0?pt.length:0,Bt=0;if(j.morphAttributes.position!==void 0)Bt=1;if(j.morphAttributes.normal!==void 0)Bt=2;if(j.morphAttributes.color!==void 0)Bt=3;let Vt,xt,X,rt;if(st){let ee=sn[st];Vt=ee.vertexShader,xt=ee.fragmentShader}else Vt=y.vertexShader,xt=y.fragmentShader,c.update(y),X=c.getVertexShaderID(y),rt=c.getFragmentShaderID(y);let nt=t.getRenderTarget(),Mt=t.state.buffers.depth.getReversed(),Nt=V.isInstancedMesh===!0,At=V.isBatchedMesh===!0,de=!!y.map,Gt=!!y.matcap,Qt=!!it,I=!!y.aoMap,qt=!!y.lightMap,zt=!!y.bumpMap,jt=!!y.normalMap,St=!!y.displacementMap,Yt=!!y.emissiveMap,Tt=!!y.metalnessMap,Ct=!!y.roughnessMap,ce=y.anisotropy>0,T=y.clearcoat>0,g=y.dispersion>0,F=y.iridescence>0,Z=y.sheen>0,L=y.transmission>0,D=ce&&!!y.anisotropyMap,q=T&&!!y.clearcoatMap,Y=T&&!!y.clearcoatNormalMap,lt=T&&!!y.clearcoatRoughnessMap,_t=F&&!!y.iridescenceMap,Q=F&&!!y.iridescenceThicknessMap,dt=Z&&!!y.sheenColorMap,It=Z&&!!y.sheenRoughnessMap,Et=!!y.specularMap,ot=!!y.specularColorMap,ct=!!y.specularIntensityMap,R=L&&!!y.transmissionMap,ht=L&&!!y.thicknessMap,tt=!!y.gradientMap,gt=!!y.alphaMap,et=y.alphaTest>0,K=!!y.alphaHash,vt=!!y.extensions,Ot=gn;if(y.toneMapped){if(nt===null||nt.isXRRenderTarget===!0)Ot=t.toneMapping}let ae={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:Vt,fragmentShader:xt,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:At,batchingColor:At&&V._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&V.instanceColor!==null,instancingMorph:Nt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?t.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Yi,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:Gt,envMap:Qt,envMapMode:Qt&&it.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:qt,bumpMap:zt,normalMap:jt,displacementMap:d&&St,emissiveMap:Yt,normalMapObjectSpace:jt&&y.normalMapType===Wc,normalMapTangentSpace:jt&&y.normalMapType===Vc,metalnessMap:Tt,roughnessMap:Ct,anisotropy:ce,anisotropyMap:D,clearcoat:T,clearcoatMap:q,clearcoatNormalMap:Y,clearcoatRoughnessMap:lt,dispersion:g,iridescence:F,iridescenceMap:_t,iridescenceThicknessMap:Q,sheen:Z,sheenColorMap:dt,sheenRoughnessMap:It,specularMap:Et,specularColorMap:ot,specularIntensityMap:ct,transmission:L,transmissionMap:R,thicknessMap:ht,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Gi&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:et,alphaHash:K,combine:y.combine,mapUv:de&&x(y.map.channel),aoMapUv:I&&x(y.aoMap.channel),lightMapUv:qt&&x(y.lightMap.channel),bumpMapUv:zt&&x(y.bumpMap.channel),normalMapUv:jt&&x(y.normalMap.channel),displacementMapUv:St&&x(y.displacementMap.channel),emissiveMapUv:Yt&&x(y.emissiveMap.channel),metalnessMapUv:Tt&&x(y.metalnessMap.channel),roughnessMapUv:Ct&&x(y.roughnessMap.channel),anisotropyMapUv:D&&x(y.anisotropyMap.channel),clearcoatMapUv:q&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Y&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(y.sheenRoughnessMap.channel),specularMapUv:Et&&x(y.specularMap.channel),specularColorMapUv:ot&&x(y.specularColorMap.channel),specularIntensityMapUv:ct&&x(y.specularIntensityMap.channel),transmissionMapUv:R&&x(y.transmissionMap.channel),thicknessMapUv:ht&&x(y.thicknessMap.channel),alphaMapUv:gt&&x(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(jt||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(de||gt),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Mt,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ot,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:Yt&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qe,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function f(y){let b=[];if(y.shaderID)b.push(y.shaderID);else b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID);if(y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);if(y.isRawShaderMaterial===!1)S(b,y),M(b,y),b.push(t.outputColorSpace);return b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){if(o.disableAll(),b.supportsVertexTextures)o.enable(0);if(b.instancing)o.enable(1);if(b.instancingColor)o.enable(2);if(b.instancingMorph)o.enable(3);if(b.matcap)o.enable(4);if(b.envMap)o.enable(5);if(b.normalMapObjectSpace)o.enable(6);if(b.normalMapTangentSpace)o.enable(7);if(b.clearcoat)o.enable(8);if(b.iridescence)o.enable(9);if(b.alphaTest)o.enable(10);if(b.vertexColors)o.enable(11);if(b.vertexAlphas)o.enable(12);if(b.vertexUv1s)o.enable(13);if(b.vertexUv2s)o.enable(14);if(b.vertexUv3s)o.enable(15);if(b.vertexTangents)o.enable(16);if(b.anisotropy)o.enable(17);if(b.alphaHash)o.enable(18);if(b.batching)o.enable(19);if(b.dispersion)o.enable(20);if(b.batchingColor)o.enable(21);if(b.gradientMap)o.enable(22);if(y.push(o.mask),o.disableAll(),b.fog)o.enable(0);if(b.useFog)o.enable(1);if(b.flatShading)o.enable(2);if(b.logarithmicDepthBuffer)o.enable(3);if(b.reversedDepthBuffer)o.enable(4);if(b.skinning)o.enable(5);if(b.morphTargets)o.enable(6);if(b.morphNormals)o.enable(7);if(b.morphColors)o.enable(8);if(b.premultipliedAlpha)o.enable(9);if(b.shadowMapEnabled)o.enable(10);if(b.doubleSided)o.enable(11);if(b.flipSided)o.enable(12);if(b.useDepthPacking)o.enable(13);if(b.dithering)o.enable(14);if(b.transmission)o.enable(15);if(b.sheen)o.enable(16);if(b.opaque)o.enable(17);if(b.pointsUvs)o.enable(18);if(b.decodeVideoTexture)o.enable(19);if(b.decodeVideoTextureEmissive)o.enable(20);if(b.alphaToCoverage)o.enable(21);y.push(o.mask)}function A(y){let b=_[y.type],C;if(b){let G=sn[b];C=nl.clone(G.uniforms)}else C=y.uniforms;return C}function E(y,b){let C;for(let G=0,V=u.length;G<V;G++){let W=u[G];if(W.cacheKey===b){C=W,++C.usedTimes;break}}if(C===void 0)C=new wm(t,b,y,r),u.push(C);return C}function w(y){if(--y.usedTimes===0){let b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:E,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:O}}function Rm(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,c){t.get(a)[o]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Im(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function wl(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Al(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h,d,m,_,x,p){let f=t[e];if(f===void 0)f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=f;else f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=p;return e++,f}function o(h,d,m,_,x,p){let f=a(h,d,m,_,x,p);if(m.transmission>0)i.push(f);else if(m.transparent===!0)s.push(f);else n.push(f)}function c(h,d,m,_,x,p){let f=a(h,d,m,_,x,p);if(m.transmission>0)i.unshift(f);else if(m.transparent===!0)s.unshift(f);else n.unshift(f)}function l(h,d){if(n.length>1)n.sort(h||Im);if(i.length>1)i.sort(d||wl);if(s.length>1)s.sort(d||wl)}function u(){for(let h=e,d=t.length;h<d;h++){let m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Pm(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Al,t.set(i,[a]);else if(s>=r.length)a=new Al,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Lm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ut};break;case"SpotLight":n={position:new B,direction:new B,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Dm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Um=0;function Nm(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Fm(t){let e=new Lm,n=Dm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let s=new B,r=new oe,a=new oe;function o(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,_=0,x=0,p=0,f=0,S=0,M=0,A=0,E=0,w=0,P=0;l.sort(Nm);for(let y=0,b=l.length;y<b;y++){let C=l[y],{color:G,intensity:V,distance:W}=C,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*V,h+=G.g*V,d+=G.b*V;else if(C.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(C.sh.coefficients[J],V);P++}else if(C.isDirectionalLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,H=n.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=C.shadow.matrix,S++}i.directional[m]=J,m++}else if(C.isSpotLight){let J=e.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(G).multiplyScalar(V),J.distance=W,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,i.spot[x]=J;let it=C.shadow;if(C.map){if(i.spotLightMap[E]=C.map,E++,it.updateMatrices(C),C.castShadow)w++}if(i.spotLightMatrix[x]=it.matrix,C.castShadow){let H=n.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=j,A++}x++}else if(C.isRectAreaLight){let J=e.get(C);J.color.copy(G).multiplyScalar(V),J.halfWidth.set(C.width*0.5,0,0),J.halfHeight.set(0,C.height*0.5,0),i.rectArea[p]=J,p++}else if(C.isPointLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){let it=C.shadow,H=n.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=C.shadow.matrix,M++}i.point[_]=J,_++}else if(C.isHemisphereLight){let J=e.get(C);J.skyColor.copy(C.color).multiplyScalar(V),J.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[f]=J,f++}}if(p>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2;else i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let O=i.hash;if(O.directionalLength!==m||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==f||O.numDirectionalShadows!==S||O.numPointShadows!==M||O.numSpotShadows!==A||O.numSpotMaps!==E||O.numLightProbes!==P)i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,O.directionalLength=m,O.pointLength=_,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=f,O.numDirectionalShadows=S,O.numPointShadows=M,O.numSpotShadows=A,O.numSpotMaps=E,O.numLightProbes=P,i.version=Um++}function c(l,u){let h=0,d=0,m=0,_=0,x=0,p=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let M=l[f];if(M.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(M.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(M.width*0.5,0,0),A.halfHeight.set(0,M.height*0.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let A=i.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function Cl(t){let e=new Fm(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}let l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Om(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Cl(t),e.set(s,[o]);else if(r>=a.length)o=new Cl(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function km(t,e,n){let i=new ts,s=new Xt,r=new Xt,a=new ue,o=new qa({depthPacking:Hc}),c=new Ya,l={},u=n.maxTextureSize,h={[mi]:ze,[ze]:mi,[qe]:qe},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new be;_.setAttribute("position",new Ie(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new Me(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let f=this.type;this.render=function(w,P,O){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(w.length===0)return;let y=t.getRenderTarget(),b=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),G=t.state;if(G.setBlending(xn),G.buffers.depth.getReversed()===!0)G.buffers.color.setClear(0,0,0,0);else G.buffers.color.setClear(1,1,1,1);G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=f!==en&&this.type===en,W=f===en&&this.type!==en;for(let j=0,J=w.length;j<J;j++){let it=w[j],H=it.shadow;if(H===void 0){Ft("WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/st.x),s.x=r.x*st.x,H.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/st.y),s.y=r.y*st.y,H.mapSize.y=r.y}if(H.map===null||V===!0||W===!0){let Lt=this.type!==en?{minFilter:_i,magFilter:_i}:{};if(H.map!==null)H.map.dispose();H.map=new vn(s.x,s.y,Lt),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();let pt=H.getViewportCount();for(let Lt=0;Lt<pt;Lt++){let Bt=H.getViewport(Lt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),G.viewport(a),H.updateMatrices(it,Lt),i=H.getFrustum(),A(P,O,H.camera,it,this.type)}if(H.isPointLightShadow!==!0&&this.type===en)S(H,O);H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(y,b,C)};function S(w,P){let O=e.update(x);if(d.defines.VSM_SAMPLES!==w.blurSamples)d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new vn(s.x,s.y);d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(P,null,O,d,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(P,null,O,m,x,null)}function M(w,P,O,y){let b=null,C=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=O.isPointLight===!0?c:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=b.uuid,V=P.uuid,W=l[G];if(W===void 0)W={},l[G]=W;let j=W[V];if(j===void 0)j=b.clone(),W[V]=j,P.addEventListener("dispose",E);b=j}if(b.visible=P.visible,b.wireframe=P.wireframe,y===en)b.side=P.shadowSide!==null?P.shadowSide:P.side;else b.side=P.shadowSide!==null?P.shadowSide:h[P.side];if(b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=t.properties.get(b);G.light=O}return b}function A(w,P,O,y,b){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&b===en)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);let V=e.update(w),W=w.material;if(Array.isArray(W)){let j=V.groups;for(let J=0,it=j.length;J<it;J++){let H=j[J],st=W[H.materialIndex];if(st&&st.visible){let pt=M(w,st,y,b);w.onBeforeShadow(t,w,P,O,V,pt,H),t.renderBufferDirect(O,null,V,pt,w,H),w.onAfterShadow(t,w,P,O,V,pt,H)}}}else if(W.visible){let j=M(w,W,y,b);w.onBeforeShadow(t,w,P,O,V,j,null),t.renderBufferDirect(O,null,V,j,w,null),w.onAfterShadow(t,w,P,O,V,j,null)}}}let G=w.children;for(let V=0,W=G.length;V<W;V++)A(G[V],P,O,y,b)}function E(w){w.target.removeEventListener("dispose",E);for(let O in l){let y=l[O],b=w.target.uuid;if(b in y)y[b].dispose(),delete y[b]}}}var Gm={[Ds]:Us,[Ns]:Bs,[Fs]:zs,[Hi]:Os,[Us]:Ds,[Bs]:Ns,[zs]:Fs,[Os]:Hi};function Hm(t,e){function n(){let R=!1,ht=new ue,tt=null,gt=new ue(0,0,0,0);return{setMask:function(et){if(tt!==et&&!R)t.colorMask(et,et,et,et),tt=et},setLocked:function(et){R=et},setClear:function(et,K,vt,Ot,ae){if(ae===!0)et*=Ot,K*=Ot,vt*=Ot;if(ht.set(et,K,vt,Ot),gt.equals(ht)===!1)t.clearColor(et,K,vt,Ot),gt.copy(ht)},reset:function(){R=!1,tt=null,gt.set(-1,0,0,0)}}}function i(){let R=!1,ht=!1,tt=null,gt=null,et=null;return{setReversed:function(K){if(ht!==K){let vt=e.get("EXT_clip_control");if(K)vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT);else vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT);ht=K;let Ot=et;et=null,this.setClear(Ot)}},getReversed:function(){return ht},setTest:function(K){if(K)nt(t.DEPTH_TEST);else Mt(t.DEPTH_TEST)},setMask:function(K){if(tt!==K&&!R)t.depthMask(K),tt=K},setFunc:function(K){if(ht)K=Gm[K];if(gt!==K){switch(K){case Ds:t.depthFunc(t.NEVER);break;case Us:t.depthFunc(t.ALWAYS);break;case Ns:t.depthFunc(t.LESS);break;case Hi:t.depthFunc(t.LEQUAL);break;case Fs:t.depthFunc(t.EQUAL);break;case Os:t.depthFunc(t.GEQUAL);break;case Bs:t.depthFunc(t.GREATER);break;case zs:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}gt=K}},setLocked:function(K){R=K},setClear:function(K){if(et!==K){if(ht)K=1-K;t.clearDepth(K),et=K}},reset:function(){R=!1,tt=null,gt=null,et=null,ht=!1}}}function s(){let R=!1,ht=null,tt=null,gt=null,et=null,K=null,vt=null,Ot=null,ae=null;return{setTest:function(ee){if(!R)if(ee)nt(t.STENCIL_TEST);else Mt(t.STENCIL_TEST)},setMask:function(ee){if(ht!==ee&&!R)t.stencilMask(ee),ht=ee},setFunc:function(ee,Ze,cn){if(tt!==ee||gt!==Ze||et!==cn)t.stencilFunc(ee,Ze,cn),tt=ee,gt=Ze,et=cn},setOp:function(ee,Ze,cn){if(K!==ee||vt!==Ze||Ot!==cn)t.stencilOp(ee,Ze,cn),K=ee,vt=Ze,Ot=cn},setLocked:function(ee){R=ee},setClear:function(ee){if(ae!==ee)t.clearStencil(ee),ae=ee},reset:function(){R=!1,ht=null,tt=null,gt=null,et=null,K=null,vt=null,Ot=null,ae=null}}}let r=new n,a=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,m=[],_=null,x=!1,p=null,f=null,S=null,M=null,A=null,E=null,w=null,P=new Ut(0,0,0),O=0,y=!1,b=null,C=null,G=null,V=null,W=null,j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,it=0,H=t.getParameter(t.VERSION);if(H.indexOf("WebGL")!==-1)it=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=it>=1;else if(H.indexOf("OpenGL ES")!==-1)it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=it>=2;let st=null,pt={},Lt=t.getParameter(t.SCISSOR_BOX),Bt=t.getParameter(t.VIEWPORT),Vt=new ue().fromArray(Lt),xt=new ue().fromArray(Bt);function X(R,ht,tt,gt){let et=new Uint8Array(4),K=t.createTexture();t.bindTexture(R,K),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let vt=0;vt<tt;vt++)if(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)t.texImage3D(ht,0,t.RGBA,1,1,gt,0,t.RGBA,t.UNSIGNED_BYTE,et);else t.texImage2D(ht+vt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,et);return K}let rt={};rt[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),rt[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),rt[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(t.DEPTH_TEST),a.setFunc(Hi),zt(!1),jt(qr),nt(t.CULL_FACE),I(xn);function nt(R){if(u[R]!==!0)t.enable(R),u[R]=!0}function Mt(R){if(u[R]!==!1)t.disable(R),u[R]=!1}function Nt(R,ht){if(h[R]!==ht){if(t.bindFramebuffer(R,ht),h[R]=ht,R===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=ht;if(R===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=ht;return!0}return!1}function At(R,ht){let tt=m,gt=!1;if(R){if(tt=d.get(ht),tt===void 0)tt=[],d.set(ht,tt);let et=R.textures;if(tt.length!==et.length||tt[0]!==t.COLOR_ATTACHMENT0){for(let K=0,vt=et.length;K<vt;K++)tt[K]=t.COLOR_ATTACHMENT0+K;tt.length=et.length,gt=!0}}else if(tt[0]!==t.BACK)tt[0]=t.BACK,gt=!0;if(gt)t.drawBuffers(tt)}function de(R){if(_!==R)return t.useProgram(R),_=R,!0;return!1}let Gt={[xi]:t.FUNC_ADD,[sc]:t.FUNC_SUBTRACT,[rc]:t.FUNC_REVERSE_SUBTRACT};Gt[ac]=t.MIN,Gt[oc]=t.MAX;let Qt={[cc]:t.ZERO,[lc]:t.ONE,[hc]:t.SRC_COLOR,[dc]:t.SRC_ALPHA,[_c]:t.SRC_ALPHA_SATURATE,[xc]:t.DST_COLOR,[pc]:t.DST_ALPHA,[uc]:t.ONE_MINUS_SRC_COLOR,[fc]:t.ONE_MINUS_SRC_ALPHA,[gc]:t.ONE_MINUS_DST_COLOR,[mc]:t.ONE_MINUS_DST_ALPHA,[vc]:t.CONSTANT_COLOR,[yc]:t.ONE_MINUS_CONSTANT_COLOR,[bc]:t.CONSTANT_ALPHA,[Mc]:t.ONE_MINUS_CONSTANT_ALPHA};function I(R,ht,tt,gt,et,K,vt,Ot,ae,ee){if(R===xn){if(x===!0)Mt(t.BLEND),x=!1;return}if(x===!1)nt(t.BLEND),x=!0;if(R!==ic){if(R!==p||ee!==y){if(f!==xi||A!==xi)t.blendEquation(t.FUNC_ADD),f=xi,A=xi;if(ee)switch(R){case Gi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zr:t.blendFunc(t.ONE,t.ONE);break;case Jr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $r:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Wt("WebGLState: Invalid blending: ",R);break}else switch(R){case Gi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Jr:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $r:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",R);break}S=null,M=null,E=null,w=null,P.set(0,0,0),O=0,p=R,y=ee}return}if(et=et||ht,K=K||tt,vt=vt||gt,ht!==f||et!==A)t.blendEquationSeparate(Gt[ht],Gt[et]),f=ht,A=et;if(tt!==S||gt!==M||K!==E||vt!==w)t.blendFuncSeparate(Qt[tt],Qt[gt],Qt[K],Qt[vt]),S=tt,M=gt,E=K,w=vt;if(Ot.equals(P)===!1||ae!==O)t.blendColor(Ot.r,Ot.g,Ot.b,ae),P.copy(Ot),O=ae;p=R,y=!1}function qt(R,ht){R.side===qe?Mt(t.CULL_FACE):nt(t.CULL_FACE);let tt=R.side===ze;if(ht)tt=!tt;zt(tt),R.blending===Gi&&R.transparent===!1?I(xn):I(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let gt=R.stencilWrite;if(o.setTest(gt),gt)o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass);Yt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?nt(t.SAMPLE_ALPHA_TO_COVERAGE):Mt(t.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){if(b!==R){if(R)t.frontFace(t.CW);else t.frontFace(t.CCW);b=R}}function jt(R){if(R!==ec){if(nt(t.CULL_FACE),R!==C)if(R===qr)t.cullFace(t.BACK);else if(R===nc)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Mt(t.CULL_FACE);C=R}function St(R){if(R!==G){if(J)t.lineWidth(R);G=R}}function Yt(R,ht,tt){if(R){if(nt(t.POLYGON_OFFSET_FILL),V!==ht||W!==tt)t.polygonOffset(ht,tt),V=ht,W=tt}else Mt(t.POLYGON_OFFSET_FILL)}function Tt(R){if(R)nt(t.SCISSOR_TEST);else Mt(t.SCISSOR_TEST)}function Ct(R){if(R===void 0)R=t.TEXTURE0+j-1;if(st!==R)t.activeTexture(R),st=R}function ce(R,ht,tt){if(tt===void 0)if(st===null)tt=t.TEXTURE0+j-1;else tt=st;let gt=pt[tt];if(gt===void 0)gt={type:void 0,texture:void 0},pt[tt]=gt;if(gt.type!==R||gt.texture!==ht){if(st!==tt)t.activeTexture(tt),st=tt;t.bindTexture(R,ht||rt[R]),gt.type=R,gt.texture=ht}}function T(){let R=pt[st];if(R!==void 0&&R.type!==void 0)t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0}function g(){try{t.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function Z(){try{t.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function L(){try{t.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function D(){try{t.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function Y(){try{t.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function lt(){try{t.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function _t(){try{t.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Q(){try{t.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function dt(R){if(Vt.equals(R)===!1)t.scissor(R.x,R.y,R.z,R.w),Vt.copy(R)}function It(R){if(xt.equals(R)===!1)t.viewport(R.x,R.y,R.z,R.w),xt.copy(R)}function Et(R,ht){let tt=l.get(ht);if(tt===void 0)tt=new WeakMap,l.set(ht,tt);let gt=tt.get(R);if(gt===void 0)gt=t.getUniformBlockIndex(ht,R.name),tt.set(R,gt)}function ot(R,ht){let gt=l.get(ht).get(R);if(c.get(ht)!==gt)t.uniformBlockBinding(ht,gt,R.__bindingPointIndex),c.set(ht,gt)}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},st=null,pt={},h={},d=new WeakMap,m=[],_=null,x=!1,p=null,f=null,S=null,M=null,A=null,E=null,w=null,P=new Ut(0,0,0),O=0,y=!1,b=null,C=null,G=null,V=null,W=null,Vt.set(0,0,t.canvas.width,t.canvas.height),xt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Mt,bindFramebuffer:Nt,drawBuffers:At,useProgram:de,setBlending:I,setMaterial:qt,setFlipSided:zt,setCullFace:jt,setLineWidth:St,setPolygonOffset:Yt,setScissorTest:Tt,activeTexture:Ct,bindTexture:ce,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:_t,texImage3D:Q,updateUBOMapping:Et,uniformBlockBinding:ot,texStorage2D:Y,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:L,compressedTexSubImage2D:D,compressedTexSubImage3D:q,scissor:dt,viewport:It,reset:ct}}function Vm(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function _(T,g){return m?new OffscreenCanvas(T,g):ki("canvas")}function x(T,g,F){let Z=1,L=ce(T);if(L.width>F||L.height>F)Z=F/Math.max(L.width,L.height);if(Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let D=Math.floor(Z*L.width),q=Math.floor(Z*L.height);if(h===void 0)h=_(D,q);let Y=g?_(D,q):h;return Y.width=D,Y.height=q,Y.getContext("2d").drawImage(T,0,0,D,q),Ft("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+D+"x"+q+")."),Y}else{if("data"in T)Ft("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+").");return T}return T}function p(T){return T.generateMipmaps}function f(T){t.generateMipmap(T)}function S(T){if(T.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function M(T,g,F,Z,L=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let D=g;if(g===t.RED){if(F===t.FLOAT)D=t.R32F;if(F===t.HALF_FLOAT)D=t.R16F;if(F===t.UNSIGNED_BYTE)D=t.R8}if(g===t.RED_INTEGER){if(F===t.UNSIGNED_BYTE)D=t.R8UI;if(F===t.UNSIGNED_SHORT)D=t.R16UI;if(F===t.UNSIGNED_INT)D=t.R32UI;if(F===t.BYTE)D=t.R8I;if(F===t.SHORT)D=t.R16I;if(F===t.INT)D=t.R32I}if(g===t.RG){if(F===t.FLOAT)D=t.RG32F;if(F===t.HALF_FLOAT)D=t.RG16F;if(F===t.UNSIGNED_BYTE)D=t.RG8}if(g===t.RG_INTEGER){if(F===t.UNSIGNED_BYTE)D=t.RG8UI;if(F===t.UNSIGNED_SHORT)D=t.RG16UI;if(F===t.UNSIGNED_INT)D=t.RG32UI;if(F===t.BYTE)D=t.RG8I;if(F===t.SHORT)D=t.RG16I;if(F===t.INT)D=t.RG32I}if(g===t.RGB_INTEGER){if(F===t.UNSIGNED_BYTE)D=t.RGB8UI;if(F===t.UNSIGNED_SHORT)D=t.RGB16UI;if(F===t.UNSIGNED_INT)D=t.RGB32UI;if(F===t.BYTE)D=t.RGB8I;if(F===t.SHORT)D=t.RGB16I;if(F===t.INT)D=t.RGB32I}if(g===t.RGBA_INTEGER){if(F===t.UNSIGNED_BYTE)D=t.RGBA8UI;if(F===t.UNSIGNED_SHORT)D=t.RGBA16UI;if(F===t.UNSIGNED_INT)D=t.RGBA32UI;if(F===t.BYTE)D=t.RGBA8I;if(F===t.SHORT)D=t.RGBA16I;if(F===t.INT)D=t.RGBA32I}if(g===t.RGB){if(F===t.UNSIGNED_INT_5_9_9_9_REV)D=t.RGB9_E5;if(F===t.UNSIGNED_INT_10F_11F_11F_REV)D=t.R11F_G11F_B10F}if(g===t.RGBA){let q=L?La:$t.getTransfer(Z);if(F===t.FLOAT)D=t.RGBA32F;if(F===t.HALF_FLOAT)D=t.RGBA16F;if(F===t.UNSIGNED_BYTE)D=q===re?t.SRGB8_ALPHA8:t.RGBA8;if(F===t.UNSIGNED_SHORT_4_4_4_4)D=t.RGBA4;if(F===t.UNSIGNED_SHORT_5_5_5_1)D=t.RGB5_A1}if(D===t.R16F||D===t.R32F||D===t.RG16F||D===t.RG32F||D===t.RGBA16F||D===t.RGBA32F)e.get("EXT_color_buffer_float");return D}function A(T,g){let F;if(T){if(g===null||g===yi||g===Mi)F=t.DEPTH24_STENCIL8;else if(g===In)F=t.DEPTH32F_STENCIL8;else if(g===Xi)F=t.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(g===null||g===yi||g===Mi)F=t.DEPTH_COMPONENT24;else if(g===In)F=t.DEPTH_COMPONENT32F;else if(g===Xi)F=t.DEPTH_COMPONENT16;return F}function E(T,g){if(p(T)===!0||T.isFramebufferTexture&&T.minFilter!==_i&&T.minFilter!==_n)return Math.log2(Math.max(g.width,g.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return g.mipmaps.length;else return 1}function w(T){let g=T.target;if(g.removeEventListener("dispose",w),O(g),g.isVideoTexture)u.delete(g)}function P(T){let g=T.target;g.removeEventListener("dispose",P),b(g)}function O(T){let g=i.get(T);if(g.__webglInit===void 0)return;let F=T.source,Z=d.get(F);if(Z){let L=Z[g.__cacheKey];if(L.usedTimes--,L.usedTimes===0)y(T);if(Object.keys(Z).length===0)d.delete(F)}i.remove(T)}function y(T){let g=i.get(T);t.deleteTexture(g.__webglTexture);let F=T.source,Z=d.get(F);delete Z[g.__cacheKey],a.memory.textures--}function b(T){let g=i.get(T);if(T.depthTexture)T.depthTexture.dispose(),i.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let L=0;L<g.__webglFramebuffer[Z].length;L++)t.deleteFramebuffer(g.__webglFramebuffer[Z][L]);else t.deleteFramebuffer(g.__webglFramebuffer[Z]);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)t.deleteFramebuffer(g.__webglFramebuffer[Z]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)t.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)if(g.__webglColorRenderbuffer[Z])t.deleteRenderbuffer(g.__webglColorRenderbuffer[Z])}if(g.__webglDepthRenderbuffer)t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=T.textures;for(let Z=0,L=F.length;Z<L;Z++){let D=i.get(F[Z]);if(D.__webglTexture)t.deleteTexture(D.__webglTexture),a.memory.textures--;i.remove(F[Z])}i.remove(T)}let C=0;function G(){C=0}function V(){let T=C;if(T>=s.maxTextures)Ft("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures);return C+=1,T}function W(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function j(T,g){let F=i.get(T);if(T.isVideoTexture)Tt(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let Z=T.image;if(Z===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(F,T,g);return}}else if(T.isExternalTexture)F.__webglTexture=T.sourceTexture?T.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+g)}function J(T,g){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){rt(F,T,g);return}else if(T.isExternalTexture)F.__webglTexture=T.sourceTexture?T.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+g)}function it(T,g){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){rt(F,T,g);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+g)}function H(T,g){let F=i.get(T);if(T.version>0&&F.__version!==T.version){nt(F,T,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+g)}let st={[Lc]:t.REPEAT,[Vs]:t.CLAMP_TO_EDGE,[Dc]:t.MIRRORED_REPEAT},pt={[_i]:t.NEAREST,[Uc]:t.NEAREST_MIPMAP_NEAREST,[Wi]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[Ws]:t.LINEAR_MIPMAP_NEAREST,[vi]:t.LINEAR_MIPMAP_LINEAR},Lt={[qc]:t.NEVER,[Qc]:t.ALWAYS,[Yc]:t.LESS,[Da]:t.LEQUAL,[Zc]:t.EQUAL,[Kc]:t.GEQUAL,[Jc]:t.GREATER,[$c]:t.NOTEQUAL};function Bt(T,g){if(g.type===In&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===_n||g.magFilter===Ws||g.magFilter===Wi||g.magFilter===vi||g.minFilter===_n||g.minFilter===Ws||g.minFilter===Wi||g.minFilter===vi))Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(T,t.TEXTURE_WRAP_S,st[g.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,st[g.wrapT]),T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)t.texParameteri(T,t.TEXTURE_WRAP_R,st[g.wrapR]);if(t.texParameteri(T,t.TEXTURE_MAG_FILTER,pt[g.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,pt[g.minFilter]),g.compareFunction)t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Lt[g.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_i)return;if(g.minFilter!==Wi&&g.minFilter!==vi)return;if(g.type===In&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Vt(T,g){let F=!1;if(T.__webglInit===void 0)T.__webglInit=!0,g.addEventListener("dispose",w);let Z=g.source,L=d.get(Z);if(L===void 0)L={},d.set(Z,L);let D=W(g);if(D!==T.__cacheKey){if(L[D]===void 0)L[D]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0;L[D].usedTimes++;let q=L[T.__cacheKey];if(q!==void 0){if(L[T.__cacheKey].usedTimes--,q.usedTimes===0)y(g)}T.__cacheKey=D,T.__webglTexture=L[D].texture}return F}function xt(T,g,F){return Math.floor(Math.floor(T/F)/g)}function X(T,g,F,Z){let D=T.updateRanges;if(D.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,F,Z,g.data);else{D.sort((Q,dt)=>Q.start-dt.start);let q=0;for(let Q=1;Q<D.length;Q++){let dt=D[q],It=D[Q],Et=dt.start+dt.count,ot=xt(It.start,g.width,4),ct=xt(dt.start,g.width,4);if(It.start<=Et+1&&ot===ct&&xt(It.start+It.count-1,g.width,4)===ot)dt.count=Math.max(dt.count,It.start+It.count-dt.start);else++q,D[q]=It}D.length=q+1;let Y=t.getParameter(t.UNPACK_ROW_LENGTH),lt=t.getParameter(t.UNPACK_SKIP_PIXELS),_t=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Q=0,dt=D.length;Q<dt;Q++){let It=D[Q],Et=Math.floor(It.start/4),ot=Math.ceil(It.count/4),ct=Et%g.width,R=Math.floor(Et/g.width),ht=ot,tt=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(t.UNPACK_SKIP_ROWS,R),n.texSubImage2D(t.TEXTURE_2D,0,ct,R,ht,1,F,Z,g.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Y),t.pixelStorei(t.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(t.UNPACK_SKIP_ROWS,_t)}}function rt(T,g,F){let Z=t.TEXTURE_2D;if(g.isDataArrayTexture||g.isCompressedArrayTexture)Z=t.TEXTURE_2D_ARRAY;if(g.isData3DTexture)Z=t.TEXTURE_3D;let L=Vt(T,g),D=g.source;n.bindTexture(Z,T.__webglTexture,t.TEXTURE0+F);let q=i.get(D);if(D.version!==q.__version||L===!0){n.activeTexture(t.TEXTURE0+F);let Y=$t.getPrimaries($t.workingColorSpace),lt=g.colorSpace===Hn?null:$t.getPrimaries(g.colorSpace),_t=g.colorSpace===Hn||Y===lt?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Q=x(g.image,!1,s.maxTextureSize);Q=Ct(g,Q);let dt=r.convert(g.format,g.colorSpace),It=r.convert(g.type),Et=M(g.internalFormat,dt,It,g.colorSpace,g.isVideoTexture);Bt(Z,g);let ot,ct=g.mipmaps,R=g.isVideoTexture!==!0,ht=q.__version===void 0||L===!0,tt=D.dataReady,gt=E(g,Q);if(g.isDepthTexture){if(Et=A(g.format===qi,g.type),ht)if(R)n.texStorage2D(t.TEXTURE_2D,1,Et,Q.width,Q.height);else n.texImage2D(t.TEXTURE_2D,0,Et,Q.width,Q.height,0,dt,It,null)}else if(g.isDataTexture)if(ct.length>0){if(R&&ht)n.texStorage2D(t.TEXTURE_2D,gt,Et,ct[0].width,ct[0].height);for(let et=0,K=ct.length;et<K;et++)if(ot=ct[et],R){if(tt)n.texSubImage2D(t.TEXTURE_2D,et,0,0,ot.width,ot.height,dt,It,ot.data)}else n.texImage2D(t.TEXTURE_2D,et,Et,ot.width,ot.height,0,dt,It,ot.data);g.generateMipmaps=!1}else if(R){if(ht)n.texStorage2D(t.TEXTURE_2D,gt,Et,Q.width,Q.height);if(tt)X(g,Q,dt,It)}else n.texImage2D(t.TEXTURE_2D,0,Et,Q.width,Q.height,0,dt,It,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){if(R&&ht)n.texStorage3D(t.TEXTURE_2D_ARRAY,gt,Et,ct[0].width,ct[0].height,Q.depth);for(let et=0,K=ct.length;et<K;et++)if(ot=ct[et],g.format!==nn)if(dt!==null)if(R){if(tt)if(g.layerUpdates.size>0){let vt=ao(ot.width,ot.height,g.format,g.type);for(let Ot of g.layerUpdates){let ae=ot.data.subarray(Ot*vt/ot.data.BYTES_PER_ELEMENT,(Ot+1)*vt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,Ot,ot.width,ot.height,1,dt,ae)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,Q.depth,dt,ot.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,et,Et,ot.width,ot.height,Q.depth,0,ot.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(R){if(tt)n.texSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,Q.depth,dt,It,ot.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,et,Et,ot.width,ot.height,Q.depth,0,dt,It,ot.data)}else{if(R&&ht)n.texStorage2D(t.TEXTURE_2D,gt,Et,ct[0].width,ct[0].height);for(let et=0,K=ct.length;et<K;et++)if(ot=ct[et],g.format!==nn)if(dt!==null)if(R){if(tt)n.compressedTexSubImage2D(t.TEXTURE_2D,et,0,0,ot.width,ot.height,dt,ot.data)}else n.compressedTexImage2D(t.TEXTURE_2D,et,Et,ot.width,ot.height,0,ot.data);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(R){if(tt)n.texSubImage2D(t.TEXTURE_2D,et,0,0,ot.width,ot.height,dt,It,ot.data)}else n.texImage2D(t.TEXTURE_2D,et,Et,ot.width,ot.height,0,dt,It,ot.data)}else if(g.isDataArrayTexture)if(R){if(ht)n.texStorage3D(t.TEXTURE_2D_ARRAY,gt,Et,Q.width,Q.height,Q.depth);if(tt)if(g.layerUpdates.size>0){let et=ao(Q.width,Q.height,g.format,g.type);for(let K of g.layerUpdates){let vt=Q.data.subarray(K*et/Q.data.BYTES_PER_ELEMENT,(K+1)*et/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,dt,It,vt)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,It,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Et,Q.width,Q.height,Q.depth,0,dt,It,Q.data);else if(g.isData3DTexture)if(R){if(ht)n.texStorage3D(t.TEXTURE_3D,gt,Et,Q.width,Q.height,Q.depth);if(tt)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,It,Q.data)}else n.texImage3D(t.TEXTURE_3D,0,Et,Q.width,Q.height,Q.depth,0,dt,It,Q.data);else if(g.isFramebufferTexture){if(ht)if(R)n.texStorage2D(t.TEXTURE_2D,gt,Et,Q.width,Q.height);else{let et=Q.width,K=Q.height;for(let vt=0;vt<gt;vt++)n.texImage2D(t.TEXTURE_2D,vt,Et,et,K,0,dt,It,null),et>>=1,K>>=1}}else if(ct.length>0){if(R&&ht){let et=ce(ct[0]);n.texStorage2D(t.TEXTURE_2D,gt,Et,et.width,et.height)}for(let et=0,K=ct.length;et<K;et++)if(ot=ct[et],R){if(tt)n.texSubImage2D(t.TEXTURE_2D,et,0,0,dt,It,ot)}else n.texImage2D(t.TEXTURE_2D,et,Et,dt,It,ot);g.generateMipmaps=!1}else if(R){if(ht){let et=ce(Q);n.texStorage2D(t.TEXTURE_2D,gt,Et,et.width,et.height)}if(tt)n.texSubImage2D(t.TEXTURE_2D,0,0,0,dt,It,Q)}else n.texImage2D(t.TEXTURE_2D,0,Et,dt,It,Q);if(p(g))f(Z);if(q.__version=D.version,g.onUpdate)g.onUpdate(g)}T.__version=g.version}function nt(T,g,F){if(g.image.length!==6)return;let Z=Vt(T,g),L=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);let D=i.get(L);if(L.version!==D.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);let q=$t.getPrimaries($t.workingColorSpace),Y=g.colorSpace===Hn?null:$t.getPrimaries(g.colorSpace),lt=g.colorSpace===Hn||q===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let _t=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++){if(!_t&&!Q)dt[K]=x(g.image[K],!0,s.maxCubemapSize);else dt[K]=Q?g.image[K].image:g.image[K];dt[K]=Ct(g,dt[K])}let It=dt[0],Et=r.convert(g.format,g.colorSpace),ot=r.convert(g.type),ct=M(g.internalFormat,Et,ot,g.colorSpace),R=g.isVideoTexture!==!0,ht=D.__version===void 0||Z===!0,tt=L.dataReady,gt=E(g,It);Bt(t.TEXTURE_CUBE_MAP,g);let et;if(_t){if(R&&ht)n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,ct,It.width,It.height);for(let K=0;K<6;K++){et=dt[K].mipmaps;for(let vt=0;vt<et.length;vt++){let Ot=et[vt];if(g.format!==nn)if(Et!==null)if(R){if(tt)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,Ot.width,Ot.height,Et,Ot.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,ct,Ot.width,Ot.height,0,Ot.data);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(R){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,Ot.width,Ot.height,Et,ot,Ot.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,ct,Ot.width,Ot.height,0,Et,ot,Ot.data)}}}else{if(et=g.mipmaps,R&&ht){if(et.length>0)gt++;let K=ce(dt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,ct,K.width,K.height)}for(let K=0;K<6;K++)if(Q){if(R){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Et,ot,dt[K].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ct,dt[K].width,dt[K].height,0,Et,ot,dt[K].data);for(let vt=0;vt<et.length;vt++){let ae=et[vt].image[K].image;if(R){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,ae.width,ae.height,Et,ot,ae.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,ct,ae.width,ae.height,0,Et,ot,ae.data)}}else{if(R){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,ot,dt[K])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ct,Et,ot,dt[K]);for(let vt=0;vt<et.length;vt++){let Ot=et[vt];if(R){if(tt)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Et,ot,Ot.image[K])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,ct,Et,ot,Ot.image[K])}}}if(p(g))f(t.TEXTURE_CUBE_MAP);if(D.__version=L.version,g.onUpdate)g.onUpdate(g)}T.__version=g.version}function Mt(T,g,F,Z,L,D){let q=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),lt=M(F.internalFormat,q,Y,F.colorSpace),_t=i.get(g),Q=i.get(F);if(Q.__renderTarget=g,!_t.__hasExternalTextures){let dt=Math.max(1,g.width>>D),It=Math.max(1,g.height>>D);if(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)n.texImage3D(L,D,lt,dt,It,g.depth,0,q,Y,null);else n.texImage2D(L,D,lt,dt,It,0,q,Y,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,T),Yt(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,L,Q.__webglTexture,0,St(g));else if(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,Z,L,Q.__webglTexture,D);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Nt(T,g,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),g.depthBuffer){let Z=g.depthTexture,L=Z&&Z.isDepthTexture?Z.type:null,D=A(g.stencilBuffer,L),q=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=St(g);if(Yt(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,D,g.width,g.height);else if(F)t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,D,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,D,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,T)}else{let Z=g.textures;for(let L=0;L<Z.length;L++){let D=Z[L],q=r.convert(D.format,D.colorSpace),Y=r.convert(D.type),lt=M(D.internalFormat,q,Y,D.colorSpace),_t=St(g);if(F&&Yt(g)===!1)t.renderbufferStorageMultisample(t.RENDERBUFFER,_t,lt,g.width,g.height);else if(Yt(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t,lt,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,lt,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function At(T,g){if(g&&g.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(g.depthTexture);if(Z.__renderTarget=g,!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0;j(g.depthTexture,0);let L=Z.__webglTexture,D=St(g);if(g.depthTexture.format===Xs)if(Yt(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,L,0,D);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,L,0);else if(g.depthTexture.format===qi)if(Yt(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,L,0,D);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,L,0);else throw Error("Unknown depthTexture format")}function de(T){let g=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let Z=T.depthTexture;if(g.__depthDisposeCallback)g.__depthDisposeCallback();if(Z){let L=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",L)};Z.addEventListener("dispose",L),g.__depthDisposeCallback=L}g.__boundDepthTexture=Z}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw Error("target.depthTexture not supported in Cube render targets");let Z=T.texture.mipmaps;if(Z&&Z.length>0)At(g.__webglFramebuffer[0],T);else At(g.__webglFramebuffer,T)}else if(F){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=t.createRenderbuffer(),Nt(g.__webglDepthbuffer[Z],T,!1);else{let L=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=g.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,D)}}else{let Z=T.texture.mipmaps;if(Z&&Z.length>0)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer);if(g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Nt(g.__webglDepthbuffer,T,!1);else{let L=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,D)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Gt(T,g,F){let Z=i.get(T);if(g!==void 0)Mt(Z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(F!==void 0)de(T)}function Qt(T){let g=T.texture,F=i.get(T),Z=i.get(g);T.addEventListener("dispose",P);let L=T.textures,D=T.isWebGLCubeRenderTarget===!0,q=L.length>1;if(!q){if(Z.__webglTexture===void 0)Z.__webglTexture=t.createTexture();Z.__version=g.version,a.memory.textures++}if(D){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let lt=0;lt<g.mipmaps.length;lt++)F.__webglFramebuffer[Y][lt]=t.createFramebuffer()}else F.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)F.__webglFramebuffer[Y]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(q)for(let Y=0,lt=L.length;Y<lt;Y++){let _t=i.get(L[Y]);if(_t.__webglTexture===void 0)_t.__webglTexture=t.createTexture(),a.memory.textures++}if(T.samples>0&&Yt(T)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<L.length;Y++){let lt=L[Y];F.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let _t=r.convert(lt.format,lt.colorSpace),Q=r.convert(lt.type),dt=M(lt.internalFormat,_t,Q,lt.colorSpace,T.isXRRenderTarget===!0),It=St(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,It,dt,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer)F.__webglDepthRenderbuffer=t.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,T,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(D){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(t.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let lt=0;lt<g.mipmaps.length;lt++)Mt(F.__webglFramebuffer[Y][lt],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt);else Mt(F.__webglFramebuffer[Y],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);if(p(g))f(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(q){for(let Y=0,lt=L.length;Y<lt;Y++){let _t=L[Y],Q=i.get(_t),dt=t.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)dt=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(dt,Q.__webglTexture),Bt(dt,_t),Mt(F.__webglFramebuffer,T,_t,t.COLOR_ATTACHMENT0+Y,dt,0),p(_t))f(dt)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)Y=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,Z.__webglTexture),Bt(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let lt=0;lt<g.mipmaps.length;lt++)Mt(F.__webglFramebuffer[lt],T,g,t.COLOR_ATTACHMENT0,Y,lt);else Mt(F.__webglFramebuffer,T,g,t.COLOR_ATTACHMENT0,Y,0);if(p(g))f(Y);n.unbindTexture()}if(T.depthBuffer)de(T)}function I(T){let g=T.textures;for(let F=0,Z=g.length;F<Z;F++){let L=g[F];if(p(L)){let D=S(T),q=i.get(L).__webglTexture;n.bindTexture(D,q),f(D),n.unbindTexture()}}}let qt=[],zt=[];function jt(T){if(T.samples>0){if(Yt(T)===!1){let{textures:g,width:F,height:Z}=T,L=t.COLOR_BUFFER_BIT,D=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=i.get(T),Y=g.length>1;if(Y)for(let _t=0;_t<g.length;_t++)n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);let lt=T.texture.mipmaps;if(lt&&lt.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(T.resolveDepthBuffer){if(T.depthBuffer)L|=t.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)L|=t.STENCIL_BUFFER_BIT}if(Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,q.__webglColorRenderbuffer[_t]);let Q=i.get(g[_t]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}if(t.blitFramebuffer(0,0,F,Z,0,0,F,Z,L,t.NEAREST),c===!0){if(qt.length=0,zt.length=0,qt.push(t.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1)qt.push(D),zt.push(D),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,zt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,qt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _t=0;_t<g.length;_t++){n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.RENDERBUFFER,q.__webglColorRenderbuffer[_t]);let Q=i.get(g[_t]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.TEXTURE_2D,Q,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let g=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function St(T){return Math.min(s.maxSamples,T.samples)}function Yt(T){let g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Tt(T){let g=a.render.frame;if(u.get(T)!==g)u.set(T,g),T.update()}function Ct(T,g){let{colorSpace:F,format:Z,type:L}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return g;if(F!==Yi&&F!==Hn)if($t.getTransfer(F)===re){if(Z!==nn||L!==Rn)Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Wt("WebGLTextures: Unsupported texture color space:",F);return g}function ce(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)l.width=T.displayWidth,l.height=T.displayHeight;else l.width=T.width,l.height=T.height;return l}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=it,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Yt}function Wm(t,e){function n(i,s=Hn){let r,a=$t.getTransfer(s);if(i===Rn)return t.UNSIGNED_BYTE;if(i===Qr)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jr)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Oc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return t.BYTE;if(i===Fc)return t.SHORT;if(i===Xi)return t.UNSIGNED_SHORT;if(i===Kr)return t.INT;if(i===yi)return t.UNSIGNED_INT;if(i===In)return t.FLOAT;if(i===bi)return t.HALF_FLOAT;if(i===zc)return t.ALPHA;if(i===kc)return t.RGB;if(i===nn)return t.RGBA;if(i===Xs)return t.DEPTH_COMPONENT;if(i===qi)return t.DEPTH_STENCIL;if(i===Gc)return t.RED;if(i===ta)return t.RED_INTEGER;if(i===ea)return t.RG;if(i===na)return t.RG_INTEGER;if(i===ia)return t.RGBA_INTEGER;if(i===qs||i===Ys||i===Zs||i===Js)if(a===re)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sa||i===ra||i===aa||i===oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ca||i===la||i===ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ca||i===la)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ua||i===da||i===fa||i===pa||i===ma||i===xa||i===ga||i===_a||i===va||i===ya||i===ba||i===Ma||i===Sa||i===Ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ma)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_a)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ma)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===wa||i===Aa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ca||i===Ra||i===Ia||i===Pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Mi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zl{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new sr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new is(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kl extends Pn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,c=null,l=null,u=null,h=null,d=null,m=null,_=typeof XRWebGLBinding<"u",x=new zl,p={},f=e.getContextAttributes(),S=null,M=null,A=[],E=[],w=new Xt,P=null,O=new Re;O.viewport=new ue;let y=new Re;y.viewport=new ue;let b=[O,y],C=new io,G=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=A[X];if(rt===void 0)rt=new Qi,A[X]=rt;return rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=A[X];if(rt===void 0)rt=new Qi,A[X]=rt;return rt.getGripSpace()},this.getHand=function(X){let rt=A[X];if(rt===void 0)rt=new Qi,A[X]=rt;return rt.getHandSpace()};function W(X){let rt=E.indexOf(X.inputSource);if(rt===-1)return;let nt=A[rt];if(nt!==void 0)nt.update(X.inputSource,X.frame,c||r),nt.dispatchEvent({type:X.type,data:X.inputSource})}function j(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",J);for(let X=0;X<A.length;X++){let rt=E[X];if(rt===null)continue;E[X]=null,A[X].disconnect(rt)}G=null,V=null,x.reset();for(let X in p)delete p[X];t.setRenderTarget(S),d=null,h=null,u=null,i=null,M=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){if(s=X,n.isPresenting===!0)Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){if(a=X,n.isPresenting===!0)Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){if(u===null&&_)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",j),i.addEventListener("inputsourceschange",J),f.xrCompatible!==!0)await e.makeXRCompatible();if(P=t.getPixelRatio(),t.getSize(w),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new vn(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let nt=null,Mt=null,Nt=null;if(f.depth)Nt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?qi:Xs,Mt=f.stencil?Mi:yi;let At={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(At),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new vn(h.textureWidth,h.textureHeight,{format:nn,type:Rn,depthTexture:new ir(h.textureWidth,h.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),c=null,r=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(X){for(let rt=0;rt<X.removed.length;rt++){let nt=X.removed[rt],Mt=E.indexOf(nt);if(Mt>=0)E[Mt]=null,A[Mt].disconnect(nt)}for(let rt=0;rt<X.added.length;rt++){let nt=X.added[rt],Mt=E.indexOf(nt);if(Mt===-1){for(let At=0;At<A.length;At++)if(At>=E.length){E.push(nt),Mt=At;break}else if(E[At]===null){E[At]=nt,Mt=At;break}if(Mt===-1)break}let Nt=A[Mt];if(Nt)Nt.connect(nt)}}let it=new B,H=new B;function st(X,rt,nt){it.setFromMatrixPosition(rt.matrixWorld),H.setFromMatrixPosition(nt.matrixWorld);let Mt=it.distanceTo(H),Nt=rt.projectionMatrix.elements,At=nt.projectionMatrix.elements,de=Nt[14]/(Nt[10]-1),Gt=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],I=(Nt[9]-1)/Nt[5],qt=(Nt[8]-1)/Nt[0],zt=(At[8]+1)/At[0],jt=de*qt,St=de*zt,Yt=Mt/(-qt+zt),Tt=Yt*-qt;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Tt),X.translateZ(Yt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Nt[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Ct=de+Yt,ce=Gt+Yt,T=jt-Tt,g=St+(Mt-Tt),F=Qt*Gt/ce*Ct,Z=I*Gt/ce*Ct;X.projectionMatrix.makePerspective(T,g,F,Z,Ct,ce),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pt(X,rt){if(rt===null)X.matrixWorld.copy(X.matrix);else X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix);X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let{near:rt,far:nt}=X;if(x.texture!==null){if(x.depthNear>0)rt=x.depthNear;if(x.depthFar>0)nt=x.depthFar}if(C.near=y.near=O.near=rt,C.far=y.far=O.far=nt,G!==C.near||V!==C.far)i.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,V=C.far;C.layers.mask=X.layers.mask|6,O.layers.mask=C.layers.mask&3,y.layers.mask=C.layers.mask&5;let Mt=X.parent,Nt=C.cameras;pt(C,Mt);for(let At=0;At<Nt.length;At++)pt(Nt[At],Mt);if(Nt.length===2)st(C,O,y);else C.projectionMatrix.copy(O.projectionMatrix);Lt(X,C,Mt)};function Lt(X,rt,nt){if(nt===null)X.matrix.copy(rt.matrixWorld);else X.matrix.copy(nt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld);if(X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera)X.fov=pi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(h===null&&d===null)return;return o},this.setFoveation=function(X){if(o=X,h!==null)h.fixedFoveation=X;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=X},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(X){return p[X]};let Bt=null;function Vt(X,rt){if(l=rt.getViewerPose(c||r),m=rt,l!==null){let nt=l.views;if(d!==null)t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M);let Mt=!1;if(nt.length!==C.cameras.length)C.cameras.length=0,Mt=!0;for(let Gt=0;Gt<nt.length;Gt++){let Qt=nt[Gt],I=null;if(d!==null)I=d.getViewport(Qt);else{let zt=u.getViewSubImage(h,Qt);if(I=zt.viewport,Gt===0)t.setRenderTargetTextures(M,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(M)}let qt=b[Gt];if(qt===void 0)qt=new Re,qt.layers.enable(Gt),qt.viewport=new ue,b[Gt]=qt;if(qt.matrix.fromArray(Qt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Qt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(I.x,I.y,I.width,I.height),Gt===0)C.matrix.copy(qt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(Mt===!0)C.cameras.push(qt)}let Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Gt=u.getDepthInformation(nt[0]);if(Gt&&Gt.isValid&&Gt.texture)x.init(Gt,i.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Gt=0;Gt<nt.length;Gt++){let Qt=nt[Gt].camera;if(Qt){let I=p[Qt];if(!I)I=new sr,p[Qt]=I;let qt=u.getCameraImage(Qt);I.sourceTexture=qt}}}}for(let nt=0;nt<A.length;nt++){let Mt=E[nt],Nt=A[nt];if(Mt!==null&&Nt!==void 0)Nt.update(Mt,rt,c||r)}if(Bt)Bt(X,rt);if(rt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:rt});m=null}let xt=new Rl;xt.setAnimationLoop(Vt),this.setAnimationLoop=function(X){Bt=X},this.dispose=function(){}}}var Zn=new Xe,Ym=new oe;function Zm(t,e){function n(p,f){if(p.matrixAutoUpdate===!0)p.updateMatrix();f.value.copy(p.matrix)}function i(p,f){if(f.color.getRGB(p.fogColor.value,Ha(t)),f.isFog)p.fogNear.value=f.near,p.fogFar.value=f.far;else if(f.isFogExp2)p.fogDensity.value=f.density}function s(p,f,S,M,A){if(f.isMeshBasicMaterial)r(p,f);else if(f.isMeshLambertMaterial)r(p,f);else if(f.isMeshToonMaterial)r(p,f),h(p,f);else if(f.isMeshPhongMaterial)r(p,f),u(p,f);else if(f.isMeshStandardMaterial){if(r(p,f),d(p,f),f.isMeshPhysicalMaterial)m(p,f,A)}else if(f.isMeshMatcapMaterial)r(p,f),_(p,f);else if(f.isMeshDepthMaterial)r(p,f);else if(f.isMeshDistanceMaterial)r(p,f),x(p,f);else if(f.isMeshNormalMaterial)r(p,f);else if(f.isLineBasicMaterial){if(a(p,f),f.isLineDashedMaterial)o(p,f)}else if(f.isPointsMaterial)c(p,f,S,M);else if(f.isSpriteMaterial)l(p,f);else if(f.isShadowMaterial)p.color.value.copy(f.color),p.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(p,f){if(p.opacity.value=f.opacity,f.color)p.diffuse.value.copy(f.color);if(f.emissive)p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.bumpMap){if(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ze)p.bumpScale.value*=-1}if(f.normalMap){if(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ze)p.normalScale.value.negate()}if(f.displacementMap)p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias;if(f.emissiveMap)p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform);if(f.specularMap)p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest;let S=e.get(f),{envMap:M,envMapRotation:A}=S;if(M){if(p.envMap.value=M,Zn.copy(A),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1)Zn.y*=-1,Zn.z*=-1;p.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Zn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio}if(f.lightMap)p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform);if(f.aoMap)p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform)}function a(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map)p.map.value=f.map,n(f.map,p.mapTransform)}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,M){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*0.5,f.map)p.map.value=f.map,n(f.map,p.uvTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function l(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,0.0001)}function h(p,f){if(f.gradientMap)p.gradientMap.value=f.gradientMap}function d(p,f){if(p.metalness.value=f.metalness,f.metalnessMap)p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=f.roughness,f.roughnessMap)p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform);if(f.envMap)p.envMapIntensity.value=f.envMapIntensity}function m(p,f,S){if(p.ior.value=f.ior,f.sheen>0){if(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform);if(f.sheenRoughnessMap)p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform);if(f.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze)p.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)p.dispersion.value=f.dispersion;if(f.iridescence>0){if(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform);if(f.iridescenceThicknessMap)p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(f.transmission>0){if(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap)p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=f.thickness,f.thicknessMap)p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap)p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform);if(f.specularIntensityMap)p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform)}function _(p,f){if(f.matcap)p.matcap.value=f.matcap}function x(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jm(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let A=M.program;i.uniformBlockBinding(S,A)}function l(S,M){let A=s[S.id];if(A===void 0)_(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",p);let E=M.program;i.updateUBOMapping(S,E);let w=e.render.frame;if(r[S.id]!==w)d(S),r[S.id]=w}function u(S){let M=h();S.__bindingPointIndex=M;let A=t.createBuffer(),{__size:E,usage:w}=S;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,E,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,A),A}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let M=s[S.id],{uniforms:A,__cache:E}=S;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let w=0,P=A.length;w<P;w++){let O=Array.isArray(A[w])?A[w]:[A[w]];for(let y=0,b=O.length;y<b;y++){let C=O[y];if(m(C,w,y,E)===!0){let G=C.__offset,V=Array.isArray(C.value)?C.value:[C.value],W=0;for(let j=0;j<V.length;j++){let J=V[j],it=x(J);if(typeof J==="number"||typeof J==="boolean")C.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,G+W,C.__data);else if(J.isMatrix3)C.__data[0]=J.elements[0],C.__data[1]=J.elements[1],C.__data[2]=J.elements[2],C.__data[3]=0,C.__data[4]=J.elements[3],C.__data[5]=J.elements[4],C.__data[6]=J.elements[5],C.__data[7]=0,C.__data[8]=J.elements[6],C.__data[9]=J.elements[7],C.__data[10]=J.elements[8],C.__data[11]=0;else J.toArray(C.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT}t.bufferSubData(t.UNIFORM_BUFFER,G,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,M,A,E){let w=S.value,P=M+"_"+A;if(E[P]===void 0){if(typeof w==="number"||typeof w==="boolean")E[P]=w;else E[P]=w.clone();return!0}else{let O=E[P];if(typeof w==="number"||typeof w==="boolean"){if(O!==w)return E[P]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function _(S){let M=S.uniforms,A=0,E=16;for(let P=0,O=M.length;P<O;P++){let y=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,C=y.length;b<C;b++){let G=y[b],V=Array.isArray(G.value)?G.value:[G.value];for(let W=0,j=V.length;W<j;W++){let J=V[W],it=x(J),H=A%E,st=H%it.boundary,pt=H+st;if(A+=st,pt!==0&&E-pt<it.storage)A+=E-pt;G.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=it.storage}}}let w=A%E;if(w>0)A+=E-w;return S.__size=A,S.__cache={},this}function x(S){let M={boundary:0,storage:0};if(typeof S==="number"||typeof S==="boolean")M.boundary=4,M.storage=4;else if(S.isVector2)M.boundary=8,M.storage=8;else if(S.isVector3||S.isColor)M.boundary=16,M.storage=12;else if(S.isVector4)M.boundary=16,M.storage=16;else if(S.isMatrix3)M.boundary=48,M.storage=48;else if(S.isMatrix4)M.boundary=64,M.storage=64;else if(S.isTexture)Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else Ft("WebGLRenderer: Unsupported uniform value type.",S);return M}function p(S){let M=S.target;M.removeEventListener("dispose",p);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let S in s)t.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var $m=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8000,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),bn=null;function Km(){if(bn===null)bn=new Xa($m,32,32,ea,bi),bn.minFilter=_n,bn.magFilter=_n,bn.wrapS=Vs,bn.wrapT=Vs,bn.generateMipmaps=!1,bn.needsUpdate=!0;return bn}class mo{constructor(t={}){let{canvas:e=jc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;let m=new Set([ia,na,ta]),_=new Set([Rn,yi,Xi,Mi,Qr,jr]),x=new Uint32Array(4),p=new Int32Array(4),f=null,S=null,M=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,w=!1;this._outputColorSpace=Xc;let P=0,O=0,y=null,b=-1,C=null,G=new ue,V=new ue,W=null,j=new Ut(0),J=0,{width:it,height:H}=e,st=1,pt=null,Lt=null,Bt=new ue(0,0,it,H),Vt=new ue(0,0,it,H),xt=!1,X=new ts,rt=!1,nt=!1,Mt=new oe,Nt=new B,At=new ue,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Qt(){return y===null?st:1}let I=n;function qt(v,U){return e.getContext(v,U)}try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${tc}`);if(e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",K,!1),I===null){if(I=qt("webgl2",v),I===null)if(qt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let zt,jt,St,Yt,Tt,Ct,ce,T,g,F,Z,L,D,q,Y,lt,_t,Q,dt,It,Et,ot,ct,R;function ht(){if(zt=new fp(I),zt.init(),ot=new Wm(I,zt),jt=new sp(I,zt,t,ot),St=new Hm(I,zt),jt.reversedDepthBuffer&&h)St.buffers.depth.setReversed(!0);Yt=new xp(I),Tt=new Rm,Ct=new Vm(I,zt,St,Tt,jt,ot,Yt),ce=new ap(E),T=new dp(E),g=new vu(I),ct=new np(I,g),F=new pp(I,g,Yt,ct),Z=new _p(I,F,g,Yt),dt=new gp(I,jt,Ct),lt=new rp(Tt),L=new Cm(E,ce,T,zt,jt,ct,lt),D=new Zm(E,Tt),q=new Pm,Y=new Om(zt),Q=new ep(E,ce,T,St,Z,d,o),_t=new km(E,Z,jt),R=new Jm(I,Yt,jt,St),It=new ip(I,zt,Yt),Et=new mp(I,zt,Yt),Yt.programs=L.programs,E.capabilities=jt,E.extensions=zt,E.properties=Tt,E.renderLists=q,E.shadowMap=_t,E.state=St,E.info=Yt}ht();let tt=new kl(E,I);this.xr=tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=zt.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=zt.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(v){if(v===void 0)return;st=v,this.setSize(it,H,!1)},this.getSize=function(v){return v.set(it,H)},this.setSize=function(v,U,z=!0){if(tt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}if(it=v,H=U,e.width=Math.floor(v*st),e.height=Math.floor(U*st),z===!0)e.style.width=v+"px",e.style.height=U+"px";this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(it*st,H*st).floor()},this.setDrawingBufferSize=function(v,U,z){it=v,H=U,st=z,e.width=Math.floor(v*z),e.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(G)},this.getViewport=function(v){return v.copy(Bt)},this.setViewport=function(v,U,z,k){if(v.isVector4)Bt.set(v.x,v.y,v.z,v.w);else Bt.set(v,U,z,k);St.viewport(G.copy(Bt).multiplyScalar(st).round())},this.getScissor=function(v){return v.copy(Vt)},this.setScissor=function(v,U,z,k){if(v.isVector4)Vt.set(v.x,v.y,v.z,v.w);else Vt.set(v,U,z,k);St.scissor(V.copy(Vt).multiplyScalar(st).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(v){St.setScissorTest(xt=v)},this.setOpaqueSort=function(v){pt=v},this.setTransparentSort=function(v){Lt=v},this.getClearColor=function(v){return v.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let k=0;if(v){let N=!1;if(y!==null){let at=y.texture.format;N=m.has(at)}if(N){let at=y.texture.type,ft=_.has(at),yt=Q.getClearColor(),mt=Q.getClearAlpha(),{r:Pt,g:Dt,b:wt}=yt;if(ft)x[0]=Pt,x[1]=Dt,x[2]=wt,x[3]=mt,I.clearBufferuiv(I.COLOR,0,x);else p[0]=Pt,p[1]=Dt,p[2]=wt,p[3]=mt,I.clearBufferiv(I.COLOR,0,p)}else k|=I.COLOR_BUFFER_BIT}if(U)k|=I.DEPTH_BUFFER_BIT;if(z)k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",K,!1),Q.dispose(),q.dispose(),Y.dispose(),Tt.dispose(),ce.dispose(),T.dispose(),Z.dispose(),ct.dispose(),R.dispose(),L.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",So),tt.removeEventListener("sessionend",To),Nn.stop()};function gt(v){v.preventDefault(),Oa("WebGLRenderer: Context Lost."),w=!0}function et(){Oa("WebGLRenderer: Context Restored."),w=!1;let v=Yt.autoReset,U=_t.enabled,z=_t.autoUpdate,k=_t.needsUpdate,N=_t.type;ht(),Yt.autoReset=v,_t.enabled=U,_t.autoUpdate=z,_t.needsUpdate=k,_t.type=N}function K(v){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function vt(v){let U=v.target;U.removeEventListener("dispose",vt),Ot(U)}function Ot(v){ae(v),Tt.remove(v)}function ae(v){let U=Tt.get(v).programs;if(U!==void 0){if(U.forEach(function(z){L.releaseProgram(z)}),v.isShaderMaterial)L.releaseShaderCache(v)}}this.renderBufferDirect=function(v,U,z,k,N,at){if(U===null)U=de;let ft=N.isMesh&&N.matrixWorld.determinant()<0,yt=yh(v,U,z,k,N);St.setMaterial(k,ft);let mt=z.index,Pt=1;if(k.wireframe===!0){if(mt=F.getWireframeAttribute(z),mt===void 0)return;Pt=2}let Dt=z.drawRange,wt=z.attributes.position,Zt=Dt.start*Pt,ie=(Dt.start+Dt.count)*Pt;if(at!==null)Zt=Math.max(Zt,at.start*Pt),ie=Math.min(ie,(at.start+at.count)*Pt);if(mt!==null)Zt=Math.max(Zt,0),ie=Math.min(ie,mt.count);else if(wt!==void 0&&wt!==null)Zt=Math.max(Zt,0),ie=Math.min(ie,wt.count);let fe=ie-Zt;if(fe<0||fe===1/0)return;ct.setup(N,k,yt,z,mt);let pe,se=It;if(mt!==null)pe=g.get(mt),se=Et,se.setIndex(pe);if(N.isMesh)if(k.wireframe===!0)St.setLineWidth(k.wireframeLinewidth*Qt()),se.setMode(I.LINES);else se.setMode(I.TRIANGLES);else if(N.isLine){let Rt=k.linewidth;if(Rt===void 0)Rt=1;if(St.setLineWidth(Rt*Qt()),N.isLineSegments)se.setMode(I.LINES);else if(N.isLineLoop)se.setMode(I.LINE_LOOP);else se.setMode(I.LINE_STRIP)}else if(N.isPoints)se.setMode(I.POINTS);else if(N.isSprite)se.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(!zt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Rt,_multiDrawCounts:le,_multiDrawCount:Kt}=N,Ne=mt?g.get(mt).bytesPerElement:1,Kn=Tt.get(k).currentProgram.getUniforms();for(let Fe=0;Fe<Kt;Fe++)Kn.setValue(I,"_gl_DrawID",Fe),se.render(Rt[Fe]/Ne,le[Fe])}else se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)se.renderInstances(Zt,fe,N.count);else if(z.isInstancedBufferGeometry){let Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,le=Math.min(z.instanceCount,Rt);se.renderInstances(Zt,fe,le)}else se.render(Zt,fe)};function ee(v,U,z){if(v.transparent===!0&&v.side===qe&&v.forceSinglePass===!1)v.side=ze,v.needsUpdate=!0,us(v,U,z),v.side=mi,v.needsUpdate=!0,us(v,U,z),v.side=qe;else us(v,U,z)}this.compile=function(v,U,z=null){if(z===null)z=v;if(S=Y.get(z),S.init(U),A.push(S),z.traverseVisible(function(N){if(N.isLight&&N.layers.test(U.layers)){if(S.pushLight(N),N.castShadow)S.pushShadow(N)}}),v!==z)v.traverseVisible(function(N){if(N.isLight&&N.layers.test(U.layers)){if(S.pushLight(N),N.castShadow)S.pushShadow(N)}});S.setupLights();let k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){let yt=at[ft];ee(yt,z,N),k.add(yt)}else ee(at,z,N),k.add(at)}),S=A.pop(),k},this.compileAsync=function(v,U,z=null){let k=this.compile(v,U,z);return new Promise((N)=>{function at(){if(k.forEach(function(ft){if(Tt.get(ft).currentProgram.isReady())k.delete(ft)}),k.size===0){N(v);return}setTimeout(at,10)}if(zt.get("KHR_parallel_shader_compile")!==null)at();else setTimeout(at,10)})};let Ze=null;function cn(v){if(Ze)Ze(v)}function So(){Nn.stop()}function To(){Nn.start()}let Nn=new Rl;if(Nn.setAnimationLoop(cn),typeof self<"u")Nn.setContext(self);this.setAnimationLoop=function(v){Ze=v,tt.setAnimationLoop(v),v===null?Nn.stop():Nn.start()},tt.addEventListener("sessionstart",So),tt.addEventListener("sessionend",To),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(U.parent===null&&U.matrixWorldAutoUpdate===!0)U.updateMatrixWorld();if(tt.enabled===!0&&tt.isPresenting===!0){if(tt.cameraAutoUpdate===!0)tt.updateCamera(U);U=tt.getCamera()}if(v.isScene===!0)v.onBeforeRender(E,v,U,y);if(S=Y.get(v,A.length),S.init(U),A.push(S),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Mt,Na,U.reversedDepth),nt=this.localClippingEnabled,rt=lt.init(this.clippingPlanes,nt),f=q.get(v,M.length),f.init(),M.push(f),tt.enabled===!0&&tt.isPresenting===!0){let at=E.xr.getDepthSensingMesh();if(at!==null)yr(at,U,-1/0,E.sortObjects)}if(yr(v,U,0,E.sortObjects),f.finish(),E.sortObjects===!0)f.sort(pt,Lt);if(Gt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Gt)Q.addToRenderList(f,v);if(this.info.render.frame++,rt===!0)lt.beginShadows();let z=S.state.shadowsArray;if(_t.render(z,v,U),rt===!0)lt.endShadows();if(this.info.autoReset===!0)this.info.reset();let k=f.opaque,N=f.transmissive;if(S.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let ft=0,yt=at.length;ft<yt;ft++){let mt=at[ft];wo(k,N,v,mt)}if(Gt)Q.render(v);for(let ft=0,yt=at.length;ft<yt;ft++){let mt=at[ft];Eo(f,v,mt,mt.viewport)}}else{if(N.length>0)wo(k,N,v,U);if(Gt)Q.render(v);Eo(f,v,U)}if(y!==null&&O===0)Ct.updateMultisampleRenderTarget(y),Ct.updateRenderTargetMipmap(y);if(v.isScene===!0)v.onAfterRender(E,v,U);if(ct.resetDefaultState(),b=-1,C=null,A.pop(),A.length>0){if(S=A[A.length-1],rt===!0)lt.setGlobalState(E.clippingPlanes,S.state.camera)}else S=null;if(M.pop(),M.length>0)f=M[M.length-1];else f=null};function yr(v,U,z,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(U)}else if(v.isLight){if(S.pushLight(v),v.castShadow)S.pushShadow(v)}else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){if(k)At.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Mt);let ft=Z.update(v),yt=v.material;if(yt.visible)f.push(v,ft,yt,z,At.z,null)}}else if(v.isMesh||v.isLine||v.isPoints){if(!v.frustumCulled||X.intersectsObject(v)){let ft=Z.update(v),yt=v.material;if(k){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();At.copy(v.boundingSphere.center)}else{if(ft.boundingSphere===null)ft.computeBoundingSphere();At.copy(ft.boundingSphere.center)}At.applyMatrix4(v.matrixWorld).applyMatrix4(Mt)}if(Array.isArray(yt)){let mt=ft.groups;for(let Pt=0,Dt=mt.length;Pt<Dt;Pt++){let wt=mt[Pt],Zt=yt[wt.materialIndex];if(Zt&&Zt.visible)f.push(v,ft,Zt,z,At.z,wt)}}else if(yt.visible)f.push(v,ft,yt,z,At.z,null)}}}let at=v.children;for(let ft=0,yt=at.length;ft<yt;ft++)yr(at[ft],U,z,k)}function Eo(v,U,z,k){let{opaque:N,transmissive:at,transparent:ft}=v;if(S.setupLightsView(z),rt===!0)lt.setGlobalState(E.clippingPlanes,z);if(k)St.viewport(G.copy(k));if(N.length>0)hs(N,U,z);if(at.length>0)hs(at,U,z);if(ft.length>0)hs(ft,U,z);St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function wo(v,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[k.id]===void 0)S.state.transmissionRenderTarget[k.id]=new vn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?bi:Rn,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace});let at=S.state.transmissionRenderTarget[k.id],ft=k.viewport||G;at.setSize(ft.z*E.transmissionResolutionScale,ft.w*E.transmissionResolutionScale);let yt=E.getRenderTarget(),mt=E.getActiveCubeFace(),Pt=E.getActiveMipmapLevel();if(E.setRenderTarget(at),E.getClearColor(j),J=E.getClearAlpha(),J<1)E.setClearColor(16777215,0.5);if(E.clear(),Gt)Q.render(z);let Dt=E.toneMapping;E.toneMapping=gn;let wt=k.viewport;if(k.viewport!==void 0)k.viewport=void 0;if(S.setupLightsView(k),rt===!0)lt.setGlobalState(E.clippingPlanes,k);if(hs(v,z,k),Ct.updateMultisampleRenderTarget(at),Ct.updateRenderTargetMipmap(at),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ie=0,fe=U.length;ie<fe;ie++){let pe=U[ie],{object:se,geometry:Rt,material:le,group:Kt}=pe;if(le.side===qe&&se.layers.test(k.layers)){let Ne=le.side;le.side=ze,le.needsUpdate=!0,Ao(se,z,k,Rt,le,Kt),le.side=Ne,le.needsUpdate=!0,Zt=!0}}if(Zt===!0)Ct.updateMultisampleRenderTarget(at),Ct.updateRenderTargetMipmap(at)}if(E.setRenderTarget(yt,mt,Pt),E.setClearColor(j,J),wt!==void 0)k.viewport=wt;E.toneMapping=Dt}function hs(v,U,z){let k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=v.length;N<at;N++){let ft=v[N],{object:yt,geometry:mt,group:Pt}=ft,Dt=ft.material;if(Dt.allowOverride===!0&&k!==null)Dt=k;if(yt.layers.test(z.layers))Ao(yt,U,z,mt,Dt,Pt)}}function Ao(v,U,z,k,N,at){if(v.onBeforeRender(E,U,z,k,N,at),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(E,U,z,k,v,at),N.transparent===!0&&N.side===qe&&N.forceSinglePass===!1)N.side=ze,N.needsUpdate=!0,E.renderBufferDirect(z,U,k,N,v,at),N.side=mi,N.needsUpdate=!0,E.renderBufferDirect(z,U,k,N,v,at),N.side=qe;else E.renderBufferDirect(z,U,k,N,v,at);v.onAfterRender(E,U,z,k,N,at)}function us(v,U,z){if(U.isScene!==!0)U=de;let k=Tt.get(v),N=S.state.lights,at=S.state.shadowsArray,ft=N.state.version,yt=L.getParameters(v,N.state,at,U,z),mt=L.getProgramCacheKey(yt),Pt=k.programs;if(k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?T:ce).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pt===void 0)v.addEventListener("dispose",vt),Pt=new Map,k.programs=Pt;let Dt=Pt.get(mt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===ft)return Ro(v,yt),Dt}else yt.uniforms=L.getUniforms(v),v.onBeforeCompile(yt,E),Dt=L.acquireProgram(yt,mt),Pt.set(mt,Dt),k.uniforms=yt.uniforms;let wt=k.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)wt.clippingPlanes=lt.uniform;if(Ro(v,yt),k.needsLights=Mh(v),k.lightsStateVersion=ft,k.needsLights)wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix;return k.currentProgram=Dt,k.uniformsList=null,Dt}function Co(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=os.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Ro(v,U){let z=Tt.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function yh(v,U,z,k,N){if(U.isScene!==!0)U=de;Ct.resetTextureUnits();let at=U.fog,ft=k.isMeshStandardMaterial?U.environment:null,yt=y===null?E.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Yi,mt=(k.isMeshStandardMaterial?T:ce).get(k.envMap||ft),Pt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color,fe=gn;if(k.toneMapped){if(y===null||y.isXRRenderTarget===!0)fe=E.toneMapping}let pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=pe!==void 0?pe.length:0,Rt=Tt.get(k),le=S.state.lights;if(rt===!0){if(nt===!0||v!==C){let Ae=v===C&&k.id===b;lt.setState(k,v,Ae)}}let Kt=!1;if(k.version===Rt.__version){if(Rt.needsLights&&Rt.lightsStateVersion!==le.state.version)Kt=!0;else if(Rt.outputColorSpace!==yt)Kt=!0;else if(N.isBatchedMesh&&Rt.batching===!1)Kt=!0;else if(!N.isBatchedMesh&&Rt.batching===!0)Kt=!0;else if(N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null)Kt=!0;else if(N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null)Kt=!0;else if(N.isInstancedMesh&&Rt.instancing===!1)Kt=!0;else if(!N.isInstancedMesh&&Rt.instancing===!0)Kt=!0;else if(N.isSkinnedMesh&&Rt.skinning===!1)Kt=!0;else if(!N.isSkinnedMesh&&Rt.skinning===!0)Kt=!0;else if(N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null)Kt=!0;else if(N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null)Kt=!0;else if(N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null)Kt=!0;else if(N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null)Kt=!0;else if(Rt.envMap!==mt)Kt=!0;else if(k.fog===!0&&Rt.fog!==at)Kt=!0;else if(Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==lt.numPlanes||Rt.numIntersection!==lt.numIntersection))Kt=!0;else if(Rt.vertexAlphas!==Pt)Kt=!0;else if(Rt.vertexTangents!==Dt)Kt=!0;else if(Rt.morphTargets!==wt)Kt=!0;else if(Rt.morphNormals!==Zt)Kt=!0;else if(Rt.morphColors!==ie)Kt=!0;else if(Rt.toneMapping!==fe)Kt=!0;else if(Rt.morphTargetsCount!==se)Kt=!0}else Kt=!0,Rt.__version=k.version;let Ne=Rt.currentProgram;if(Kt===!0)Ne=us(k,U,N);let Kn=!1,Fe=!1,Di=!1,he=Ne.getUniforms(),Pe=Rt.uniforms;if(St.useProgram(Ne.program))Kn=!0,Fe=!0,Di=!0;if(k.id!==b)b=k.id,Fe=!0;if(Kn||C!==v){if(St.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();he.setValue(I,"projectionMatrix",v.projectionMatrix),he.setValue(I,"viewMatrix",v.matrixWorldInverse);let Le=he.map.cameraPosition;if(Le!==void 0)Le.setValue(I,Nt.setFromMatrixPosition(v.matrixWorld));if(jt.logarithmicDepthBuffer)he.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)he.setValue(I,"isOrthographic",v.isOrthographicCamera===!0);if(C!==v)C=v,Fe=!0,Di=!0}if(N.isSkinnedMesh){he.setOptional(I,N,"bindMatrix"),he.setOptional(I,N,"bindMatrixInverse");let Ae=N.skeleton;if(Ae){if(Ae.boneTexture===null)Ae.computeBoneTexture();he.setValue(I,"boneTexture",Ae.boneTexture,Ct)}}if(N.isBatchedMesh){if(he.setOptional(I,N,"batchingTexture"),he.setValue(I,"batchingTexture",N._matricesTexture,Ct),he.setOptional(I,N,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",N._indirectTexture,Ct),he.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null)he.setValue(I,"batchingColorTexture",N._colorsTexture,Ct)}let He=z.morphAttributes;if(He.position!==void 0||He.normal!==void 0||He.color!==void 0)dt.update(N,z,Ne);if(Fe||Rt.receiveShadow!==N.receiveShadow)Rt.receiveShadow=N.receiveShadow,he.setValue(I,"receiveShadow",N.receiveShadow);if(k.isMeshGouraudMaterial&&k.envMap!==null)Pe.envMap.value=mt,Pe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1;if(k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null)Pe.envMapIntensity.value=U.environmentIntensity;if(Pe.dfgLUT!==void 0)Pe.dfgLUT.value=Km();if(Fe){if(he.setValue(I,"toneMappingExposure",E.toneMappingExposure),Rt.needsLights)bh(Pe,Di);if(at&&k.fog===!0)D.refreshFogUniforms(Pe,at);D.refreshMaterialUniforms(Pe,k,st,H,S.state.transmissionRenderTarget[v.id]),os.upload(I,Co(Rt),Pe,Ct)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0)os.upload(I,Co(Rt),Pe,Ct),k.uniformsNeedUpdate=!1;if(k.isSpriteMaterial)he.setValue(I,"center",N.center);if(he.setValue(I,"modelViewMatrix",N.modelViewMatrix),he.setValue(I,"normalMatrix",N.normalMatrix),he.setValue(I,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Ae=k.uniformsGroups;for(let Le=0,br=Ae.length;Le<br;Le++){let Fn=Ae[Le];R.update(Fn,Ne),R.bind(Fn,Ne)}}return Ne}function bh(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Mh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(v,U,z){let k=Tt.get(v);if(k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1)k.__useRenderToTexture=!1;Tt.get(v.texture).__webglTexture=U,Tt.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let z=Tt.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};let Sh=I.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){y=v,P=U,O=z;let k=!0,N=null,at=!1,ft=!1;if(v){let mt=Tt.get(v);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)Ct.setupRenderTarget(v);else if(mt.__hasExternalTextures)Ct.rebindTextures(v,Tt.get(v.texture).__webglTexture,Tt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let wt=v.depthTexture;if(mt.__boundDepthTexture!==wt){if(wt!==null&&Tt.has(wt)&&(v.width!==wt.image.width||v.height!==wt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(v)}}let Pt=v.texture;if(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)ft=!0;let Dt=Tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Dt[U]))N=Dt[U][z];else N=Dt[U];at=!0}else if(v.samples>0&&Ct.useMultisampledRTT(v)===!1)N=Tt.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Dt))N=Dt[z];else N=Dt;G.copy(v.viewport),V.copy(v.scissor),W=v.scissorTest}else G.copy(Bt).multiplyScalar(st).floor(),V.copy(Vt).multiplyScalar(st).floor(),W=xt;if(z!==0)N=Sh;if(St.bindFramebuffer(I.FRAMEBUFFER,N)&&k)St.drawBuffers(v,N);if(St.viewport(G),St.scissor(V),St.setScissorTest(W),at){let mt=Tt.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,z)}else if(ft){let mt=U;for(let Pt=0;Pt<v.textures.length;Pt++){let Dt=Tt.get(v.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,z,mt)}}else if(v!==null&&z!==0){let mt=Tt.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(v,U,z,k,N,at,ft,yt=0){if(!(v&&v.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0)mt=mt[ft];if(mt){St.bindFramebuffer(I.FRAMEBUFFER,mt);try{let Pt=v.textures[yt],{format:Dt,type:wt}=Pt;if(!jt.textureFormatReadable(Dt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(wt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(U>=0&&U<=v.width-k&&(z>=0&&z<=v.height-N)){if(v.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+yt);I.readPixels(U,z,k,N,ot.convert(Dt),ot.convert(wt),at)}}finally{let Pt=y!==null?Tt.get(y).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,k,N,at,ft,yt=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Tt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0)mt=mt[ft];if(mt)if(U>=0&&U<=v.width-k&&(z>=0&&z<=v.height-N)){St.bindFramebuffer(I.FRAMEBUFFER,mt);let Pt=v.textures[yt],{format:Dt,type:wt}=Pt;if(!jt.textureFormatReadable(Dt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(wt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=I.createBuffer();if(I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),v.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+yt);I.readPixels(U,z,k,N,ot.convert(Dt),ot.convert(wt),0);let ie=y!==null?Tt.get(y).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,ie);let fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tl(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Zt),I.deleteSync(fe),at}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){let k=Math.pow(2,-z),N=Math.floor(v.image.width*k),at=Math.floor(v.image.height*k),ft=U!==null?U.x:0,yt=U!==null?U.y:0;Ct.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ft,yt,N,at),St.unbindTexture()};let Th=I.createFramebuffer(),Eh=I.createFramebuffer();if(this.copyTextureToTexture=function(v,U,z=null,k=null,N=0,at=null){if(at===null)if(N!==0)fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=N,N=0;else at=0;let ft,yt,mt,Pt,Dt,wt,Zt,ie,fe,pe=v.isCompressedTexture?v.mipmaps[at]:v.image;if(z!==null)ft=z.max.x-z.min.x,yt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,Pt=z.min.x,Dt=z.min.y,wt=z.isBox3?z.min.z:0;else{let He=Math.pow(2,-N);if(ft=Math.floor(pe.width*He),yt=Math.floor(pe.height*He),v.isDataArrayTexture)mt=pe.depth;else if(v.isData3DTexture)mt=Math.floor(pe.depth*He);else mt=1;Pt=0,Dt=0,wt=0}if(k!==null)Zt=k.x,ie=k.y,fe=k.z;else Zt=0,ie=0,fe=0;let se=ot.convert(U.format),Rt=ot.convert(U.type),le;if(U.isData3DTexture)Ct.setTexture3D(U,0),le=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ct.setTexture2DArray(U,0),le=I.TEXTURE_2D_ARRAY;else Ct.setTexture2D(U,0),le=I.TEXTURE_2D;I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Kt=I.getParameter(I.UNPACK_ROW_LENGTH),Ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kn=I.getParameter(I.UNPACK_SKIP_PIXELS),Fe=I.getParameter(I.UNPACK_SKIP_ROWS),Di=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);let he=v.isDataArrayTexture||v.isData3DTexture,Pe=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let He=Tt.get(v),Ae=Tt.get(U),Le=Tt.get(He.__renderTarget),br=Tt.get(Ae.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,Le.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let Fn=0;Fn<mt;Fn++){if(he)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(v).__webglTexture,N,wt+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,at,fe+Fn);I.blitFramebuffer(Pt,Dt,ft,yt,Zt,ie,ft,yt,I.DEPTH_BUFFER_BIT,I.NEAREST)}St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Tt.has(v)){let He=Tt.get(v),Ae=Tt.get(U);St.bindFramebuffer(I.READ_FRAMEBUFFER,Th),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Eh);for(let Le=0;Le<mt;Le++){if(he)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,N,wt+Le);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,N);if(Pe)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,at,fe+Le);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,at);if(N!==0)I.blitFramebuffer(Pt,Dt,ft,yt,Zt,ie,ft,yt,I.COLOR_BUFFER_BIT,I.NEAREST);else if(Pe)I.copyTexSubImage3D(le,at,Zt,ie,fe+Le,Pt,Dt,ft,yt);else I.copyTexSubImage2D(le,at,Zt,ie,Pt,Dt,ft,yt)}St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Pe)if(v.isDataTexture||v.isData3DTexture)I.texSubImage3D(le,at,Zt,ie,fe,ft,yt,mt,se,Rt,pe.data);else if(U.isCompressedArrayTexture)I.compressedTexSubImage3D(le,at,Zt,ie,fe,ft,yt,mt,se,pe.data);else I.texSubImage3D(le,at,Zt,ie,fe,ft,yt,mt,se,Rt,pe);else if(v.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,at,Zt,ie,ft,yt,se,Rt,pe.data);else if(v.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,at,Zt,ie,pe.width,pe.height,se,pe.data);else I.texSubImage2D(I.TEXTURE_2D,at,Zt,ie,ft,yt,se,Rt,pe);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,Kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Di),at===0&&U.generateMipmaps)I.generateMipmap(le);St.unbindTexture()},this.initRenderTarget=function(v){if(Tt.get(v).__webglFramebuffer===void 0)Ct.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)Ct.setTextureCube(v,0);else if(v.isData3DTexture)Ct.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)Ct.setTexture2DArray(v,0);else Ct.setTexture2D(v,0);St.unbindTexture()},this.resetState=function(){P=0,O=0,y=null,St.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}function je(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function bt(t,e,n){let i=Math.imul(t|0,374761393)^Math.imul(e|0,668265263)^Math.imul(n|0,1440662683);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function De(t,e,n=0){let i=Math.floor(t),s=Math.floor(e),r=t-i,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=bt(i,n,s),u=bt(i+1,n,s),h=bt(i,n,s+1),d=bt(i+1,n,s+1);return l+(u-l)*o+(h-l)*c+(l-u-h+d)*o*c}var Ii=512,$n=1024,xo=(t,e,n)=>((t+Ii)*$n+(e+Ii))*$n+(n+Ii),Qm=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[0,1,0],[1,0,0]]],jm=[[-1,-1],[1,-1],[1,1],[-1,1]],t0=[0.5,0.66,0.83,1],Hl=new Map;function e0(t){let e=Hl.get(t);if(!e){let n=new Ut(t);e=[n.r,n.g,n.b],Hl.set(t,e)}return e}class Ue{cells=new Map;get size(){return this.cells.size}set(t,e,n,i){this.cells.set(xo(t,e,n),i)}has(t,e,n){return this.cells.has(xo(t,e,n))}remove(t,e,n){this.cells.delete(xo(t,e,n))}blob(t,e,n,i,s,r,a,o=0.3,c=0){for(let l=Math.floor(t-i);l<=Math.ceil(t+i);l++)for(let u=Math.floor(e-s);u<=Math.ceil(e+s);u++)for(let h=Math.floor(n-r);h<=Math.ceil(n+r);h++){let d=(l-t)/i,m=(u-e)/s,_=(h-n)/r,x=bt(l+c*31,u+c*17,h+c*7);if(d*d+m*m+_*_<=1-x*o)this.set(l,u,h,a(m,bt(h-c,l+c,u)))}}toGeometry(t=0.05){let e=[],n=[],i=[],s=[],r=[0,0,0,0];for(let[o,c]of this.cells){let l=o%$n-Ii,u=Math.floor(o/$n)%$n-Ii,h=Math.floor(o/($n*$n))-Ii,[d,m,_]=e0(c),x=1+(bt(h,u,l)-0.5)*2*t;for(let[p,f,S]of Qm){if(this.has(h+p[0],u+p[1],l+p[2]))continue;let M=e.length/3;for(let A=0;A<4;A++){let[E,w]=jm[A];e.push(h+0.5*(p[0]+E*f[0]+w*S[0]),u+0.5*(p[1]+E*f[1]+w*S[1]),l+0.5*(p[2]+E*f[2]+w*S[2])),n.push(p[0],p[1],p[2]);let P=h+p[0],O=u+p[1],y=l+p[2],b=this.has(P+E*f[0],O+E*f[1],y+E*f[2])?1:0,C=this.has(P+w*S[0],O+w*S[1],y+w*S[2])?1:0,G=this.has(P+E*f[0]+w*S[0],O+E*f[1]+w*S[1],y+E*f[2]+w*S[2])?1:0;r[A]=b&&C?0:3-(b+C+G);let V=t0[r[A]]*x;i.push(d*V,m*V,_*V)}if(r[0]+r[2]>=r[1]+r[3])s.push(M,M+1,M+2,M,M+2,M+3);else s.push(M+1,M+2,M+3,M+1,M+3,M)}}let a=new be;return a.setAttribute("position",new xe(e,3)),a.setAttribute("normal",new xe(n,3)),a.setAttribute("color",new xe(i,3)),a.setIndex(s),a.computeBoundingSphere(),a}}var rn=42,an=31,_o=[7914564,7191099,8703310],_r=[5612848,4888106],Jl=[5217836,4164133,6073141],n0=[5222634,4564194,6471154],i0=[14863511,14204806,15390632],s0=10185276,Vl=8014375,$l=[16027569,15026253,16765503,16777215,10186198,16752451],go=[[2,9132595],[2,7620650],[3,13598522],[2,14529919],[3,12021807],[3,8409132],[3,10250810],[99,6044194]];function Kl(t){let e=t;for(let[n,i]of go){if(e<n)return i;e-=n}return go[go.length-1][1]}var ke=(t,e)=>t[Math.min(t.length-1,Math.floor(e*t.length))];function r0(t,e,n,i,s,r){let a=s-n,o=r-i,c=Math.max(0,Math.min(1,((t-n)*a+(e-i)*o)/(a*a+o*o)));return Math.hypot(t-(n+a*c),e-(i+o*c))}function Ql(t,e,n){let i=Number.POSITIVE_INFINITY;for(let s=0;s<n.length-1;s++)i=Math.min(i,r0(t,e,n[s][0],n[s][1],n[s+1][0],n[s+1][1]));return i}var Wl=1.4,jl=(t)=>t.map(([e,n])=>[e*Wl,n*Wl]),on={x:-11,z:4,rx:8,rz:5.5},th=[[[-8,5],[-11,11],[-8,16],[-11,22],[-13,34]],[[-4,2],[4,0],[11,3],[18,1],[25,-3],[40,-7]]].map(jl),a0=[[[11,-6],[8,-2],[7,2],[4,8],[3,13],[7,17]],[[8,-2],[0,-7],[-10,-9],[-19,-5]],[[4,8],[-3,12],[-16,10],[-22,3]]].map(jl),Xl={x:17,z:-15},ql={x:25,z:-8},Yl={x:8,z:-13},o0=1.5,c0=1.1;function xr(t,e){let n=Math.atan2(e/an,t/rn),i=1+0.06*Math.sin(3*n+1.3)+0.045*Math.sin(5*n+0.4)+0.03*Math.sin(9*n+2.1);return Math.hypot(t/rn,e/an)/i}function cs(t,e){let i=(Math.hypot((t-on.x)/on.rx,(e-on.z)/on.rz)-1)*Math.min(on.rx,on.rz);for(let s of th)i=Math.min(i,Ql(t,e,s)-o0);return i}function gr(t,e){let n=Number.POSITIVE_INFINITY;for(let i of a0)n=Math.min(n,Ql(t,e,i)-c0);return n}function Zl(t,e){return Math.min(Math.max(Math.abs(t-Xl.x)-4,Math.abs(e-Xl.z)-3),Math.max(Math.abs(t-ql.x)-4,Math.abs(e-ql.z)-3),Math.max(Math.abs(t-Yl.x)-1,Math.abs(e-Yl.z)-1))}function eh(t=7){let e=new Ue,n=je(t),i=(h,d)=>xr(h,d)<=1;for(let h=-rn-4;h<=rn+4;h++)for(let d=-an-4;d<=an+4;d++){let m=xr(h,d);if(m>1)continue;let _=1-m,x=De(h*0.09,d*0.09,11),p=De(h*0.3,d*0.3,23),f=Math.round(5+p*3+_**0.6*(13+x*14));if(m<0.9&&bt(h,99,d)<0.045)f+=2+Math.floor(bt(d,5,h)*6);let S=Math.round(De(h*0.1+50,d*0.1+50,3)*3),M=cs(h,d)<=0,A=!M&&gr(h,d)<=0,E=M&&gr(h,d)<=0.3;for(let w=0;w>=-f;w--){let P;if(w===0){if(M&&!E)continue;if(E)P=s0;else if(A)P=ke(i0,bt(h,1,d));else{let O=De(h*0.22,d*0.22,41);P=_o[O<0.4?1:O>0.68?2:0]}}else if(w===-1&&M)P=ke(n0,bt(h,2,d));else if(P=Kl(Math.max(0,-w-1+S-1)),De(h*0.45+w,d*0.45-w,77)>0.86)P=10327690;e.set(h,w,d,P)}}let s=[[1,0],[-1,0],[0,1],[0,-1]];for(let h=-rn-4;h<=rn+4;h++)for(let d=-an-4;d<=an+4;d++){if(!i(h,d)||cs(h,d)<=0)continue;for(let[m,_]of s){let x=h+m,p=d+_;if(i(x,p))continue;let f=bt(x,7,p);if(f<0.55){let S=1+Math.floor(bt(x,8,p)*4);for(let M=-1;M>=-S;M--)if(e.has(h,M,d))e.set(h,M,d,ke(_r,bt(h,M,d)))}if(f>0.8){let S=3+Math.floor(bt(x,9,p)*8);e.set(x,0,p,ke(_o,bt(x,3,p)));for(let M=-1;M>=-S;M--)e.set(x,M,p,ke(Jl,bt(x,M,p)))}}}let r=[];for(let h=0;h<9000&&r.length<60;h++){let d=Math.round((n()*2-1)*rn),m=Math.round((n()*2-1)*an);if(xr(d,m)>0.8)continue;if(cs(d,m)<3||gr(d,m)<2.5)continue;if(Zl(d,m)<4)continue;if(r.some((_)=>Math.hypot(_.x-d,_.z-m)<7))continue;r.push({x:d,z:m})}let a=(h,d)=>Math.hypot(h.x-d.x,h.z-d.z),o=[];while(r.length){let h=0,d=Number.NEGATIVE_INFINITY;r.forEach((m,_)=>{let x=o.length?Math.min(...o.map((p)=>a(p,m))):-a(m,{x:4,z:14});if(x>d)d=x,h=_}),o.push(r.splice(h,1)[0])}let c=(h,d,m=0.95)=>xr(h,d)<m&&cs(h,d)>0.6&&gr(h,d)>0.4&&Zl(h,d)>0.5&&!e.has(h,1,d)&&!o.some((_)=>Math.hypot(_.x-h,_.z-d)<2),l=(h,d)=>{for(let m=0,_=0;m<h&&_<h*30;_++){let x=Math.round((n()*2-1)*rn),p=Math.round((n()*2-1)*an);if(!c(x,p))continue;d(x,p),m++}};l(20,(h,d)=>{e.blob(h,1.4,d,1.7,1.3,1.7,(m,_)=>_>0.93?15026253:ke(_r,_),0.35,h*13+d)}),l(14,(h,d)=>{if(e.set(h,1,d,10985881),n()>0.4)e.set(h+1,1,d,9407107);if(n()>0.6)e.set(h,2,d,11906982)}),l(6,(h,d)=>{e.set(h,1,d,15986402);for(let m=-1;m<=1;m++)for(let _=-1;_<=1;_++)e.set(h+m,2,d+_,m||_?14829116:16643818)}),l(100,(h,d)=>{let m=ke($l,n());if(n()>0.55)e.set(h,1,d,5217836),e.set(h,2,d,m);else e.set(h,1,d,m)}),l(240,(h,d)=>{e.set(h,1,d,ke(_r,n()))});for(let h=-rn;h<=rn;h++)for(let d=-an;d<=an;d++){let m=cs(h,d);if(m>0.2&&m<1.3&&bt(h,12,d)<0.22&&c(h,d,0.9))e.set(h,1,d,4164133),e.set(h,2,d,bt(h,13,d)>0.5?9067060:5217836);if(Math.hypot((h-on.x)/on.rx,(d-on.z)/on.rz)<0.8&&bt(h,14,d)<0.07&&e.has(h,-1,d))e.set(h,-1,d,9426526)}let u=th.map((h)=>{let d={x:h[0][0],z:h[0][1],dx:0,dz:1};for(let m=0;m<h.length-1;m++){let[_,x]=h[m],[p,f]=h[m+1],S=Math.hypot(p-_,f-x);for(let M=0;M<=1;M+=0.25/S){let A=_+(p-_)*M,E=x+(f-x)*M;if(!i(Math.round(A),Math.round(E)))return d;d={x:A,z:E,dx:(p-_)/S,dz:(f-x)/S}}}return d});return{model:e,plots:o,waterfalls:u}}var l0=[5025599,4431928,6012746,4035634],h0=[3116878,2785862,3644248];var u0=[16172081,15771946,16767322,15242026];var d0=(t)=>(e,n)=>{let i=e>0.35?0.25:e<-0.3?-0.2:0;return ke(t,Math.max(0,Math.min(0.999,n*0.75+0.12+i)))};function nh(t,e,n){let i=new Ue,s=je(t);for(let r=-e-1;r<=e+1;r++)for(let a=-e-1;a<=e+1;a++){let o=1+(De(r*0.5,a*0.5,t)-0.5)*0.5,c=Math.hypot(r,a)/(e*o);if(c>1)continue;let l=Math.round(1+(1-c)**0.8*e*1.9+bt(r,t,a)*2);for(let u=0;u>=-l;u--)i.set(r,u,a,u===0?ke(_o,bt(r,t,a)):Kl((-u-1)*2));if(c>0.75&&bt(r,t+1,a)>0.7){let u=1+Math.floor(bt(r,t+2,a)*3);for(let h=-1;h>=-u;h--)if(i.has(r,h,a))i.set(r,h,a,ke(Jl,s()))}}if(n==="oak"){for(let r=1;r<=3;r++)i.set(0,r,0,Vl);i.blob(0,5,0,2.3,2,2.3,d0(t%2?u0:l0),0.3,t)}else if(n==="pine")i.set(0,1,0,Vl),[2,2,1,1,0].forEach((r,a)=>{for(let o=-r;o<=r;o++)for(let c=-r;c<=r;c++){if(Math.abs(o)+Math.abs(c)>r+(r>1?1:0))continue;i.set(o,2+a,c,ke(h0,bt(o,a+t,c)))}});else if(n==="hut"){for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)i.set(r,1,a,r===0&&a===1?7028514:16182484),i.set(r,2,a,16182484);for(let r=0;r<=2;r++)for(let a=-2+r;a<=2-r;a++)for(let o=-2+r;o<=2-r;o++)i.set(a,3+r,o,r%2?12731695:14243135)}for(let r=0;r<e*2;r++){let a=Math.round((s()*2-1)*e*0.7),o=Math.round((s()*2-1)*e*0.7);if(i.has(a,0,o)&&!i.has(a,1,o))i.set(a,1,o,ke(n==="flowers"?$l:_r,s()))}return i}function ih(t){let e=new Ue,n=je(t),i=(r)=>r<-0.3?15134710:16777215,s=3+Math.floor(n()*3);for(let r=0;r<s;r++){let a=2.5+n()*2.5;e.blob((r-(s-1)/2)*3.4+n(),n()*1.5,(n()-0.5)*3,a*1.3,a*0.7,a,i,0.15,t+r)}return e}function sh(t,e,n){let i=new Ue,s=5;for(let r=-7;r<=5;r++){let a=r>=0?Math.sqrt(25-r*r):5*(1-(-r/9)**1.6);for(let o=-5;o<=5;o++)for(let c=-5;c<=5;c++){if(Math.hypot(o,c)>a+0.25)continue;let l=Math.floor((Math.atan2(c,o)+Math.PI)/Math.PI*4);i.set(o,r,c,r>=4||r===-7?n:l%2?t:e)}}for(let[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.set(r,-8,a,5981746),i.set(r,-9,a,5981746);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)i.set(r,-10,a,11565637),i.set(r,-11,a,10185276);return i}function rh(){let t=new Ue;t.set(0,0,0,16172081);for(let[e,n]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])t.set(e,1,n,e||n?16767322:16773590);return t.set(0,2,0,16767322),t}var Pi={oak:[3638589,5351494,7981399,10476393],cherry:[13000072,15372207,16758222,16769509],pine:[1988937,2651730,3708008,6663804],maple:[11354419,14047794,15698235,16759638],birch:[7973195,10799198,12836476,14805664],cash:[555102,499576,704910,6610862]},te=(t,e)=>Array.from({length:Math.max(0,e-t+1)},(n,i)=>t+i),ah=[[1,0],[-1,0],[0,1],[0,-1]];class Li extends Ue{voxels=new Map;set(t,e,n,i){super.set(t,e,n,i),this.voxels.set(`${t},${e},${n}`,{x:t,y:e,z:n,color:i})}}function vo(t,e=2){for(let n of te(-e,e))for(let i of te(-e,e))if(n*n+i*i<=e*e)t.set(n,0,i,bt(n,2,i)>0.5?9265731:7753785)}function yo(t,e,n,i,s=0,r=0){let a=je(n),o=Pi[e],c=e==="birch"?16050901:8475444,l=i?10:5,u=i?5.2:3.2,h=i?14:8,d=(m,_)=>o[Math.max(0,Math.min(3,Math.floor(1+m+_*1.8)))];for(let m of te(1,l+2))for(let _ of te(i?-1:0,i?1:0))for(let x of te(i?-1:0,i?1:0)){if(i&&Math.abs(_)+Math.abs(x)>1)continue;t.set(s+_,m,r+x,e==="birch"&&bt(_+n,m,x)>0.76?6380112:c)}for(let[m,_]of ah){for(let x of te(1,i?3:1))t.set(s+m*x,1,r+_*x,c);if(i)t.set(s+m,2,r+_,c);for(let x of te(1,i?4:2))t.set(s+m*x,l-2+x,r+_*x,c),t.set(s+m*x,l-3+x,r+_*x,c)}if(e==="pine"){for(let m of te(0,i?4:2)){let _=(i?4:3)+m*3,x=(i?6:4)-m;for(let p of te(0,3))for(let f of te(-x,x))for(let S of te(-x,x)){let M=Math.max(0,x-p);if(Math.max(Math.abs(f),Math.abs(S))<=M&&Math.abs(f)+Math.abs(S)<=M+Math.floor(M*0.65))t.set(s+f,_+p,r+S,o[Math.min(3,p===0?1:2+Math.floor(bt(f+n,p,S)*2))])}}t.set(s,i?20:12,r,o[3])}else{let m=e==="birch",_=e==="maple";t.blob(s,h,r,u*(m?0.72:_?1.2:1),i?m?6:4.5:m?3.8:3,u*(m?0.8:1),d,0.22,n);for(let[x,[p,f]]of ah.entries()){let S=(i?3.5:1.8)*(m?0.55:1);t.blob(s+p*S,h-(i?2:1)+a(),r+f*S,u*0.72,u*0.65,u*0.72,d,0.25,n+x+1)}if(i)t.blob(s-1,18,r,m?2:3,2.5,2.5,d,0.2,n+8);for(let x of te(-8,8))for(let p of te(5,21))for(let f of te(-8,8)){if(!t.has(s+x,p,r+f)||t.has(s+x,p+1,r+f))continue;let S=bt(x+n,p,f);if(e==="cherry"&&S>0.94)t.set(s+x,p,r+f,16774377);if(e==="cash"&&S>0.97)t.set(s+x,p,r+f,16765539)}}if(i&&e!=="pine"){for(let m of te(2,4))for(let _ of te(1,3))t.set(s+m,9,r+_,12092750);t.set(s+3,10,r+2,16771778)}}function f0(t,e){let n=new Li;vo(n,1),n.set(0,1,0,9218633),n.set(0,2,0,7443267);let i=je(e)()>0.5?1:-1;return n.set(-1,3,0,Pi[t][2]),n.set(1,3,0,Pi[t][2]),n.set(0,3,i,Pi[t][3]),n.set(0,4,0,Pi[t][3]),n}function p0(t,e){let n=new Li,i=Pi[t];for(let r of te(-8,8))for(let a of te(-6,6)){if(Math.abs(r)===8&&Math.abs(a)===6)continue;n.set(r,0,a,bt(r,e,a)>0.7?9813348:8234072)}for(let r of te(-6,2))for(let a of te(-4,3)){n.set(r,1,a,11969163);for(let o of te(2,7)){if(r!==-6&&r!==2&&a!==-4&&a!==3)continue;let c=r===-6||r===2||o===7;n.set(r,o,a,c?7884857:o%2?15916983:15192229)}}for(let r of te(-7,3)){let a=13-Math.abs(r+2);for(let o of te(-5,4))if(n.set(r,a,o,o===-5||o===4?6834227:i[(r+o+24)%3]),r%2===0)n.set(r,a-1,o,i[0]);for(let o of te(8,a-1))for(let c of[-4,3])n.set(r,o,c,15719347)}for(let r of te(-5,4))n.set(-2,14,r,i[2]);for(let r of[-3,-2])for(let a of te(2,5))n.set(r,a,3,9920830);n.set(-2,3,4,15252058);for(let r of te(-4,-1))n.set(r,1,4,14072718);for(let r of[5,6])for(let a of[-3,-2])n.set(a,0,r,14072718);for(let r of[0,1])for(let a of[4,5])n.set(r,a,3,16767102);for(let r of[-2,-1,1])for(let a of[4,5])n.set(2,a,r,16767102);for(let r of[0,1])n.set(r,3,4,9920830),n.set(r,4,4,i[2]);n.set(-5,5,4,16767102),n.set(-5,6,4,6837313);for(let r of te(9,14))for(let a of[0,1])for(let o of[-3,-2])n.set(a,r,o,(a+r)%3?10841684:12815728);for(let r of[-1,0,1,2])for(let a of[-4,-3,-2,-1])n.set(r,15,a,7694945);let s=new Li;yo(s,t,e,!1);for(let r of s.voxels.values())n.set(5+Math.round(r.x*0.6),1+Math.round(r.y*0.65),-1+Math.round(r.z*0.6),r.color);for(let r of[4,6,8])for(let a of te(1,3))n.set(r,a,5,15324845);for(let r of te(4,8))n.set(r,2,5,15324845);for(let r of[4,6,7])n.set(r,1,3,5211198),n.set(r,2,3,bt(r,e,3)>0.5?i[3]:16766849);return n}function oh(t,e,n){return{sprout:()=>f0(e,n),tree:()=>{let s=new Li;return vo(s),yo(s,e,n,!1),s},bigTree:()=>{let s=new Li;return vo(s,3),yo(s,e,n,!0),s},house:()=>p0(e,n)}[t]()}function vr(t,e,n){return oh(t,e,n)}function ch(t,e,n,i){let s=oh(i,t,n),r=Number.isNaN(e)?0:Math.max(0,Math.min(1,e));if(r===1)return s;let a=new Ue,o=(h)=>h.y+(i==="house"?0:Math.hypot(h.x,h.z)*1.3),c=[...s.voxels.values()].sort((h,d)=>o(h)-o(d)||Math.hypot(h.x,h.z)-Math.hypot(d.x,d.z)||h.x-d.x||h.z-d.z),l=1,u=l+Math.floor((c.length-l)*r);for(let h of c.slice(0,u))a.set(h.x,h.y,h.z,h.color);if(!a.has(0,1,0))a.set(0,1,0,11897422);return a}var Ge=(t,e)=>t[Math.min(t.length-1,Math.floor(e*t.length))];function m0(t,e){let n=e;for(let[i,s]of t){if(n<i)return s;n-=i}return t[t.length-1][1]}function bo(t,e){for(let n=-e.reach;n<=e.reach;n++)for(let i=-e.reach;i<=e.reach;i++){let s=e.rim(n,i);if(s>1)continue;let r=1-s,a=De(n*0.09,i*0.09,e.seed+11),o=De(n*0.3,i*0.3,e.seed+23),c=Math.round(3+o*3+r**0.6*e.depth*(0.55+a*0.6));if(s<0.88&&bt(n,e.seed+99,i)<0.05)c+=2+Math.floor(bt(i,e.seed,n)*5);let l=Math.round(De(n*0.1+50,i*0.1+50,e.seed+3)*3);for(let u=0;u>=-c;u--){let h=u===0?e.top(n,i):m0(e.strata,Math.max(0,-u-2+l));if(u<0&&De(n*0.45+u,i*0.45-u,e.seed+77)>0.86)h=e.stone;t.set(n,u,i,h)}if(s>0.86&&bt(n,e.seed+7,i)<0.5){let u=1+Math.floor(bt(n,e.seed+8,i)*3);for(let h=-1;h>=-u;h--)if(t.has(n,h,i))t.set(n,h,i,Ge(e.drip,bt(n,h,i)))}}}var fh=(t,e,n)=>(i,s)=>{let r=Math.atan2(s/e,i/t),a=1+0.07*Math.sin(3*r+n)+0.05*Math.sin(5*r+n*2)+0.03*Math.sin(9*r+2.1);return Math.hypot(i/t,s/e)/a},x0=[15323034,14730378,15784360],lh=[13874039,13215852],g0=[13213545,12555358,13871731,12884319],ph=[11437139,10910796],Mn=16183005,hh=15129798,uh=[6044450,4861724,7030055],_0=[[2,13608040],[2,12159568],[3,14464893],[2,15256984],[3,11697219],[3,9659194],[99,7424555]];function Un(t,e,n,i,s,r,a){let c=r*4+1,l=c-(r>5?5:3),u=Math.floor(r*0.55)*4+1;for(let x=-i-1;x<=i+1;x++)for(let p=-s-1;p<=s+1;p++)for(let f=1;f<=2;f++)t.set(e+x,f,n+p,Ge(ph,bt(x+a,f,p)));let h=(x)=>x>u?[i-1,s-1]:[i,s];for(let x=1;x<=c;x++){let[p,f]=h(x);for(let S=-p;S<=p;S++)for(let M=-f;M<=f;M++){let A=x>l||x===u+1;t.set(e+S,x,n+M,A?bt(S,x+a,M)>0.8?hh:Mn:Ge(g0,bt(S+a,x,M+a)))}}for(let x=1;x<r;x++){let p=x*4+2,[f,S]=h(p),M=p+2<=l&&x>=r-3,A=(E,w,P,O)=>{for(let y=0;y<2;y++)t.remove(e+E,p+y,n+w),t.set(e+E-P,p+y,n+w-O,Ge(uh,bt(E+a,p+y,w)));if(M)t.set(e+E,p+2,n+w,Mn)};for(let E=-f+1;E<=f-1;E+=2){if(bt(E+a,x,1)>0.12)A(E,S,0,1);if(bt(E+a,x,2)>0.12)A(E,-S,0,-1)}for(let E=-S+1;E<=S-1;E+=2){if(bt(E+a,x,3)>0.12)A(f,E,1,0);if(bt(E+a,x,4)>0.12)A(-f,E,-1,0)}}for(let x=1;x<=3;x++)t.remove(e,x,n+s+1),t.remove(e,x,n+s),t.set(e,x,n+s-1,x===2?8014375:6044450),t.set(e-1,x,n+s+1,Mn),t.set(e+1,x,n+s+1,Mn);for(let x=-1;x<=1;x++)t.set(e+x,4,n+s+1,Mn);let[d,m]=h(c);for(let x=-d;x<=d;x++)for(let p=-m;p<=m;p++){if(!(Math.abs(x)===d||Math.abs(p)===m))continue;t.set(e+x,c+1,n+p,Mn);let S=Math.abs(x)===d&&Math.abs(p)===m;if(S||(x+p+a)%3===0)t.set(e+x,c+2,n+p,Mn);if(S)t.set(e+x,c+3,n+p,Mn)}let _=a%2?d-2:-d+2;for(let x=-1;x<=1;x++)for(let p=-1;p<=1;p++)for(let f=1;f<=3;f++)t.set(e+_+x,c+f,n-m+2+p,f===3?Mn:hh);t.remove(e+_,c+2,n-m+3),t.set(e+_,c+2,n-m+2,uh[0])}var dh=[4165434,5218884,3440437,6073151];function v0(t,e,n,i,s){let r=s%2?1:-1,a=e;for(let l=1;l<=i;l++)a=e+Math.round(r*(l/i)**2*2),t.set(a,l,n,l%2?9268037:7821111);let o=i+1;t.set(a,o,n,dh[0]);let c=[[1,0,5],[-1,0,5],[0,1,5],[0,-1,5],[1,1,3],[-1,1,3],[1,-1,3],[-1,-1,3]];for(let[l,u,h]of c)for(let d=1;d<=h;d++){let m=d===1?1:d<=3?1:d===4?0:-1;t.set(a+l*d,o+m,n+u*d,Ge(dh,bt(a+l*d,s,n+u*d)))}t.set(a+1,o-1,n,14256683),t.set(a,o-1,n+1,13202463),t.set(a-1,o-1,n-1,14719546)}function mh(){let t=new Ue,e=fh(27,22,0.7),n=(s,r)=>r>9&&r<17&&Math.abs(s+2)<12&&(s+40)%6>0&&r!==13;bo(t,{rim:e,reach:32,depth:26,seed:3,strata:_0,stone:11114890,drip:lh,top:(s,r)=>{if(n(s,r))return(s+r)%2?7320138:6267199;return De(s*0.2,r*0.2,9)>0.7?Ge(lh,bt(s,1,r)):Ge(x0,bt(s,2,r))}}),Un(t,-9,-15,3,3,7,7),Un(t,7,-15,3,3,8,8),Un(t,-11,-6,3,3,6,1),Un(t,-2,-8,3,4,9,2),Un(t,7,-6,3,3,7,3),Un(t,15,-3,3,3,5,4),Un(t,-6,3,4,3,7,5),Un(t,4,3,3,3,5,6);for(let s=-14;s<=10;s++)for(let r=9;r<=17;r++){if(e(s,r)>0.92)continue;if((s===-14||s===10||r===17)&&(s+r)%5!==0)t.set(s,1,r,Ge(ph,bt(s,5,r)));else if(n(s,r)&&bt(s,6,r)>0.45)t.set(s,1,r,bt(s,7,r)>0.5?5217836:8176474)}[[-21,2,9],[-18,11,11],[15,9,10],[20,3,8],[13,15,12],[-10,19,9],[22,-9,10],[-20,-9,8],[3,19,7]].forEach(([s,r,a],o)=>{if(e(s,r)<0.9)v0(t,s,r,a,o+1)});for(let s=-27;s<=27;s++)for(let r=-22;r<=22;r++){if(e(s,r)>0.9||t.has(s,1,r)||n(s,r))continue;let a=bt(s,31,r);if(a<0.012)t.set(s,1,r,11114890);else if(a>0.985)t.set(s,1,r,9083466)}return t}var y0=[[2,9409180],[2,7895943],[3,10922418],[2,7106427],[3,9080216],[99,5198429]],b0=[7650637,7189574,8702298],M0=[15254616,14661707,15781994],S0=[16250352,15526628,16777215],T0={r:17,ax:-10,bx:10};function E0(t,e,n,i,s){for(let l=-2;l<=2;l++)for(let u=-2;u<=2;u++)for(let h=1;h<=3;h++)if(Math.abs(l)===2||Math.abs(u)===2)t.set(e+l,h,n+u,h===1?14273972:16182484);for(let l=0;l<=3;l++)for(let u=-3+l;u<=3-l;u++)for(let h=-3+l;h<=3-l;h++)t.set(e+u,4+l,n+h,i[l%i.length]);let[r,a]=s;t.set(e+r*2,1,n+a*2,7028514),t.set(e+r*2,2,n+a*2,7028514);let[o,c]=[a,r];t.set(e+r*2+o,2,n+a*2+c,16769162),t.set(e+r*2-o,2,n+a*2-c,16769162)}function xh(){let t=new Ue,{r:e,ax:n,bx:i}=T0,s=(l,u)=>Math.hypot(l-n,u)/e,r=(l,u)=>Math.hypot(l-i,u)/e,a=(l,u)=>1+(De(l*0.3,u*0.3,5)-0.5)*0.08;bo(t,{rim:(l,u)=>Math.min(s(l,u),r(l,u))/a(l,u),reach:30,depth:22,seed:5,strata:y0,stone:13225171,drip:[6199868,6989893],top:(l,u)=>{let h=s(l,u),d=r(l,u);if(Math.abs(h-0.86)<0.045||Math.abs(d-0.86)<0.045)return Ge(S0,bt(l,3,u));if(h<0.86&&d<0.86)return(l+u)%2?16250352:15000026;if(h<d)return Ge(b0,bt(l,1,u));return Ge(M0,bt(l,2,u))}});for(let l=-3;l<=3;l++)for(let u=-3;u<=3;u++)t.set(l,1,u,Math.abs(l)===3||Math.abs(u)===3?14605267:16250352);for(let[l,u]of[[-3,-3],[3,-3],[-3,3],[3,3]])for(let h=2;h<=6;h++)t.set(l,h,u,16250352);for(let l=0;l<=2;l++)for(let u=-4+l;u<=4-l;u++)for(let h=-4+l;h<=4-l;h++)t.set(u,7+l,h,l===2?15909424:l?2895672:3816775);for(let l=-1;l<=1;l++)for(let u=-1;u<=0;u++)t.set(l,2,u,l===0?16767322:15909424),t.set(l,3,u,l===0?9067052:14723114);let o=[[-19,-6,[3116938,2587768],[1,0]],[-17,7,[4038304,3116938],[1,0]],[19,-6,[14711342,13198634],[-1,0]],[17,8,[14243135,12731695],[-1,0]]],c=[14863511,14204806,15390632];for(let[l,u,h,d]of o){let _=l+d[0]*3;for(let x=0;x<=40;x++){let p=x/40,f=Math.round(_+(d[0]*4-_)*p),S=Math.round(u*(1-p)**1.6);if(t.has(f,0,S)&&!t.has(f,1,S))t.set(f,0,S,Ge(c,bt(f,9,S)))}E0(t,l,u,h,d)}for(let l=-30;l<=30;l++)for(let u=-20;u<=20;u++){let h=s(l,u),d=r(l,u);if(Math.min(h,d)>0.8||h<0.9&&d<0.9||t.has(l,1,u)||!t.has(l,0,u))continue;let m=bt(l,41,u);if(m<0.03)t.set(l,1,u,h<d?16777215:15026253);else if(m>0.95)t.set(l,1,u,h<d?5217836:13081134)}return t}function gh(){let t=new Ue;bo(t,{rim:fh(10,9,2.2),reach:13,depth:15,seed:9,strata:[[2,9132595],[2,7620650],[3,13598522],[2,14529919],[99,6044194]],stone:10327690,drip:[5612848,4888106],top:(n,i)=>Ge([7914564,7191099,8703310],bt(n,1,i))});let e=20;for(let n=1;n<=e;n++){let i=n<3?3.6:3.1-n/e*1.1,s=Math.floor((n-1)/4)%2;for(let r=-4;r<=4;r++)for(let a=-4;a<=4;a++){if(Math.hypot(r,a)>i)continue;t.set(r,n,a,n<3?9407107:s?14239034:16249576)}}t.set(0,1,3,6044450),t.set(0,2,3,6044450),t.remove(0,9,2),t.remove(0,14,2);for(let n=-3;n<=3;n++)for(let i=-3;i<=3;i++){if(Math.hypot(n,i)<=3.4)t.set(n,e+1,i,3816775);if(Math.hypot(n,i)<=3.4&&Math.hypot(n,i)>2.5)t.set(n,e+2,i,3816775)}for(let n=e+2;n<=e+4;n++)for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)t.set(i,n,s,Math.abs(i)===1&&Math.abs(s)===1?3816775:16771226);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)if(Math.hypot(n,i)<=2.3)t.set(n,e+5,i,14239034);t.set(0,e+6,0,14239034),t.set(0,e+7,0,3816775);for(let n=4;n<=6;n++)for(let i=-1;i<=1;i++)t.set(n,1,i,16182484),t.set(n,2,i,16182484),t.set(n,3,i,12731695);return t.set(5,4,0,14243135),t.set(-5,1,4,10985881),t.set(-6,1,3,9407107),t.set(-5,2,4,11906982),t}var _h=23;var vh=document.querySelector("#world"),Mo=document.documentElement,ls=matchMedia("(prefers-reduced-motion: reduce)").matches||/[?&]still\b/.test(location.search);function w0(t){let e=Math.min(innerWidth,innerHeight)<600,n=new mo({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:/[?&]still\b/.test(location.search)});n.setPixelRatio(Math.min(e?1.75:2,devicePixelRatio)),n.toneMapping=ks,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=Ls,n.shadowMap.autoUpdate=!1;let i=new er;i.fog=new ji(15131606,520,1500);let s=new Re(32,1,1,4000),r=new hr(16769712,3.2);r.position.set(-170,260,190),r.castShadow=!0,r.shadow.mapSize.setScalar(e?1024:2048),r.shadow.radius=4,r.shadow.bias=-0.0004,r.shadow.normalBias=0.4,Object.assign(r.shadow.camera,{left:-190,right:190,top:190,bottom:-190,near:1,far:900}),r.shadow.camera.updateProjectionMatrix(),i.add(r,r.target,new cr(16774368,7035466,1.5));let a=new ss({vertexColors:!0}),o=(L,D=!0)=>{let q=new Me(L.toGeometry(),a);return q.castShadow=D,q.receiveShadow=D,q},c=[],l=(L,D,q)=>{let Y=new tn;Y.userData.place=L,i.add(Y);let lt={id:L,group:Y,tag:new B(...D),frame:q,aside:new B};return c.push(lt),lt},u=l("focus-garden",[0,34,0],{w:104,h:86,lift:2}),h=eh(7);u.group.add(o(h.model));let d=["oak","cherry","pine","maple","birch","cash"],m=je(21);h.plots.slice(1,30).forEach((L,D)=>{let q=m(),Y=q<0.3?"bigTree":q<0.82?"tree":"sprout",lt=o(vr(Y,d[Math.floor(m()*d.length)],100+D));lt.position.set(L.x,1,L.z),lt.rotation.y=Math.floor(m()*4)*(Math.PI/2),u.group.add(lt)});let _=o(vr("house","oak",4));_.position.set(18,1,-15),u.group.add(_);let x=new Me(new be,a);x.castShadow=!0,x.position.set(h.plots[0].x,1,h.plots[0].z);let p=new Me(rh().toGeometry(),a);p.position.copy(x.position),u.group.add(x,p);let f={species:0,progress:-1,shown:-1},S=(L)=>{let D=Math.round(L*48);if(D===f.shown)return;f.shown=D,x.geometry.dispose(),x.geometry=ch(d[f.species%d.length],D/48,300+f.species,"bigTree").toGeometry(),n.shadowMap.needsUpdate=!0},M=[],A=new rr({vertexColors:!0,transparent:!0,opacity:0.82,shininess:70,specular:14217727,depthWrite:!1});for(let L of h.waterfalls){let D=[0,1].map((q)=>{let Y=new Me(A0(3,q),A);return Y.position.set(L.x,-0.4,L.z),Y.rotation.y=Math.atan2(-L.dz,L.dx),Y.visible=q===0,u.group.add(Y),Y});M.push(D)}let E=l("venn",[0,24,0],{w:70,h:62,lift:0});E.group.add(o(xh()));for(let[L,D,q,Y]of[[-10,-12,"tree",2],[-14,12,"tree",5],[-25,1,"sprout",3],[11,-12,"tree",7],[14,12,"tree",9],[25,1,"sprout",4]]){let lt=o(vr(q,L<0?"cash":"maple",Y));lt.position.set(L,1,D),E.group.add(lt)}l("shibam",[0,50,-4],{w:70,h:84,lift:12}).group.add(o(mh()));let P=l("explorer",[0,36,0],{w:46,h:62,lift:8});P.group.add(o(gh()));let O=new tn;O.position.y=_h;let y=new Ei({color:16773560,transparent:!0,opacity:0.2,depthWrite:!1,side:qe,fog:!1});for(let L of[0,Math.PI]){let D=new Me(new ns(7,0.6,58,14,1,!0),y);D.rotation.z=Math.PI/2,D.position.x=30;let q=new tn;q.rotation.y=L,q.add(D),O.add(q)}P.group.add(O);let b=(L,D,q,Y)=>{let lt=l(L,[0,10,0],{w:40,h:46,lift:-2});return lt.group.add(o(sh(D,q,Y),!1)),lt},C=b("snapcraft",15291424,16249576,8010525),G=b("faststarter",3043289,16765503,1916794),V=new ss({vertexColors:!0,transparent:!0,opacity:0.93}),W=Array.from({length:9},(L,D)=>{let q=je(60+D),Y=new Me(ih(40+D).toGeometry(),V);return Y.scale.setScalar(2.2+q()*2.4),Y.position.set((q()*2-1)*330,-50+q()*190,-300+q()*150),Y.userData.speed=1.5+q()*2.5,i.add(Y),Y}),j=[[-150,58,-120,5,"pine"],[168,-12,-70,4,"oak"],[-128,-30,70,3,"flowers"],[40,78,-150,4,"hut"]].map(([L,D,q,Y,lt],_t)=>{let Q=o(nh(30+_t,Y,lt),!1);return Q.position.set(L,D,q),i.add(Q),Q}),J=260,it=new Float32Array(J*3),H=new Float32Array(J*3),st=je(5),pt=[16027569,16765503,16752451,16777215,15026253].map((L)=>new Ut(L));for(let L=0;L<J;L++)it.set([(st()*2-1)*260,-60+st()*220,-260+st()*300],L*3),pt[L%pt.length].toArray(H,L*3);let Lt=new be;Lt.setAttribute("position",new Ie(it,3)),Lt.setAttribute("color",new Ie(H,3)),i.add(new nr(Lt,new es({size:1.3,vertexColors:!0,transparent:!0,opacity:0.85})));let Bt={wide:{at:{"focus-garden":[-18,-4,34],venn:[84,2,30],shibam:[-10,44,-66],explorer:[104,44,-50],snapcraft:[50,72,-40],faststarter:[126,2,58]},centre:[24,18,-6],view:{w:286,h:204}},tall:{at:{"focus-garden":[-6,-20,40],venn:[14,30,-10],shibam:[-14,78,-60],explorer:[32,86,-30],snapcraft:[-38,40,-20],faststarter:[44,4,30]},centre:[0,34,-14],view:{w:104,h:330}}},Vt=Bt.wide,xt={target:new B,yaw:-0.16,pitch:0.42,dist:400,shift:new Xt,goal:{target:new B,yaw:-0.16,pitch:0.42,dist:400,shift:new Xt}},X="home",rt=1,nt=1,Mt=(L,D)=>{let q=Zi.degToRad(s.fov)/2;return Math.max(D/2/Math.tan(q),L/2/(Math.tan(q)*s.aspect))};function Nt(){rt=t.clientWidth||innerWidth,nt=t.clientHeight||innerHeight,n.setSize(rt,nt,!1),s.aspect=rt/nt,Vt=s.aspect<0.85?Bt.tall:Bt.wide;for(let L of c)L.group.position.set(...Vt.at[L.id]).add(L.aside);r.target.position.set(...Vt.centre),r.position.set(Vt.centre[0]-170,Vt.centre[1]+260,Vt.centre[2]+190),n.shadowMap.needsUpdate=!0,At(!1)}function At(L=!0){let D=c.find((lt)=>lt.id===X),q=xt.goal,Y=Vt===Bt.tall;if(D)q.target.set(...Vt.at[D.id]).add(new B(0,D.frame.lift,0)),q.dist=Mt(D.frame.w,D.frame.h)*(Y?1.5:1.42),q.pitch=0.46,q.shift.set(Y?0:-0.17,Y?0.17:0);else q.target.set(...Vt.centre),q.dist=Mt(Vt.view.w,Vt.view.h),q.pitch=0.42,q.shift.set(Y?0:-0.06,Y?-0.015:0);if(q.yaw=-0.16,!L||ls)xt.target.copy(q.target),xt.shift.copy(q.shift),xt.dist=q.dist,xt.pitch=q.pitch,xt.yaw=q.yaw}function de(L){X=c.some((D)=>D.id===L)?L:"home",Mo.dataset.place=X;for(let D of document.querySelectorAll(".card"))D.classList.toggle("is-on",D.id===X);for(let D of Gt.values())D.setAttribute("aria-current",String(D.dataset.place===X));At()}let Gt=new Map;for(let L of document.querySelectorAll(".tag[data-place]"))Gt.set(L.dataset.place??"",L);let Qt=new B;function I(){for(let L of c){let D=Gt.get(L.id);if(!D)continue;Qt.copy(L.tag).applyMatrix4(L.group.matrixWorld).project(s);let q=Qt.z<1&&Math.abs(Qt.x)<1.15&&Math.abs(Qt.y)<1.15;D.style.visibility=q?"visible":"hidden",D.style.transform=`translate(-50%, -100%) translate(${(Qt.x+1)/2*rt}px, ${(1-Qt.y)/2*nt}px)`}}let qt={snapcraft:0,faststarter:2.4},zt=new B;function jt(L,D){let q=1-Math.exp(-D*3.2),Y=xt.goal;xt.target.lerp(Y.target,q),xt.shift.lerp(Y.shift,q),xt.dist+=(Y.dist-xt.dist)*q,xt.pitch+=(Y.pitch-xt.pitch)*q,xt.yaw+=(Y.yaw-xt.yaw)*q;let lt=ls?0:Math.sin(L*0.17)*0.05,_t=xt.yaw+lt;s.position.set(xt.target.x+Math.sin(_t)*Math.cos(xt.pitch)*xt.dist,xt.target.y+Math.sin(xt.pitch)*xt.dist,xt.target.z+Math.cos(_t)*Math.cos(xt.pitch)*xt.dist),s.lookAt(xt.target),s.setViewOffset(rt,nt,xt.shift.x*rt,xt.shift.y*nt,rt,nt);let Q=c.find((ct)=>ct.id===X),dt=!1;for(let ct of c){let R=Vt.at[ct.id];if(zt.set(0,0,0),Q&&ct!==Q){let tt=Vt.at[Q.id];zt.set(R[0]-tt[0],(R[1]-tt[1])*0.6,R[2]-tt[2]).normalize().multiplyScalar(170)}if(ct.aside.distanceToSquared(zt)>0.01)ls?ct.aside.copy(zt):ct.aside.lerp(zt,q),dt=!0;ct.group.position.set(R[0],R[1],R[2]).add(ct.aside);let ht=qt[ct.id];if(ht!==void 0&&!ls){if(ct.group.position.x+=Math.sin(L*0.11+ht)*12,ct.group.position.y+=Math.sin(L*0.5+ht)*2.4,ct.group.position.z+=Math.cos(L*0.09+ht)*9,ct.group.rotation.y=Math.sin(L*0.2+ht)*0.4,ct===Q)Y.target.copy(ct.group.position).y+=ct.frame.lift}}if(dt)n.shadowMap.needsUpdate=!0;for(let ct of W)if(ct.position.x+=ct.userData.speed*D,ct.position.x>360)ct.position.x=-360;j.forEach((ct,R)=>{ct.position.y+=Math.sin(L*0.4+R*1.7)*0.01}),O.rotation.y=L*0.5,p.position.y=27+Math.sin(L*2.2)*0.8,p.rotation.y=L*1.2,M.forEach((ct)=>{let R=Math.floor(L*5)%2;ct[0].visible=R===0,ct[1].visible=R===1});let It=L%40/40,Et=Math.floor(L/40);if(Et!==f.species)f={species:Et,progress:0,shown:-1};S(ls?1:Math.min(1,It/0.78));let ot=Lt.getAttribute("position");for(let ct=0;ct<J;ct++){let R=ot.getY(ct)-D*(2+ct%5);if(R<-70)R=160;ot.setY(ct,R),ot.setX(ct,ot.getX(ct)+Math.sin(L*0.6+ct)*D*2)}ot.needsUpdate=!0,n.render(i,s),I()}let St=new ur,Yt=new Xt,Tt=(L)=>{let D=t.getBoundingClientRect();Yt.set((L.clientX-D.left+xt.shift.x*rt)/rt*2-1,-((L.clientY-D.top+xt.shift.y*nt)/nt*2-1)),s.clearViewOffset(),s.updateProjectionMatrix(),St.setFromCamera(Yt,s);let Y=St.intersectObjects(c.map((lt)=>lt.group),!0)[0]?.object??null;while(Y&&!Y.userData.place)Y=Y.parent;return Y?.userData.place??null},Ct=null;t.addEventListener("pointerdown",(L)=>{Ct={x:L.clientX,y:L.clientY,moved:0},t.setPointerCapture?.(L.pointerId)}),t.addEventListener("pointermove",(L)=>{if(!Ct){t.style.cursor=Tt(L)?"pointer":"grab";return}let D=L.clientX-Ct.x,q=L.clientY-Ct.y;Ct.moved+=Math.abs(D)+Math.abs(q),Ct.x=L.clientX,Ct.y=L.clientY,xt.goal.yaw-=D*0.005,xt.goal.pitch=Zi.clamp(xt.goal.pitch+q*0.004,0.12,1.1),Mo.classList.add("has-looked")});let ce=(L)=>{let D=Ct;if(Ct=null,!D||D.moved>6)return;let q=Tt(L);location.hash=q&&q!==X?q:"home"};t.addEventListener("pointerup",ce),t.addEventListener("pointercancel",()=>{Ct=null}),t.addEventListener("wheel",(L)=>{L.preventDefault();let D=c.find((Y)=>Y.id===X),q=D?Mt(D.frame.w,D.frame.h)*1.42:Mt(Vt.view.w,Vt.view.h);xt.goal.dist=Zi.clamp(xt.goal.dist*(1+L.deltaY*0.0012),q*0.55,q*1.5)},{passive:!1}),addEventListener("hashchange",()=>de(decodeURIComponent(location.hash.slice(1)))),addEventListener("keydown",(L)=>{if(L.key==="Escape"&&X!=="home")location.hash="home"});let T=0;addEventListener("resize",()=>{clearTimeout(T),T=setTimeout(Nt,120)}),X=decodeURIComponent(location.hash.slice(1)),Nt(),de(X),At(!1),i.updateMatrixWorld(!0),jt(0,0),Mo.classList.add("has-world");let g=performance.now(),F=g,Z=(L)=>{jt((L-F)/1000,Math.min(0.05,(L-g)/1000)),g=L,requestAnimationFrame(Z)};requestAnimationFrame(Z),window.salemkode={frame(L){for(let D=0;D<40;D++)jt(L,0.05)}}}function A0(t,e){let n=[],i=[],s=[],r=[],a=new Ut(3121112),o=new Ut(13496058),c=new Ut,l=[[[1,0,0],[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]]],[[-1,0,0],[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]]],[[0,1,0],[[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]]],[[0,-1,0],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]],[[0,0,1],[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]]],[[0,0,-1],[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]]]],u=(_,x,p,f,S,M,A)=>{for(let[E,w]of l){let P=n.length/3,O=E[1]>0?1.08:E[0]!==0?1:0.9;for(let[y,b,C]of w)n.push(_+y*f/2,x+b*S/2,p+C*M/2),i.push(E[0],E[1],E[2]),s.push(Math.min(1,c.r*A*O),Math.min(1,c.g*A*O),Math.min(1,c.b*A*O));r.push(P,P+1,P+2,P,P+2,P+3)}},h=3,d=108;c.copy(a).lerp(new Ut(16777215),0.25),u(0.4,-0.6,0,2,1.6,t,1);for(let _=0;_<108;_+=3){let x=_/108;c.copy(a).lerp(o,x**1.4);let p=(_/3+e)%2?0.9:1.06;u(Math.sqrt((_+1.5)/150)*7+1,-(_+1.5),0,1.8+x*1.6,3.02,t*(1+x*0.6),p)}let m=new be;return m.setAttribute("position",new xe(n,3)),m.setAttribute("normal",new xe(i,3)),m.setAttribute("color",new xe(s,3)),m.setIndex(r),m}if(vh)try{w0(vh)}catch(t){console.warn("The world could not be drawn.",t)}
