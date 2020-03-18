function FindProxyForURL(url,host){
  host=host.toLowerCase();
  url=url.toLowerCase();
  if (dnsDomainIs(host,"site.cc.cmbimg.com")){
	  return "PROXY 212.64.88.161:11112";
  };
  if (dnsDomainIs(host,"www.baidu.com")){
	  return "PROXY 212.64.88.161:11112";
  };
  if (dnsDomainIs(host,"campaign.ccc.cmbchina.com")){
	  return "PROXY 212.64.88.161:11112";
  };

  return "DIRECT";
	
}


