"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

const quizData = [
  {
    question: "1. 가격이 상승하면 공급이 증가하므로 수요도 자동적으로 증가하게 된다.",
    type: "TF",
    answer: "F",
    explanation: "가격이 상승한다고 해서 수요가 자동적으로 증가하는 건 아님. 오히려 일반적으로는 수요는 감소함."
  },
  {
    question: "2. 가격이 하락했는데도 수요량이 줄었다면, 이는 해당 재화가 열등재일 가능성이 있다.",
    type: "TF",
    answer: "T",
    explanation: "열등재는 소득이 증가할 때 수요가 감소하는데, 가격 하락이 수요 감소로 이어진다면 다른 요인이 작용 중임."
  },
  {
    question: "3. 가격탄력성이 1보다 크면, 가격이 오를 때 총수입은 감소한다.",
    type: "TF",
    answer: "T",
    explanation: "탄력성이 1보다 크면 총수입은 가격 인상 시 줄어듦. (TR = P×Q 공식에서 확인 가능)"
  }
];

export default function EconomicsQuiz() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const current = quizData[step];

  const handleSubmit = () => {
    if (input.toUpperCase() === current.answer) {
      setCorrectCount(correctCount + 1);
      setShowExplanation(false);
      setAttempt(0);
      setInput("");
      setStep(step + 1);
    } else {
      if (attempt === 1) {
        setShowExplanation(true);
      } else {
        setAttempt(attempt + 1);
      }
    }
  };

  if (step >= quizData.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">시험 완료!</h2>
        <p>점수: {correctCount} / {quizData.length}</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card className="mb-4">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">{current.question}</h2>
          <Input
            placeholder="정답을 입력하세요 (예: T / F / 숫자)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleSubmit}>제출</Button>
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