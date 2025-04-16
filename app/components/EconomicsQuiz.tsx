
"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

const quizData = [{ question: "1. 가격이 상승하면 공급이 증가하므로 수요도 자동적으로 증가하게 된다.", type: "TF", answer: "F", explanation: "가격이 상승한다고 해서 수요가 자동적으로 증가하는 건 아님. 오히려 일반적으로는 수요는 감소함." },
  { question: "2. 가격이 하락했는데도 수요량이 줄었다면, 이는 해당 재화가 열등재일 가능성이 있다.", type: "TF", answer: "T", explanation: "열등재는 소득이 증가할 때 수요가 감소하는데, 가격 하락이 수요 감소로 이어진다면 다른 요인이 작용 중임." },
  { question: "3. 가격탄력성이 1보다 크면, 가격이 오를 때 총수입은 감소한다.", type: "TF", answer: "T", explanation: "탄력성이 1보다 크면 총수입은 가격 인상 시 줄어듦. (TR = P×Q 공식에서 확인 가능)" },
  { question: "4. 정부가 보조금을 지급하면 공급곡선이 왼쪽으로 이동한다.", type: "TF", answer: "F", explanation: "보조금은 공급자의 생산비용을 줄여 공급곡선을 오른쪽으로 이동시킴." },
  { question: "5. 한계효용이 체감하는 상황에서는 소비가 늘어날수록 추가적인 만족도는 증가한다.", type: "TF", answer: "F", explanation: "한계효용 체감법칙에 따르면 소비가 증가할수록 추가 만족도는 줄어듦." },
  { question: "6. 기회비용은 명시적 비용만을 의미하며 암묵적 비용은 포함하지 않는다.", type: "TF", answer: "F", explanation: "기회비용은 암묵적 비용도 포함하여 계산함. 예: 직접 돈을 쓰지 않더라도 시간 등도 비용임." },
  { question: "7. 한계비용이 평균비용보다 작을 경우, 평균비용은 감소한다.", type: "TF", answer: "T", explanation: "MC < AC면 AC는 감소함. 반대로 MC > AC면 AC는 증가함." },
  { question: "8. 완전경쟁시장에서 장기적으로 기업들은 경제적 이윤을 0으로 수렴하게 된다.", type: "TF", answer: "T", explanation: "장기적으로 진입과 퇴출이 자유롭기 때문에 경제적 이윤은 0으로 수렴함." },
  { question: "9. 독점시장은 자원 배분의 효율성을 달성한다.", type: "TF", answer: "F", explanation: "독점은 가격을 높이고 생산량을 줄여 비효율을 초래함." },
  { question: "10. 공공재는 비배제성과 비경합성을 동시에 가진다.", type: "TF", answer: "T", explanation: "공공재는 누구도 배제할 수 없고, 한 사람이 사용해도 다른 사람의 사용을 방해하지 않음." },
  { question: "11. 수요의 가격탄력성이 0에 가까울수록 수요곡선은 어떤 모양을 가지는가? (1~4)\n① 수평선 ② 수직선 ③ 우하향 직선 ④ 우상향 곡선", type: "MC", answer: "2", explanation: "탄력성 0에 가까우면 수요곡선은 수직에 가까움 → 가격 변화에도 수요량 변화 거의 없음." },
  { question: "12. 다음 중 생산가능곡선(PPC)에 대한 설명으로 틀린 것은? (1~4)\n① PPC는 기회비용을 나타낸다.\n② PPC 바깥의 점은 비효율적인 자원배분을 의미한다.\n③ 기술 발전은 PPC를 바깥으로 이동시킨다.\n④ 곡선 형태의 PPC는 기회비용이 증가함을 의미한다.", type: "MC", answer: "2", explanation: "PPC 바깥 점은 기술적으로 도달 불가능한 점임. 비효율은 오히려 곡선 내부의 점임." },
  { question: "13. 독점시장과 비교하여 완전경쟁시장에서 가격과 생산량의 관계는? (1~4)\n① 더 높은 가격, 더 적은 생산량\n② 더 낮은 가격, 더 많은 생산량\n③ 더 낮은 가격, 더 적은 생산량\n④ 동일한 가격, 동일한 생산량", type: "MC", answer: "2", explanation: "완전경쟁은 낮은 가격과 많은 생산량, 독점은 높은 가격과 적은 생산량이 특징." },
  { question: "14. 다음 중 외부경제가 발생하는 사례는? (1~4)\n① 공장 굴뚝에서 나오는 매연\n② 학교 근처 커피숍의 매출 증가\n③ 산불로 인한 피해\n④ 가격 하락으로 인한 수익 감소", type: "MC", answer: "2", explanation: "학교가 들어서면 주변 상권의 매출이 증가 → 긍정적 외부효과의 예시." },
  { question: "15. 기펜재의 특징으로 옳은 것은? (1~4)\n① 가격이 오를수록 수요가 줄어든다.\n② 소득효과가 대체효과보다 작다.\n③ 열등재에 해당하지 않는다.\n④ 가격이 상승해도 수요가 증가한다.", type: "MC", answer: "4", explanation: "기펜재는 특수한 열등재로, 가격이 오르면 수요도 증가함. 매우 드문 사례." },
  { question: "16. 한계효용균등의 법칙이 의미하는 바는? (1~4)\n① 모든 재화의 가격이 동일할 때 효용이 극대화된다.\n② 동일한 재화를 반복 소비하면 효용이 증가한다.\n③ 각 재화의 한계효용당 가격이 같을 때 효용 극대화가 이루어진다.\n④ 가격과 효용은 반비례 관계다.", type: "MC", answer: "3", explanation: "MUx/Px = MUy/Py일 때 소비 효용이 극대화됨. 한계효용 대비 가격이 균형 상태." },
  { question: "17. 다음 중 기회비용이 가장 높은 선택은? (1~4)\n① 1시간 운동\n② 1시간 독서\n③ 1시간 아르바이트 (1만원)\n④ 1시간 TV 시청", type: "MC", answer: "3", explanation: "기회비용은 포기한 것 중 가장 큰 대안의 가치 → 아르바이트가 가장 큰 금전적 손실임." },
  { question: "18. 탄력적인 수요곡선일 때 가격을 인하하면? (1~4)\n① 총수입은 증가한다.\n② 총수입은 감소한다.\n③ 총수입은 변하지 않는다.\n④ 총수입은 오히려 손해가 된다.", type: "MC", answer: "1", explanation: "수요 탄력적일 때 가격 인하하면 수요량이 크게 증가 → 총수입 증가함." },
  { question: "19. 수확체감의 법칙이 발생하는 이유는? (1~4)\n① 자원이 무한하기 때문\n② 투입량이 증가해도 산출량이 증가하지 않아서\n③ 고정요소에 비해 가변요소 투입이 과다해서\n④ 생산량이 기하급수적으로 증가해서", type: "MC", answer: "3", explanation: "수확체감 법칙은 가변요소를 너무 많이 투입할 때 생김 → 고정요소의 한계 때문에." },
  { question: "20. 경제학에서 \"보이지 않는 손\"이 의미하는 것은? (1~4)\n① 중앙은행의 시장 개입\n② 정부의 가격 규제\n③ 개인의 이기심이 시장 전체의 효율을 가져오는 현상\n④ 독점기업의 가격 조정", type: "MC", answer: "3", explanation: "보이지 않는 손은 시장에서 자원이 효율적으로 배분되도록 이끄는 개인 이기심의 결과임." }
];

export default function EconomicsQuiz() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const correctSound = typeof Audio !== "undefined" ? new Audio("/sounds/correct.mp3") : null;
  const wrongSound = typeof Audio !== "undefined" ? new Audio("/sounds/wrong.mp3") : null;

  const current = quizData[step];

  const handleSubmit = () => {
    const validInput = current.type === "TF"
      ? ["T", "F"].includes(input.toUpperCase())
      : ["1", "2", "3", "4"].includes(input.trim());

    if (!validInput) {
      setErrorMessage("❗ 유효한 입력이 아닙니다. T / F 또는 1 ~ 4 중에서 입력해주세요.");
      if (wrongSound) wrongSound.play();
      return;
    } else {
      setErrorMessage("");
    }
    
    if (input.toUpperCase() === current.answer) {
      if (correctSound) correctSound.play();
      setCorrectCount(correctCount + 1);
      setShowExplanation(false);
      setAttempt(0);
      setInput("");
      setStep(step + 1);
    } else {
      if (attempt === 0) {
        setShowExplanation(true);
      } else {
        setAttempt(attempt + 1);
      }
    }
  };

  if (step >= quizData.length) {
    if (!saved) {
      localStorage.setItem("lastScore", `${correctCount} / ${quizData.length}`);
      setSaved(true);
    }
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">시험 완료!</h2>
        <p>점수: {correctCount} / {quizData.length}</p>
        <p className="text-sm mt-2 text-gray-600">* 이 점수는 localStorage에 저장되었습니다.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card className="mb-4">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold whitespace-pre-line">{current.question}</h2>
          <Input
            className={errorMessage ? "border-red-500" : ""}
            placeholder="정답을 입력하세요 (예: T / F / 숫자)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (showExplanation) {
                  setShowExplanation(false);
                  setStep(step + 1);
                  setAttempt(0);
                  setInput("");
                } else {
                  handleSubmit();
                }
              }
            }}
          />
          <Button onClick={handleSubmit}>제출</Button>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          {showExplanation && (
            <div className="mt-4 bg-yellow-100 p-3 rounded-md">
              <p><strong>정답:</strong> {current.answer}</p>
              <p><strong>해설:</strong> {current.explanation}</p>
              <Button className="mt-2" onClick={() => {
                setShowExplanation(false);
                setStep(step + 1);
                setAttempt(0);
                setInput("");
              }}>다음 문제</Button>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground">{step + 1} / {quizData.length} 문제</p>
    </div>
  );
}
