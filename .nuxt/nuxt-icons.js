export default async function (ctx, inject) {
  const icons = {"64x64":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_64.5f6a36.png","120x120":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_120.5f6a36.png","144x144":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_144.5f6a36.png","152x152":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_152.5f6a36.png","192x192":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_192.5f6a36.png","384x384":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_384.5f6a36.png","512x512":"/MicroCMS-Qiita/dist/_nuxt/icons/icon_512.5f6a36.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
