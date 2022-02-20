//? 문자열 내 마음대로 정렬하기
//* 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
//* 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.

//* 예를 들어 strings가 ["sun", "bed", "car"]이고
//* n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(strings, n) {
	let answer = []

	answer = strings.sort((a, b) => {
		if (a.charCodeAt(n) !== b.charCodeAt(n))
			return a.charCodeAt(n) - b.charCodeAt(n)
		else return a < b ? -1 : 1
	})

	return answer
}

let arr = ['sun', 'bed', 'car']
console.log(solution(arr, 1)) //* return ["car", "bed", "sun"]

arr = ['abce', 'abcd', 'cdx']
console.log(solution(arr, 2)) //* return ["abcd", "abce", "cdx"]
