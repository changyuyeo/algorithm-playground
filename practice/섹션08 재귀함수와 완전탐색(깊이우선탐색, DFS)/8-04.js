//? 부분집합 구하기(DFS)
//* 자연수 N이 주어지면 1부터 N까지의 원소를 갖는
//* 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

function solution(n) {
	let answer = []
	let checkArr = Array.from({ length: n + 1 }).fill(0)

	function DFS(v) {
		if (v === n + 1) {
			let tmp = ''
			checkArr.forEach((e, i) => e === 1 && (tmp += i + ' '))
			tmp.length > 0 && answer.push(tmp.trim())
		} else {
			checkArr[v] = 1
			DFS(v + 1)
			checkArr[v] = 0
			DFS(v + 1)
		}
	}

	DFS(1)
	return answer
}

console.log(solution(3))
