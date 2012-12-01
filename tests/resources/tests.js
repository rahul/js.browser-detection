b = window.browser;

test( 'IE 7', function() {
  b.initialize('Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)');
  ok(b.is_ie7(), 'is really IE 7');
  equal(false, b.is_chrome(), 'and neither Chrome');
  equal(false, b.is_firefox(), 'nor Firefox')
  ok(b.on_windows(), 'on Windows');
  ok(b.version_gt(6), 'came after IE 6');
  ok(b.version_lt(8), 'but before IE 8');
  equal(false, b.is_capable(), 'is neither /capable/');
  equal(false, b.has_compatibility_view(), 'nor has compatibility view');
});

test( 'IE 9', function() {
  b.initialize('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)');
  ok(b.is_ie9(), 'is really IE 9');
  equal(false, b.is_chrome(), 'and neither Chrome');
  equal(false, b.is_firefox(), 'nor Firefox')
  ok(b.on_windows(), 'on Windows');
  equal(false, b.is_capable(), 'is not /capable/');
  ok(b.has_compatibility_view(), 'but has compatibility view');
});


test( 'Firefox 4', function() {
  b.initialize('Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1');
  ok(b.is_firefox(), 'is really Firefox');
  equal(4, b.version(), 'version 4');
  equal(false, b.is_chrome(), 'and neither Chrome');
  equal(false, b.is_ie(), 'nor IE')
  ok(b.on_windows(), 'on Windows');
  equal(false, b.on_mac(), 'and neither on Mac');
  equal(false, b.on_linux(), 'nor Linux');
  ok(b.is_capable(), 'is /capable/');
});

test('iPad', function() {
  b.initialize('Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3');
  ok(b.on_ipad(), 'is really an iPad');
  ok(b.on_ios(), 'runs iOS');
  equal(5, b.version(), 'version 5');
  equal(false, b.on_android(), 'and not Android');
  ok(b.on_tablet(),'is a tablet');
  ok(b.on_mobile(), 'and also a mobile');
  ok(b.is_capable(), 'is also /capable/');
});

test('Galaxy Nexus', function() {
  b.initialize('Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');
  ok(b.on_android(), 'runs Android');
  equal(4, b.version(), 'version 4');
  equal(false, b.on_ios(), 'and not iOS');
  equal(false, b.on_tablet(),'is not a tablet');
  equal(true, b.on_mobile(), 'but a mobile');
});