// - [X] counter의 초기값은 0이다.
// - [X] + 버튼을 클릭 시, count가 1 증가한다.
// - [ ] - 버튼을 클릭 시, count가 1 감소한다.
// - [ ] + 버튼을 눌렀을 때, count가 10이 넘는 경우 더 이상 증가하지 못한다. (Max 값이 10이다.)
// - [ ] - 버튼을 눌렀을 때, count는 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0이다.)
// - [ ] reset 버튼을 누르면 counter가 0으로 초기화된다.

describe("카운터 앱 테스트", () => {
  beforeEach(() => {
   cy.visit("http://127.0.0.1:8080/");
  });

  it("counter의 초기값은 0이다.", () => {
    cy.get("#value").invoke("text").should("eq", "0");
  })

  it("+버튼을 클릭 시, count가 1 증가한다.", () => {
    cy.get("#value").invoke("text").then((value) => {
      const preValue = Number(value);
      cy.get(".increase-btn").click();
      cy.get("#value")
        .invoke("text")
        .should("eq", String(preValue + 1));
    });
  });
});