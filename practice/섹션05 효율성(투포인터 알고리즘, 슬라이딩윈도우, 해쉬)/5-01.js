//? 1. 두 배열 합치기
//* 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

function solution(arr1, arr2) {
	let answer = []
	let n = arr1.length
	let m = arr2.length
	let p1 = 0
	let p2 = 0

	//memo 두 배열중 하나라도 탐색이 완료될 때 까지 반복
	while (p1 < n && p2 < m) {
		arr1[p1] <= arr2[p2] ? answer.push(arr1[p1++]) : answer.push(arr2[p2++])
	}

	//memo 탐색 종료 후 남은 배열에 값들 정리
	while (p1 < n) answer.push(arr1[p1++])
	while (p2 < m) answer.push(arr2[p2++])

	return answer
}

let a = [1, 3, 5]
let b = [2, 3, 6, 7, 9]
console.log(solution(a, b))
