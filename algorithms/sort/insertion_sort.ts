{
  function insertion_sort(arr: number[], order: "asc" | "desc") {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j >= 1; j--) {
        if (order === "asc") {
          if (arr[j - 1] > arr[j]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            continue;
          }

          break;
        }

        if (order === "desc") {
          if (arr[j - 1] < arr[j]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            continue;
          }

          break;
        }
      }
    }
  }

  const TIME = "TIME";
  let arr = [-11, 2, 10, 5, 0, 7];

  // 오름차순 정렬 테스트
  console.time(TIME + 1);

  insertion_sort(arr, "asc");

  console.log(arr);
  console.timeEnd(TIME + 1);

  // 내림차순 정렬 테스트
  arr = [-11, 2, 10, 5, 0, 7];
  console.time(TIME + 2);

  insertion_sort(arr, "desc");

  console.log(arr);
  console.timeEnd(TIME + 2);
}
