<script>
	import Body from "./lib/Body.svelte";
	import Item from "./lib/Item.svelte";
	let active = null;
</script>

<div class="space-y-4">
	<div class="navbar bg-primary text-primary-content bg-blue-400">
    <a class="btn btn-ghost normal-case text-xl">HUFS 대영 문법동영상</a>
  </div>
	
	<Body bind:active>
		<Item id="0" title="CH14">
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/451418899?h=0d6b689df6&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/451417964?h=8afa19683c&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/451418001?h=8d6364dd76&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/451418297?h=42e578342d&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/451418660?h=072e27dfde&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/451418929?h=04dbdaae79&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </Item> 

		<Item id="1" title="CH2">
			동영상
		</Item>

    <Item id="2" title="CH2">
			동영상
		</Item>

    <Item id="3" title="CH2">
			동영상
		</Item>

    <Item id="4" title="CH2">
			동영상
		</Item>

    <Item id="5" title="CH2">
			동영상
		</Item>

    <Item id="6" title="CH2">
			동영상
		</Item>

    <Item id="7" title="CH2">
			동영상
		</Item>
	</Body>
</div>