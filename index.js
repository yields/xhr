
/**
 * Get new `XMLHttpRequest` obj.
 *
 * example:
 *
 *        req = xhr();
 *
 * @return {Object}
 */

module.exports = function () {
  if (window.XMLHttpRequest) return new XMLHttpRequest();
  try{ return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e){}
  try{ return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e){}
  try{ return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e){}
  try{ return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e){}
};
