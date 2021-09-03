<template>
  <div>
    <Header/>
    <Main/>
    <Bottom/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Bottom from '../components/Bottom'
export default {
  components: { Bottom, Header }
}
</script>
