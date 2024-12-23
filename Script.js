 // ntpConfig:
const ntpConfig = {
  "enable": true,
  "write-to-system": true,
};

// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": true,
  "prefer-h3": true,
  "respect-rules": true,
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "dns.msftncsi.com",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com",
    "stun.+.+.+",
    "stun.+.+",
    "miwifi.com",
    "+.music.163.com",
    "*.126.net",
    "api-jooxtt.sanook.com",
    "streamoc.music.tc.qq.com",
    "mobileoc.music.tc.qq.com",
    "isure.stream.qqmusic.qq.com",
    "dl.stream.qqmusic.qq.com",
    "aqqmusic.tc.qq.com",
    "amobile.music.tc.qq.com",
    "+.xiaomi.com",
    "+.music.migu.cn",
    "music.migu.cn",
    "netis.cc",
    "+.ntp.org.cn",
    "+.openwrt.pool.ntp.org",
    "+.+.+.srv.nintendo.net",
    "+.+.stun.playstation.net",
    "speedtest.cros.wr.pvp.net",
    "+.xboxlive.com",
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [
    "https://223.5.5.5/dns-query",
    "https://doh.pub/dns-query", 
    "https://dns.alidns.com/dns-query"
  ],
  "proxy-server-nameserver": [
    "https://doh.pub/dns-query", 
    "https://1.1.1.1/dns-query"
  ],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": [
    "https://doh.pub/dns-query", 
    "https://dns.alidns.com/dns-query"
  ],
    "geosite:netflix,openai,pornhub,tiktok,youtube,telegram,gfw,geolocation-!cn": [ 
    "https://1.1.1.1/dns-query",
    "https://194.242.2.2/dns-query",
    "https://public.dns.iij.jp/dns-query",
    "https://doh.opendns.com/dns-query"
  ],
  }
};


  // 规则集通用配置
  const ruleProviderCommon = {
    type: "http",
    format: "mrs",
    interval: 86400,
  };
  // 规则集配置
  const ruleProviders = {
    proxydns: {
      ...ruleProviderCommon,
      behavior: "classical",
      format: "yaml",
      url: "https://github.com/Shattered217/ownrule-clash/raw/refs/heads/main/dns.yaml",
      path: "./rulesets/loyalsoldier/proxydns.yaml",
    },
    netflix: {
      ...ruleProviderCommon,
      behavior: "ipcidr",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/netflix.mrs",
      path: "./rulesets/loyalsoldier/netflix.mrs",
    },
    speedtest: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/speedtest.mrs",
      path: "./rulesets/loyalsoldier/speedtest.mrs",
    },
    adobe: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/adobe.mrs",
      path: "./rulesets/loyalsoldier/adobe.mrs",
    },
    edgepub: {
      ...ruleProviderCommon,
      behavior: "classical",
      format: "yaml",
      url: "https://raw.githubusercontent.com/GGsimita/clash-mihomo-js/refs/heads/main/Script-pub/edgepub.yaml",
      path: "./rulesets/loyalsoldier/edgepub.yaml",
    },
    pornhub: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/pornhub.mrs",
      path: "./rulesets/loyalsoldier/pornhub.mrs",
    },
    youtube: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/youtube.mrs",
      path: "./rulesets/loyalsoldier/youtube.mrs",
    },
    bilibili: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bilibili.mrs",
      path: "./rulesets/loyalsoldier/bilibili.mrs",
    },
    spotify: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/spotify.mrs",
      path: "./rulesets/loyalsoldier/spotify.mrs",
    },
    tiktok: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tiktok.mrs",
      path: "./rulesets/loyalsoldier/tiktok.mrs",
    },
    gamedl: {
      ...ruleProviderCommon,
      behavior: "classical",
      format: "text",
      url: "https://github.com/ACL4SSR/ACL4SSR/raw/master/Clash/Ruleset/GameDownload.list",
      path: "./rulesets/loyalsoldier/gamedl.list",
    },
    steam: {
      ...ruleProviderCommon,
      behavior: "classical",
      format: "yaml",
      url: "https://raw.githubusercontent.com/GGsimita/clash-mihomo-js/refs/heads/main/Script-pub/gamepub.yaml",
      path: "./rulesets/loyalsoldier/steam.yaml",
    },
    proxy: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo-lite/geosite/proxy.mrs",
      path: "./rulesets/loyalsoldier/proxy.mrs",
    },
    direct: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/cn.mrs",
      path: "./rulesets/loyalsoldier/direct.mrs",
    },
    private: {
      ...ruleProviderCommon,
      behavior: "ipcidr",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/private.mrs",
      path: "./rulesets/loyalsoldier/private.mrs",
    },
    gfw: {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/gfw.mrs",
      path: "./rulesets/loyalsoldier/gfw.mrs",
    },
    "tld-not-cn": {
      ...ruleProviderCommon,
      behavior: "domain",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tld-!cn.mrs",
      path: "./rulesets/loyalsoldier/tld-not-cn.mrs",
    },
    telegramcidr: {
      ...ruleProviderCommon,
      behavior: "classical",
      format: "yaml",
      url: "https://raw.githubusercontent.com/GGsimita/clash-mihomo-js/refs/heads/main/Script-pub/telegram.yaml",
      path: "./rulesets/loyalsoldier/telegramcidr.mrs",
    },
    cncidr: {
      ...ruleProviderCommon,
      behavior: "ipcidr",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/cn.mrs",
      path: "./rulesets/loyalsoldier/cncidr.mrs",
    },
    lancidr: {
      ...ruleProviderCommon,
      behavior: "ipcidr",
      url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo-lite/geoip/private.mrs",
      path: "./rulesets/loyalsoldier/lancidr.mrs",
    },
    applications: {
      ...ruleProviderCommon,
      behavior: "classical",
      format: "yaml",
      url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
      path: "./rulesets/loyalsoldier/applications.yaml",
    },
  };
  // 规则
  const rules = [
    // 自定义规则
    "DOMAIN-SUFFIX,googleapis.cn,节点选择", // Google服务
    "DOMAIN-SUFFIX,gstatic.com,节点选择", // Google静态资源
    "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择", // Google Play下载服务
    "DOMAIN-SUFFIX,github.io,节点选择", // Github Pages
    "DOMAIN,v2rayse.com,节点选择", // V2rayse节点工具
    // Loyalsoldier 规则集
    "RULE-SET,proxydns,ProxyDNS",
    "RULE-SET,speedtest,Speedtest",
    "RULE-SET,edgepub,edgepub",
    "RULE-SET,adobe,Adobe",
    "RULE-SET,pornhub,Pornhub",
    "RULE-SET,bilibili,Bilibili",
    "RULE-SET,youtube,YouTube",
    "RULE-SET,tiktok,TikTok",
    "RULE-SET,netflix,Netflix",
    "RULE-SET,spotify,Spotify",
    "RULE-SET,gamedl,游戏下载",
    "RULE-SET,steam,Steam",
    "RULE-SET,proxy,节点选择",
    "RULE-SET,gfw,节点选择",
    "RULE-SET,tld-not-cn,节点选择",
    "RULE-SET,applications,全局直连",
    "RULE-SET,private,全局直连",
    "RULE-SET,direct,全局直连",
    "RULE-SET,lancidr,全局直连,no-resolve",
    "RULE-SET,cncidr,全局直连,no-resolve",
    "RULE-SET,telegramcidr,Telegram,no-resolve",
    // 其他规则
    "GEOIP,LAN,全局直连,no-resolve",
    "GEOIP,CN,全局直连,no-resolve",
    "MATCH,漏网之鱼",
  ];
  // 代理组通用配置
  const groupBaseOption = {
    interval: 300,
    timeout: 3000,
    url: "https://www.google.com/generate_204",
    lazy: true,
    "max-failed-times": 3,
    hidden: false,
  };
  
  // 程序入口
  function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
      typeof config?.["proxy-providers"] === "object"
        ? Object.keys(config["proxy-providers"]).length
        : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
      throw new Error("配置文件中未找到任何代理");
    }

    
    config["sniffer"] = { 
            enable: true,
            "force-dns-mapping": true,
            "parse-pure-ip": true,
            "override-destination": true,
            sniff: {
                TLS: {
                    ports: [443, 8443],
                },
                HTTP: {
                    ports: [80, "8080-8880"],
                    "override-destination": true,
                },
                QUIC: {
                    ports: [443, 8443]
                }
            },
            "skip-domain": ["Mijia Cloud", "+.oray.com"],
        },
    
    //config["unified-delay"] = true; //统一延迟
    //config["tcp-concurrent"] = true; //TCP 并发

    config["profile"] = {
    "store-selected": true,
    "store-fake-ip": true,
   };
   
  // 覆盖通用配置
  config["mixed-port"] = "7890";
  config["tcp-concurrent"] = true;//TCP 并发
  config["allow-lan"] = true;
  config["ipv6"] = true;
  config["log-level"] = "info";//日志等级
  config["unified-delay"] = "true";//统一延迟
  config["find-process-mode"] = "strict";
  config["global-client-fingerprint"] = "chrome";
  config["external-controller"] = "127.0.0.1:9090";
  config["external-ui"] = "ui";
  config["external-ui-url"] = "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip";
  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geox-url"] = {
    "geoip": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
    "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    //"mmdb": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
    //"asn": "https://mirror.ghproxy.com/https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
    "mmdb": "https://geodata.kelee.one/Country-Masaiki.mmdb",
    "asn": "https://geodata.kelee.one/GeoLite2-ASN-P3TERX.mmdb"
  };
  // 覆盖 tun 配置
  config["tun"] = {
    "enable": true,
    "stack": "mixed",
    "dns-hijack": ["any:53"]
  };
  
    // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;
    // 覆盖原配置中DNS配置
  config["ntp"] = ntpConfig;

    // 覆盖原配置中的代理组
    config["proxy-groups"] = [
      {
        ...groupBaseOption,
        name: "节点选择",
        type: "select",
        proxies: ["延迟选优","手动选择","手动选择备用","自建节点", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
      },
      {
        ...groupBaseOption,
        name: "手动选择",
        type: "select",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
      },
      {
        ...groupBaseOption,
        name: "手动选择备用",
        type: "select",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
      },
      {
        ...groupBaseOption,
        name: "自建节点",
        type: "select",
        "include-all": true,
        filter: "自建|Craig|hk-vmess|HY|backup|_",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
      },
      {
        ...groupBaseOption,
        name: "ProxyDNS",
        type: "select",
        proxies: [
          "全局直连",            
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",       
        ],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Server.png",
      },
      {
        ...groupBaseOption,
        name: "Speedtest",
        type: "select",
        proxies: ["全局直连",],
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Speedtest.png",
      },
      {
        ...groupBaseOption,
        name: "edgepub",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
          "全局直连",          
        ],
        icon: "https://www.clashverge.dev/assets/icons/github.svg",
      },
      {
        ...groupBaseOption,
        name: "Pornhub",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        "include-all": true,
        filter: "^(?!(.*尼日)).*(日|JP|韩|KR|台|TW).*",
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pornhub_1.png",
      },
      {
        ...groupBaseOption,
        name: "Bilibili",
        type: "select",
        proxies: [
          "全局直连",
        ],
       "include-all": true,
        filter: "港|澳|台|HK|TW|MO",
        icon: "https://fastly.jsdelivr.net/gh/Orz-3/mini@master/Color/Bili.png",
      },
      {
        ...groupBaseOption,
        name: "TikTok",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        icon: "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/tiktok.png",
      },
      {
        ...groupBaseOption,
        name: "Netflix",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        icon: "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/netflix.png",
      },
      {
        ...groupBaseOption,
        name: "YouTube",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg",
      },
      {
        ...groupBaseOption,
        name: "Spotify",
        type: "select",
        proxies: [
          "全局直连",
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png",
      },
      {
        ...groupBaseOption,
        name: "Telegram",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
          "全局直连",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg",
      },
      {
        ...groupBaseOption,
        name: "微软服务",
        type: "select",
        proxies: [
          "全局直连",
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg",
      },
      {
        ...groupBaseOption,
        name: "Adobe",
        type: "select",
        proxies: [
          "全局直连",          
          "REJECT",
          "节点选择",
        ],
        icon: "https://www.adobe.com/favicon.ico",
      },
      {
        ...groupBaseOption,
        name: "游戏下载",
        type: "select",
        proxies: [         
          "全局直连",
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Download.png",
      },
      {
        ...groupBaseOption,
        name: "Steam",
        type: "select",
        proxies: [         
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
          "全局直连",          
        ],
        icon: "https://www.clashverge.dev/assets/icons/steam.svg",
      },
      {
        ...groupBaseOption,
        name: "延迟选优",
        type: "url-test",
        tolerance: 100,
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg",
      },
      {
        ...groupBaseOption,
        name: "故障转移",
        type: "fallback",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg",
      },
      {
        ...groupBaseOption,
        name: "负载均衡(散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg",
      },
      {
        ...groupBaseOption,
        name: "负载均衡(轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg",
      },
      {
        ...groupBaseOption,
        name: "全局直连",
        type: "select",
        proxies: [
          "DIRECT",
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
        ],
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg",
      },
      {
        ...groupBaseOption,
        name: "漏网之鱼",
        type: "select",
        proxies: [
          "节点选择",
          "手动选择",
          "手动选择备用",
          "自建节点",
          "延迟选优",
          "故障转移",
          "负载均衡(散列)",
          "负载均衡(轮询)",
          "全局直连",
        ],
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg",
      },
    ];
  
    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
  
    // 返回修改后的配置
    return config;
  }
