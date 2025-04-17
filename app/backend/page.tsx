export default function BackEndPage() {
  const contents = [
    {
      title: "1. REST API란?",
      description:
        "REST는 Representational State Transfer의 약자로, 자원을 URI로 표현하고 HTTP 메서드를 통해 상태를 조작하는 아키텍처 스타일입니다.",
    },
    {
      title: "2. Express.js 기본 구조",
      description:
        "Express는 Node.js에서 가장 많이 사용되는 웹 프레임워크입니다. 미들웨어 기반 구조로 라우팅과 요청 처리를 손쉽게 구현할 수 있습니다.",
    },
    {
      title: "3. MVC 패턴",
      description:
        "Model-View-Controller 구조는 백엔드에서 유지보수와 확장을 쉽게 하기 위해 많이 사용됩니다. 각 역할이 분리되어 있어 코드 관리가 용이합니다.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        📚 백엔드 스터디 정리
      </h1>

      <div className="space-y-6">
        {contents.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
            <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
