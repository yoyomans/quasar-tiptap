/**
 * Data: Embed
 *
 * @author Micle Bu, micle@oriovo.com
 * @version 1.0
 * @date 2020.04.29
 */
export const VideoServices = [
  { label: 'Youtube', value: 'youtube', icon: 'mdi-youtube', color: 'red' },
  // { label: 'Vimeo', value: 'vimeo', icon: 'mdi-vimeo', color: 'green' },
  // { label: 'Netflix', value: 'netflix', icon: 'mdi-netflix', color: 'red' },
  { label: 'Youku', value: 'youku', icon: '', svgIcon: 'youku', color: 'blue' },
  // { label: 'iqiyi', value: 'iqiyi', icon: '', svgIcon: 'iqiyi', color: 'green' },
  { label: 'Bilibili', value: 'bilibili', icon: '', svgIcon: 'bilibili', color: 'blue' },
  { label: 'QQ Video', value: 'qqvideo', icon: '', svgIcon: 'qqvideo', color: 'green' },
]

export const MapServices = [
  { label: 'Google Map', value: 'google_map', icon: 'mdi-google-maps', color: 'blue' },
  { label: 'AMap', value: 'amap', svgIcon: 'amap' },
  { label: 'Baidu Map', value: 'baidu_map', svgIcon: 'baidu-map' },
]

export const DesignServices = [
  { label: 'Modao', value: 'modao', svgIcon: 'modao', color: 'blue' },
  { label: 'Lanhu', value: 'lanhu', svgIcon: 'lanhu', color: 'blue' },
  { label: 'Figma', value: 'figma', svgIcon: 'figma' },
  { label: 'Canva', value: 'canva', svgIcon: 'canva' },
  { label: 'ProcessOn', value: 'processon', svgIcon: 'processon' },
]

export const DevelopServices = [
  { label: 'CodePen', value: 'codepen', icon: 'mdi-codepen', color: 'purple' },
]

export const DataServices = [
  { label: 'Google Forms', value: 'google_forms', svgIcon: 'google-forms', color: 'blue' },
  { label: 'Jinshuju', value: 'jinshuju', svgIcon: 'jinshuju', color: 'blue' },
]

export const AllEmbedServices = [
  ...VideoServices,
  ...MapServices,
  ...DesignServices,
  ...DevelopServices,
  ...DataServices
]

export const getEmbedService = (value) => {
  for (var item of AllEmbedServices) {
    if (item.value === value) {
      return item
    }
  }

  return {}
}

/**
 * Embed service link
 * @id source id
 * @link original link, friendly to user
 * @src source src, used in iframe
 */
export const EmbedServiceLink = {
  youtube: {
    link: 'https://www.youtube.com/watch?v=FA8S1ISmDiY',
    src: 'https://www.youtube.com/embed/FA8S1ISmDiY',
    srcPrefix: 'https://www.youtube.com/embed',
    linkRule: 'www.youtube.com\\/watch\\?v=\\w+'
  },
  youku: {
    link: 'https://v.youku.com/v_show/id_XNDM0NDM4MTcy.html?spm=a2h0c.8166622.PhoneSokuUgc_4.dtitle',
    src: 'https://player.youku.com/embed/XNDM0NDM4MTcy',
    srcPrefix: 'https://player.youku.com/embed',
    linkRule: 'v.youku.com\\/v_show\\/id_\\w+\\=*',
    idRule: 'id_\\w+\\=*'
  },
  bilibili: {
    link: 'https://www.bilibili.com/video/BV1EJ411u7DN',
    src: 'https://player.bilibili.com/player.html?bvid=BV1EJ411u7DN',
    srcPrefix: 'https://player.bilibili.com/player.html?bvid',
    linkRule: 'www.bilibili.com\\/video\\/\\w+',
  },
  qqvideo: {
    link: 'https://v.qq.com/x/cover/mzc002001pvxwzy/i0033cgr1vn.html',
    src: 'https://v.qq.com/txp/iframe/player.html?vid=i0033cgr1vn',
    srcPrefix: 'https://v.qq.com/txp/iframe/player.html?vid',
    linkRule: 'v.qq.com\\/x\\/cover\\/\\w+\\/\\w+',
  },
  amap: {
    link: 'https://www.amap.com/place/B000A84G4C',
    src: 'https://www.amap.com/place/B000A84G4C',
    srcPrefix: '',
    linkRule: '\\.amap\\.com',
  },
  baidu_map: {
    link: 'https://map.baidu.com/',
    src: 'https://map.baidu.com/',
    srcPrefix: '',
    linkRule: 'map\\.baidu\\.com',
  },
  google_map: {
    link: 'https://map.google.com/',
    src: 'https://map.google.com/',
    srcPrefix: '',
    linkRule: 'https:\\/\\/www.google.com\\/maps\\/embed\\?pb=.+sus',
    tips: 'Google Map > select location > Share > Embed a map > COPY HTML'
  },
  modao: {
    link: 'https://free.modao.cc/app/2cd26580a6717a147454df7470e7ec464093cba3/embed/v2',
    src: 'https://free.modao.cc/app/2cd26580a6717a147454df7470e7ec464093cba3/embed/v2',
    srcPrefix: '',
    linkRule: 'https:\\/\\/\\w+.modao.cc\\/app\\/\\w+\\/embed\\/v2',
    tips: 'Modao > More > Share > Embed > COPY'
  },
  lanhu: {
    link: 'https://lanhuapp.com/url/evP7L',
    src: 'https://lanhuapp.com/url/evP7L',
    srcPrefix: '',
    linkRule: 'https:\\/\\/lanhuapp.com\\/url\\/\\w+',
    tips: 'Lanhu > Project > Share > Copy Link'
  },
  figma: {
    link: 'https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1',
    src: 'https://www.figma.com/file/aS9uSgPXoNpaPkzbjNcK8v/Demo?node-id=0%3A1',
    srcPrefix: 'https://www.figma.com/embed?embed_host=share&url',
    linkRule: 'https:\\/\\/www.figma.com\\/file\\/\\w+'
  },
  canva: {
    link: 'https://www.canva.cn/design/DAD61-t29UI/view',
    src: 'https://www.canva.cn/design/DAD61-t29UI/view',
    srcPrefix: '',
    linkRule: 'https:\\/\\/www.canva.cn\\/design\\/.+\\/view'
  },
  processon: {
    link: 'https://www.processon.com/embed/5ea99d8607912948b0e6fe78',
    src: 'https://www.processon.com/embed/5ea99d8607912948b0e6fe78',
    srcPrefix: '',
    linkRule: 'https:\\/\\/www.processon.com\\/embed\\/\\w+'
  }
}

function getYoutubeSrc (originalLink, result) {
  let link = EmbedServiceLink.youtube
  let url = result.matchedUrl
  result.validLink = true

  let splits = url.split('=')
  let len = splits.length
  if (len > 0) {
    let id = splits[len - 1]
    result.src = `${link.srcPrefix}/${id}`
    result.validId = true
  }

  return result
}

function getYoukuSrc (originalLink, result) {
  let link = EmbedServiceLink.youku
  let url = result.matchedUrl

  let idRule = link.idRule
  let regex = new RegExp(idRule)
  let match = url.match(regex)
  if (match && match.length > 0) {
    let id = match[0].substr(3)

    result.validId = true
    result.src = `${link.srcPrefix}/${id}`
  } else {
    result.validId = false
  }

  return result
}

function getBilibiliSrc (originalLink, result) {
  let link = EmbedServiceLink.bilibili
  let url = result.matchedUrl

  let splits = url.split('/')
  let len = splits.length
  if (len > 0) {
    let id = splits[len - 1]
    result.src = `${link.srcPrefix}=${id}`
    result.validId = true
  }

  return result
}

function getQQVideoSrc (originalLink, result) {
  let link = EmbedServiceLink.qqvideo
  let url = result.matchedUrl

  let splits = url.split('/')
  let len = splits.length
  if (len > 0) {
    let id = splits[len - 1]
    result.src = `${link.srcPrefix}=${id}`
    result.validId = true
  }

  return result
}

function getAMapSrc (originalLink, result) {
  result.src = originalLink
  result.validId = true

  return result
}

function getBaiduMapSrc (originalLink, result) {
  result.src = originalLink
  result.validId = true

  return result
}

function getGoogleMapSrc (originalLink, result) {
  result.src = result.matchedUrl
  result.validId = true
  result.originalLink = result.src

  return result
}

function getModaoSrc (originalLink, result) {
  result.src = result.matchedUrl
  result.validId = true
  result.originalLink = result.src

  return result
}

function getLanhuSrc (originalLink, result) {
  result.src = result.matchedUrl
  result.validId = true
  result.originalLink = result.src

  return result
}

function getFigmaSrc (originalLink, result) {
  let link = EmbedServiceLink.figma
  result.src = `${link.srcPrefix}=${encodeURIComponent(result.matchedUrl)}`
  result.validId = true
  result.originalLink = result.matchedUrl

  return result
}

function getCanvaSrc (originalLink, result) {
  result.src = `${result.matchedUrl}?embed`
  result.validId = true
  result.originalLink = originalLink

  return result
}

function getProcessonSrc (originalLink, result) {
  result.src = `${result.matchedUrl}`
  result.validId = true
  result.originalLink = originalLink

  return result
}

function getMatchedUrl (service, originalLink, result) {
  let link = EmbedServiceLink[service]
  let linkRule = link.linkRule
  let regex = new RegExp(linkRule)
  let match = originalLink.match(regex)
  if (match && match.length > 0) {
    result.validLink = true

    result.matchedUrl = match[0]
  } else {
    result.validLink = false
  }

  return result
}

export const getServiceSrc = (service, originalLink) => {
  let result = {
    validLink: false,
    validId: false,
    matchedUrl: '',
    originalLink: originalLink,
    src: ''
  }

  // matched url
  result = getMatchedUrl(service, originalLink, result)
  if (!result.validLink) {
    return result
  }

  // src
  switch (service) {
    case 'youtube':
      return getYoutubeSrc(originalLink, result)
    case 'youku':
      return getYoukuSrc(originalLink, result)
    case 'bilibili':
      return getBilibiliSrc(originalLink, result)
    case 'qqvideo':
      return getQQVideoSrc(originalLink, result)
    case 'amap':
      return getAMapSrc(originalLink, result)
    case 'baidu_map':
      return getBaiduMapSrc(originalLink, result)
    case 'google_map':
      return getGoogleMapSrc(originalLink, result)
    case 'modao':
      return getModaoSrc(originalLink, result)
    case 'lanhu':
      return getLanhuSrc(originalLink, result)
    case 'figma':
      return getFigmaSrc(originalLink, result)
    case 'canva':
      return getCanvaSrc(originalLink, result)
    case 'processon':
      return getProcessonSrc(originalLink, result)
  }

  return result
}
