const Foods = {
  happy: ["치킨", "피자", "스테이크", "떡순튀", "짜장면탕수육", "돼지갈비", "샤브샤브", "족발보쌈", "안동찜닭"],
  sad: ["라면", "순두부찌개", "햄버거", "크림파스타","연어초밥", "돈까스", "우동", "생선구이", "간장게장"],
  tired: ["서브웨이", "삼계탕", "평양냉면", "닭갈비", "감자탕", "순대국밥", "바지락칼국수", "설렁탕", "백반", "돌솥비빔밥", "쌀국수", "오징어덮밥"],
  angry: ["곱창", "제육덮밥", "불닭볶음면", "엽떡", "마라탕+탕후루", "오므라이스", "국물닭발", "쭈꾸미볶음", "삼겹살", "물회"]
};

const btn = document.querySelectorAll(".liquid");
const r = document.getElementById("r");
const sound = document.getElementById("sound")

btn.forEach(button => {
  button.addEventListener("click", () => {
    navigator.vibrate && navigator.vibrate(100)
    sound.play()
    const f = button.dataset.f;
    const foodline = Foods[f];
    const i = Math.floor(Math.random() * foodline.length);
    r.innerText = foodline[i] + "!";
  });
});
