//? [카카오 인턴] 키패드 누르기
//* 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
//* 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
//* 맨 처음 왼손 엄지손가락은 * 키패드에
//* 오른손 엄지손가락은 # 키패드 위치에서 시작하며,
//* 엄지손가락을 사용하는 규칙은 다음과 같습니다.

//* 1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며
//*    키패드 이동 한 칸은 거리로 1에 해당합니다.
//* 2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
//* 3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
//* 4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는
//*    두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
//*    만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락,
//*    왼손잡이는 왼손 엄지손가락을 사용합니다.

//* 순서대로 누를 번호가 담긴 배열 numbers,
//* 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
//* 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는
//* 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

const calculateDistance = (num, currentLeft, currentRight, pos, HANDED) => {
	const leftDist =
		Math.abs(pos[currentLeft][0] - pos[num][0]) +
		Math.abs(pos[currentLeft][1] - pos[num][1])
	const rightDist =
		Math.abs(pos[currentRight][0] - pos[num][0]) +
		Math.abs(pos[currentRight][1] - pos[num][1])

	if (leftDist === rightDist) return HANDED
	return leftDist < rightDist ? 'L' : 'R'
}

const solution = (numbers, hand) => {
	const HANDED = hand.toUpperCase()[0]
	let pos = {
		1: [0, 0],
		2: [0, 1],
		3: [0, 2],
		4: [1, 0],
		5: [1, 1],
		6: [1, 2],
		7: [2, 0],
		8: [2, 1],
		9: [2, 2],
		'*': [3, 0],
		0: [3, 1],
		'#': [3, 2]
	}
	let currentLeft = '*'
	let currentRight = '#'
	let answer = ''

	numbers.forEach(num => {
		if (num % 3 === 1) {
			answer += 'L'
			currentLeft = num
		} else if (num !== 0 && num % 3 === 0) {
			answer += 'R'
			currentRight = num
		} else {
			answer += calculateDistance(num, currentLeft, currentRight, pos, HANDED)
			answer[answer.length - 1] === 'L'
				? (currentLeft = num)
				: (currentRight = num)
		}
	})

	return answer
}

let arr = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] // "LRLLLRLLRRL"
console.log(solution(arr, 'right')) //* return "LRLLLRLLRRL"

arr = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2] //     LRLLRRLLLRR
console.log(solution(arr, 'left')) //* return "LRLLRRLLLRR"

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(solution(arr, 'right')) //* return "LLRLLRLLRL"
