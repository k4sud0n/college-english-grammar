import { writable } from 'svelte/store';

export const store = writable([
	{	
		id: 0,
		name: 'CH1',
		video: [
			{id: 1, key: '430252106?h=87a9b91785'},
			{id: 2, key: '430250329?h=3ca65ad975'},
			{id: 3, key: '430250520?h=0e3816dd32'},
			{id: 4, key: '430252343?h=c7d83c53ba'},
			{id: 5, key: '430250584?h=003a58998f'},
			{id: 6, key: '430250656?h=7bc6a601b1'},
		],
		quiz: [
			{id: 1, title: '위 예시에 알맞은 답을 선택하세요.', content: '1. 변별력 있는 소리의 최소 단위: (Phoneme, Idiom, Sentence, Morpheme, Phrase)', answer: 'Phoneme', show: false},
			{id: 2, title: '위 예시에 알맞은 답을 선택하세요.', content: '2. 더 이상쪼갤수 없는 의미를 지니는 최소 단위: (Phoneme, Idiom, Sentence, Morpheme, Phrase)', answer: 'Morpheme', show: false},
			{id: 3, title: '위 예시에 알맞은 답을 선택하세요.', content: '3. 대문자로 시작하여 period(.) , question mark(?), interjection mark(!)로 끝난다: (Phoneme, Idiom, Sentence, Morpheme, Phrase)', answer: 'Sentence', show: false},
			{id: 4, title: '위 예시에 알맞은 답을 선택하세요.', content: '4. 주어와 동사를 갖추지 않고 두 개 이상의 단어가 모여 예측 가능한 하나의 기능을하는 단위: (Phoneme, Idiom, Sentence, Morpheme, Phrase)', answer: 'Phrase', show: false},
			{id: 5, title: '위 예시에 알맞은 답을 선택하세요.', content: '5. 두개 이상의 단어가 결합하여 문장을 이루지 못하지만 특정한 의미로 사용되는 관용표현: (Phoneme, Idiom, Sentence, Morpheme, Phrase)', answer: 'Idiom', show: false}
		]
	},
	{	
		id: 1,
		name: 'CH2',
		video: [
			{id: 1, key: '430252117?h=60b7555c95'},
			{id: 2, key: '430250350?h=44b7c57008'},
			{id: 3, key: '450926479?h=79c55c3733'},
			{id: 4, key: '430252366?h=b8f96e477d'},
			{id: 5, key: '430250746?h=accc0f3110'},
			{id: 6, key: '430250793?h=d4a65a4ca2'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'What (about, are, you, thinking) ?', answer: 'What are you thinking about?', show: false},
			{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Um, it\'s (an, answerd, easily, question, it\'s, not).', answer: 'Um, it\'s not easily answerd question.', show: false},
			{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'A (a, friend, friend, in, indeed, is, need).', answer: 'A friend in need is a friend indeed.', show: false},
			{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Do (it, know, made, who, you)?', answer: 'Do you know who made it?', show: false},
			{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Where (a, a, is, is, there, way, will).', answer: 'Where there is a will there is a way.', show: false}
		]
	},
	{	
		id: 2,
		name: 'CH3',
		video: [
			{id: 1, key: '430252136?h=471a24f6b9'},
			{id: 2, key: '430250369?h=856fab89da'},
			{id: 3, key: '430250814?h=a5674adc56'},
			{id: 4, key: '430252392?h=e0e2f7d9ab'},
			{id: 5, key: '430250878?h=f417687821'},
			{id: 6, key: '430250941?h=51dcf95294'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'You told me that you ( _______ ) out with me. (can hang, can hung, could hang, could hung)', answer: 'You told me that you could hang out with me.', show: false},
			{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'He died ( ______ ). (happy, happily, happiness, happening)', answer: 'He died happy.', show: false},
			{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'The chef ( ______ ) some soup now. (taste, tastes, tasted, is tasting)', answer: 'The chef is tasting some soup now.', show: false},
			{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'John was very sick, so he ( ______ ) in bed all day long. (lie, lay, lies, lied)', answer: 'John was very sick, so he lay in bed all day long.', show: false},
			{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'He ( ______ ) his daughter to a teacher. (married, married by, married to, married with)', answer: 'He married his daughter to a teacher.', show: false}
		]
	},
	{	
		id: 3,
		name: 'CH4',
		video: [
			{id: 1, key: '430252156?h=848b5b4235'},
			{id: 2, key: '430250380?h=f933172cf1'},
			{id: 3, key: '430250977?h=3ec30c36c8'},
			{id: 4, key: '430252410?h=6c11b3308c'},
			{id: 5, key: '430251012?h=73d2d39344'},
			{id: 6, key: '430251057?h=18ae2e002f'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'World war ll ( ______ ) in 1939. (break out, broke out)', answer: 'World war ll broke out in 1939.', show: false},
			{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Can I call you later? I ( _____ ) now. (drive, am driving)', answer: 'Can I call you later? I am driving now.', show: false},
			{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'I will stay home if it ( _______ ) tomorrow. (rains, will rain)', answer: 'I will stay home if it rains tomorrow.', show: false},
			{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Wait here till the professor ( ________ ). (comes, will come).', answer: 'Wait here till the professor comes.', show: false},
			{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'The science teacher told us that the earth ( _______ ) around the sun. (goes, went)', answer: 'The science teacher told us that the earth goes around the sun.', show: false}
		]
	},
	{	
		id: 4,
		name: 'CH5',
		video: [
			{id: 1, key: '430252176?h=18c876f47a'},
			{id: 2, key: '430250419?h=b7356ecc07'},
			{id: 3, key: '430251083?h=cc309f96a3'},
			{id: 4, key: '430252431?h=d2b82d2779'},
			{id: 5, key: '430251157?h=e71c20844a'},
			{id: 6, key: '430251213?h=0b3ef8634c'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Actually, (a, about, abroad, I am, taking, trip).', answer: 'Actually, I’m thinking about taking a trip abroad.', show: false},
			{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'I (been, concert, have, just, to, the). It was fantastic!', answer: 'I have just been to the concert. It was fantastic!', show: false},
			{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'He (been, for, has, English, teaching, ten, years).', answer: 'He has been teaching English for ten years.', show: false},
			{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'I (am, anything, do, for, to, willing, you).', answer: 'I am willing to do anything for you.', show: false},
			{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'How (be, could, expected, I, live, to, without, you).', answer: 'How could I be expected to live without you.', show: false}
		]
	},
	{	
		id: 5,
		name: 'CH6 (Review CH1~5)',
		video: [
			{id: 1, key: '430252191?h=bafdda1545'},
			{id: 2, key: '430251238?h=fdef8cfe6e'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'What time did you (arrive, arrive at, arrive to) the airport?', answer: 'What time did you arrive at the airport?', show: false},
			{id: 2, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Mr. Kim (resembles, resembles to, resembles with) his father.', answer: 'Mr. Kim resembles his father.', show: false},
			{id: 3, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'My hometown (lays, lies, laid, lied) on the coast.', answer: 'My hometown lies on the coast.', show: false},
			{id: 4, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Mark always (sits, seats, is sitting, is seating) in armchair.', answer: 'Mark always sits in armchair.', show: false},
			{id: 5, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I (know, am knowing) him.', answer: 'I know him.', show: false},
			{id: 6, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'The chef (tastes, is tasting) the soup now.', answer: 'The chef is tasting the soup now.', show: false},
			{id: 7, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Dr. Lee (has, had, is having) three children to support.', answer: 'Dr. Lee has three children to support.', show: false},
			{id: 8, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Jane (has, had, is having) brunch in bed now.', answer: 'Jane is having brunch in bed now.', show: false},
			{id: 9, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Water (boils, is boiling, boiled) at 100 degree Celsius.', answer: 'Water boils at 100 degree Celsius.', show: false},
			{id: 10, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'The water (boils, is boiling, boiled) , would you please turn off the gas?', answer: 'The water is boiling , would you please turn off the gas?', show: false},
			{id: 11, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'In winter, it (snows, is snowing, snowed) a lot in Ullenungdo.', answer: 'In winter, it snows a lot in Ullenungdo.', show: false},
			{id: 12, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Wow, look at the snow coming down. It (snows, is snowing, snowed) a lot.', answer: 'Wow, look at the snow coming down. It is snowing a lot.', show: false},
			{id: 13, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'When I (meet, am meeting, met) Alice, I will give her your message.', answer: 'When I meet Alice, I will give her your message.', show: false},
			{id: 14, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'If it (rains, is raining, will rain) tomorrow, we won’t go on a picnic.', answer: 'If it rains tomorrow, we won’t go on a picnic.', show: false},
			{id: 15, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I wonder if he (comes, came, will come) back.', answer: 'I wonder if he will come back.', show: false},
			{id: 16, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Sorry, when you called me last night, I (take, am taking, took, was talking) a shower.', answer: 'Sorry, when you called me last night, I was talking a shower.', show: false},
			{id: 17, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Peter (was running, has been running, had been running) for five minutes, so he is already out of breath.', answer: 'Peter has been running for five minutes, so he is already out of breath.', show: false},
			{id: 18, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'By their next anniversary, my parents (have married, will be married, will have been married) for 25 years.', answer: 'By their next anniversary, my parents will have been married for 25 years.', show: false},
			{id: 19, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Tom (already heard, have already heard, had already heard) the thought-provoking news when I told him about it.', answer: 'Tom had already heard the thought-provoking news when I told him about it.', show: false},
			{id: 20, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'A: The phone is ringing. B: I (will, am going to) answer it.', answer: 'A: The phone is ringing. B: I will answer it.', show: false},
			{id: 21, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'I realize that we ____________ somewhere before. <br /> a. already meet b. already me c. have already met d. had already met', answer: 'd. had already met', show: false},
			{id: 22, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Despite the recession, managers decided to ____________ employee salaries. <br /> a. arise b. ride c. raise d. rise', answer: 'c. raise', show: false},
			{id: 23, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'The promotion list ____________ by noon tomorrow. <br /> a. is notified b. is being c. will be notifying d. will have been notified', answer: 'd. will have been notified', show: false},
			{id: 24, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Nana ____________ the piano for two hours when John came to see her. <br /> a. was playing b. was been playing c. has been playing d. had been playing', answer: 'd. had been playing', show: false},
			{id: 25, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'The decline of outmoded industries has resulted in an unstable economy, since no easy way of retraining workers ____________ . <br /> a. has never been found b. have been found c. have always been found d. has ever been found', answer: 'd. has ever been found', show: false},
			{id: 26, title: 'Find the incorrect sentences in the following sentences', content: 'a. He married young &nbsp;&nbsp; b. I have gone to the concert &nbsp;&nbsp; c. Jane told me that she is single. &nbsp;&nbsp; d. The sun rises in the east everyday.', answer: 'b. I have gone to the concert.', show: false},
			{id: 27, title: 'Find the incorrect sentences in the following sentences', content: 'a. He got up at nine this morning. &nbsp;&nbsp; b. He is leaving tomorrow for Busan. &nbsp;&nbsp; c. He has been teaching English for 10 years. &nbsp;&nbsp; d. I lost my cell phone that my father has given me as a birthday gift', answer: 'd. I lost my cell phone that my father has given me as a birthday gift.', show: false},
			{id: 28, title: 'Find the incorrect sentences in the following sentences', content: 'a. He was being silly yesterday. &nbsp;&nbsp; b. He has broken the window yesterday. &nbsp;&nbsp; c. She is thinking about breaking up with him. &nbsp;&nbsp; d. Hey, look at the traffic jam! We are going to be late.', answer: 'd. I as well as you are responsible for the matter.', show: false},
			{id: 29, title: 'Find the incorrect sentences in the following sentences', content: 'a. We’ll be flying at 20,000 feet. &nbsp;&nbsp; b. I am willing to do anything for you. &nbsp;&nbsp; c.Brad pitt was married with Angelina Jolie. &nbsp;&nbsp; d. John will com tonight. When he comes, I will sing with my heart.', answer: 'c. Brad pitt was married with Angelina Jolie.', show: false},
			{id: 30, title: 'Find the incorrect sentences in the following sentences', content: 'a. The movie starts in 30 minutes. &nbsp;&nbsp; b. Have you discussed about the problem with anyone? &nbsp;&nbsp; c. According to the weather forecast, it is going to rain tomorrow. &nbsp;&nbsp; d. The population of the world has exceeded 7 billion and is still increasing.', answer: 'b. Have you discussed about the problem with anyone?', show: false}
		]
	},
	{	
		id: 6,
		name: 'CH7',
		video: [
			{id: 1, key: '430252215?h=ec6bc12f75'},
			{id: 2, key: '430250446?h=cdf6460ee7'},
			{id: 3, key: '430251344?h=18f2d10f51'},
			{id: 4, key: '430252457?h=ab1225a324'},
			{id: 5, key: '430251434?h=d3a5a23b9d'},
			{id: 6, key: '430251489?h=61e3355f05'},
		],
		quiz: [
			{id: 1, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'He can does it.', answer: 'X (incorrect)', show: false},
			{id: 2, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'Did you do homework?', answer: 'O (correct)', show: false},
			{id: 3, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'He will can do it.', answer: 'X (incorrect)', show: false},
			{id: 4, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'Do be carefull.', answer: 'O (correct)', show: false},
			{id: 5, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'Little I dreamed of doing such a thing.', answer: 'X (incorrect)', show: false}
		]
	},
	{	
		id: 7,
		name: 'CH8',
		video: [
			{id: 1, key: '430252234?h=c91373b70a'},
			{id: 2, key: '430250463?h=c0cc27c912'},
			{id: 3, key: '430251504?h=fd785ab538'},
			{id: 4, key: '430252481?h=f7b224ec14'},
			{id: 5, key: '430251580?h=86a0580ab7'},
			{id: 6, key: '430251635?h=6aa40a4fad'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Anybody (_____) make a mistake. (can, must, has to)', answer: 'Anybody can make a mistake.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'When I was a kid, there (______) be a mail box on the corner. (can, used to, would)', answer: 'When I was a kid, there used to be a mail box on the corner.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'My father insisted that we (_____) honest with each other. (are, were, be)', answer: 'My father insisted that we be honest with each other.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The movie was boring, but we (_________) the movie. (have to see, had to see, should have seen)', answer: 'The movie was boring, but we had to see the movie.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'He (_____) have studied English harder. (should, cannot, must)', answer: 'He should have studied English harder. = It is regrettable that he did not study English harder.', show: false}
		]
	},
	{	
		id: 8,
		name: 'CH9',
		video: [
			{id: 1, key: '430252249?h=8e1b7066d0'},
			{id: 2, key: '430250477?h=388a450bf3'},
			{id: 3, key: '430251658?h=5b8eb0694b'},
			{id: 4, key: '430252510?h=d30ab4068d'},
			{id: 5, key: '430251698?h=e7d391fc81'},
			{id: 6, key: '430251751?h=73bd2792f3'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Is that (for, here, go, or, to) ?', answer: 'Is that for here or to go?', show: false},
			{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'His elder sister takes (care, of, of, the, youngest, three, children).', answer: 'His elder sister takes care of the youngest of three children.', show: false},
			{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'My parents (final, grades, my, satisfied, were, with).', answer: 'My parents were satisfied with my final grades.', show: false},
			{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'A man (by, friends, he, is, keeps, known, the).', answer: 'A man is known by the friends he keeps.', show: false},
			{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Who (accident, blame, for, is, the, to)?', answer: 'Who is to blame for the accident?', show: false}
		]
	},
	{	
		id: 9,
		name: 'CH10',
		video: [
			{id: 1, key: '430252276?h=3fd133d6af'},
			{id: 2, key: '430250495?h=84f649b61f'},
			{id: 3, key: '430251777?h=eba8520510'},
			{id: 4, key: '430252526?h=c012fea7d5'},
			{id: 5, key: '430251850?h=8ff166b9b5'},
			{id: 6, key: '430251898?h=0e798cc405'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'Are you (enough, movie, old, this, to, watch) ?', answer: 'Are you old enough to watch this movie?', show: false},
			{id: 2, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'I don’t know (and, do, go, there, to, to, what, where).', answer: 'I don’t know where to go and what to do there.', show: false},
			{id: 3, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'John (has, house, in, live, no, to).', answer: 'John has no house to live in.', show: false},
			{id: 4, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'John (easy, for, her, is, please, to).', answer: 'John is easy for her to please.', show: false},
			{id: 5, title: '괄호 안에 단어들을 알맞은 순서로 문장을 완성하세요.', content: 'To (fired, got, he, make, matters, worse).', answer: 'To make matters worse he got fired.', show: false}
		]
	},
	{	
		id: 10,
		name: 'CH11',
		video: [
			{id: 1, key: '430252298?h=8e0b134811'},
			{id: 2, key: '430250510?h=98e22a001c'},
			{id: 3, key: '430251917?h=870cfd4139'},
			{id: 4, key: '430252556?h=26196d7e76'},
			{id: 5, key: '430251973?h=7b0ce3e7c3'},
			{id: 6, key: '430252014?h=1f415630e1'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I’ll be busy (_______) for the TOEIC until the end of the vacation. (studing, to study, to be studying)', answer: 'I’ll be busy studying for the TOEIC until the end of the vacation.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I look forward to (____) you. (see, seeing, be seeing)', answer: 'I look forward to seeing you.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'She made a resolution to give up (______) . (drinking, to drink, to be drinking)', answer: 'She made a resolution to give up drinking.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I was bored with listening to his (_____) speech. (boring, bored, being bored)', answer: 'I was bored with listening to his boring speech.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'As the job has been done, we have to leave. = (____________), we have to leave. (Doing, Having done, The job done)', answer: 'As the job has been done, we have to leave. = The job done, we have to leave.', show: false}
		]
	},
	{	
		id: 11,
		name: 'CH12 (Review CH7~11)',
		video: [
			{id: 1, key: '430252316?h=06c70c44a7'},
			{id: 2, key: '430252034?h=ae5fa80c8b'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Have you (do, doing, done) your homework?', answer: 'Have you done your homework?', show: false},
			{id: 2, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'One swallow doesn’t (become, make, made) a summer.', answer: 'One swallow doesn’t make a summer.', show: false},
			{id: 3, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I will (can, could, be able to) help him if he does the best of his best.', answer: 'I will be able to help him if he does the best of his best.', show: false},
			{id: 4, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'A: Do you want me to stay with you? <br /> B: Yes, I (am, do, will)', answer: 'A: Do you want me to stay with you? B: Yes, I do', show: false},
			{id: 5, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: '(May, Will) I use your cell phone?', answer: 'May I use your cell phone?', show: false},
			{id: 6, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'You (must, ought) to do it at once.', answer: 'You ought to do it at once.', show: false},
			{id: 7, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'There (used to, would) be a mail box on the corner.', answer: 'There used to be a mail box on the corner.', show: false},
			{id: 8, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'She insists that her son (see, saw) a UFO yesterday.', answer: 'She insists that her son saw a UFO yesterday.', show: false},
			{id: 9, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Are you (be, been, being) served?', answer: 'Are you being served?', show: false},
			{id: 10, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I was not disappointed (at, for, to) the final result.', answer: 'I was not disappointed at the final result.', show: false},
			{id: 11, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'A man is known (by, to, for) the friends he keeps.', answer: 'A man is known by the friends he keeps.', show: false},
			{id: 12, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'The house needs (painting, to paint, to be painting).', answer: 'The house needs painting.', show: false},
			{id: 13, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'It is kind (for, of) you to help me.', answer: 'It is kind of you to help me.', show: false},
			{id: 14, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I had my cell phone (repair, repairing, repaired).', answer: 'I had my cell phone repaired.', show: false},
			{id: 15, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'That box is (so, very, too) heavy for John to lift = That box is so heavy that John cannot lift.', answer: 'That box is too heavy for John to lift = That box is so heavy that John cannot lift.', show: false},
			{id: 16, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'It seemed that he had been rich. = He seemed (to be, to had, to have been) rich.', answer: 'It seemed that he had been rich. = He seemed to have been rich.', show: false},
			{id: 17, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'It is no use (try, trying, to try) to persuade her.', answer: 'It is no use trying to persuade her.', show: false},
			{id: 18, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I was (boring, bored) with listening to his (boring, bored) speech.', answer: 'I was bored with listening to his boring speech.', show: false},
			{id: 19, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'He stopped (smoking, to smoke, to smoking) because of his bad health.', answer: 'He stopped smoking because of his bad health.', show: false},
			{id: 20, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: '(Wounding, Wounded, Be wounded) in his leg, John could no longer walk.', answer: 'Wounded in his leg, John could no longer walk.', show: false},
			{id: 21, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'I got my wallet ____________ . <br /> a. steal b. stealing c. stolen d. to steal', answer: 'c. stolen', show: false},
			{id: 22, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'The grass wants ____________ . <br /> a. cut b. cutting c. to cut d. to be cutting', answer: 'b. cutting', show: false},
			{id: 23, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'I have no choice but ____________ his proposal. <br /> a. accept b. accepting c. to accept d. to accepting', answer: 'c. to accept', show: false},
			{id: 24, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'I can’t put off ____________ to the dentist any longer. <br /> a. go b. going c. to go d. to going', answer: 'b. going', show: false},
			{id: 25, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: '____________ in Chinese characters, it was not easy to understand. <br /> a. Writing b. Written c. To write d. To be written', answer: 'b. Written', show: false},
			{id: 26, title: 'Find the incorrect sentences in the following sentences', content: 'a. Dose he can do it? &nbsp;&nbsp; b. The key opened the door. &nbsp;&nbsp; c. Little did I dream of doing such a thing. &nbsp;&nbsp; d. John should do well on his final tomorrow.', answer: 'a. Dose he can do it?', show: false},
			{id: 27, title: 'Find the incorrect sentences in the following sentences', content: 'a. Boys will be boys. &nbsp;&nbsp; b. Anybody can make a mistake. &nbsp;&nbsp; c. My advice is that he admit his mistake. &nbsp;&nbsp; d. The movie was boring, but we should have seen the movie.', answer: 'd. The movie was boring, but we should have seen the movie.', show: false},
			{id: 28, title: 'Find the incorrect sentences in the following sentences', content: 'a. She cannot be a liar. &nbsp;&nbsp; b. The door will not open. &nbsp;&nbsp; c. Could I see your driving licence? &nbsp;&nbsp; d. My parents were satisfied with my final grade.', answer: 'd. My parents were satisfied with my final grade.', show: false},
			{id: 29, title: 'Find the incorrect sentences in the following sentences', content: 'a. The romance reads well. &nbsp;&nbsp; b. John has no house to live in. &nbsp;&nbsp; c. The statesman was looked up to. &nbsp;&nbsp; d. Please let the news knowing to everybody.', answer: 'd. Please let the news knowing to everybody.', show: false},
			{id: 29, title: 'Find the incorrect sentences in the following sentences', content: 'a. I’m getting angry hungry. &nbsp;&nbsp; b. Who is to blame for the accident? &nbsp;&nbsp; c. The agreed not to attack each other. &nbsp;&nbsp; d. Would you mind if I opening the window?', answer: 'd. Would you mind if I opening the window?', show: false},
		]
	},
    {	
		id: 12,
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
		id: 13,
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
		id: 14,
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
		id: 15,
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
		id: 16,
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
		id: 17,
		name: 'CH18 (Review CH13~17)',
		video: [
			{id: 1, key: '451729622?h=7d83d0041b'},
			{id: 2, key: '451729333?h=7df2db2b6f'},
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
			{id: 21, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: '___ students are mine. <br /> a. the twenty pretty all &nbsp;&nbsp; b. the all twenty pretty &nbsp;&nbsp; c. All the pretty twenty &nbsp;&nbsp; d. All the twenty pretty', answer: 'd. All the twenty pretty', show: false},
			{id: 22, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'I am engaged ___ him. <br /> a. on &nbsp;&nbsp; b. in &nbsp;&nbsp; c. to &nbsp;&nbsp; d. at', answer: 'c. to', show: false},
			{id: 23, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'He is loved by his superiors not because he is handsome, ___ because he is sincere. <br /> a. and &nbsp;&nbsp; b. or &nbsp;&nbsp; c. but &nbsp;&nbsp; d. for', answer: 'c. but', show: false},
			{id: 24, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: '___ will still be at work. <br /> a. I, you and he &nbsp;&nbsp; b. You, he and I &nbsp;&nbsp; c. He, you and I &nbsp;&nbsp; d. You, I and he', answer: 'd. You, he and I', show: false},
			{id: 25, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: '___ are so pretty. <br /> a. Some her friends &nbsp;&nbsp; b. Some of friends hers &nbsp;&nbsp; c. Some friends hers &nbsp;&nbsp; d. Some friends of hers', answer: 'd. Some friends of hers', show: false},
			{id: 26, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Early to bed and early to rise ___ a man healthy, and slow and steady ___ the game. <br /> a. make, win &nbsp;&nbsp; b. makes, with &nbsp;&nbsp; c. make, wins &nbsp;&nbsp; d. makes, wins', answer: 'd. makes, wins', show: false},
			{id: 27, title: 'Find the incorrect sentences in the following sentences.', content: 'a. To know is one thing, to teach is theh other &nbsp;&nbsp; b. He caught me by the hand. &nbsp;&nbsp; c. My girlfriend is prettier than John\'s &nbsp;&nbsp; d. They traded in exhausted horses for fresh ones.', answer: 'a. To know is one thing, to teach is theh other', show: false},
			{id: 28, title: 'Find the incorrect sentences in the following sentences.', content: 'a. The house has the most spectacular views imaginable. &nbsp;&nbsp; b. Yawns are even contagiouser than the common cold. &nbsp;&nbsp; c. There are not a few barriers to them doing it. &nbsp;&nbsp; d. The accused was sentenced to life imprisonment', answer: 'c. The crop was generally abundant in this year.', show: false},			
			{id: 29, title: 'Find the incorrect sentences in the following sentences.', content: 'a. He is a kind of wooden actor. &nbsp;&nbsp; b. The car has been paid for. &nbsp;&nbsp; c. The crop was generally abundant in this year. &nbsp;&nbsp; d. Some senior citizens have difficulty eating meat.', answer: 'b. Yawns are even contagiouser than the common cold.', show: false},
			{id: 30, title: 'Find the incorrect sentences in the following sentences.', content: 'a. Who is he talking about? &nbsp;&nbsp; b. Everything has already been taken care of. &nbsp;&nbsp; c. He was kind enough to mention me in his acknowledgements. &nbsp;&nbsp; d. I like to swim and skiing.', answer: 'd. I like to swim and skiing.', show: false},
		]
	},
	{	
		id: 18,
		name: 'CH19',
		video: [
			{id: 1, key: '451729688?h=858826eacd'},
			{id: 2, key: '451729229?h=927ec3af18'},
			{id: 3, key: '451729413?h=57eff252dd'},
			{id: 4, key: '451729788?h=38b27e2c49'},
			{id: 5, key: '451729480?h=a33f84c95c'},
			{id: 6, key: '451729562?h=f8223742b0'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I believe you. No one can deny the fact ( _______ ) you are not guilty. (if, that, whether, which)', answer: 'I believe you. No one can deny the fact that you are not guilty.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'It is uncertain ( ______ ) or not she will come. (if, that, whether, which)', answer: 'It is uncertain whether or not she will come.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I met a man ( ______ ) I thought was honest and sincere. (who, whom, whose, which)', answer: 'I met a man who I thought was honest and sincere.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'That is not ( ______ ) I meant to say. (that, what, which, who)', answer: 'That is not what I meant to say.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Reading is to the mind ( ______ ) food is to the body. (that, what, which, who)', answer: 'Reading is to the mind what food is to the body.', show: false}
		]
	},
	{	
		id: 19,
		name: 'CH20',
		video: [
			{id: 1, key: '451730056?h=16c279de6a'},
			{id: 2, key: '451729852?h=44597e9c2d'},
			{id: 3, key: '451729883?h=408254a556'},
			{id: 4, key: '451730111?h=cd707a3f48'},
			{id: 5, key: '451729986?h=db646173cc'},
			{id: 6, key: '451730045?h=998610141d'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The ( _______ ) part of the movie was interesting. (later, latter)', answer: 'The latter part of the movie was interesting.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'John is five years senior ( ______ ) me. (than, to)', answer: 'John is five years senior to me.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'The number of attendees ( ______ ) increasing. (are, is)', answer: 'The number of attendees is increasing.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Economics ( ______ ) difficult to learn. (are, is)', answer: 'Economics is difficult to learn.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I as well as you ( ______ ) responsible for the matter. (am, are)', answer: 'I as well as you am responsible for the matter.', show: false}
		]
	},
	{	
		id: 20,
		name: 'CH21',
		video: [
			{id: 1, key: '451730056?h=16c279de6a'},
			{id: 2, key: '451729852?h=44597e9c2d'},
			{id: 3, key: '451729883?h=408254a556'},
			{id: 4, key: '451730111?h=cd707a3f48'},
			{id: 5, key: '451729986?h=db646173cc'},
			{id: 6, key: '451730045?h=998610141d'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'If he (been, had) honest, I (employed, have, would) him.', answer: 'If he had been honest, I would have employed him.', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: '(buy, could, I, I, rich, Were) the sports car.', answer: 'Were I rich, I could buy the sports car.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'He talks (a, as, he, if, teacher, were)', answer: 'He talks as if he were a teacher.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'He said to me, “Have you ever seen an elephant?”= He (asked, ever, I, if, had, me, seen) an elephant.', answer: 'He said to me, “Have you ever seen an elephant?”= He asked me if I had ever seen an elephant.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'My teacher said to me, “Be quiet in the classroom.” = My teacher (be, me, quiet, to, told) in the classroom.', answer: 'My teacher said to me, “Be quiet in the classroom.” = My teacher told me to be quiet in the classroom.', show: false}
		]
	},
	{	
		id: 21,
		name: 'CH22',
		video: [
			{id: 1, key: '451730734?h=e302c9cb31'},
			{id: 2, key: '451730445?h=2b3b1ca129'},
			{id: 3, key: '451730505?h=1be5e2b305'},
			{id: 4, key: '451730783?h=08ec1ecf69'},
			{id: 5, key: '451730610?h=266737519c'},
			{id: 6, key: '451730686?h=8dae892025'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'Who in the ( ______ ) are you? (world, earth)', answer: 'Who in the world are you?', show: false},
			{id: 2, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'I will not go on a picnic ( _____ ) the weather is fine. (if, unless)', answer: 'I will not go on a picnic unless the weather is fine.', show: false},
			{id: 3, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'He is, ( _______ ) , a walking dictionary. (as it was ,as it were)', answer: 'He is, as it were, a walking dictionary.', show: false},
			{id: 4, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: '( ________ ), she was very beautiful. (When young, When she young).', answer: 'When young, she was very beautiful.', show: false},
			{id: 5, title: '괄호 안에 단어를 선택해 문장을 완성하세요.', content: 'You asked him to leave, and ( _______ ) . = I asked him to leave, too (so I did, so did I)', answer: 'You asked him to leave, and so did I. = I asked him to leave, too', show: false}
		]
	},
	{	
		id: 22,
		name: 'CH23',
		video: [
			{id: 1, key: '451731096?h=ccfdc7ba69'},
			{id: 2, key: '451730819?h=891d47abe6'},
			{id: 3, key: '451730858?h=b78fcf2fa6'},
			{id: 4, key: '451731160?h=b72ac7c8a5'},
			{id: 5, key: '451730934?h=27a918f48c'},
			{id: 6, key: '451730978?h=865bdb37da'},
		],
		quiz: [
			{id: 1, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'It is no use crying over spilt milk.', answer: 'O (correct)', show: false},
			{id: 2, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'He is easy to get on with him.', answer: 'X (incorrect)', show: false},
			{id: 3, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'Happy is the man who can say that he is content with his life.', answer: 'O (correct)', show: false},
			{id: 4, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'It is no exaggeration to say that a book can change a person’s life.', answer: 'O (correct)', show: false},
			{id: 5, title: 'Answer the following questions O(correct) or X(incorrect).', content: 'What I need most now is not your advice but your love.', answer: 'O (correct)', show: false}
		]
	},
	{	
		id: 23,
		name: 'CH24',
		video: [
			{id: 1, key: '451731129?h=1347453765'},
			{id: 2, key: '451731004?h=ec5ab89ccc'},
		],
		quiz: [
			{id: 1, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I’ll keep on trying my (best , most).', answer: 'I’ll keep on trying my best.', show: false},
			{id: 2, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I wonder (that , whether) she loves me.', answer: 'I wonder whether she loves me.', show: false},
			{id: 3, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I met a man (who , whom) I thought was honest.', answer: 'I met a man who I thought was honest.', show: false},
			{id: 4, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'He reads as (many , much) as seven books every week.', answer: 'He reads as many as seven books every week.', show: false},
			{id: 5, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'He ran as quickly as (can , possible).', answer: 'He ran as quickly as possible.', show: false},
			{id: 6, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'That is not (that , what) I meant to say.', answer: 'That is not what I meant to say.', show: false},
			{id: 7, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'He said nothing, (that , which) made me angry.', answer: 'He said nothing, which made me angry.', show: false},
			{id: 8, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Every boy and girl (invite , invites) their own parents.', answer: 'Every boy and girl invites their own parents.', show: false},
			{id: 9, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'There (are , is) so many choices.', answer: 'There are so many choices.', show: false},
			{id: 10, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'I owe (that , what) I am to my mother.', answer: 'I owe what I am to my mother.', show: false},
			{id: 11, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: '(Whoever / Whatever) you do matters little.', answer: 'Whatever you do matters little.', show: false},
			{id: 12, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'These days, a large number of students (wear, wears) glasses.', answer: 'These days, a large number of students wear glasses.', show: false},
			{id: 13, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'This is the only paper (that , who) I subscribe.', answer: 'This is the only paper that I subscribe.', show: false},
			{id: 14, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'Curry and rice (are / is) one of my favorite foods.', answer: 'Curry and rice is one of my favorite foods.', show: false},
			{id: 15, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'She works hard, (however , otherwise) she would fail.', answer: 'She works hard, otherwise she would fail.', show: false},
			{id: 16, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'It is worth attempting (because , even though) we fail.', answer: 'It is worth attempting even though we fail.', show: false},
			{id: 17, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: '(With , Without) your help, I would have failed.', answer: 'Without your help, I would have failed.', show: false},
			{id: 18, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'The doctor advised me not (smoking , to smoke).', answer: 'The doctor advised me not to smoke.', show: false},
			{id: 19, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: 'My husband is (elder , older) than my (elder , older) brother.', answer: 'My husband is older than my elder brother.', show: false},
			{id: 20, title: '괄호 안에 단어들 중에 알맞은 것을 선택해 문장을 완성하세요.', content: '(As , So) food is to the body, (as , so) is reading to the mind.', answer: 'As food is to the body, so is reading to the mind.', show: false},
			{id: 21, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Here is the village ____________  I was born. <br /> a. there b. that c. which d. where', answer: 'd. where', show: false},
			{id: 22, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'This is ____________ the best. <br /> a. very b. even c. still d. much', answer: 'd. much', show: false},
			{id: 23, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'Look at the boy and his dog ____________ are crossing the road. <br /> a. Who b. which c. that d. what', answer: 'c. that', show: false},
			{id: 24, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: '____________ is more time. <br /> a. What we need b. That we need c. Which we need d. What we are needed', answer: 'a. What we need', show: false},
			{id: 25, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'There is no rule without exceptions. = There is no rule ____________ has exceptions. <br /> a. and b. or c. but d. for', answer: 'c. but', show: false},
			{id: 26, title: '빈칸에 알맞은 단어를 선택해 문장을 완성하세요.', content: 'He is the last man to tell a lie.= He is ____________ from telling a lie. <br /> a. above b. far c. last d. late', answer: 'b. far', show: false},
			{id: 27, title: 'Find the incorrect sentences in the following sentences', content: 'a. Who in the world are you? &nbsp;&nbsp; b. The number of attendees are decreasing. &nbsp;&nbsp; c. Reading is to the mind what food is to the body. &nbsp;&nbsp; d. Happy is the man who can say that he is content with his life.', answer: 'b. The number of attendees are decreasing.', show: false},
			{id: 28, title: 'Find the incorrect sentences in the following sentences', content: 'a. He is easy to get in with. &nbsp;&nbsp; b. He asked me if I had ever seen a dragon. &nbsp;&nbsp; c. The latter part of the movie was interesting. &nbsp;&nbsp; d. I as well as you are responsible for the matter.', answer: 'd. I as well as you are responsible for the matter.', show: false},
			{id: 29, title: 'Find the incorrect sentences in the following sentences', content: 'a. John is two years junior than me. &nbsp;&nbsp; b. If he had not helped me, I would not be alive now. &nbsp;&nbsp; c. I believe you. No one can deny the fact that you are not guilty. &nbsp;&nbsp; d. It is no exaggeration to say that a book can change a person’s life.', answer: 'a. John is two years junior than me.', show: false},
			{id: 30, title: 'Find the incorrect sentences in the following sentences', content: 'a. The sooner, the better. &nbsp;&nbsp; b. When young, she was very beautiful. &nbsp;&nbsp; c. You asked him to leave, and so I did. &nbsp;&nbsp; d. What I need most now is not your advice but your love.', answer: 'c. You asked him to leave, and so I did.', show: false},
		]
	},
]);