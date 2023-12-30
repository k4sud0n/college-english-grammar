import { writable } from 'svelte/store';

export const store = writable([
    {	
		id: 0,
		name: 'CH13',
		video: [
			{id: 1, key: '451075703?h=5e85604972'},
			{id: 2, key: '450924334?h=50c6a45b9e'},
			{id: 3, key: '450926479?h=79c55c3733'},
			{id: 4, key: '451076320?h=98f078f613'},
			{id: 5, key: '450926674?h=40c76e5b21'},
			{id: 6, key: '450926759?h=2c0c9bb0ad'},
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
			{id: 4, key: '451418929?h=04dbdaae79'},
			{id: 5, key: '451418297?h=42e578342d'},
			{id: 6, key: '451418660?h=072e27dfde'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The ears of a rabbit are bigger than __ of a man. (this, these, that, those)', answer: 'The ears of a rabbit are bigger than those of a man.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The idea is __. (She, her, hers, be seeing)', answer: 'The idea is hers', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Heaven helps __ who help themselves. (this, these, that, those)', answer: 'Heaven helps those who help themselves.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I don\'t have a pen. Can you lend me __? (one, it, them, its)', answer: 'I don\'t have a pen. Can you lend me one?', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'May I ask __ he is really responsible? (that, who, which, whether)', answer: 'May I ask whether he is really responsible?', show: false}
		]
	},
	{	
		id: 2,
		name: 'CH15',
		video: [
			{id: 1, key: '451418899?h=0d6b689df6'},
			{id: 2, key: '451417964?h=8afa19683c'},
			{id: 3, key: '451418001?h=8d6364dd76'},
			{id: 4, key: '451418929?h=04dbdaae79'},
			{id: 5, key: '451418297?h=42e578342d'},
			{id: 6, key: '451418660?h=072e27dfde'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The ears of a rabbit are bigger than __ of a man. (this, these, that, those)', answer: 'The ears of a rabbit are bigger than those of a man.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The idea is __. (She, her, hers, be seeing)', answer: 'The idea is hers', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Heaven helps __ who help themselves. (this, these, that, those)', answer: 'Heaven helps those who help themselves.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I don\'t have a pen. Can you lend me __? (one, it, them, its)', answer: 'I don\'t have a pen. Can you lend me one?', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'May I ask __ he is really responsible? (that, who, which, whether)', answer: 'May I ask whether he is really responsible?', show: false}
		]
	},
]);