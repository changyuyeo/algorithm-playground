//? 문자열 다루기 기본
//* 문자열 s의 길이가 4 혹은 6이고,
//* 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
//* 예를 들어 s가 "a234"이면 False를 리턴하고
//* "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
	let answer = true
	let tmp = s.split('')

	if (tmp.length === 4 || tmp.length === 6)
		tmp.forEach(v => (isNaN(v) || v === 'e') && (answer = false))
	else answer = false

	return answer
}

console.log(solution('a234'))
console.log(solution('1234'))
console.log(solution('1e22'))
console.log(solution('1e2223'))
console.log(solution('155223'))
console.log(solution('15522312451'))
