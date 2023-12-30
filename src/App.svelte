<script>
	import Body from "./lib/Body.svelte";
	import Item from "./lib/Item.svelte";
	let active = null;

	const list = [
		{	
			id: 0,
			name: 'CH13',
			video: [
				{id: 1, key: '451418899?h=0d6b689df6'},
				{id: 2, key: '451417964?h=8afa19683c'},
				{id: 3, key: '451418001?h=8d6364dd76'},
				{id: 4, key: '451418297?h=42e578342d'},
				{id: 5, key: '451418660?h=072e27dfde'},
				{id: 6, key: '451418929?h=04dbdaae79'},
			],
			quiz: [
				{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'The (mightier, is, pen, sword, than, the) ?', answer: 'The pen is mightier than the sword.', show: false},
				{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: '(by, caught, hand, John, me, the).', answer: 'John caught me by the hand.', show: false},
				{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: '(are, big, Both, mine, students, the).', answer: 'Both the big students are mine.', show: false},
				{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: '(a, mine, is, of, professor, Ssam)?', answer: 'Ssam is a professor of mine.', show: false},
				{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'I love (all, honest, second, the, twenty) students.', answer: 'I love all the second twenty honest students.', show: false}
			]
		},
		{	
			id: 1,
			name: 'CH14',
			video: [
				{id: 1, key: '451418899?h=0d6b689df6'},
				{id: 2, key: '451417964?h=8afa19683c'},
				{id: 3, key: '451418001?h=8d6364dd76'},
				{id: 4, key: '451418297?h=42e578342d'},
				{id: 5, key: '451418660?h=072e27dfde'},
				{id: 6, key: '451418929?h=04dbdaae79'},
			],
			quiz: [
				{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'The (mightier, is, pen, sword, than, the) ?', answer: 'The pen is mightier than the sword.', show: false},
				{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: '(by, caught, hand, John, me, the).', answer: 'John caught me by the hand.', show: false},
				{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: '(are, big, Both, mine, students, the).', answer: 'Both the big students are mine.', show: false},
				{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: '(a, mine, is, of, professor, Ssam)?', answer: 'Ssam is a professor of mine.', show: false},
				{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'I love (all, honest, second, the, twenty) students.', answer: 'I love all the second twenty honest students.', show: false}
			]
		},
	]
</script>

<div class="space-y-4">
	<div class="navbar bg-primary text-primary-content bg-blue-400">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-xl">HUFS 대영 문법동영상</a>
  </div>
	
	<Body bind:active>
		<script src="https://player.vimeo.com/api/player.js"></script>
		{#each list as item, idx (item.id)}
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
							<button class="btn btn-primary" on:click={() => quiz.show = !quiz.show}>정답 확인</button>
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