function FindProxyForURL(url,host){
  host=host.toLowerCase();
  url=url.toLowerCase();
  if (dnsDomainIs(host,'www.baidu.com')){
	  return "PROXY 212.64.88.161:11111";
  } else{
    return "PROXY 212.64.88.161:11111";
  }
}

