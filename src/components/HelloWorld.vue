<script setup>
import { getAccessToken } from '@/api/user'
import { onMounted, ref } from 'vue'

defineProps({
  msg: String,
})

onMounted(() => {
  console.log('123')
  login()
  // accessToken()
})

const login = () => {
  let code = getUrlKey('code');
  if (code && code !== 'undefined' && code !== 'null') {
    console.log(code)
    accessToken()
  } else {
    getCodeApi()
  }
}

const getCodeApi = () => {
  // corpid：ww768f830bdc229a21
  // AgentId：1000002
  // Secret：8IIQ7inFFvSm8OagR5ggB8khGn_37Q7znoNTiT_JJcc
  // location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww768f830bdc229a21&redirect_uri=https://you.iwannay.cn/web/&response_type=code&scope=snsapi_base&state=STATE&agentid=1000002#wechat_redirect'
  //获取code
  const urlNow = encodeURIComponent(window.location.href)
  // const scope='snsapi_userinfo'    //snsapi_userinfo snsapi_base   //静默授权 用户无感知
  const appid = 'ww768f830bdc229a21'
  const url =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appid +
    '&redirect_uri=' +
    urlNow +
    '&response_type=code&scope=snsapi_base&state=STATE&agentid=1000002#wechat_redirect';
  window.location.href = url
}

const getUrlKey = (name) => {
  //获取url 参数
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [
        ,
        '',
      ])[1].replace(/\+/g, '%20'),
    ) || null
  )
}

function accessToken () {
  getAccessToken({
    corpid: 'ww768f830bdc229a21',
    corpsecret: '8IIQ7inFFvSm8OagR5ggB8khGn_37Q7znoNTiT_JJcc'
  }).then((res) => {
    console.log(res)
  })
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
