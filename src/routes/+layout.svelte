<script lang="ts">
  let { data } = $props()
  $effect(() => {
    console.log(data.locationData)
  })
</script>

<pre>
  {JSON.stringify(data, null, 2)}
</pre>
<slot />