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
			{id: 1, key: '451727521?h=9fb4b546e1'},
			{id: 2, key: '451727189?h=bc94dd7eaf'},
			{id: 3, key: '451727288?h=e63b66ce36'},
			{id: 4, key: '451727612?h=f29a0d02ef'},
			{id: 5, key: '451727396?h=8dfad5248d'},
			{id: 6, key: '451727462?h=a917a9737d'},
		],
		quiz: [
			{id: 1, title: 'Choose the correct word(s) in the blank.', content: 'Very (few / little) students learn Latin now.', answer: 'few', show: false},
			{id: 2, title: 'Choose the correct word(s) in the blank.', content: 'Keep your hands up (high / highly).', answer: 'high', show: false},
			{id: 3, title: 'Choose the correct word(s) in the blank.', content: 'I haven\'t heard from him (late / lately)', answer: 'lately', show: false},
			{id: 4, title: 'Choose the correct word(s) in the blank.', content: 'The (accused / accuser) was sentenced to life imprisonment.', answer: 'accused', show: false},
			{id: 5, title: 'Choose the correct word(s) in the blank.', content: 'They are much (alike / like) in character.', answer: 'alike', show: false}
		]
	},
	{	
		id: 3,
		name: 'CH16',
		video: [
			{id: 1, key: '451728753?h=5316120c62'},
			{id: 2, key: '451727645?h=d5792e0b38'},
			{id: 3, key: '451728542?h=bb30483ad0'},
			{id: 4, key: '451728834?h=de02620bf5'},
			{id: 5, key: '451728577?h=ea2801e563'},
			{id: 6, key: '451728666?h=3e5b0d691f'},
		],
		quiz: [
			{id: 1, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'It depends on how you think.', answer: 'O (correct)', show: false},
			{id: 2, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'The crop was generally abudant in this year.', answer: 'X (incorrect)', show: false},
			{id: 3, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'Some senior citizens have difficulty eating meat.', answer: 'O (correct)', show: false},
			{id: 4, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'It\'ll take only ten minutes in foot.', answer: 'X (incorrect)', show: false},
			{id: 5, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'I don\'t go because of rain.', answer: 'O (correct)', show: false}
		]
	},
	{	
		id: 4,
		name: 'CH17',
		video: [
			{id: 1, key: '451729141?h=fca6be5432'},
			{id: 2, key: '451728895?h=d209da35cc'},
			{id: 3, key: '451728962?h=f022fb977c'},
			{id: 4, key: '451729206?h=019f7af694'},
			{id: 5, key: '451729006?h=23f1854e46'},
			{id: 6, key: '451729096?h=fe10925c71'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Hurry up, __ you will miss the train. (and, or, but, for)', answer: 'Hurry up, or you will miss the train.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Come and see me tomorrow. = Come __ see me tomorrow. (at, in, to, with)', answer: 'Come to see me tomorrow.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'It never rains __ it pours. = It never rains without pouring. (and, or, but, for)', answer: 'It never rains but it pours.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'It will not be long __ we meet again. (after, before, since, when)', answer: 'It will not be long before we meet again.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Young __ he is, he knows how to take care of others. (as, since, though)', answer: 'Young as he is, he knows how to take care of others.', show: false}
		]
	},
	{	
		id: 5,
		name: 'CH18 (Review CH13~17)',
		video: [
			{id: 1, key: '451729333?h=7df2db2b6f'},
		],
		quiz: [
			{id: 1, title: 'Choose the incorrect plural form.', content: 'a. monarches b. leaves c. fungi d. grown-ups', answer: 'a. monarches', show: false},
			{id: 2, title: 'Choose the incorrect plural form.', content: 'a. ladies b. radioes c. benches d. wolves', answer: 'b. radioes', show: false},
			{id: 3, title: 'Choose the incorrect plural form.', content: 'a. bases b. potatoes c. sheeps d. pianos', answer: 'c. sheeps', show: false},
			{id: 4, title: 'Choose the incorrect plural form.', content: 'a. oxen b. teeth c. passers-by d. datums', answer: 'd. datums', show: false},
			{id: 5, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Heaven helps (that, those) who help themselves.', answer: 'those', show: false},
			{id: 6, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Hurry up, (and, or) you will miss the train.', answer: 'or', show: false},
			{id: 7, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Much of my clothing (is, are) sky-blue', answer: 'is', show: false},
			{id: 8, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Ssam has done me many (kindess, kindnesses)', answer: 'kindnesses', show: false},
			{id: 9, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I got up (late, lately) this morning.', answer: 'late', show: false},
			{id: 10, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I don\'t have a pen. Can you lend me (it, one)?', answer: 'one', show: false},
			{id: 11, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'This is delicious coffee. Can I have (others, another)?', answer: 'another', show: false},
			{id: 12, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Do you know (who it made, who made it)?', answer: 'who made it?', show: false},
			{id: 13, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Very few students (learn, don\'t learn) Latin now.', answer: 'learn', show: false},
			{id: 14, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I go to school (everyday by bus, by bus everyday).', answer: 'by bus everyday', show: false},
			{id: 15, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'The ears of a rabbit are bigger than (that, those) of a man.', answer: 'those', show: false},
			{id: 16, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'What I want to say is (this, that): Man is selfish by nature.', answer: 'this', show: false},
			{id: 17, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'She plays (piano, the piano) every day, and he often play tennis.', answer: 'the piano', show: false},
			{id: 18, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'She was once (beauty, a beauty), and I was fascinated by her (beauty / a beauty).', answer: 'a beauty, beauty', show: false},
			{id: 19, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Work and play are both necessary to health; (this, that) gives us rest, and (this, that) gives us energy.', answer: 'this, that', show: false},
			{id: 20, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Mark went to (school, the school) at 9\'o clock, and his father went to (school, the school) to pick him up.', answer: 'school, the school', show: false},
			{id: 21, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: '___ students are mine.', answer: 'a. the twenty pretty all b. the all twenty pretty', show: false},
			{id: 22, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Very few students (learn, don\'t learn) Latin now.', answer: 'learn', show: false},
			{id: 23, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Very few students (learn, don\'t learn) Latin now.', answer: 'learn', show: false},
			{id: 24, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Very few students (learn, don\'t learn) Latin now.', answer: 'learn', show: false},
			{id: 25, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Very few students (learn, don\'t learn) Latin now.', answer: 'learn', show: false},
		]
	},
]);