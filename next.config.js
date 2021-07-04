module.exports = {
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://willianjusten.com.br/' },
      { source: '/jekyll/', destination: 'https://willianjusten.com.br/' },
      { source: '/svg/', destination: 'https://willianjusten.com.br/' },
      { source: '/dev/', destination: 'https://willianjusten.com.br/' },
      { source: '/tags/', destination: 'https://willianjusten.com.br/' },
      {
        source: '/making-of-blog-novo/',
        destination:
          'https://willianjusten.com.br/making-of-blog-novo-gatsby-js'
      },
      { source: '/page/:slug*', destination: 'https://willianjusten.com.br/' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/my-trips/',
        destination: 'https://my-trips.willianjusten.com.br/'
      },
      {
        source: '/japanese-words/',
        destination: 'https://japanese-words.willianjusten.com.br/'
      },
      {
        source: '/learn-japanese/',
        destination: 'https://learn-japanese.willianjusten.com.br/'
      }
    ]
  }
}
