function FindProxyForURL(url,host){
  host=host.toLowerCase();
  url=url.toLowerCase();
  if (dnsDomainIs(host,"site.cc.cmbimg.com")){
	  return "PROXY 212.64.88.161:11111";
  } else{
    return "DIRECT";
  }
}

