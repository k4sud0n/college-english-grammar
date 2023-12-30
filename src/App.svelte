<script>
	import Body from "./lib/Body.svelte";
	import Item from "./lib/Item.svelte";
	let active = null;

	import { store } from './data';
	$: data = $store;

	function showAnswer(quiz) {
		quiz.show = !quiz.show;
		$store = [...$store];
		console.log(quiz.show)
  	}
</script>

<div class="space-y-4">
	<div class="navbar bg-primary text-primary-content bg-blue-400">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-xl">HUFS 대영 문법동영상</a>
  </div>
	
	<Body bind:active>
		<script src="https://player.vimeo.com/api/player.js"></script>
		{#each data as item, idx (item.id)}
			<Item id={idx} title={item.name}>
				{#each item.video as video, idx (video.id)}
					<div style="padding:56.25% 0 0 0;position:relative;">
						<!-- svelte-ignore a11y-missing-attribute -->
						<iframe src="https://player.vimeo.com/video/{video.key}&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
					</div>
				{/each}

				{#each item.quiz as quiz, idx (quiz.id)}
					<div class="card lg:card-side card-bordered">
						<div class="card-body">
						<h2 class="card-title">{quiz.id}. {quiz.title}</h2> 
						<p>{quiz.content}</p> 
						<div class="card-actions">
							<button class="btn btn-primary" on:click={() => showAnswer(quiz)}>정답 확인</button>
							{#if quiz.show}
								<button class="btn btn-ghost">{quiz.answer}</button>
							{/if}
						</div>
						</div>
					</div>
				{/each}
			</Item> 
		{/each}
	</Body>
</div>